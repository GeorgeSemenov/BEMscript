const v = require('./variables.js');
const regexModifier = new RegExp(`${v.MODIFIER_BEGINING}[A-Za-z]`);

const func = function (entityName){
  if(entityName.length < v.ELEMENT_BEGINING.length){
    console.log(`>>>>>\nEntity name - "${entityName}" is too short for modificator's name \n it must have at least ${v.ELEMENT_BEGINING.length} symbols`);
  }else{
    if (regexModifier.test(entityName.substring(0,v.ELEMENT_BEGINING.length)))
      return true
  }
  return false
};

module.exports = func;