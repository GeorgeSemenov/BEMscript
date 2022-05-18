//Функция принимает полное имя файла(строку) и искомую строку, возвращяет true, 
//если эта строка есть, если этой строки нет или данный файл отсутствует - возвращает false

const readFromFile = require(`${__dirname}/readFromFile.js`);

module.exports = function(fullFileName, searchedStr){
  let fileContent = readFromFile(fullFileName);
  if (fileContent){//Проверяем, существует ли fullFileName, если не существует, то в fileContent будет false
    return fileContent.includes(searchedStr)
  }else{// Если fullFileName - не существует, то возращаем false
    return false;
  }
}