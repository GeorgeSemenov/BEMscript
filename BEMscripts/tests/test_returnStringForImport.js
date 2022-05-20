const returnStringForImport = require(`${__dirname}/../returnStringForImport.js`);

console.log(`${returnStringForImport('pug',`blockToPage`,'randomBlockBitch')}`);
console.log(`${returnStringForImport('pug',`blockToAllBlocks`,'randomBlockBitch')}`);
console.log(`${returnStringForImport('pug','elementToBlock','__title.pug',[`text-field`])}`);