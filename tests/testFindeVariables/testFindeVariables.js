const bemFolder     = "../../BEMscripts/";

let testBD = {
  destination : __dirname,
  findeVariables : require(bemFolder + '_findePugVariables.js'),
}

testBD.findeVariables('fen');