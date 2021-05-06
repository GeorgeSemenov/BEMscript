const bemFolder     = "../BEMscripts/";

let testBem = {
  blocksArr: [{title: 'block1'}, {title: 'block2'}, {title: 'block3'}],//Массив строк, в каждой строке название блока
  showEntities : require(bemFolder + '_showEntities.js')
}
let tests = [
  undefined,
  1,
  '1',
  '_',
  'some text',
  'some',
  '_modifier',
  '__modifier',
  {title: '_modifier'},
  {title: '__modifier'},
  {title: '__modifier', elements: ['__modifierBroken']},
  {title: '_modifier', elements: ['__modifierBroken'], modifications: ['_modifierBroken']}
]
tests.forEach((item,index) =>{
  console.log(`(${index}) showEntities(${JSON.stringify(item)}) = ${testBem.showEntities(item)} (${index})`);
})