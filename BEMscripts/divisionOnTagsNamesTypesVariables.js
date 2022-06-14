/*
принимает строку (str) типа  :
tag__elementName_modificatorName<var1,var2...>[arrName,arrItemName,mixin/elementName].
или 
tag.blockName<variables>[arrName,arrItemName,mixin/elementName]
Переменные указываются через запятую
Возвращает объект со слеудющими свойствами 
{tag, elementName, modificatorName, mixinName, variables[], arrObj{arrName,arrItemName,mixement}}

Если переменная isItBlockTitle = true - значит мы обрабатываем строку, которая содержит имя блока или 
его порядковый номер.
*/
const divisionOnTagsNamesTypesVariables = function (str, isItBlockTitle=false){
  let tag, blockName, elementName, modificatorName, mixinName, variables, arrObj;
  let tagCondition, symbolAfterTag;
  if(isItBlockTitle){
    symbolAfterTag = '.';
    tagCondition = str.includes('.');
  }else{
    symbolAfterTag = '_';
    tagCondition = (str[0] != '_') && str.includes('_');
  }
  if(tagCondition){//Для блок тайтла и для элемента вычленение тэга имеют разные условия но вычленяются одинаково. поэтому условия(tagCondition) описаны выше     
    tag = str.slice(0,str.indexOf(symbolAfterTag) )
    str = isItBlockTitle? str.slice(str.indexOf(symbolAfterTag) +1) : str.slice(str.indexOf( symbolAfterTag ));//В случае с блоком - нужно удалять ещё и точку, т.к. она не является частью имени блока.
  }
  if(str.includes(`[`)){arrObj = extractDataFrombrackets('[',']');}
  if(str.includes(`<`)){variables = extractDataFrombrackets('<','>');}
  if(str.includes(`__`)){//Есть ли в данной строке элемент
    if(~str.indexOf('_',2)){ //Если элемент есть, то проверяем, есть ли ещё и модификатор, если модификатора есть - вырезаем имя элемента до имени модификатора.
      elementName = str.slice(0,str.indexOf('_',2) );
      str = str.slice(str.indexOf('_',2));
    }else {//в противном случае вся оставшаяся строка - имя элемента.
      elementName = str;
      str= '';//Теперь строка пуста(якобы вырезали имя элемента из строки и теперь она пуста)
    }
  }
  if(str.length > 0){//Если в строке ещё остались символы значит это модификатор или миксина
    if(str.includes(`_`)){modificatorName = str}
    else{isItBlockTitle?(blockName = str):(mixinName = str)}
  }
  return {
    tag : tag, 
    blockName: blockName,
    elementName : elementName, 
    modificatorName : modificatorName,
    mixinName : mixinName,
    variables : variables, 
    arrObj : arrObj,
  }



  function extractDataFrombrackets(openBracket, closedBracket){
    //Данная функция является частью divisionOnTagsNamesTypesVariables, т.к. работает с строкой str
    //Возвращает или массив переменных, или объект для массива, в зависимости от вида открывающейся скобочки.

    if(str[str.length-1] == closedBracket){//Если есть закрывающая скобочка
      str = str.slice(0,str.indexOf(closedBracket) ) //Отрезаем закрывающую скобочку
    }
    let result = str.slice( (str.indexOf(openBracket) + 1), (str.length) ).split(',')
    str = str.slice(0, str.indexOf(openBracket));

    if (openBracket == '[') {return {
        arrName: result[0],
        arrItemName: result[1],
        mixinOrElementName : result[2]
      }
    }else{ return result}
  }
};

module.exports = divisionOnTagsNamesTypesVariables;