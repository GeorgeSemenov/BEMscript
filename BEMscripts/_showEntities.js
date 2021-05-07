const isElement   = require('./isElement.js');
const isModifier  = require('./isModifier.js');
const v = require('./variables.js');

function showArray(arr=[],isWithoutIndex=false){
  arr.forEach(function(item, index){
    if(isWithoutIndex)
      console.log(`  ${item.title}`); 
    else
      console.log(`${index + 1} ${item.title}`); 
  })
}

const _showEntities = function (bemEntity){
  if (bemEntity == undefined){//Если аргумент не передали, значит выводим все блоки
    showArray(this.blocksArr);
  }else if( 
    (!(isElement(bemEntity))) && 
    (!(isModifier(bemEntity))) &&
    ((typeof bemEntity) == 'object')
    )
    { //Если не элемент и не модификатор, то объект, значит блок - выводим элементы и модификаторы
    showArray(bemEntity.elements);
    showArray(bemEntity.modifications,true);
  }else if( isElement(bemEntity) ){ //Если это элемент то выводим все модификаторы
    showArray(bemEntity.modifications,true)
  }else{
    console.log("\n>>>>Method showEntities can't display array, cause undefined array of entities\n");
  }
};

module.exports = _showEntities;