const fs = require('fs');

const func = function (currentFolder=__dirname){
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
  return folders;
};

module.exports = func;