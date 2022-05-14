//

const fs                = require('fs');
const cl                = require(`${__dirname}/classes.js`);
const isElement         = require(`${__dirname}/isElement.js`);
const isModificator     = require(`${__dirname}/isModificator.js`);
const getFolders        = require(`${__dirname}/getFolders.js`);//возвращает имена папок находящихся в директории, откуда вызывается эта функция, если функцию вызывает BEМ.js то вернётся массив папок находящихся в папке с этим файлом
const findePugVariables = require(`${__dirname}/findePugVariables.js`)//Принимает имя файла - возвращает массив переменных

//функция ниже принимает управляющий объект, который содержит 
//расположение БЭМ сущности, функцию сравнения (condition) и тип бэм СУЩНОСТИ
function createAndFilterAndMapArray(ruleObj){
  let resultedArr = getFolders(ruleObj.path).map((item) => {
    if (ruleObj.condition(item))
      return new ruleObj.klass(item);
  })
  resultedArr = resultedArr.filter((item)=>{
    return item != null;
  })
  return resultedArr;
}

const _init = function (){//Получаем первичные данные amountOfBlocks и массив блоков blocksArr
  try{
    let destination = this.destination;
    this.blocksArr = createAndFilterAndMapArray ({path: destination, condition: (()=>{return true}), klass: cl.Block});
    this.blocksArr.forEach(block=>{
      block.destination = `${destination}/${block.title}`;
      block.elements = createAndFilterAndMapArray(
        {path: `${block.destination}`, condition: isElement, klass: cl.Element});
      block.elements.forEach(element=>{
        element.destination = `${block.destination}/${element.title}`;
        element.modifications = createAndFilterAndMapArray(
          {path: element.destination, condition: isModifier, klass: cl.Modification});
        element.parentName = block.title;
        element.modifications.forEach(modification => {
          modification.destination = `${element.modification}/${modification.title}`;
          modification.parentName = element.title;
          modification.grandParentName = block.title;
        })
// поиск пока не нужен        // element.variables = findePugVariables(`${destination}\\${block.title}\\${element.title}\\${block.title}${element.title}.pug`);
      })
      block.modifications = createAndFilterAndMapArray({path: block.destination, condition: isModifier, klass: cl.Modification});
      block.modifications.forEach(modification => {
        modification.parentName = block.title;
        modification.destination = `${block.destination}/${modification.title}`
      })
    })
  }catch(err){
    console.log(`>>>>>\nError in module init\n\n${err}`);
  }
};

module.exports = _init;
