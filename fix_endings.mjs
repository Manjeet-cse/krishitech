import fs from 'fs';
import path from 'path';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find everything between "return (" and a proper close
  // Since we messed it up by injecting trailing junk, let's just locate the LAST <div className="screen-bottomnav">...</div></div>
  // and discard any extra copies inside screen-bottomnav
  
  // To restore sanity, let's just find <BottomTabs /> and cut anything between the real content and it.
  const idxTabs = content.indexOf('<BottomTabs />');
  if (idxTabs === -1) return;
  
  // Find where the map loops or content legitimately ends. 
  // It's much safer to just use a clean regex to remove the extra screen-bottomnav injections:
  content = content.replace(/<div className="screen-bottomnav">[\s\n]*<\/div>[\s\n]*<\/div>[\s\n]*<div className="screen-bottomnav">/g, '<div className="screen-bottomnav">');
  
  fs.writeFileSync(filePath, content, 'utf8');
}

const dir = 'src/screens/farmer';
fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.jsx')) fixFile(path.join(dir, file));
});
