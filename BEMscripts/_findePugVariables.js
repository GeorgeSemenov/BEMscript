const readFromFile = require('./readFromFile.js');
const v = require('./variables.js');
const func = function (fileName){
  let variables = [];
  if (fileName == undefined){
    console.log(`-------------Error in findePugVariables module, fileName is undefined`);
    return -1;
  }else{
    let dataFromFile;
    try{dataFromFile = readFromFile(`${this.destination}/${fileName}/${fileName}.pug`)}
    catch(err){
      console.log(`---------error in findePugVariable--------------\n${err}`);
    }
    let isNeedToContinue = false;
    let variableNameFirstSymbolPosition = 0;
    do{
      isNeedToContinue = false;
      variableNameFirstSymbolPosition = //Тут указанно, что нужно искать  первый символ имени переменной после предыдущего нахождения символа, чтобы функция не находила постоянно один и тот же символ.
        dataFromFile.indexOf(
          v.SYMBOLS_BEFORE_NAME_OF_PUG_VARIABLE,
          variableNameFirstSymbolPosition) + 
        v.SYMBOLS_BEFORE_NAME_OF_PUG_VARIABLE.length;

      let variableNameLastSymbolPosition = 
        dataFromFile.indexOf(v.SYMBOLS_AFTER_NAME_OF_PUG_VARIABLE,
          variableNameFirstSymbolPosition);

      let nameOfVariable = dataFromFile.slice(
        variableNameFirstSymbolPosition,
        variableNameLastSymbolPosition);

      let variableDefValueFirstSymbolPosition = 
        dataFromFile
        .indexOf(v.SYMBOLS_BEFORE_DEFVALUE_OF_PUG_VARIABLE,variableNameFirstSymbolPosition)
        + v.SYMBOLS_BEFORE_DEFVALUE_OF_PUG_VARIABLE.length;

      let variableDefValueLastSymbolPosition = dataFromFile.indexOf(
        v.SYMBOLS_AFTER_DEFVALUE_OF_PUG_VARIABLE, variableDefValueFirstSymbolPosition);

      let defaultVariableValue = dataFromFile.
        slice(variableDefValueFirstSymbolPosition,variableDefValueLastSymbolPosition)
      if (
        (variableNameFirstSymbolPosition != -1) &&
        (variableNameLastSymbolPosition != -1) &&
        (variableDefValueFirstSymbolPosition != -1) &&
        (variableDefValueLastSymbolPosition != -1)
      ){
        variableNameFirstSymbolPosition ++ ;
        variables.push({
          name : nameOfVariable,
          defValue : defaultVariableValue
        }) 
        isNeedToContinue = true;
      }
    } while(isNeedToContinue)
  }
  return variables;
};

module.exports = func;