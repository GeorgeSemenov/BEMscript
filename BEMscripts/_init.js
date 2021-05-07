const fs            = require('fs');
const v             = require('./variables.js');
const cl            = require('./classes.js');
const isElement     = require('./isElement.js');
const isModifier    = require('./isModifier.js');
const getFolders    = require('./getFolders.js');//возвращает имена папок находящихся в директории, откуда вызывается эта функция, если функцию вызывает BEМ.js то вернётся массив папок находящихся в папке с этим файлом

const _init = function (){//Получаем первичные данные amountOfBlocks и массив блоков blocksArr
  try{
    this.blocksArr = getFolders(this.destination).map(blockName => {
      let block = new cl.Block(blockName);
      block.elements = getFolders(this.destination + '/' + blockName).map(entityName => {
        console.log(entityName);
        if (isElement(entityName)){
          let element = new cl.Element(entityName);
          element.modifications = getFolders(this.destination + '/' + `${blockName}/${entityName}`).map(modificationName => {
            return new cl.Modification(modificationName)
          })
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