const path = require('path');
const a1  = path.basename('C:\\temp\\myFile.html');
console.log(a1)
const a2  = path.dirname('C:\\temp\\myFile.html'); // directory printed
console.log(a2)
const a3  = path.extname(__filename); // tells about the extension (i.e .html, .css or .js)
console.log(__filename, a3)