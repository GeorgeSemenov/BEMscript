const create = require(`${__dirname}/../_create.js`);
const v      = require(`${__dirname}/variables.js`)

console.log(`*********************************************************\n*********************************************************\n*********************************************************\n`);
// console.log(`Создаём странички`);
// create(`newPage1`, 'pAge');
// create(`newPage2`, 'page');
// create(`newPage3`, 'pAgE');
// create(`newPage1`, 'PAGE');
// create(`newPage5`, 'PAGE');

let BD = v.bembdReleased;
BD.create = create;

console.log(`Создаём сучности`);
v.syntaxRequests.forEach(request =>{
  BD.create(request.sentence);
  /*
    Перед началом теста убедиться, что в папке, которая находится по пути v.PATH_TO_ALLBLOCKS_DIR находится лишь пустая папка blocks
    Если блок - число - должно вывестись его json (если есть в массиве, если нет, то сообщение об ошибке)
    Если блок строка - 
      Если есть в массиве blocks - выводится его Json
      Если нет в массиве blocks - создаются файлы в PATH_TO_ALLBLOCKS_DIR и выводится их содержимое в Json (pug + scss + js)
  */
})