/*Вовзращает содержимое для scss файла в виде строки, данное содержимое формируется в соотвествии со свойствами 
объект ruleObj и необязательной переменной blockName - её нужно указывать, если контент создаётся для элемента.*/
const returnScssContent = function (ruleObj, blockName){
  let pugContent, entityName;
  let arrLoopStr = '';
  if(blockName){entityName = `${blockName}${ruleObj.elementName}`}
  else{entityName = `${ruleObj.blockName}`;}
  scssContent=`${entityName}{\n  background-color: $${entityName}--BGColor;\n  color: $${entityName}--Color;\n}`;
  return scssContent;
};

module.exports = returnScssContent;