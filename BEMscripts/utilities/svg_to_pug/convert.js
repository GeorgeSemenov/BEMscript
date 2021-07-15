//для работы данной утилиты должен быть установлен
//плюгин html2pug : npm install html2pug

//Данный плэгуагин конвертирует все svg файлы 
//в pug файлы и делает их миксинами
// html2pug < cv.svg > cv.pug
const beforeFolder    = ('./before');
const afterFolder     = ('./after');
const bemFolder       = ('../../');
const h2p             = require('html2pug')
const rff             = require(bemFolder + 'readFromFile.js');
const wtf             = require(bemFolder + 'writeToFile.js');
// const ds              = require(bemFolder + 'deleteReturnString.js');

const html = rff("cv.svg");
const pug = h2p(html);
wtf("ex.pug",pug);
// console.log(ds({
//   str:pug,
//   firstChar: "svg",
//   retrunDeletedString: true
// }));
// console.log(pug.substring(0,8));
// console.log(pug);
// h2p < "Figma-logo.svg" > example2.pug