//Выводит переданный массив по правилам ruleObj
//arrayItemIndex - порядковый номер элемента массива который нужно вывести, либо title объекта этотого массива
function enumirateAndShow(arr, ruleObj){
  if (ruleObj == undefined){ 
    arrayItemIndex,
    embedRuleObj,
    preEmbedSymbols=''
  }
  if (ruleObj.preEmbedSymbols == undefined){ruleObj.preEmbedSymbols = '';}
  
  // код функции для перебора
  if(ruleObj.arrayItemIndex){//Был ли передан индекс сущности, элементы и модификаторы которой нужно вывести?
    if(isFinite(ruleObj.arrayItemIndex)){//Проверяем - является ли данный индекс числом
      if(ruleObj.arrayItemIndex >= 0 &&  ruleObj.arrayItemIndex < arr.length){//Если индекс не больше длины массива то выводим содержимое этого элемента
        enumirateAndShow(array[arrayItemIndex].elements.concat(array[arrayItemIndex].modifcators),ruleObj.embedRuleObj)
      }else{//если индек отрицательный или больше длины массива, то выводим сообщение об обшибке
        console.log(`Ошибка в методе _show\nиндекс = ${ruleObj.arrayItemIndex} - не принадлежит массиву.`);
      }
    }else{//ruleObj.arrayItem - не число, видимо строка (но это не точно). Выбираем первый попавшийся элемент массива подходящий по условию (т.к. двух одинаковых блоков и тем более элементов быть не может) Если же ничего найденно не будет, то result будет равен undefined
      let result = arr.find((item,index)=>{
        item.title == ruleObj.arrayItemIndex
      })
      if()
    }
  }else{//индекс сущности передан не был, значит выводим все элементы
    arr.forEach((item,index)=>{
      console.log(`${ruleObj.preEmbedSymbols}[${index}] ${item[index].title} `);
      if (ruleObj.embedRuleObj){ //Если внутренний объект есть,значит нужно переберать и выводить данные уже во вложенном массиве
        enumirateAndShow(item,ruleObj.embedRuleObj)
      }
    })
  }

}

const _show = function(cmd) {
  if(cmd){
    if (cmd.toLowerCase() == "all"){
      enumirateAndShow(this.blocks,{
        isNeedToShowAllEmbedArrayItems : true,
        preEmbedSymbols  :  '>',
        embedRuleObj : {
          isNeedToShowAllEmbedArrayItems : true,
          preEmbedSymbols  :  '>>',
          embedRuleObj : {
            isNeedToShowAllEmbedArrayItems : false,
            preEmbedSymbols  :  '>>>',
          }
        }
      });
    }else if(isFinite(cmd)){ // если команда - число
      enumirateAndShow(thils.blocks,{
        arrayItemIndex: parseInt(cmd)
      })
    }else{
      enumirateAndShow(thils.blocks,{
        itemName: parseInt(cmd)
      })
    }
  }else{
    enumirateAndShow(thils.blocks)
  }
}

module.exports = _show;