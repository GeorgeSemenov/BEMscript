//данная функция принимает имя сущности и возвращает true если это элемент.
//Она сравнивает первые два символа
//Если они в точности как у элемента, то значит это элемент.

const co = require('./constants.js');
const func = function (entityName){
  if( (entityName != undefined) && 
      ((typeof entityName) == "string") &&
      (entityName.length > co.ELEMENT_BEGINING.length) &&
      (entityName.substring(0,co.ELEMENT_BEGINING.length) == co.ELEMENT_BEGINING) 
    ){
      return true
    }
  return false
};

module.exports = func;