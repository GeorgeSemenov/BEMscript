const returnStringForImport = require(`${__dirname}/../returnStringForImport.js`);

console.log(returnStringForImport(`pug2`,`blockToPage`,`randomBlock`));//Ошибка нет такого расширения как pug2
console.log(returnStringForImport(`pug`,`blockToVrot`,`randomBlock`));//Ошибка нет такого типа импорта как blockToVrot
console.log(`blockToPage            pug = ${returnStringForImport('pug',`blockToPage`,'randomBlockBitch')}`);
console.log(`blockToAllBlocks       pug = ${returnStringForImport('pug',`blockToAllBlocks`,'randomBlockBitch')}`);
console.log(`blockToBlock           pug = ${returnStringForImport('pug',`blockToBlock`,'randomBlockBitch')}`);
console.log(`elementToBlock         pug = ${returnStringForImport('pug','elementToBlock','__title',[`text-field`])}`);

console.log(`blockToPage            scss = ${returnStringForImport('scss',`blockToPage`,'randomBlockBitch')}`);
console.log(`blockToAllBlocks       scss = ${returnStringForImport('scss',`blockToAllBlocks`,'randomBlockBitch')}`);
console.log(`blockToBlock           scss = ${returnStringForImport('scss',`blockToBlock`,'randomBlockBitch')}`);
console.log(`elementToBlock         scss = ${returnStringForImport('scss','elementToBlock','__title',[`text-field`])}`);
console.log(`modificatorToBlock     scss = ${returnStringForImport('scss','modificatorToBlock','_theme_red',[`text-field`])}`);
console.log(`modificatorToElement   scss = ${returnStringForImport('scss','modificatorToElement','_theme_red',[`block`,`__element`])}`);

console.log(`blockToPage            js = ${returnStringForImport('js',`blockToPage`,'randomBlockBitch')}`);
console.log(`blockToAllBlocks       js = ${returnStringForImport('js',`blockToAllBlocks`,'randomBlockBitch')}`);
console.log(`blockToBlock           js = ${returnStringForImport('js',`blockToBlock`,'randomBlockBitch')}`);
console.log(`elementToBlock         js = ${returnStringForImport('js','elementToBlock','__title',[`text-field`])}`); // ошибка т.к. элемент.js не импортируется в блок