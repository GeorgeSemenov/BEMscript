//Функция принимает полное имя файла(строку) и искомую строку, возвращяет true, 
//если эта строка есть, если этой строки нет или данный файл отсутствует - возвращает false
/*Если isStrictMode = true то в таком случае строка будет проверяться как миксина, т.е. перед или после искомой строки не должно быть нижних подчёркиваний или дефисов или латинских букв, так можно быть  уверенным, что искомая строка стоит обособленно и не является частью другого слов*/
const readFromFile = require(`${__dirname}/readFromFile.js`);

module.exports = function(fullFileName, searchedStr, isStrictMode = false){
  let fileContent = readFromFile(fullFileName);
  if (fileContent){//Проверяем, существует ли fullFileName, если не существует, то в fileContent будет false
    if(isStrictMode){
      let indexOfSearchedStr = fileContent.indexOf(searchedStr);
      if(indexOfSearchedStr){//Если искомая строка не в начале файла (т.е. её индекс не равен нулю), то нужно проверить символ перед искомой строкой.

      }
    }else{return fileContent.includes(searchedStr)}//Если строгий режим оключён
  }else{// Если fullFileName - не существует, то возращаем false
    return false;
  }
}