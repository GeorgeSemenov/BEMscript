const testFolder = './';
const fs = require('fs');

let files = [];
fs.readdirSync(testFolder).forEach((file,index) => {
  console.log(file);
});
console.log(`files[3] = ${fs.lstatSync(files[2]).isDirectory()}`);