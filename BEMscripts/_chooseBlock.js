const _chooseBlock = function (blockNumber){//Получаем первичные данные amountOfBlocks и массив блоков blocksArr
  if(blockNumber > this.amountOfBlocks){
    console.log("choosen number is too big, where is not so many BEM.");
  }else{
    console.log(`You have choose ${this.returnCorrectBEMName(this.blocksArr[blockNumber - 1])}`);
  }
};

module.exports = _chooseBlock;