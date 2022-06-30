/* create(str[,className])
str - строка, которая может включать в себя title какой-либо сущности (блок или page).
Если указан className [block, page]- то будет создана та сущность, класс которой указан в className
Если передана строка типа tag.blockName<pug.variables>{__tag.elementName<pug.variables>_modifierName<colors>} tab.blockName<> 
или numberOfBlock{__tab.elementName<> _modifierName<colors>} 
то строка будет разбита и созданы (если не существуют) блок элемент и модификатор с переменными.
*/
const c                               = require(`${__dirname}/constants.js`);
const createBEMFiles                  = require(`${__dirname}/createBEMFiles.js`);
const readFromFile                    = require(`${__dirname}/readFromFile.js`);
const writeToFile                     = require(`${__dirname}/writeToFile.js`);
const returnStringForImport           = require(`${__dirname}/returnStringForImport.js`);
const createWritingIfItIsntInFIle     = require(`${__dirname}/createWritingIfItIsntInFIle.js`);
const returnBEMObjecstArray           = require(`${__dirname}/returnBEMObjectsArray.js`);
const divisionOnParts                 = require(`${__dirname}/divisionOnTagsNamesTypesVariables.js`);
const returnPugContent                = require(`${__dirname}/returnPugContent.js`);
const returnScssContent               = require(`${__dirname}/returnScssContent.js`);
const returnJSContent                 = require(`${__dirname}/returnJSContent.js`);


const _create = function (str, className){
  if(className && className.toLowerCase() == 'page'){// Если указанно, что это страница, значит делаем страницу.
    createBEMFiles(c.PATH_TO_PAGES_DIR,str,{
      pug : `html(lang="ru")\n  head\n    meta(charset = "utf-8")\n    meta(name="viewport", content="initial-scale=1.0, width=device-width")\n    title ${str}\n    +favicon()\n  body`,
      scss: `/* common styles */\n@import "../../styles/allCommonStyles";\n\n/* Block styles */`,
      js  : `import './${str}.scss';\nimport '../../JS-components/libs.js';\nimport '../../blocks/header/header.js';`,
    });
    let existedPages = require(c.PATH_TO_PAGES_ARRAY_FILE);
    if( existedPages.includes(str) ){return ;}
    else{
      existedPages.push(str);
      let newWriting = ``;
      existedPages.forEach(page=>{newWriting += `  '${page}',\n`;});
      let msg = `module.exports = [\n${newWriting}]`;
      writeToFile(c.PATH_TO_PAGES_ARRAY_FILE, msg);
    }
  }else{//Если не указанно, что это странница, значит будем делать блок (или что-то другое)
    createBEMEntites(str);
  }

  /*createBEMEntities(str) (функция должна быть частью _create т.к. тут использует this.blocks)
  данная функция принимает строку, которую разбивает и создаёт в соотвествии с синтаксисом сущности БЭМ
  Синтаксис - tag.blockName<pug.variables>{__tag.elementName<pug.variables>_modifierName<colors>} tab.blockName<> 
  или numberOfBlock{__tab.elementName<> _modifierName<colors>} 
  */
  function createBEMEntites(str){
    let bemObjs = returnBEMObjecstArray(str);
    let block;
    bemObjs.forEach(bemo=>{
      /*Первым делом будем искать block если существует или создавать, если не существует*/
      if(isFinite(bemo.title)){
        /*Если часть отвечающая за блок явялется числом*/
        if((+bemo.title < this.blocks.length) && (+bemo.title>= 0)){
          /*Если указанный номер блока находится внутри массива блоков*/
          block = this.blocks(bemo.title);
        }else{console.log(`\n>>>Ошибка\nУказан неверный номер блока - ${bemo.title}\nВведите номер блока от 0 до ${this.blocks.length}\n\n`);}/*Если указанный номер блока не принадлежит массиву.*/
      }else{/*Если часть отвечающая за блок явялется строкой*/
        let blockObj = divisionOnParts(bemo.title,true);
        let matchedBlock = this.blocks.find((bl)=>{/*Если блок уже содержится в массиве всех блоков, то matchedBlock будет содержать этот блок*/
          if(bl.title == blockObj.blockName){return true}
        })
        if(matchedBlock){block = matchedBlock}
        else{/*блок является строкой и его нет среди созданных блоков в this.block => надо создать новый блок*/
          createBEMFiles(pathToBlocks,bemo.title, {
            pug: returnPugContent(blockObj),
            scss: returnScssContent(blockObj),
            js: returnJSContent(blockObj)
          });
          this.blocks.push(new Block(blockObj.blockName) )
          /*Создаём записи о созданном блоке в файле, где хранятся импорты ко всем блокам*/
          createWritingIfItIsntInFIle(returnStringForImport(`pug`, `blockToAllblocksContainer`, blockObj.blockName) , `${c.PATH_TO_ALLBLOCKS_DIR}/allBlocks.pug`,`bottom`)
          createWritingIfItIsntInFIle(returnStringForImport(`scss`, `blockToAllblocksContainer`, blockObj.blockName) , `${c.PATH_TO_ALLBLOCKS_DIR}/allBlocks.scss`,`bottom`)
          createWritingIfItIsntInFIle(returnStringForImport(`js`, `blockToAllblocksContainer`, blockObj.blockName) , `${c.PATH_TO_ALLBLOCKS_DIR}/allBlocks.js`,`bottom`)

          // Создаём переменные: 
          createWritingIfItIsntInFIle(`$${blockObj}--Color = $black`, c.PATH_TO_COLORS_FILE, "bottom");//для цвета шрифта
          createWritingIfItIsntInFIle(`$${blockObj}--BGColor = $transparent`, c.PATH_TO_COLORS_FILE, "bottom");//для цвета фона
        }
      }
    })
  }
};

module.exports = _create;