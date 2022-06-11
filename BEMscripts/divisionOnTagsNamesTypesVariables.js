const divisionOnTagsNamesTypesVariables = function (str){
  if(str[0] != '_'){//Является ли первый символ началом имени элемента или модификатора, если нет, значит указан тэг
    let tag = str.slice(0,str.indexOf('_') )
    str = str.slice(str.indexOf('_') )
  }
  if(str.contains(`[`)){+}
};

module.exports = divisionOnTagsNamesTypesVariables;