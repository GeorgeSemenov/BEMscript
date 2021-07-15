//Функция принимает переменную с несколькими строками 
//и удаляет строку начиная с firstChar и заканчивая lastChar
// или, если указан параметр retrunDeletedString: true, данная строка не удаляется, а возвращяется
//по умолчанию firstChar = первый символ, lastChar- последний символ файла
//isNeedToDeleteKaretka - отвечает за перенос на следующую строку
//Принимаемый объект{str,firstChar=0,lastChar='\n', isNeedToDeleteKaretka=true,retrunDeletedString= false}
//При retrunDeletedString = true lastChar не входит в выдаваемый массив
const func = function (obj){
  if(obj.retrunDeletedString == undefined)   obj.retrunDeletedString=false;
  if(obj.isNeedToDeleteKaretka == undefined)   obj.isNeedToDeleteKaretka=true;
  
  if(obj.firstChar == undefined)  obj.firstPlace = 0;
  else                            obj.firstPlace = obj.str.indexOf(obj.firstChar)
  if(obj.lastChar == undefined)   obj.secondPlace= obj.length;
  else                            obj.secondPlace = obj.str.indexOf(obj.lastChar);
  if (obj.lastChar == '\n' && obj.isNeedToDeleteKaretka)  obj.secondPlace++;
  let deletedSubstring = obj.str.substring(obj.firstPlace,obj.secondPlace);

  if (obj.retrunDeletedString)
    return deletedSubstring
  else
    return obj.str.replace(deletedSubstring,'');
};

module.exports = func;