//данная функция записывает собщение msg в файл pathToFile в положение которое указано place [top, bottom].
const readFromFile = require('./readFromFile.js');
const writeToFile = require('./writeToFile.js');
const writeInCertainPlace = function (pathToFile, msg, place = 'top'){
  let readedData = readFromFile(pathToFile);
  let data;
  if(readedData){
    if(place == 'top'){data = msg + readedData;}
    else if(place == 'bottom'){data = readedData + msg}
    else{console.log(`>>> Ошибка в writeInCertainPlace \nplace = ${place} не соответсвует допустимым значениям`); return ;}
    writeToFile(pathToFile,data);
  }else{
    writeToFile(pathToFile, msg);
  }
};

module.exports = writeInCertainPlace;