const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const FOLDER = (name) => {
  return path.resolve(ROOT, name);
};

exports.FOLDER = FOLDER;
exports.SRC = FOLDER('src/main.js');
exports.DIST_FOLDER = FOLDER('dist');
exports.OUTPUT_FILENAME = 'app.js';
exports.PORT = 9000;
exports.DLL_FOLDER = FOLDER('dist/dll');
exports.INDEX_TEMPLATE = FOLDER('config/index.html');