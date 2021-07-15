//смотри информэйшон тут : https://github.com/Iwasawafag/node-potrace
//Не забудь установить npm install potrace
const beforeFolder    = ('./before/');
const afterFolder     = ('./after/');
const bemFolder       = ('../../');
const convertFolder   = ('./convertations/');
const potrace         = require('potrace');
const fs              = require('fs');
const gf              = require(`${bemFolder}getFiles.js`);
const dts             = require(`${bemFolder}deleteReturnString.js`);
const ask             = require(`${bemFolder}ask.js`);
const pts             = require(`${convertFolder}_pngToSvg.js`);
const stp             = require(`${convertFolder}_svgToPug.js`);
const cf              = require(`${bemFolder}createFolder.js`);

let typeOfConvertation = ask('which convertation type do you need\n1 - svg to pug\n2 - png to pug\n3 - png to svg\ntype of convertaion: ')
let extension;
let files = gf(beforeFolder);

cf(afterFolder);
if(typeOfConvertation == 1) {sorting(files,stp);}//Ковертируемс svg в pug(c миксиной)
else if(typeOfConvertation == 2) {//Ковертируемс png в pug(c миксиной)
  sorting(files,pts,{afterFolder:tempPNGToSVG});
  sorting(files,stp,{beforeFolder:tempPNGToSVG});
}
else if(typeOfConvertation == 3) {sorting(files,pts);} //Конвертируем png в svg
else{ `Nothing to convert.`}

async function sorting(arr,func,destination={afterFolder: afterFolder, beforeFolder: beforeFolder}){
  if (destination.afterFolder == undefined) destination.afterFolder = afterFolder;
  if (destination.beforeFolder == undefined) destination.beforeFolder = beforeFolder;
  arr.forEach((item, index)=>{
    func({
      file: item,
      afterFolder: destination.afterFolder,
      beforeFolder: destination.beforeFolder
    });
    console.log(`${index+1}/${arr.length}) file ${item} converted`)
  })
}