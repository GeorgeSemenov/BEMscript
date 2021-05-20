const bemFolder     = "../../BEMscripts/";

let testBem = {
  blocksArr: [],//Массив строк, в каждой строке название блока
  init : require(bemFolder + '_init.js'),
  // showEntities : require(bemFolder + '_showEntities.js'),
  destination: __dirname
}

testBem.init();
testBem.blocksArr.forEach((block)=>{
  console.log(`block.title : ${block.title}\nblock.destination : ${block.destination}`);
  console.log(`\n>>elements: `);
  block.elements.forEach(element=>{
    console.log(`>>>>${JSON.stringify(element)}`);
  })
  console.log(`\n>>modifications: `);
  block.modifications.forEach(modification=>{
    console.log(`>>>>${JSON.stringify(modification)}`);
  })
  console.log(`---------------------------------------------`);
})