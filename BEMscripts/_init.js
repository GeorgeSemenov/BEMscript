const fs            = require('fs');
const v             = require('./variables.js');
const cl            = require('./classes.js');
const isElement     = require('./isElement.js');
const isModifier    = require('./isModifier.js');
const getFolders    = require('./getFolders.js');//возвращает имена папок находящихся в директории, откуда вызывается эта функция, если функцию вызывает BEМ.js то вернётся массив папок находящихся в папке с этим файлом

function filterAndMapArray(arr, condition = true, klass){
  let resultedArr = arr.map((item) => {
    if (condition)
      return new klass(item);
  })
  resultedArr = resultedArr.filter((item)=>{
    return item != null;
  })
  return resultedArr;
}

const _init = function (){//Получаем первичные данные amountOfBlocks и массив блоков blocksArr
  try{
    this.blocksArr = getFolders(this.destination).map(blockName => {
      let block = new cl.Block(blockName);
      // Преоразуем массив из названия папков массив элементов, если папка не удовлетворяет названию элемента (допустим это модификатор), тогда вместо неё массив будет содержать null
      block.elements = getFolders(this.destination + '/' + blockName).map(entityName => {
        if (isElement(entityName)){
          let element = new cl.Element(entityName);
          element.modifications = filterAndMapArray( getFolders(this.destination + '/' + `${blockName}/${entityName}`), true, cl.Modification);
          // element.modifications = getFolders(this.destination + '/' + `${blockName}/${entityName}`).map(modificationName => {
          //   return new cl.Modification(modificationName)
          // })
          // element.modifications = element.modifications.filter((element){

          // })
          return element
        }
      });
      block.modifications = getFolders(this.destination + '/' + blockName).map(entityName => {
        if(isModifier(entityName))
          return new cl.Modification(entityName)
      });
      return block;
    });
  }catch(err){
    console.log(`>>>>>\nError in module init\n\n${err}`);
  }
};

module.exports = _init;
