import fs from 'fs';
import path from 'path';

function fixFile(filePath) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Safety check: skip if already has screen-layout
    if (content.includes('className="screen-layout"')) return;

    // 1. Replace outer container
    content = content.replace(/className="screen-container(.*?)"/, 'className="screen-layout$1"');
    content = content.replace(/className="login-screen(.*?)"/, 'className="screen-layout$1"');

    // 2. Wrap Header
    content = content.replace(/(<Header[\s\S]*?\/>)/g, '<div className="screen-topbar">\n        $1\n      </div>');

    // 3. Replace content container
    content = content.replace(/className="((?:home|auth|mandi|diagnosis|experts|profile|weather|learning|subsidy)-content.*?)"/g, 'className="screen-body"');
    
    // We also need another inner div for screen-content. But just screen-body is enough if we add pb-nav to it. Let's just set it to screen-body.
    content = content.replace(/<div className="screen-body">/g, '<div className="screen-body">\n        <div className="screen-content pb-nav">');

    // 4. Wrap BottomTabs if exists
    content = content.replace(/(<BottomTabs[\s\S]*?\/>)/g, '  </div>\n      </div>\n      <div className="screen-bottomnav">\n        $1\n      </div>');
    
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

const dir = 'src/screens/farmer';
fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.jsx') && file !== 'HomeScreen.jsx') {
    fixFile(path.join(dir, file));
  }
});
console.log('Fixed farmer layouts');

