const bemFolder       = ('./');
const dts             = require(`${bemFolder}deleteReturnString.js`);
const func = function (file){
  let fileName = dts({
    str: file,
    lastChar: '.',
    retrunDeletedString: true
  })
  return fileName
};

module.exports = func;