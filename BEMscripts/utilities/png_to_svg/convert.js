//смотри информэйшон тут : https://github.com/Iwasawafag/node-potrace
//Не забудь установить npm install potrace
const beforeFolder    = ('./before/');
const afterFolder     = ('./after/');
const bemFolder       = ('../../');
const potrace         = require('potrace');
fs                    = require('fs');
const gf              = require(`${bemFolder}getFiles.js`);
const dts             = require(`${bemFolder}deleteReturnString.js`);
const ask             = require(`${bemFolder}ask.js`);

let typeOfConvertation = ask('which convertation type do you need\n1 - svg to pug\n2 - png to pug\n3 - png to svg\ntype of convertaion: ')
let extension;
let files = gf(beforeFolder);
files.forEach((file)=>{
  potrace.trace(`${beforeFolder}${file}`, function(err, svg) {
    if (err) throw err;
    outputName = dts({
      str: file,
      lastChar: '.',
      retrunDeletedString: true
    })
    fs.writeFileSync(`${afterFolder}${outputName}.svg`, svg);
  });
})