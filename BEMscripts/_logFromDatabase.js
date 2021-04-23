const v = require('./variables.js');
const _logFromDatabase = function (DBContent){
  let entitiesArr     = DBContent.split(v.SYMBOL_END_OF_LINE);
  let blockNumber     = -1;//при первом нахождении блока это число станет равным 0
  const regexBlock    = new RegExp(`[A-Za-z\n]`)
  const regexModifier = new RegExp(`${v.FIRST_LEVEL_ENTITY_BEGINING}${v.MODIFIER_BEGINING}[A-Za-z]`);
  const regexElement  = new RegExp(`${v.FIRST_LEVEL_ENTITY_BEGINING}${v.ELEMENT_BEGINING}`);
  let testStringLength= v.FIRST_LEVEL_ENTITY_BEGINING.length + v.ELEMENT_BEGINING.length; //длина строки, по которой станет ясно - перед нами элемент или модификатор
  let blocksArr = []
  try{
    console.log(`logg from begin`);
    entitiesArr.forEach(function(item,index){
      if (regexBlock.test(item[0])){//проверяем первый символ если это буква, значит это блок
        // console.log(`i found block! = ${item}`);
        blockNumber++;
        blocksArr[blockNumber] = {
          title       : item,
          elementsArr : [],
          modifiersArr: []
        }
      }else if(regexModifier.test(item.slice(0,testStringLength))){//Если удовлетворяет данному регулярному выражению, значит перед нами модификатор
        // console.log(`i found modifier! = ${item}`);
        blocksArr[blockNumber].modifiersArr.push({
          title       : item,
        })
      }else if(regexElement.test(item.slice(0,testStringLength))){//Попался элемент
        // console.log(`i found element! = ${item}`);
        blocksArr[blockNumber].elementsArr.push({
          title       : item,
          modifiersArr: []
        })
      }else{
        throw new Error(`database had incorrect data, please check database and fix data`);
      }
      console.log(`as a result blocksArr = ${blocksArr.length}`);
    })
  }catch(err){
    console.log(`>>>>>\n  Error in module logFromDatabase\n\n${err}`);
  }
  this.blocksArr= blocksArr;
  this.amountOfBlocks = blockNumber +1;
};

module.exports = _logFromDatabase;