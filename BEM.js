const fs = require('fs');
const readline = require('readline-sync');

/* ---- Самодельные функшины ---- */

const createFolder = require('./BEMscripts/createFolder.js');
const writeToFile = require('./BEMscripts/writeToFile.js');
const readFromFile = require('./BEMscripts/readFromFile.js');

/* ---- Переменные ---- */

const v = require('./BEMscripts/variables.js');

let BEM = {
  amountOfBlocks: 0,//Сколько всего блоков
  currentBEM: "",//над каким БЭМ блоком в данный момент идёт работа.
  blocksArr: [],//Массив строк, в каждой строке название блока

  init                  : require('./BEMscripts/_init.js'),//инициируем объект(все его переменные), используя базу данных, если базы нет, создаём её
  ask                   : require('./BEMscripts/_ask.js'),//Спрашиваем - что быдем создавать
  create                : require('./BEMscripts/_create.js'),//Создаём БЭМ сущность с именем = this.currentBEM
  logToDatabase         : require('./BEMscripts/_logToDatabase.js'),
  showBlocks            : require('./BEMscripts/_showBlocks.js'),
  chooseBlock           : require('./BEMscripts/_chooseBlock.js'),
  returnCorrectBEMName  : require('./BEMscripts/_returnCorrectBEMName.js'),
  handleAnswer          : require('./BEMscripts/_handleAnswer.js'),
};

BEM.init()
while (BEM.currentBEM!=v.STOP_WORD){//Основной цикл
  BEM.ask();
}
