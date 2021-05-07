const bemFolder     = "../../BEMscripts/";
const getFolders    = require(bemFolder + 'getFolders.js')

let tests = [
  undefined,
  './',
  __dirname,
  __dirname + '/fen'
];
tests.forEach( (test,i) =>{
  console.log(`(${i}) getFolders(${test})  ${getFolders(test,true)}`);
})