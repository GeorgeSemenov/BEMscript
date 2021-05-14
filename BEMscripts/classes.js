const showArrayBemEnteties = require('./showArrayBemEnteties');
const showEntetiesForAllBEMEntities = require('./_showEntities');
let bemFolder = './';

class BEMEntity{
  constructor(title){
    this.title = title;
  }
  showEntities(){console.log(`>>>>>>>>>>>>>>>>>>>>>\nMethod showEntities is unredefineded.\n>>>>>>>>>>>>>>>>>>>>>`);}//Пусть этот метод будет, переопределим его потом.
}

class BEMBD extends BEMEntity {
  constructor(title=`BEMBD`){
    super(title);
    this.amountOfBlocks  = 0;//Сколько всего блоков
    this.blocksArr       = [1,2,3];//Массив строк, в каждой строке название блока
    this.destination     = './';// переменная, которая указывает на место, где был вызван bem.js в данном случае он берёт своё значение в корневой папке
  }

  init                  = require(bemFolder + '_init.js');//Под инициацией понимается инициализацию массива объектов блоков(это массив экземпляров класса Block), в папке которая прописана в переменной destination, эти сущности будут складываться в массив blocksArr и каждый будет хранить массивы объектов элементов и массива объектов модификаторов. Массив объектов элементов, будет хранить массив модификаторов.
  ask                   = require(bemFolder + '_ask.js');//Спрашиваем - что быдем создавать
  create                = require(bemFolder + '_create.js');//Создаём БЭМ сущность(папка с назнванием и scss файли и pug файл при необоходимости) с именем полученным от метода ask(), также вносятся необохдимые изменения в массивы blocksArr и другие, если необохдимо
  logToDatabase         = require(bemFolder + '_logToDatabase.js');//Записывает данные в файл базы данных
  logFromDatabase       = require(bemFolder + '_logfromDatabase.js');//Считывает данные с файла базы данных
  showEntities          = showEntetiesForAllBEMEntities.showEntetiesForBEMBD;
  chooseBlock           = require(bemFolder + '_chooseBlock.js');//выбирает блок
  handleAnswer          = require(bemFolder + '_handleAnswer.js');
};

class Block extends BEMEntity{
  constructor (title= 'no block title', elements=[], modifications =[],variables=[]) { 
    super(title);
    this.elements      = elements;
    this.modifications = modifications;
    this.variables     = variables;
  }
  showEntities         = showEntetiesForAllBEMEntities.showEntetiesForBlock
}
class Element extends BEMEntity{
  constructor(title= 'no element title', modifications =[],variables=[]) { 
    super(title);
    this.modifications = modifications;
    this.variables     = variables;
  }
  showEntities         = showEntetiesForAllBEMEntities.showEntetiesForElement
}
class Modification extends BEMEntity {
  showEntities(){};//Переопределяем метод, чтобы не выходил сообщение, о том, что метод не переопределён
};

module.exports = {
  BEMBD        : BEMBD,
  Block        : Block,
  Element      : Element,
  Modification : Modification
};