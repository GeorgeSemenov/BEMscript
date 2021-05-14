const readline = require('readline-sync');
const _ask = function (){//Получаем первичные данные amountOfBlocks и массив блоков blocksArr
  let answer = readline.question("Create/select block: ");
  return answer;
};

module.exports = _ask;