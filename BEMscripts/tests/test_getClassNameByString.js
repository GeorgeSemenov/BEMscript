const v                           = require(`./variables.js`);
const _getClassNameByString       = require(`./../_getClassNameByString.js`);

let bembd                         = v.bembdReleased;
bembd.getClassNameByString        = _getClassNameByString;

// console.log(JSON.stringify(bembd));

let existedBlock1             = bembd.blocks[0].title;
let existedBlock2             = bembd.blocks[1].title;
let existedBlock3             = bembd.blocks[2].title;

let falseBlock1               = "несущБлок1";
let falseBlock2               = "несущБлок2";

let existedElement1           = bembd.blocks[0].elements[0].title;
let existedElement2           = bembd.blocks[0].elements[1].title;

let falseElement1             = 'несущЭлемент1';
let falseElement2             = 'несущЭлемент2';

let existedModificator1       = bembd.blocks[0].modificators[0].title;
let existedModificator2       = bembd.blocks[0].modificators[1].title;

let existedElemMod1           = bembd.blocks[0].elements[1].modificators[0].title;
let existedElemMod2           = bembd.blocks[0].elements[1].modificators[1].title;

let existedPage1              = bembd.pages[0].title;
let existedPage2              = bembd.pages[1].title;

console.log(`  
  existedBlock2 = ${existedBlock2} 
  existedBlock1 = ${existedBlock1} 
  existedBlock3 = ${existedBlock3} 
  falseBlock1 = ${falseBlock1} 
  falseBlock2 = ${falseBlock2} 
  existedElement1 = ${existedElement1} 
  existedElement2 = ${existedElement2} 
  falseElement1 = ${falseElement1} 
  falseElement2 = ${falseElement2}
  existedModificator1 = ${existedModificator1}
  existedModificator2 = ${existedModificator2}
  existedElemMod1 = ${existedElemMod1}
  existedElemMod2 = ${existedElemMod2}
  existedPage1 = ${existedPage1}
  existedPage2 = ${existedPage2}`);

console.log(`
  \n\n\n
  _getClassNameByString(${existedBlock2})       = ${bembd.getClassNameByString(existedBlock2)}
  _getClassNameByString(${existedBlock1})       = ${bembd.getClassNameByString(existedBlock1)}
  _getClassNameByString(${existedBlock3})       = ${bembd.getClassNameByString(existedBlock3)}
  _getClassNameByString(${falseBlock1})         = ${bembd.getClassNameByString(falseBlock1)}
  _getClassNameByString(${falseBlock2})         = ${bembd.getClassNameByString(falseBlock1)}
  _getClassNameByString(${existedElement1})     = ${bembd.getClassNameByString(existedElement1)}
  _getClassNameByString(${existedElement2})     = ${bembd.getClassNameByString(existedElement2)}
  _getClassNameByString(${falseElement1})       = ${bembd.getClassNameByString(falseElement1)}
  _getClassNameByString(${falseElement2})       = ${bembd.getClassNameByString(falseElement2)}
  _getClassNameByString(${existedModificator1}) = ${bembd.getClassNameByString(existedModificator1)}
  _getClassNameByString(${existedModificator2}) = ${bembd.getClassNameByString(existedModificator2)}
  _getClassNameByString(${existedElemMod1})     = ${bembd.getClassNameByString(existedElemMod1)}
  _getClassNameByString(${existedElemMod2})     = ${bembd.getClassNameByString(existedElemMod2)}
  _getClassNameByString(${existedPage1})        = ${bembd.getClassNameByString(existedPage1, 'pages')}
  _getClassNameByString(${existedPage2})        = ${bembd.getClassNameByString(existedPage2)}
  `);