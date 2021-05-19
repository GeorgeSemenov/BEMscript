const bemFolder     = "../BEMscripts/";
const cl = require(bemFolder + 'classes.js');

let testBD = new cl.BEMBD();
testBD.blocksArr = [
  new cl.Block(`block1`),
  new cl.Block("block2"),
  new cl.Block("block3")
];

testBD.blocksArr[1].elements=[
  new cl.Element(`Element1`),
  new cl.Element(`Element2`),
  new cl.Element(`Element3`)
];
testBD.blocksArr[1].modifications=[
  new cl.Modification(`mod1`),
  new cl.Modification(`mod2`),
  new cl.Modification(`mod3`)
]
testBD.blocksArr[1].elements[1].modifications = [
  new cl.Modification(`sub_mod1`),
  new cl.Modification(`sub_mod2`),
  new cl.Modification(`sub_mod3`)
]
console.log(`test begin`);
testBD.handleAnswer(2);//должен вывести содержимое второго блока в blocksArr
testBD.handleAnswer(4);//должен выдать ошибку, т.к. столько блоков нет в массиве
testBD.blocksArr[1].handleAnswer(2);//должен вывести содержимое второго элемента в elements
testBD.blocksArr[1].handleAnswer(4);//должен выдать ошибку, т.к. столько элементов нет в массиве