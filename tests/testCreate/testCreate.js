const bemFolder     = "../../BEMscripts/";
const cl            = require(bemFolder+'classes.js');

let testBEMBD = {
  title: 'TestBD',
  blocksArr: [
    {title: "block1",},
    {title: "blockNaoborot"},
    {title: "blockNaoborot2"}
  ],
  create: (require(bemFolder+'_create.js').createForBEMBD),
  destination: __dirname
}

//Вначале удали все папки из папки tests
testBEMBD.create('blockNaoborot');//Не должен создать, т.к. такой блок уже существует в массиве блоков
testBEMBD.create('blockNaoborot3');
testBEMBD.create('blockNaoborot4');