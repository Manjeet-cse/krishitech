import fs from 'fs';
import path from 'path';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/<\/div>\n      <div className="screen-bottomnav">/g, '</div>\n        </div>\n      </div>\n      <div className="screen-bottomnav">');
  fs.writeFileSync(filePath, content, 'utf8');
}

const dir = 'src/screens/farmer';
fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.jsx') && file !== "HomeScreen.jsx") {
    fixFile(path.join(dir, file));
  }
});
