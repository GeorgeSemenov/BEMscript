/*
  Возвращает данные содеражщиеся в указанном файле,
  Если файла нет - возвращает -1
  Если при считывании возникла ошибка - возвращает пустую строку
*/
const fs = require('fs');
const readFromFile = function(file="**^dummyFile**^^^", msg="empty message"){
  let canIReadFromFile = true;
  let readedData = "";
  try{
    if (file == "**^dummyFile**^^^"){
      throw new Error("\n\n>>>>>>>>>>>\nfile name undefined.\nReading imposibru\n>>>>>>>>>>>\n\n");
    }
  }
  catch(err){
    console.log(err);
    canIReadFromFile = false;
  }
  if (canIReadFromFile){
    try{
      readedData = fs.readFileSync(file, 'utf8' , function(err,data) {
        if(err) {
          console.log('\n\n-----------Error description beginning-----------\n');
          console.log(err);
          console.log('\n-----------Error description end-----------\n\n')
          return "";
        }
        else{
          return data;
        }
      }); 
    }
    catch(err){
      if(err.errno == (-4058) ){
        return -1;
      }
      console.log('\n\n-----------Error description beginning-----------\n');
      console.log(err);
      console.log('\n-----------Error description end-----------\n\n')
    }
  }
  return readedData;
}

module.exports = readFromFile;