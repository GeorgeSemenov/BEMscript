//Функция принимает полное имя файла(строку) и искомую строку, возвращяет true, 
//если эта строка есть, если этой строки нет или данный файл отсутствует - возвращает false
/*Если isStrictMode = true то в таком случае строка будет проверяться как миксина, т.е. перед или после искомой строки не должно быть нижних подчёркиваний или дефисов или латинских букв, так можно быть  уверенным, что искомая строка стоит обособленно и не является частью другого слов*/
const readFromFile = require(`${__dirname}/readFromFile.js`);

module.exports = function(fullFileName, searchedStr, isStrictMode = false){
  let fileContent = readFromFile(fullFileName);
  if (fileContent){//Проверяем, существует ли fullFileName, если не существует, то в fileContent будет false
    if(fileContent.includes(searchedStr)){
      if(isStrictMode){//Если включен строгий режим.
        let indexOfSearchedStr = 0;
        do{//Если искомая строка не в начале файла (т.е. её индекс не равен нулю), то нужно проверить символ перед искомой строкой.
          indexOfSearchedStr = fileContent.indexOf(searchedStr,indexOfSearchedStr);
          if(!(~indexOfSearchedStr)){return false}
          else{//Если indexOfSearchedStr != -1 т.е. indexOf() - смог найти ещё одно совпадение
            let symbolBfr = undefined;
            let symbolAftr = undefined;
            indexOfSearchedStr? symbolBfr = fileContent[indexOfSearchedStr - 1]: symbolBfr = undefined;//Если искомая строка не находится в начале файла(т.е. её индекс ≠ 0)
            ((indexOfSearchedStr + searchedStr.length) < fileContent.length)? symbolAftr = fileContent[indexOfSearchedStr + searchedStr.length] : symbolAft = undefined;//Если искомая строка не находится в конце файла
            if(symbolBfr && symbolAftr){//Если оба символа существуют
              if( (symbolBfr != '-') && (symbolAftr != '-') && (symbolBfr != '_') && (symbolAftr != '_') && !(/[a-z]/i.test(symbolBfr) ) && !(/[a-z]/i.test(symbolAftr)) ){return true;}//Если все условия выполняются Значит искомая строка с данными индексами и обрамляющими символами Не является частью другого слова и при этом равняется searchedStr)
              else{indexOfSearchedStr++;}//Увеличиваем на единицу текущий индекс, чтобы следующая итерация цикла нашла другое значение indexOfSearchedStr
            }else if(symbolBfr){//Если существет только символ перед искомой стр.
              if((symbolBfr != '-') && (symbolBfr != '_') && !(/[a-z]/i.test(symbolBfr)) ){return true}//Если все условия выполняются Значит искомая строка стоит в конце файлаи символ перед ней указывает на то что искомая строка не часть другого слова
              else{indexOfSearchedStr++;}//Увеличиваем на единицу текущий индекс, чтобы следующая итерация цикла нашла другое значение indexOfSearchedStr
            }else if(symbolAftr){//Если существет только символ после искомой стр
              if((symbolAftr != '-') && (symbolAftr != '_') && !(/[a-z]/i.test(symbolAftr))){return true}//Если существет только символ после искомой стр
              else{indexOfSearchedStr++;}//Увеличиваем на единицу текущий индекс, чтобы следующая итерация цикла нашла другое значение indexOfSearchedStr
            }else{return true}//Судя по всему раз нет символ до searchedStr и после, то в файле только searchedStr возвращаем true
          }
        }while(true)
      }else{return true}//Если строгий режим выключен и при этом искомая строка содержится в файле, то возвращаем true
    }else{return false}//Если искомая строка не найдена в указанном файле то возвращаем false
  }else{return false;}//Если fullFileName - не существует, то возращаем false
}