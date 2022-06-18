/*Вовзращает содержимое для pug файла в виде строки, данное содержимое формируется в соотвествии со свойствами 
объект ruleObj и необязательной переменной blockName - её нужно указывать, если контент создаётся для элемента.*/
const returnPugContent = function (ruleObj, blockName){
  let pugContent, entityName;
  let arrLoopStr = ''
  let tag = ruleObj.tag? ruleObj.tag: '';
  if(blockName){
    entityName = `${blockName}${ruleObj.elementName}`
    pugContent = `mixin ${entityName}(modifier)\n`
  }else{
    entityName = `${ruleObj.blockName}`;
    pugContent = `mixin ${entityName}(modifier)\n  if modifier == undefined\n    - modifier = {};\n`
  }
  if(ruleObj.variables){//Если есть массив переменных
    ruleObj.variables.forEach( variable =>{
      pugContent+= `  if modifier["${variable}"] == undefined\n    - modifier["${variable}"] = "empty__${variable}";\n`
    })
  }
  if(ruleObj.arrObj){
    pugContent+=`  if modifier["${ruleObj.arrObj.arrName}"] == undefined\n    - modifier["${ruleObj.arrObj.arrName}"] = [{}];\n`
    arrLoopStr+=`    each ${ruleObj.arrObj.arrItemName} in modifier.${ruleObj.arrObj.arrName}\n      +${ruleObj.arrObj.mixement}(${ruleObj.arrObj.arrItemName})(class="")\n`
  }
  pugContent += `  ${tag}.${entityName}&attributes(attributes)\n${arrLoopStr}`
  return pugContent;
};

module.exports = returnPugContent;