/*
Функция проверяет - существует ли файл fullFileName затем проверяет существует ли в этом файле запись writing 
если записи нет - она производится в place = [`top`, `bottom`] - 
если не указано, то текст будет записываться в конец файла
*/
const rff = require('./readFromFile.js')
const wtf = require('./writeToFile.js')
const createWritingIfItIsntInFIle = function (writing, fullFileName, place="bottom"){
  let data;
  if(data = rff(fullFileName)){//Если считываение невозможно значит файла нет
    if(data.includes(writing) ){ return; }
    else{
      if(place == 'top'){wtf(fullFileName, (writing + data) );}
      else{wtf(fullFileName, (data + writing) );}
    }
  }else{
    console.log(`>>> Ошибка в функции createWritingIfItIsntInFile\nФайл ${fullFileName} - не существует или не читаем.\nСделать запись невозможно`);
  }
};

module.exports = createWritingIfItIsntInFIle;