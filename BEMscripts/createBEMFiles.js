/*
Функция проверяет - есть ли в dir директория с именем BEMEntityTitle, если нет, то создаёт
Затем в этой директории проверяет, есть ли файлы BEMEntity.pug.scss.js и если нет
то создаёт и запихивает в них импорты imports.pug, imports.scss, imports.js
Важно - будут созданны только те файлы, для которых указанно соответствующее свойство в imports
*/
const gFolders  = require(`./getFolders.js`);
const gFiles    = require(`./getFiles.js`);
const mkdir     = require(`./createFolder.js`);
const wtf       = require(`./writeToFile.js`);
const createBEMFiles = function (dir, BEMEntityTitle, imports){//Задаём вопрос
  if(!gFolders(dir).includes(BEMEntityTitle)){mkdir(`${dir}/${BEMEntityTitle}`);}//Если папка не созданна с указанным именем, то нужно её создать
  let files = gFiles(`${dir}/${BEMEntityTitle}`);
  for(let ext in imports){// перебираем указанные свойства в imports - pug, scss, js и т.д. и записываем их в создаваемые файлы
    if(!files.includes(`${BEMEntityTitle}.${ext}`)){//Если среди файлов нет файла с именем BEMEntities.ext то надо его создать и наполнить
      wtf(`${dir}/${BEMEntityTitle}/${BEMEntityTitle}.${ext}`,imports[ext])
    }//В противном случае - ничего не делать, он и так уже заполнен чем нужно.
  }
};

module.exports = createBEMFiles;