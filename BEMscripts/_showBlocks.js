const _showBlocks = function (){
  if (this.blocksArr.length!=0){
    let returnCorrectName = this.returnCorrectBEMName; //Приходится копировать функцию, т.к. в цикле forEach this уже будет принадлежать массиву, а не объекту BEM
    this.blocksArr.forEach(function(item, index){
      console.log(`${index + 1} ${returnCorrectName(item.title)}`);
    })
  }else{
    console.log(`There is no blocks, yet.`);
  }

};

module.exports = _showBlocks;