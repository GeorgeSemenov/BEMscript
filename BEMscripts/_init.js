const fs = require('fs');
const v = require('./variables.js');
const isElement     = require('./isElement.js');
const isModifier    = require('./isModifier.js');
const getFolders = require('./getFolders.js');//возвращает имена папок находящихся в директории, откуда вызывается эта функция, если функцию вызывает BEМ.js то вернётся массив папок находящихся в папке с этим файлом

let Block = function(title= 'no block title', elements=[], modifications =[]) { 
  this.title         = title,
  this.elements      = elements,
  this.modifications = modifications
};
let Element = function(title= 'no element title', modifications =[]) { 
  this.title         = title,
  this.modifications = modifications
};
let Modification = function(title= 'no modification title') { 
  this.title         = title;
};

const _init = function (){//Получаем первичные данные amountOfBlocks и массив блоков blocksArr
  try{
    this.blocksArr = getFolders(this.destination).map(blockName => {
      let block = new Block(blockName);
      block.elements = getFolders(this.destination + '/' + blockName).map(entityName => {
        console.log(entityName);
        if (isElement(entityName)){
          let element = new Element(entityName);
          element.modifications = getFolders(this.destination + '/' + `${blockName}/${entityName}`).map(modificationName => {
            return new Modification(modificationName)
          })
        }
      });
      block.modifications = getFolders(this.destination + '/' + blockName).map(entityName => {
        if(isModifier(entityName))
          return new Modification(entityName)
      });
      return block;
    });
  }catch(err){
    console.log(`>>>>>\nError in module init\n\n${err}`);
  }
};

module.exports = _init;