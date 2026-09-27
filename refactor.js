const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content
      // Fonts
      .replace(/font-\['Space_Grotesk'\]/g, 'font-sans')
      // Colors
      .replace(/slate-/g, 'stone-')
      // Geometry
      .replace(/rounded-3xl/g, 'rounded-sm')
      .replace(/rounded-2xl/g, 'rounded-sm')
      .replace(/rounded-xl/g, 'rounded-sm')
      // Shadows
      .replace(/shadow-xs/g, 'shadow-[2px_2px_0px_#1C1917]')
      .replace(/shadow-sm/g, 'shadow-[4px_4px_0px_#1C1917]')
      .replace(/shadow-md/g, 'shadow-[6px_6px_0px_#1C1917]')
      .replace(/shadow-lg/g, 'shadow-[8px_8px_0px_#1C1917]')
      .replace(/shadow-xl/g, 'shadow-[8px_8px_0px_#1C1917]')
      .replace(/shadow-2xl/g, 'shadow-[12px_12px_0px_#1C1917]')
      // Specific gray-on-color contrast fixes
      .replace(/text-stone-950 on bg-amber-500/g, 'text-stone-900 bg-amber-500')
      // Borders (harden)
      .replace(/border border-amber-200/g, 'border-2 border-stone-900')
      .replace(/border border-amber-300/g, 'border-2 border-stone-900')
      .replace(/border border-emerald-300/g, 'border-2 border-stone-900')
      .replace(/border-4 border-stone-800/g, 'border-4 border-stone-900');
      
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
