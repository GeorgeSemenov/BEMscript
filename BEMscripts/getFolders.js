const fs = require('fs');

const func = function (currentFolder=__dirname, isDevMode = false){
  let folders;
  try{
    folders = fs.readdirSync(currentFolder).filter((file,index) => {
      if (fs.lstatSync(`${currentFolder}/${file}`).isDirectory() )
        return file
    });
  }catch(err){
    console.log(`>>>>>\n  Error in function getFolders\n\n${err}`);
  }
  if (folders == undefined)
    folders = [];

  //Этот блок работает только в режиме отладки
  if ((folders.length == 0) && isDevMode)
    console.log(`\n>>>>>in ${currentFolder} no folders\n`);
  return folders;
};

module.exports = func;