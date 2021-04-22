const _showBlocks = function (BEM){
  let returnCorrectName = this.returnCorrectBEMName; //Приходится копировать функцию, т.к. в цикле forEach this уже будет принадлежать массиву, а не объекту BEM
  this.blocksArr.forEach(function(item, index){
    console.log(`${index + 1} ${returnCorrectName(item)}`);
  })
};

module.exports = _showBlocks;