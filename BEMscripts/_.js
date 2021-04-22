const readline = require('readline-sync');
const _ask = function (BEM){//Получаем первичные данные amountOfBlocks и массив блоков blocksArr
  this.currentBEM = readline.question("Create/select block: ");
};

module.exports = _ask;