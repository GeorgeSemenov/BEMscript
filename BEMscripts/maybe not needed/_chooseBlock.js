const _chooseEntity = function (blockNumber){//Получаем первичные данные amountOfBlocks и массив блоков blocksArr
  if(blockNumber > this.amountOfBlocks){
    console.log("choosen number is too big, where is not so many BEM entities.");
  }else{
    console.log(`\n>${this.blocksArr[blockNumber - 1].title}`);
    this.showEnteties(blockNumber);
  }
};

module.exports = _chooseEntity;