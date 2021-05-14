const bemFolder     = "../../BEMscripts/";
const  findeVariables = require(bemFolder + 'findePugVariables.js');

let testBD = {
  destination : __dirname
}


// let str = 'lo lo lo hhh';
// let lasPosition = 0;
// do{
//   lasPosition = str.indexOf('lo',lasPosition);
//   console.log(lasPosition);
//   lasPosition ++ ;
// }while (lasPosition != 0)

console.log(`test begin`);
console.log(findeVariables(testBD.destination + '\\fen\\fen.pug'));