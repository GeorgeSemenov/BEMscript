const bemFolder     = "../BEMscripts/";
const isElement    = require(bemFolder + 'isElement.js');
const v = require(bemFolder + 'variables.js');

let tests = [
  undefined,
  1,
  '1',
  '_',
  '__',
  'some text',
  'some',
  '_modifier',
  '__modifier',
  {title: '_modifier'},
  {title: '__modifier'},
  {title: '_modifier', elements: ['_modifierBroken']},
  {title: '__modifier', elements: ['_modifierBroken']}
]
tests.forEach((entityName,index) =>{
  try
  {
    console.log(`(${index}) isElement(${JSON.stringify(entityName)}) = ${isElement(entityName)} (${index})`);
    // console.log(`  (entityName != undefined) = ${entityName != undefined}`);
    // console.log(`  (entityName.length > v.ELEMENT_BEGINING.length) = ${entityName.length > v.ELEMENT_BEGINING.length}`);
    // console.log(`  ((typeof entityName) == "object") = ${(typeof entityName) == "object"}`);
    // console.log(`  (entityName.title.substring(0,v.ELEMENT_BEGINING.length) == v.ELEMENT_BEGINING) = ${entityName.title.substring(0,v.ELEMENT_BEGINING.length) == v.ELEMENT_BEGINING}`);
  }catch(err){
    // console.log('oshibka');
  }
})