const bemFolder     = "../../BEMscripts/";
const getFolders    = require(bemFolder + 'getFolders.js')

let testBem = {
  blocksArr: [],//Массив строк, в каждой строке название блока
  init : require(bemFolder + '_init.js'),
  // showEntities : require(bemFolder + '_showEntities.js'),
  destination: __dirname
}

testBem.init();
testBem.blocksArr.forEach((block)=>{
  console.log(JSON.stringify(block));
  console.log(`---------------------------------------------`);
})