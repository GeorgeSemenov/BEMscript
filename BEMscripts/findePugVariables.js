//Принимает pug файл и ищет в нём переменные 
//Возвращает массив переменных.
//Проверь в будущем, стоит ли добавить проверку, является ли этот файл pug файлом.
const readFromFile = require('./readFromFile.js');
const co = require('./constants.js');
const func = function (fileName){
  let variables = [];
  if (fileName == undefined){
    console.log(`-------------Error in findePugVariables module, fileName is undefined`);
  }else{
    let dataFromFile;
    try{dataFromFile = readFromFile(fileName);}
    catch(err){
      console.log(`---------error in findePugVariable--------------\n${err}`);
    }
    if (dataFromFile != -1) {//Если файл есть
      let isNeedToContinue = false;
      let variableNameFirstSymbolPosition = 0;
      let variableNameLastSymbolPosition = 0;
      let variableDefValueFirstSymbolPosition = 0;
      let variableDefValueLastSymbolPosition = 0;
      let count = 0;
      do{
        isNeedToContinue = false;
        variableNameFirstSymbolPosition = //Тут указанно, что нужно искать  первый символ имени переменной после предыдущего нахождения символа, чтобы функция не находила постоянно один и тот же символ.
          dataFromFile.indexOf(
            co.SYMBOLS_BEFORE_NAME_OF_PUG_VARIABLE,
            variableNameFirstSymbolPosition) + 
          co.SYMBOLS_BEFORE_NAME_OF_PUG_VARIABLE.length;

        variableNameLastSymbolPosition = 
          dataFromFile.indexOf(co.SYMBOLS_AFTER_NAME_OF_PUG_VARIABLE,
            variableNameFirstSymbolPosition);

        let nameOfVariable = dataFromFile.slice(
          variableNameFirstSymbolPosition,
          variableNameLastSymbolPosition);

        variableDefValueFirstSymbolPosition = 
          dataFromFile
          .indexOf(co.SYMBOLS_BEFORE_DEFVALUE_OF_PUG_VARIABLE,variableNameFirstSymbolPosition)
          + co.SYMBOLS_BEFORE_DEFVALUE_OF_PUG_VARIABLE.length;

        variableDefValueLastSymbolPosition = dataFromFile.indexOf(
          co.SYMBOLS_AFTER_DEFVALUE_OF_PUG_VARIABLE, variableDefValueFirstSymbolPosition);

        let defaultVariableValue = dataFromFile.
          slice(variableDefValueFirstSymbolPosition,variableDefValueLastSymbolPosition)
        if (variableNameFirstSymbolPosition !=     
            (co.SYMBOLS_BEFORE_NAME_OF_PUG_VARIABLE.length -1))
        {
          variableNameFirstSymbolPosition = variableDefValueLastSymbolPosition;
          variables.push({
            name : nameOfVariable,
            defValue : defaultVariableValue
          }) 
          isNeedToContinue = true;
        }
      } while(isNeedToContinue)
    }
  }
  return variables;
};

module.exports = func;