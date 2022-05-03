//возвращает имена папок находящихся в директории, откуда вызывается эта функция, 
//если функцию вызывает BEМ.js то вернётся массив папок находящихся в папке с этим файлом
//Если задать isDevMode=true то будет возвращать сообщения, например, что в указанной папке не директорий.
//Если папок внутри указанной папки не будет, то вернётся пустой массив.
const fs = require('fs');

const func = function (currentFolder=__dirname, isDevMode = false){
  let folders;
  try{
    folders = fs.readdirSync(currentFolder).filter((file,index) => { //readdirSync(folder) - считывает информацию из folder , filter - возвращает новый массив с элементами, для которых калбэк вернёт тру
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