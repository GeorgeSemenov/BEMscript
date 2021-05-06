const v = require('./variables.js');
const func = function (entityName){
  if( (entityName != undefined) && 
      ((typeof entityName) == "object") &&
      (entityName.title.length > v.ELEMENT_BEGINING.length) &&
      (entityName.title.substring(0,v.ELEMENT_BEGINING.length) == v.ELEMENT_BEGINING) 
    ){
      return true
    }
  return false
};

module.exports = func;