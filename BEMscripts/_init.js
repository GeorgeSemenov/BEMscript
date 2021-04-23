const fs = require('fs');
const readFromFile = require('./readFromFile.js');
const writeToFile = require('./writeToFile.js');
const v = require('./variables.js');

const _init = function (BEM){//Получаем первичные данные amountOfBlocks и массив блоков blocksArr
  let DBContent = readFromFile(v.DATABASE_NAME);
  if (DBContent == -1){ //Если базы данных нет, то создаём её с пустым наполнением.
    console.log("Data base file didn't exist\nDon't worry, i'll create it.");
    writeToFile(v.DATABASE_NAME,"");
    this.amountOfBlocks=0;
  }
  else{
    // this.blocksArr = DBContent.split(v.SYMBOL_END_OF_LINE);
    // this.amountOfBlocks = this.blocksArr.length;
    this.logFromDatabase(DBContent)
  }
  console.log(`total amountOfBlocks = ${this.amountOfBlocks}`);
  this.showBlocks();
};

module.exports = _init;