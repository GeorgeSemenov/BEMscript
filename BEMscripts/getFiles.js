const fs = require('fs');

const func = function (currentFolder=__dirname, isDevMode = false){
  let files;
  try{
    files = fs.readdirSync(currentFolder).filter((file,index) => {
      if (!fs.lstatSync(`${currentFolder}/${file}`).isDirectory() )
        return file
    });
  }catch(err){
    console.log(`>>>>>\n  Error in function getFolders\n\n${err}`);
  }
  if (files == undefined)
    files = [];

  //Этот блок работает только в режиме отладки
  if ((files.length == 0) && isDevMode)
    console.log(`\n>>>>>in ${currentFolder} no files\n`);
  return files;
};

module.exports = func;