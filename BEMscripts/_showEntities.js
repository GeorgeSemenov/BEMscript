const isElement   = require('./isElement.js');
const isModifier  = require('./isModifier.js');
const v = require('./variables.js');

function showArray(arr){
  arr.forEach(function(item, index){
    if((typeof item) == 'object')
      console.log(`${index + 1} ${item.title}`); 
    else if( (typeof item) == 'string' )
      console.log(`${index + 1} ${item.title}`); 
    else
      console.log('undefined entity');
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
    { //Если не элемент и не модификатор, но объект, значит блок - выводим элементы и модификаторы
      console.log('block');
    showArray(bemEntity.elements);
    showArray(bemEntity.modifications);
  }else if( isElement(bemEntity) ){ //Если это элемент то выводим все модификаторы
    console.log('element');
    showArray(bemEntity.modifications)
  }else{
    console.log(">>>>undefined array of entities");
  }
};

module.exports = _showEntities;