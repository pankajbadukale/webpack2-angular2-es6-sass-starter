const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const FOLDER = (name) => {
  return path.resolve(ROOT, name);
};

exports.FOLDER = FOLDER;
exports.ENTRY_FILE = FOLDER('src/main.js');
exports.SRC_FOLDER = FOLDER('src');
exports.DIST_FOLDER = FOLDER('dist');
exports.OUTPUT_FILENAME = 'app.js';
exports.INCLUDE_FOR_BABEL = [
  FOLDER('src'),
  /\bng2es6helper\b/
];

exports.PORT = 9000;
exports.DLL_FOLDER = FOLDER('dist/dll');
exports.INDEX_TEMPLATE = FOLDER('config/index.html');