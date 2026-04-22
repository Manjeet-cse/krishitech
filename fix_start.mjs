import fs from 'fs';
import path from 'path';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Clean up the broken start
  content = content.replace(/<div className="screen-content pb-nav">\s*<\/div>\s*/g, '<div className="screen-content pb-nav">\n');
  
  fs.writeFileSync(filePath, content, 'utf8');
}

const dir = 'src/screens/farmer';
fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.jsx') && file !== "HomeScreen.jsx" && file !== "MoreScreen.jsx") {
    fixFile(path.join(dir, file));
  }
});
