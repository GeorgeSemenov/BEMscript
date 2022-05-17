const fs = require('fs');
const readFromFile = require('./readFromFile.js');
const writeToFile = require('./writeToFile.js');
const v = require('./variables.js');

const _logToDatabase = function (){
  let resultString   = "";
  console.log(`loggto begin`);
  this.blocksArr.forEach((item, index)=>{
    // console.log(`item = ${item}\nitem.elementsArr = ${item.elementsArr}`);
    let elementsStr = (item.elementsArr.length > 0) ? (v.SYMBOL_END_OF_LINE + item.elementsArr.join(v.SYMBOL_END_OF_LINE) ) : "";
    let modifiersStr = (item.modifiersArr.length > 0) ? (v.SYMBOL_END_OF_LINE + item.modifiersArr.join(v.SYMBOL_END_OF_LINE) ) : "";
    resultString+= item.title + elementsStr + modifiersStr;
  })
  writeToFile(v.DATABASE_NAME,resultString)
  console.log(`logging end`);
};

module.exports = _logToDatabase;