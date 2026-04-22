import fs from 'fs';
import path from 'path';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // This removes exactly one sequence of extra closing divs before screen-bottomnav
  content = content.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<div className="screen-bottomnav">/g, '</div>\n      <div className="screen-bottomnav">');
  
  fs.writeFileSync(filePath, content, 'utf8');
}

const dir = 'src/screens/farmer';
fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.jsx')) {
    fixFile(path.join(dir, file));
  }
});
