import fs from 'fs';
import path from 'path';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Strip all the screen-body, screen-content, screen-layout, screen-topbar strings that we erroneously added
  // Wait, the easiest way is to find the exact blocks.
  
  // Find <Header ... />
  const headerMatch = content.match(/(<Header[\s\S]*?\/>)/);
  if (!headerMatch) return;
  const headerIdx = headerMatch.index;
  const headerLen = headerMatch[0].length;
  
  // Find <BottomTabs />
  const bottomTabsMatch = content.match(/<BottomTabs \/>/);
  if (!bottomTabsMatch) return;
  const bottomTabsIdx = bottomTabsMatch.index;
  
  // Extract content between Header and BottomTabs
  let middleCode = content.substring(headerIdx + headerLen, bottomTabsIdx);
  
  // Clean up any stray <div className="screen-body">...</div> from the middle manually using simple string manip
  middleCode = middleCode
    .replace(/<div className="screen-body">/, '')
    .replace(/<div className="screen-content pb-nav">/, '')
    .replace(/<div className="auth-content pb-nav">/, '')
    .replace(/<div className="mandi-content pb-nav">/, '')
    .replace(/<div className="diagnosis-content pb-nav">/, '')
    .replace(/<div className="experts-content pb-nav">/, '')
    .replace(/<div className="more-content pb-nav">/, '')
    .replace(/<div className="weather-content pb-nav">/, '')
    .replace(/<div className="learning-content pb-nav">/, '')
    .replace(/<div className="subsidy-content pb-nav">/, '')
    .replace(/<div className="profile-content pb-nav">/, '')
    .replace(/<div className="home-content pb-nav">/, '');

  // middleCode now has the raw inner content, but might have trailing </div>s. We basically need to strip all trailing </div> between the content and the BottomTabs.
  middleCode = middleCode.replace(/(<\/div>\s*)+$/g, '');

  let newReturnBlock = `    <div className="screen-layout bg-muted">
      <div className="screen-topbar">
        ${headerMatch[0]}
      </div>

      <div className="screen-body">
        <div className="screen-content pb-nav">
${middleCode}
        </div>
      </div>
      
      <div className="screen-bottomnav">
        <BottomTabs />
      </div>
    </div>`;

  // Replace everything from the opening <div className="screen-xxx"> up to the </div> right after <BottomTabs />
  const returnMatch = content.match(/return\s*\(\s*<div[^>]*>([\s\S]*?)<\/div>\s*\);\s*\}/);
  if (!returnMatch) {
      // fallback matching if previous regex butchered the file shape completely
      const preReturn = content.substring(0, content.indexOf('return ('));
      content = preReturn + 'return (\n' + newReturnBlock + '\n  );\n}';
  } else {
      const preReturn = content.substring(0, content.indexOf('return ('));
      content = preReturn + 'return (\n' + newReturnBlock + '\n  );\n}';
  }

  // Double check the result to ensure there are no formatting bugs.
  fs.writeFileSync(filePath, content, 'utf8');
}

const dir = 'src/screens/farmer';
fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.jsx') && file !== "HomeScreen.jsx" && file !== "AIAssistantScreen.jsx") {
    fixFile(path.join(dir, file));
  }
});
