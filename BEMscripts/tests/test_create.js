const create = require(`${__dirname}/../_create.js`);
const v      = require(`${__dirname}/variables.js`)

console.log(`*********************************************************\n*********************************************************\n*********************************************************\n`);
// console.log(`Создаём странички`);
// create(`newPage1`, 'pAge');
// create(`newPage2`, 'page');
// create(`newPage3`, 'pAgE');
// create(`newPage1`, 'PAGE');
// create(`newPage5`, 'PAGE');

console.log(`Создаём сущности`);
v.syntaxRequests.forEach(request =>{
  create(request);
})