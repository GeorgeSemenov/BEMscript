//Данная функция создаёт папку с переданным именем, второй, необязательный аргумент - назначение, это путь до этой папки
//Ничего не возвращает, только обрабатывает ошибку 4075 если папка с указанным именем уже существует
//В противном случае пробрасывает ошибку дальше.
const fs = require('fs');
const createFolder = function (folder,destination='./'){
  try {
    fs.mkdirSync(`${destination}/${folder}`);  
  }catch(err){
    if(err.errno == -4075){
      console.log(`folder ${folder} already exist, this is good.`);
    }else{
      throw(err); 
    }
  }
  // console.log("hello folder " + folder);
  // let pathArr = folder.split('/');
  // let directoriesArr = [];//Пустой архив директорий, которые уже прошёл node см ниже  
  // let k = 0;
  // pathArr.forEach(function(item){
  //   if (!fs.existsSync(item)){
  //     fs.mkdirSync(item);
  //   }
  // })
  // while (k < pathArr.length){
  //   console.log('k = ' + k);

  //   if (!fs.existsSync(pathArr[k])){
  //     console.log(`pathArr[${k}] = ${pathArr[k]}`);
  //     console.log(`directoriesArr.join(/) = ${directoriesArr.join('/')}`);
  //     console.log(`final path = ${directoriesArr.join('/') + '/' + pathArr[k]}`);
  //     fs.mkdirSync(directoriesArr.join('/') + '/' + pathArr[k]);
  //     directoriesArr.push(pathArr[k]);
  //   }

    // k++;
  // }
};

module.exports = createFolder;