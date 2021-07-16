const fs              = require('fs');
const h2p             = require('html2pug')
const potrace         = require('potrace');
const bemFolder       = ('../../../');
const getName         = require(`${bemFolder}getFileName.js`);
const drs             = require(`${bemFolder}deleteReturnString.js`);
const wtf             = require(bemFolder + 'writeToFile.js');
const rff             = require(bemFolder + 'readFromFile.js');

// {file, afterFolder, beforeFoler}
const func = function (obj){
  if(obj.afterFolder == undefined) obj.afterFolder = './after/';
  if(obj.beforeFolder == undefined) obj.beforeFolder = './before/';
  let html = rff(`${obj.beforeFolder}${obj.file}`);
  if (html == -1){console.log(`!!!\nfile ${obj.beforeFolder}${obj.file} not found.\n!!!`);}
  let pug = h2p(html);
  pug = drs({/*Убираем всё что не касается svg (head title etc...)*/
    str : pug,
    lastChar: 'svg',
  })

  let tempArr = pug.split('\n');//Разбиваем всю pug строку на массив строк
  tempArr.forEach((item,index,arr)=>{
    arr[index]=item.replace('  ','');
    if (index == 0){arr[index] = `${item}&attributes(attributes)`;}//добавляем аттрибуты
  });
  pug = tempArr.join('\n'); //Объединяем получивашийся массив модифицированных строк в одну строку.
  pug = `mixin ${getName(obj.file)}(modifier)\n  ` + pug;//Добавляем миксину
  wtf(`${obj.afterFolder}${getName(obj.file)}.pug`, pug);  
}
module.exports = func;