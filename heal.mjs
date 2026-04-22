import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const dir = 'src/screens/farmer';
fs.readdirSync(dir).forEach(file => {
  if (!file.endsWith('.jsx')) return;
  const filePath = path.join(dir, file);
  
  let success = false;
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      execSync(`npx esbuild ${filePath} --format=esm --outdir=out_test`, { stdio: 'ignore' });
      success = true;
      break;
    } catch (e) {
      // Failed to parse. It means we are missing a </div>. Let's append one before the final );
      let content = fs.readFileSync(filePath, 'utf8');
      
      // We know it's missing a div inside the return. 
      // Replace "    </div>\n  );\n}" with "    </div>\n    </div>\n  );\n}"
      const lastIndex = content.lastIndexOf('    </div>\n  );\n}');
      if (lastIndex !== -1) {
          content = content.substring(0, lastIndex) + '    </div>\n    </div>\n  );\n}';
      } else {
          // just inject it above the last `);`
          content = content.replace(/\s*\);\s*}\s*$/, '\n    </div>\n  );\n}');
      }
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
  if (!success) {
    console.log(`Failed to heal ${file}`);
  }
});
console.log('Healing complete');
