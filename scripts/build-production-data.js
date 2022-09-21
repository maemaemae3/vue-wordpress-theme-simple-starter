const fs = require('fs-extra');
const path = require('path');
const SETTINGS = require('../settings.json');

const DEST_DIR = path.join(__dirname, '../dist');

const copyFiles = async () => {
  const PRODUCTION_DIST_DIR = path.join(__dirname, `../theme-dir/${SETTINGS.THEME_DIRECTORY_NAME}/dist`);
  await fs.emptyDir(PRODUCTION_DIST_DIR);
  const copyFiles = ['index.php', 'footer.php', 'header.php', 'functions.php', 'style.css', 'screenshot.jpg'];
  const fileCopyProcs = copyFiles.map(file => fs.copy(path.join(__dirname, `../${file}`), path.join(__dirname, `../theme-dir/${SETTINGS.THEME_DIRECTORY_NAME}/${file}`)));
  const distCopyProc = fs.copy(DEST_DIR, PRODUCTION_DIST_DIR);
  await Promise.all([...fileCopyProcs, distCopyProc]);
}

(async () => {
  const message = `\u001b[44;1m DONE \u001b[0m Build complete! copy \u001b[33mtheme-dir/${SETTINGS.THEME_DIRECTORY_NAME}\u001b[0m directory to \u001b[33mwp-content/themes/\u001b[0m directory in your server.`;
  await copyFiles().then(() => console.log(message)).catch(e => console.log(`\u001b[41;1m ERROR \u001b[0m in scripts/build-production-data.js. ${e}`));
})();
