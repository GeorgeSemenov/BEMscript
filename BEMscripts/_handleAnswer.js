const _handleAnswer = function (answer){//Получаем первичные данные amountOfBlocks и массив блоков blocksArr
  if( isNaN(parseInt(answer)) ){//Если это не число, значит создаём бэм
    this.create(answer);
    if (//Если нет ни одного такого символа, то значит это не строка для создания множества бэм сущностей, а просто
      (answer.indexOf('(') != -1) &&
      (answer.indexOf('<') != -1) &&
      (answer.indexOf('[') != -1)
    ){

    }
  }
  else {//Если это всё таки число, значит выбираем нужное число.
    this.chooseBlock(answer);
  }
};

module.exports = _handleAnswer;