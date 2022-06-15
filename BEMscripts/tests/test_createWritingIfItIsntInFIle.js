const cwif = require(`${__dirname}/../createWritingIfItIsntInFIle.js`);

console.log(`*********************************************************************\n*********************************************************************\n*********************************************************************\n\n`);

let writing1 = '\nТест createWritingIfItIsntInFIle in bottom3';
let writTop  = 'Тест createWritingIfItIsntInFIle in top3\n';
let file1    = `${__dirname}/testFOrMyOnlyWIshes/kekPuk.txt`; //этот файл существует
let file2    = `${__dirname}/testFOrMyOnlyWIshes/kekPk2.txt`; //этот файл не существует
cwif(writing1,file1); // должна произойти запись
cwif(writing1,file2); // Должна выйти обшибка
cwif(writTop,file1,'top'); // должна произойти запись в топ