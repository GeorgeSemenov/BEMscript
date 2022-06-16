//Данная функция создаёт папку с переданным именем
//Если папка уже созданна  (ошибку 4075) то ничего не происходит.
//В противном случае пробрасывает ошибку дальше.
const fs = require('fs');
const createFolder = function (folder){
  try {
    fs.mkdirSync(`${folder}`);  
  }catch(err){
    if(err.errno == -4075){
      // console.log(`folder ${folder} already exist, this is good.`);
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