/*Вовзращает содержимое для scss файла в виде строки, данное содержимое формируется в соотвествии со свойствами 
объект ruleObj и необязательной переменной blockName - её нужно указывать, если контент создаётся для элемента.*/
const returnScssContent = function (ruleObj, blockName,type){
  let scssContent, entityName;
  let arrLoopStr = '';
  let elemName = ruleObj.elementName?ruleObj.elementName: '';
  if(ruleObj.mixinName){entityName = blockName + `__` + ruleObj.mixinName;
  }else{
    if(blockName){
      entityName = `${blockName}${elemName}`
      if(type=='modificator'){entityName += ruleObj.modificatorName};
    }
    else{entityName = `${ruleObj.blockName}`;}
  }
  scssContent=`.${entityName}{\n  background-color: $${entityName}--BGColor;\n  color: $${entityName}--Color;\n}`;
  return scssContent;
};

module.exports = returnScssContent;