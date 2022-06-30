// Пояснения - ./ - это путь откуда вызывается консоль , 
//__dirname - это путь где лежит скрипт
const getFolders = require(`${__dirname}/../getFolders.js`);
// const isElement = require(`./isElement.js`);
// const isModificator = require(`./isModificator.js`);
const c              = require(`${__dirname}/../constants.js`);

console.log(`test begin at ${new Date()}\n`);
console.log(getFolders(c.PATH_TO_BLOCKS_DIR));


// let folders = [
//   '__element',
//   '__Element',
//   '_Element',
//   'modificator',
//   'YouAreGomic',
//   '111',
//   'imposibru__ololo',
// ];
// folders.forEach((item,index)=>{
//   console.log(`isElement(${item}) = ${isElement(item)}`);
//   console.log(`isModificator(${item}) = ${isModificator(item)}\n`);
// })