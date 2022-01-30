//смотри информэйшон тут : https://github.com/Iwasawafag/node-potrace
//Не забудь установить - npm install potrace (для конвертаци чернобелых png в svg) - в этом случае ты сможешь влиять на цвета с помощью css + размер сильно уменьшиться
//не забудь установить - sudo npm i png-to-svg -g (для для конвертаци цветных png в svg) - сильно уменьшится размер, но в самом svg будет присутствовать картинка, поэтому цвета изменять уже не удастся
//Также для png-to-svg нужно установить - sudo apt install graphicsmagick
//Но всё равно придётся с ним поколдовать (добавить модуль экспорт и сделать, чтобы исходные файлы сохранялись в нужные папки)
const beforeFolder    = ('./before/');
const afterFolder     = ('./after/');
const tempFolder      = './tempFolder/';
const bemFolder       = ('../../');
const convertFolder   = ('./convertations/');
const potrace         = require('potrace');
const fs              = require('fs');
const gf              = require(`${bemFolder}getFiles.js`);
const dts             = require(`${bemFolder}deleteReturnString.js`);
const ask             = require(`${bemFolder}ask.js`);
const pts             = require(`${convertFolder}_pngToSvg.js`);
const cpts            = require(`${convertFolder}colored-png-to-svg/createsvg.js`);
const stp             = require(`${convertFolder}_svgToPug.js`);
const cf              = require(`${bemFolder}createFolder.js`);

let typeOfConvertation = ask('which convertation type do you need\n1 - svg to pug\n2 - black and white png to pug\n3 - black and white png to svg\n4 - colored png to pug\n5 - colored png to svg\ntype of convertaion: ')
let extension;
let files = gf(beforeFolder);

cf(afterFolder);
if(typeOfConvertation == 1) {sorting(files,stp);}//Ковертируемс svg в pug(c миксиной)
else if(typeOfConvertation == 2) {//Ковертируемс png в pug(c миксиной)
  cf(tempFolder)
  sorting(files,pts,{afterFolder:tempFolder});
  setTimeout(
    ()=>{
      files = gf(tempFolder)
      sorting(files,stp,{beforeFolder:tempFolder})
      setTimeout(()=>{
        fs.rmdirSync(tempFolder, { recursive: true })
      },5000)
    }, 7500,);
}
else if(typeOfConvertation == 3) {sorting(files,pts);} //Конвертируем png в svg
else if(typeOfConvertation == 4) {//Конвертируем цветное png в pug
  cf(tempFolder)
  sorting(files,cpts,{afterFolder:tempFolder});
  setTimeout(
    ()=>{
      files = gf(tempFolder)
      sorting(files,cpts,{beforeFolder:tempFolder})
      setTimeout(()=>{
        fs.rmdirSync(tempFolder, { recursive: true })
      },5000)
    }, 7500,
  );
} 
else if(typeOfConvertation == 5) {sorting(files,cpts);} //Конвертируем цветное png в svg
else{ `Nothing to convert.`}

function sorting(arr,func,destination={afterFolder: afterFolder, beforeFolder: beforeFolder}){
  if (destination.afterFolder == undefined) destination.afterFolder = afterFolder;
  if (destination.beforeFolder == undefined) destination.beforeFolder = beforeFolder;
  arr.forEach(function(item, index){
    console.log(`${index+1}/${arr.length}) file ${item} converted`)
    func({
      file: item,
      afterFolder: destination.afterFolder,
      beforeFolder: destination.beforeFolder
    });
  })
}