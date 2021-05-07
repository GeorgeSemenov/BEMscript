const fs = require('fs');
const readline = require('readline-sync');

/* ---- Самодельные функшины ---- */
const bemFolder     = ('./BEMscripts/');
const createFolder  = require(bemFolder + 'createFolder.js');
const writeToFile   = require(bemFolder + 'writeToFile.js');
const readFromFile  = require(bemFolder + 'readFromFile.js');
const getFolders    = require(bemFolder + 'getFolders.js');//возвращает имена папок находящихся в директории, откуда вызывается эта функция, если функцию вызывает BEМ.js то вернётся массив папок находящихся в папке с этим файлом
const isElement     = require(bemFolder + 'isElement.js');
const isModifier    = require(bemFolder + 'isModifier.js');

/* ---- Переменные и классы---- */

const v             = require(bemFolder + 'variables.js');
const cl            = require(bemFolder + 'classes.js');

let BEM = {
  amountOfBlocks: 0,//Сколько всего блоков
  blocksArr: [],//Массив строк, в каждой строке название блока
  destination: __dirname,// переменная, которая указывает на место, где был вызван bem.js

  init                  : require(bemFolder + '_init.js'),//инициируем объект(все его переменные), используя базу данных, если базы нет, создаём её. Под инициацие понимается инициализацию массива объектов блоков, которые будут хранить массивы объектов элементов и массива модификаторов. Массив элементов, будет хранить массив модификаторов. После инициализации должен выводить массив блоков на экран.
  ask                   : require(bemFolder + '_ask.js'),//Спрашиваем - что быдем создавать
  create                : require(bemFolder + '_create.js'),//Создаём БЭМ сущность с именем = this.currentBEM
  logToDatabase         : require(bemFolder + '_logToDatabase.js'),//Записывает данные в файл базы данных
  logFromDatabase       : require(bemFolder + '_logfromDatabase.js'),//Считывает данные с файла базы данных
  showEntities          : require(bemFolder + '_showEntities.js'),//Если не передавать аргумент - выведет все блоки (вместе с переменными) на экран, если передать блок, то выведет элементы(вместе с переменными) и модификаторы, если передать элемент - то выведет модификаторы
  chooseBlock           : require(bemFolder + '_chooseBlock.js'),//выбирает блок
  handleAnswer          : require(bemFolder + '_handleAnswer.js'),
};
BEM.init()
BEM.showEntities();
while (BEM.currentBEM!=v.STOP_WORD){//Основной цикл
  BEM.ask();
}
