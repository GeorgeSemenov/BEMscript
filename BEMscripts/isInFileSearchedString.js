//Функция принимает полное имя файла(строку) и искомую строку, возвращяет true, 
//если эта строка есть, если этой строки нет или данный файл отсутствует - возвращает false

const getFiles = require(`${__dirname}/getFiles.js`);

module.exports = function(fullFileName, searchedStr){
  let directoryName; // директория в которой находится fullFileName
  let fullFileNameInWords;
  if (fullFileName.includes('/')){fullFileNameInWords = fullFileName.split('/');}//для windows систем
  else{fullFileNameInWords = fullFileName.split('\\');}//Для linux систем
  let directoryName = fullFileNameInWords[fullFileNameInWords.length-2];
  
  let files = getFiles(__dirname);
  console.log(`files = ${directoryName}`);

}