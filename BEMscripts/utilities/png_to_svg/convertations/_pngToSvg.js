const fs              = require('fs');
const potrace         = require('potrace');
const beforeFolder    = ('../before/');
const afterFolder     = ('../after/');
const bemFolder       = ('../../../');
const dts             = require(`${bemFolder}deleteReturnString.js`);
const func = function (file){
  potrace.trace(`${beforeFolder}${file}`, function(err, svg) {
    if (err) throw err;
    outputName = dts({
      str: file,
      lastChar: '.',
      retrunDeletedString: true
    })
    fs.writeFileSync(`${afterFolder}${outputName}.svg`, svg);
  });
}
module.exports = func;