/*Вовзращает содержимое для pug файла в виде строки, данное содержимое формируется в соотвествии со свойствами 
объект ruleObj и необязательной переменной blockName - её нужно указывать, если контент создаётся для элемента.*/
/*посути тут всегда возвращается одна строка, но я оставлю как есть, пусть будет задел на будущее.*/
const returnJSContent = function (ruleObj, blockName){
  let jsContent, entityName;
  if(blockName){entityName = `${blockName}${ruleObj.elementName}`}
  else{entityName = `${ruleObj.blockName}`;}
  jsContent=`$(document).ready(function(){\n  \n})`;
  return jsContent;
};

module.exports = returnJSContent;