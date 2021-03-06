//Выводит переданный массив по правилам ruleObj
//embedRuleObj - управляющий объект, содрежит характеристики, которые будут использоваться для перебора во внутреннем массиве
//arr - перебираемый массив.
/*ruleObj - настройки, по которым элементы этого массива будут выводиться.
Также содержит внутренний управляющий объект, на случай, если элементы текущего массива имеют свои массивы
и их тоже нужно будет вывести. 
arrNames - имена массивов, которые содержатся в элементах перебираемого массива и которые тоже нужно перебрать
arrayItemIndex - порядковый номер элемента массива 
который нужно вывести, либо title объекта этотого массива*/
function enumirateAndShow(arr,ruleObj){
  //Значения по умолчанию
  if (ruleObj == undefined){ 
    ruleObj = {
      arrayItemIndex: undefined,//индекс(или title) элемента массива, внутренние массивы которого нужно вывести на экран
      arrNames: undefined,//Имена массивов, которые будут бодставляться в item[ruleObj.arrName] чтобы перебрать массивы внутри item
      embedRuleObj: undefined,//ruleObj - управляющий объект для подмасивов каждого элемента перебираемого массива (если таковые имеются)
      preEmbedSymbols:'>'//Символы, которые будут подставляться перед каждым выводом на экран
    }
  }
  if (ruleObj.preEmbedSymbols == undefined){ruleObj.preEmbedSymbols = '>';}

  // код функции для перебора
  // console.log(`ruleObj = ${JSON.stringify(ruleObj)}`);
  if(ruleObj.arrayItemIndex){//Был ли передан индекс сущности, элементы и модификаторы которой нужно вывести?
    if(isFinite(ruleObj.arrayItemIndex)){//Проверяем - является ли данный индекс числом
      if(ruleObj.arrayItemIndex >= 0 &&  ruleObj.arrayItemIndex < arr.length){//Если индекс не больше длины массива то выводим содержимое этого элемента
        console.log(`${ruleObj.preEmbedSymbols}[${ruleObj.arrayItemIndex}] ${arr[ruleObj.arrayItemIndex].parents.join('')}${arr[ruleObj.arrayItemIndex].title} `);        
        runForArrNamesAndEnumirateAndShow(arr[ruleObj.arrayItemIndex], ruleObj)
      }else{//если индекc отрицательный или больше длины массива, то выводим сообщение об обшибке
        console.log(`Ошибка в методе _show\nиндекс = ${ruleObj.arrayItemIndex} - не принадлежит массиву.`);
      }
    }else{//ruleObj.arrayItemIndex - не число, видимо строка.
      let result = arr.find((item,index)=>{//Выбираем первый попавшийся элемент массива title которого равен arrayItemIndex (т.к. двух одинаковых блоков и тем более элементов быть не может) Если же ничего найденно не будет, то result будет равен undefined
        return item.title == ruleObj.arrayItemIndex
      })
      if(result){//Если найденно совпадение то выводим его подмассивы
        console.log(`${ruleObj.preEmbedSymbols}[${ruleObj.arrayItemIndex}] ${result.parents.join('')}${result.title} `);        
        runForArrNamesAndEnumirateAndShow(result, ruleObj)
      }else{//Если совпадения не найденны, то выводится сообщение об ошибке.
        console.log(`Ошибка в методе _show -\nНе найден блок с именем "${ruleObj.arrayItemIndex}"\n`);
      }
    }
  }else{//индекс сущности передан не был, значит выводим все элементы
    arr.forEach((item,index)=>{
      console.log(`${ruleObj.preEmbedSymbols}[${index}] ${item.parents.join('')}${item.title} `);
      if (ruleObj.arrNames){ //Если указаны имена внутренних массивов, которые нужно вывести, то выводим. 
        runForArrNamesAndEnumirateAndShow(item,ruleObj)
      }
    })
  }
}

function runForArrNamesAndEnumirateAndShow(obj, ruleObj){//- данная функция пробегается по указанным именам массивов в объекте, obj - обект, в котором есть массивы, ruleObj - управляющий объект
  for (let arrName of ruleObj.arrNames){
    // console.log(`arrName = ${arrName}`);
    if (obj[arrName]){//Если данный массив существует в объекте то выводим его данные, в противном случае переходим к следующему имени массива
      enumirateAndShow(obj[arrName],ruleObj.embedRuleObj)
    }
  }
} 

const _show = function(cmd) {
  (cmd == 0)? cmd = "0": cmd;//Если пользователь вводит 0, то превращаем в строку, так можно скипт не будет думать, что cmd неопределён
  if(cmd){//Если cmd определенно тогда обрабатываем это cmd, в противном случае - выводим только блоки.
    cmd += ""; //Превращаем cmd в строку, это нужно чтобы была возможность применять cmd.toLowerCase() если cmd будет числом, то вызов toLowerCase  приведёт к обшибке
    if (cmd.toLowerCase() == "all"){//Если просят вывести все сущности, то выводим всё.
      enumirateAndShow(this.blocks,{
        arrNames: [`elements`, `modificators`],
        embedRuleObj : {
          preEmbedSymbols  :  '>>>',
          arrNames: [`modificators`],
          embedRuleObj : {
            preEmbedSymbols  :  '>>>>>',
          }
        }
      });
    }else if(cmd.toLowerCase() == 'pages'){ // Если просят вывести список страничек
      enumirateAndShow(this.pages)
    }else{//Если cmd не является ни 'pages' ни 'all', то скорее всего это или индекс элемента, массив которого нужно вывести, либо это имя блока, элементы которого нужно вывести
      enumirateAndShow(this.blocks,{
        arrayItemIndex: cmd,
        arrNames: [`elements`, `modificators`],
        embedRuleObj : {
          preEmbedSymbols  :  '>>>',
          arrNames: [`modificators`],
          embedRuleObj : {
            preEmbedSymbols  :  '>>>>>',
          }
        }
      })
    }
  }else{
    enumirateAndShow(this.blocks)
  }
  console.log(`\n\n\n`);
}

module.exports = _show;