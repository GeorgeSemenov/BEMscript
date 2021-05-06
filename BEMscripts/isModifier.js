const v = require('./variables.js');
const regexModifier = new RegExp(`${v.MODIFIER_BEGINING}[A-Za-z]`);

const func = function (entityName){
  if ( (entityName != undefined) && 
       ((typeof entityName) == "string") && 
       (entityName.length > v.ELEMENT_BEGINING.length) &&
       (regexModifier.test(entityName.substring(0,v.ELEMENT_BEGINING.length)))
       )
  {
    return true
  }
  return false
};

module.exports = func;