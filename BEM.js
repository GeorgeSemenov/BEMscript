//Создать модуль в который ты будешь передавать строку(адресс) и он, если данного
//адреса не существует, создавал бы нужные дирректории, в противном случае переходил
//бы по данному адресу
const fs = require('fs');
const readline = require('readline-sync');

/* ---- Самодельные функшины ---- */

const createFolder = require('./createFolder.js');

/* ---- Переменные ---- */

const STOP_WORD = 'exit';
const ONE_LEVEL_UP_WORD = 'up';
// if (!fs.existsSync(dir)){
//     fs.mkdirSync(dir);
// }

// fs.writeFile("folder\input here.txt", "Hey there!", function(err) {
//     if(err) {
//       console.log('\n\n-----------Error description beginning-----------\n');
//       console.log(err);
//       console.log('\n-----------Error description end-----------\n\n')
//     }
//     console.log("The file was saved!");
// }); 

// fs.readFile('input here.txt', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })

// fs.mkdirSync('loh/pedr');//Если loh создан, то pedr будет создан в нём.

let answer;
while (answer!=STOP_WORD){
  answer = write();
}

function write(){
  let BEM = readline.question("Create block: ");
  if (BEM != STOP_WORD){
    createFolder(BEM);
    // console.log("Block " + BEM + " was created.\n");
  }
  return BEM
}