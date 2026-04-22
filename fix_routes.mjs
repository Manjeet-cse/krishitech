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

// Fix Login screen navigate
fixFile('src/screens/auth/LoginScreen.jsx', [[/navigate\('\/home'\)/g, "navigate('/farmer/home')"]]);
fixFile('src/screens/auth/SignupStep3.jsx', [[/navigate\('\/home'\)/g, "navigate('/farmer/home')"]]);

// Check BottomTabs
fixFile('src/components/layout/BottomTabs.jsx', [
  [/navigate\('\/home'\)/g, "navigate('/farmer/home')"],
  [/navigate\('\/marketplace'\)/g, "navigate('/farmer/marketplace')"],
  [/navigate\('\/diagnosis'\)/g, "navigate('/farmer/diagnosis')"],
  [/getValue\('\/home'\)/g, "getValue('/farmer/home')"],
  [/getValue\('\/marketplace'\)/g, "getValue('/farmer/marketplace')"],
  [/getValue\('\/diagnosis'\)/g, "getValue('/farmer/diagnosis')"],
]);

