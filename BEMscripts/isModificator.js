//Принимает имя сущности и возвращает true если это имя модификатора
//Для этого сравнивает первые два символа, если один из них нижнее подчёркивание, а другой буква, значит это модификатор
const co = require('./constants.js');
const regexModifier = new RegExp(`${co.MODIFIER_BEGINING}[A-Za-z]`);

const func = function (entityName){
  if ( (entityName != undefined) && 
       ((typeof entityName) == "string") && 
       (entityName.length > co.MODIFIER_BEGINING.length) &&
       (regexModifier.test(entityName.substring(0,(co.MODIFIER_BEGINING.length + 1) )))
       )
  {
    return true
  }
  return false
};

module.exports = func;