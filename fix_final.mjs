import fs from 'fs';
import path from 'path';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find where our custom bottomnav starts, which we inserted
  const bottomNavIndex = content.lastIndexOf('<div className="screen-bottomnav">');
  if (bottomNavIndex === -1) return;

  // We want to replace everything from the legitimate end of the inner content up to to bottomNav
  // To do this reliably, we just strip away all `</div>` and whitespace right before bottomnav
  const beforeBottomNav = content.substring(0, bottomNavIndex);
  const cleanBeforeBottomNav = beforeBottomNav.replace(/(<\/div>\s*)+$/g, '');

  content = cleanBeforeBottomNav + '\n        </div>\n      </div>\n      <div className="screen-bottomnav">\n        <BottomTabs />\n      </div>\n    </div>\n  );\n}';
  
  fs.writeFileSync(filePath, content, 'utf8');
}

const dir = 'src/screens/farmer';
fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.jsx') && file !== 'HomeScreen.jsx' && file !== 'AIAssistantScreen.jsx') {
    fixFile(path.join(dir, file));
  }
});
