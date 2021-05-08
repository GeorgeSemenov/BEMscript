const showArrayBemEnteties = require('./showArrayBemEnteties');
const showEntetiesForAllBemEntities = require('./_showEntities');
let bemFolder = './';

class BEMEntity{
  constructor(title){
    this.title = title;
  }
  showEntities(){}//Пусть этот метод будет, переопределим его потом.
}

class BEMBD extends BEMEntity {
  constructor(title=`BEMBD`){
    super(title)
    amountOfBlocks: 0,//Сколько всего блоков
    blocksArr: [],//Массив строк, в каждой строке название блока
    destination: __dirname,// переменная, которая указывает на место, где был вызван bem.js
  }

  init                  = require(bemFolder + '_init.js'),//инициируем объект(все его переменные), используя базу данных, если базы нет, создаём её. Под инициацие понимается инициализацию массива объектов блоков, которые будут хранить массивы объектов элементов и массива модификаторов. Массив элементов, будет хранить массив модификаторов. После инициализации должен выводить массив блоков на экран.
  ask                   = require(bemFolder + '_ask.js'),//Спрашиваем - что быдем создавать
  create                = require(bemFolder + '_create.js'),//Создаём БЭМ сущность с именем = this.currentBEM
  logToDatabase         = require(bemFolder + '_logToDatabase.js'),//Записывает данные в файл базы данных
  logFromDatabase       = require(bemFolder + '_logfromDatabase.js'),//Считывает данные с файла базы данных
  showEntities          = showEntetiesForAllBemEtities.showEntetiesForBEMBD,
  chooseBlock           = require(bemFolder + '_chooseBlock.js'),//выбирает блок
  handleAnswer          = require(bemFolder + '_handleAnswer.js'),
};

class Block extends BEMEntity{
  constructor (title= 'no block title', elements=[], modifications =[]) { 
    super(title);
    this.elements      = elements;
    this.modifications = modifications;
  }
  showEntities         = showEntetiesForAllBemEntities.showEntetiesForBlock
}
class Element extends BEMEntity{
  constructor(title= 'no element title', modifications =[]) { 
    super(title);
    this.modifications = modifications;
  }
  showEntities         = showEntetiesForAllBemEntities.showEntetiesForElement
}
class Modification extends BEMEntity {};

module.exports = {
  BEMBD        : BEMBD,
  Block        : Block,
  Element      : Element,
  Modification : Modification
};