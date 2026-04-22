import fs from 'fs';
import path from 'path';

function fixFile(filePath, replacements) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    replacements.forEach(([oldStr, newStr]) => {
      content = content.replace(oldStr, newStr);
    });
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

fixFile('src/components/layout/BottomTabs.jsx', [[/import '\.\/BottomNav\.css';/, "import './BottomTabs.css';"]]);
fixFile('src/components/layout/Header.jsx', [[/import '\.\/TopBar\.css';/, "import './Header.css';"]]);
fixFile('src/components/ai/FloatingAIButton.jsx', [[/import '\.\/FloatingAIButton\.css';/, "import './FloatingAIButton.css';"]]);

