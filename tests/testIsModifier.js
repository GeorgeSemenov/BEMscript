const bemFolder     = "../BEMscripts/";
const isModifier    = require(bemFolder + 'isModifier.js');

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
  {title: '_modifier', elements: ['_modifierBroken']},
  {title: '__modifier', elements: ['_modifierBroken']}
]
tests.forEach((item,index) =>{
  console.log(`(${index}) isModifier(${JSON.stringify(item)}) = ${isModifier(item)} (${index})`);
})