const bemFolder     = "../BEMscripts/";
const cl            = require(`${bemFolder}classes.js`);

let testBem = {
  blocksArr: [
    undefined,
    {
      title: 'block1',
    }, 
    {
      title: 'block2',
      elements: [
        {title: "__element-1"},
        {title: "__element-2"},
        {title: "__element-3"},
      ]
    }, 
    {
      title: 'block3',
      modifications: [
        {title: "_modification-1"},
        {title: "_modification-2"},
        {title: "_modification-3"},
      ]
    }, 
    {
      title: 'block4',
      elements: [
        {title: "__element-1"},
        {title: "__element-2"},
        {title: "__element-3"},
      ],
      modifications: [
        {title: "_modification-1"},
        {title: "_modification-2"},
        {title: "_modification-3"},
      ]
    }
  ],//Массив строк, в каждой строке название блока
  showEntities : require(bemFolder + '_showEntities.js')
}
let testBlock         = new cl.Block(`BlockTest`,[{title: '__tostElement1'},{title: '__tostElement2'}], [{title: '_tostModification1'},{title: '_tostModification2'}]);
let testElement       = new cl.Element(`ElementTest`,[{title: '_tostModification1'},{title: '_tostModification2'}]);
let testModification  = new cl.Modification(`ModificationTest`);
console.log(`show entities from testBem`);
testBem.showEntities();
console.log(`show entities from test block`);
testBlock.showEntities();
console.log(`show entities from test element`);
testElement.showEntities();
