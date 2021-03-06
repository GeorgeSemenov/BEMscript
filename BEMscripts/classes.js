//Содержит классы которые используются в методах и фукнциях
// const showEntetiesForAllBEMEntities = require('./_showEntities');
// const handleAnswerForAllBEMEntities = require(`./_handleAnswer`);
// const createForAllBEMEntities = require(`./_create`);
let bemFolder = './';

class BEMEntity{
  constructor(title){
    this.title = title;
  }
  create(){console.log(`>>>>>>>>>>>>>>>>>>>>>\nMethod create is unredefineded.\n>>>>>>>>>>>>>>>>>>>>>`);}//Пусть этот метод будет, переопределим его потом.
  showEntities(){console.log(`>>>>>>>>>>>>>>>>>>>>>\nMethod showEntities is unredefineded.\n>>>>>>>>>>>>>>>>>>>>>`);}//Пусть этот метод будет, переопределим его потом.
  handleAnswer(){console.log(`>>>>>>>>>>>>>>>>>>>>>\nMethod handleAnswer is unredefineded.\n>>>>>>>>>>>>>>>>>>>>>`);}//Пусть этот метод будет, переопределим его потом.
}

class BEMBD extends BEMEntity {
  constructor(title=`BEMBD`, blocks = [], pages = []){
    super(title);
    this.blocks         = blocks;        //Массив строк, в каждой строке название блока
    this.destination    = __dirname;// переменная, которая указывает на место, где был вызван bem.js в данном случае он берёт своё значение в корневой папке
    this.pages          = pages;
  };

  // init                  = require(bemFolder + '_init.js');//Под инициацией понимается инициализацию массива объектов блоков(это массив экземпляров класса Block), в папке которая прописана в переменной destination, эти сущности будут складываться в массив blocksArr и каждый будет хранить массивы объектов элементов и массива объектов модификаторов. Массив объектов элементов, будет хранить массив модификаторов.
  // create                = createForAllBEMEntities.createForBEMBD;//Создаём БЭМ сущность(папка с назнванием и scss файли и pug файл при необоходимости) с именем полученным от метода ask(), также вносятся необохдимые изменения в массивы blocksArr и другие, если необохдимо
  // logToDatabase         = require(bemFolder + '_logToDatabase.js');//Записывает данные в файл базы данных
  // logFromDatabase       = require(bemFolder + '_logfromDatabase.js');//Считывает данные с файла базы данных
  // showEntities          = showEntetiesForAllBEMEntities.showEntetiesForBEMBD;
  // chooseBlock           = require(bemFolder + '_chooseBlock.js');//выбирает блок
  // handleAnswer          = handleAnswerForAllBEMEntities.handleAnswerForBEMBD;
};

class Block extends BEMEntity{
  constructor (title= 'no block title', elements=[], modifications =[],variables=[],parents = []) { 
    super(title);
    this.elements      = elements;
    this.modificators  = modifications;
    this.variables     = variables;
    this.parents       = parents;
  }
  // create               = createForAllBEMEntities.createForBlock;
}
class Element extends BEMEntity{
  constructor(title= 'no element title', modifications =[],variables=[], parents=[]) { 
    super(title);
    this.modificators  = modifications;
    this.variables     = variables;
    this.parents       = parents;
  }
  // create               = createForAllBEMEntities.createForElement;
}
class Modificator extends BEMEntity {
  constructor (title=`no modification title`,parents=[]){
    super(title);
    this.parents       = parents;
  }
  // create               = createForAllBEMEntities.createForModification;
};

class Page{
  constructor (title, parents=[]){
    this.title         = title;
    this.parents       = parents;
  }
};

module.exports = {
  BEMBD        : BEMBD,
  Block        : Block,
  Element      : Element,
  Modificator  : Modificator,
  Page         : Page,
};