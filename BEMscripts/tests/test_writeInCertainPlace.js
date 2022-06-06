console.log(`test writeCertainPlace begin`);
const writeInCertainPlace       = require(`./../writeInCertainPlace.js`);

let pathToFile                  = './testFOrMyOnlyWIshes/fileForTestingWriteInCertainPlace.txt';
console.log(`writeInCertainPlace(${pathToFile}, 'first writing [top]' , top)`);
writeInCertainPlace(pathToFile, 'first writing [top]', 'top' )
console.log(`writeInCertainPlace(${pathToFile}, 'second writing [top]' , top)`);
writeInCertainPlace(pathToFile, 'second writing [top]', 'top' )
console.log(`writeInCertainPlace(${pathToFile}, 'third writing [bottom]' , bottom)`);
writeInCertainPlace(pathToFile, 'third writing [bottom]', 'bottom' )