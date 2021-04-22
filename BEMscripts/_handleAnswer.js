const _handleAnswer = function (answer){//Получаем первичные данные amountOfBlocks и массив блоков blocksArr
  if( isNaN(parseInt(answer)) ){//Если это не число, значит создаём бэм
    this.currentBEM = answer;
    this.create();
  }
  else{//Если это всё таки число, значит выбираем нужное число.
    this.chooseBlock(answer);
  }
};

module.exports = _handleAnswer;