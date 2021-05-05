const v = require('./variables.js');
const func = function (entityName){
  if(entityName.length < v.ELEMENT_BEGINING.length){
    console.log(`>>>>>\nEntity name - "${entityName}" is too short for element's name \n it must have at least ${v.ELEMENT_BEGINING.length} symbols`);
  }else{
    if (entityName.substring(0,v.ELEMENT_BEGINING.length) == v.ELEMENT_BEGINING)
      return true
  }
  return false
};

module.exports = func;