/*
  Возвращает данные содеражщиеся в указанном файле,
  Если файла нет - возвращает -1
  Если при считывании возникла ошибка - возвращает пустую строку
*/
const fs = require('fs');
const readFromFile = function(file){
  let readedData;
  try{
    readedData = fs.readFileSync(file, 'utf8' , function(err,data) {
      if(err) {
        console.log('\n\n-----------Error in readFromFile calback function-----------\n');
        console.log(err);
      }
      else{
        return data;
      }
    }); 
  }
  catch(err){
    if(err.errno == (-4058) ){//Если файла нет, возвращает (-1)
      return -1;
    }
    console.log('\n\n-----------Error in readFromFile function description beginning-----------\n');
    console.log(err);
    console.log('\n-----------Error description end-----------\n\n')
  }
  return readedData;
}

module.exports = readFromFile;