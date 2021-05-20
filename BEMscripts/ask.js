const readline = require('readline-sync');
const _ask = function (question="Create/select block: "){//Получаем первичные данные amountOfBlocks и массив блоков blocksArr
  let answer = readline.question(`${question}`);
  return answer;
};

module.exports = _ask;