/*returnBEMStringsArray(str) - возвращает массив бэм строк
БЭМстрока- это строка синтаксиса в которой только один блок
т.е. функция принимает строку типа 
tag.blockName1{tag__elementName_modifierName<pugVariables> tag__elementName[itemTag__elemeneName_modifierName<variables>]  ~someMixin} tag.blockName2{}
и возвращает массив 
[tag.blockName1{tag__elementName_modifierName<pugVariables> tag__elementName[itemTag__elemeneName_modifierName<variables>]  ~someMixin}
,
tag.blockName2{}]*/
const returnBEMStringsArray = function (str){
  let spacePos      = str.indexOf('');
  let curlyBracePos = str.indexOf('{');
  if (!(~curlyBracePosition && !(~spacePosition))) {return [str]}//Если нет ни пробелов ни фигурных скобок
  else if(!(~curlyBracePosition ) && ~spacePosition){return str.split(' ')}//Если нет фигурных скобочек но есть пробелы
  else if(~curlyBracePosition && !(~spacePosition)){return [str]}//Если есть фигурные скобочки но нет пробелов
  else if(~curlyBracePosition && ~spacePosition){return str.split('} ')}//Если есть фигурные скобочки и пробелы
};

module.exports = returnBEMStringsArray;