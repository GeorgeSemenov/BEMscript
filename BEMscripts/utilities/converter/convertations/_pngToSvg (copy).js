const fs              = require('fs');
const potrace         = require('potrace');
const bemFolder       = ('../../../');
const getName         = require(`${bemFolder}getFileName.js`);
const wtf             = require(bemFolder + 'writeToFile.js');

// {file, afterFolder, beforeFoler}
const func = function (obj){
  if(obj.afterFolder == undefined) obj.afterFolder = './after/';
  if(obj.beforeFolder == undefined) obj.beforeFolder = './before/';
  potrace.trace(`${obj.beforeFolder}${obj.file}`, function(err, svg) {
    if (err) throw err;
    wtf(`${obj.afterFolder}${getName(obj.file)}.svg`, svg);
  });
}

module.exports = func;