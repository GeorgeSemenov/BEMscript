const readFromFile = require('./readFromFile.js');
const v = require('./variables.js');
const func = function (fileName){
  if (fileName == undefined){
    console.log(`-------------Error in findePugVariables module, fileName is undefined`);
    return -1;
  }else{
    let dataFromFile = readFromFile(`${this.destination}/${fileName}/${fileName}.pug`)
    let variableNameFirstSymbolPosition = 
      dataFromFile.indexOf(v.SYMBOLS_BEFORE_NAME_OF_PUG_VARIABLE) + 
      v.SYMBOLS_BEFORE_NAME_OF_PUG_VARIABLE.length;

    let variableNameLastSymbolPosition = 
      dataFromFile.indexOf(v.SYMBOLS_AFTER_NAME_OF_PUG_VARIABLE,variableNameFirstSymbolPosition);

    let nameOfVariable = dataFromFile.slice(
      variableNameFirstSymbolPosition,
      variableNameLastSymbolPosition);
    console.log(nameOfVariable);

    let variableDefValueFirstSymbolPosition = 
      dataFromFile
      .indexOf(v.SYMBOLS_BEFORE_DEFVALUE_OF_PUG_VARIABLE,variableNameFirstSymbolPosition)
      + v.SYMBOLS_BEFORE_DEFVALUE_OF_PUG_VARIABLE.length;

    let variableDefValueLastSymbolPosition = dataFromFile.indexOf(
      v.SYMBOLS_AFTER_DEFVALUE_OF_PUG_VARIABLE, variableDefValueFirstSymbolPosition);

    let defaultVariableValue = dataFromFile.
      slice(variableDefValueFirstSymbolPosition,variableDefValueLastSymbolPosition)
    console.log(defaultVariableValue);
  }
};

module.exports = func;