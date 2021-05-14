const fs                = require('fs');
const v                 = require('./variables.js');
const cl                = require('./classes.js');
const isElement         = require('./isElement.js');
const isModifier        = require('./isModifier.js');
const getFolders        = require('./getFolders.js');//возвращает имена папок находящихся в директории, откуда вызывается эта функция, если функцию вызывает BEМ.js то вернётся массив папок находящихся в папке с этим файлом
const findePugVariables = require('./findePugVariables.js')

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
      block.elements = createAndFilterAndMapArray({path: `${destination}\\${block.title}`, condition: isElement, klass: cl.Element});
      block.elements.forEach(element=>{
        element.modifications = createAndFilterAndMapArray({path: `${destination}\\${block.title}\\${element.title}`, condition: isModifier, klass: cl.Modification});
        element.variables = findePugVariables(`${destination}\\${block.title}\\${element.title}\\${block.title}${element.title}.pug`);
        // console.log(`${destination}\\${block.title}\\${element.title}\\${block.title}${element.title}.pug`);
      })
      block.modifications = createAndFilterAndMapArray({path: `${destination}\\${block.title}`, condition: isModifier, klass: cl.Modification});
    })
  }catch(err){
    console.log(`>>>>>\nError in module init\n\n${err}`);
  }
};

module.exports = _init;
