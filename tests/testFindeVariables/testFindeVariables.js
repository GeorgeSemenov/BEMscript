const bemFolder     = "../../BEMscripts/";

let testBD = {
  destination : __dirname,
  findeVariables : require(bemFolder + '_findePugVariables.js'),
}

console.log(`test begin`);

// let str = 'lo lo lo hhh';
// let lasPosition = 0;
// do{
//   lasPosition = str.indexOf('lo',lasPosition);
//   console.log(lasPosition);
//   lasPosition ++ ;
// }while (lasPosition != 0)

console.log(testBD.findeVariables('fen'));