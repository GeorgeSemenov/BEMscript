const fs = require('fs');
const readFromFile = require('./readFromFile.js');
const writeToFile = require('./writeToFile.js');
const v = require('./variables.js');

const _logToDatabase = function (){
  console.log(`logging begin`);
  writeToFile(v.DATABASE_NAME,this.blocksArr.join(v.SYMBOL_END_OF_LINE))
  console.log(`logging end`);
};

module.exports = _logToDatabase;