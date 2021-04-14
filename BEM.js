//Создать модуль в который ты будешь передавать строку(адресс) и он, если данного
//адреса не существует, создавал бы нужные дирректории, в противном случае переходил
//бы по данному адресу
const fs = require('fs');
const readline = require('readline-sync');

const STOP_WORD = 'exit';

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
let answer;
while (answer!=STOP_WORD){
  answer = write();
}

function write(){
  let BEM = readline.question("Create block: ");
  if (BEM != STOP_WORD){
    createFolder(BEM);
    console.log("Block " + BEM + " was created.\n");
  }
  return BEM
}

function createFolder(folder){
  let pathArr = folder.split('/');
  let directoriesArr = [];//Пустой архив директорий, которые уже прошёл node см ниже  
  let k = 0;
  // pathArr.forEach(function(item){
  //   if (!fs.existsSync(item)){
  //     fs.mkdirSync(item);
  //   }
  // })
  while (k < pathArr.length){
    console.log('k = ' + k);


    if (!fs.existsSync(pathArr[k])){
      console.log(`pathArr[${k}] = ${pathArr[k]}`);
      fs.mkdirSync(directoriesArr.join() + pathArr[k]);
      // directoriesArr.pushArr[k];
    }

    k++;
  }
}