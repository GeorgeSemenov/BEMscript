const fs = require('fs');
const v = require('./variables.js');
const isElement     = require('./isElement.js');
const isModifier    = require('./isModifier.js');
const getFolders = require('./getFolders.js');//возвращает имена папок находящихся в директории, откуда вызывается эта функция, если функцию вызывает BEМ.js то вернётся массив папок находящихся в папке с этим файлом

const _init = function (){//Получаем первичные данные amountOfBlocks и массив блоков blocksArr
  try{
    this.blocksArr = getFolders().map(block => {
      return {
        title: block,
        elemets : getFolders(block).map(entity => {
          if (isElement(entity))
            return {
              title: entity,
              modifications: getFolders(`${block}/${entity}`)
            }
        }),
        modifications: getFolders(block).map(entity => {
          if (isModifier(entity))
            return entity
        })
      }
    });
  }catch(err){
    console.log(`>>>>>\nError in module init\n\n${err}`);
  }
  this.amountOfBlocks = this.blocksArr.length;
  console.log(`total amountOfBlocks = ${this.amountOfBlocks}`);
  this.showBlocks();
};

module.exports = _init;