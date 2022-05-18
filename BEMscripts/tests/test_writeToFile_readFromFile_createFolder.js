const createFolder = require('./../createFolder.js');
const readFromFile = require('./../readFromFile.js');
const writeToFile  = require('./../writeToFile.js');


// let folderInHere = `./folderInHere3`;
// console.log(`Create folder ${folderInHere}`);
// createFolder(folderInHere);

let fileName       = `${__dirname}/olololREadble.js`

let msg            = 'новая информация.';
//writeToFile();//должна выйти обшибка
//writeToFile(fileName);//должна выйти обшибка
console.log(`write to file ${fileName}`);
writeToFile(fileName,msg);//должен создаться файл, если его нет, и записаться туда сообщение

// let data           = readFromFile(fileName);
// console.log(`read from file ${fileName}
//   file contain: ${data}`);