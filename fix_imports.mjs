import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src/screens', function(filePath) {
  if (filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix component imports
    content = content.replace(/import TopBar from '.+components\/TopBar';/g, "import Header from '../../components/layout/Header';");
    content = content.replace(/import BottomNav from '.+components\/BottomNav';/g, "import BottomTabs from '../../components/layout/BottomTabs';");
    content = content.replace(/import FloatingAIButton from '.+components\/FloatingAIButton';/g, "import FloatingAIButton from '../../components/ai/FloatingAIButton';");
    content = content.replace(/import HamburgerDrawer from '.+components\/HamburgerDrawer';/g, "import HamburgerDrawer from '../../components/layout/HamburgerDrawer';");
    
    // Fix components JSX tags
    content = content.replace(/<TopBar /g, '<Header ');
    content = content.replace(/<\/TopBar>/g, '</Header>');
    content = content.replace(/<BottomNav \/>/g, '<BottomTabs />');

    // Fix CSS imports (Splash.css -> SplashScreen.css, but not if it's already SplashScreen.css)
    const baseName = path.basename(filePath, '.jsx');
    // if baseName is RoleSelectScreen, we want to replace RoleSelect.css with RoleSelectScreen.css
    if (baseName.endsWith('Screen')) {
      const originalName = baseName.replace('Screen', '');
      const wrongCssRegex = new RegExp(`import\\s+['"]\\.\\/${originalName}\\.css['"]\\s*;`, 'g');
      content = content.replace(wrongCssRegex, `import './${baseName}.css';`);
    }

    fs.writeFileSync(filePath, content, 'utf8');
  }
});
console.log('Fixed imports in screens');
