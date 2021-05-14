const fs = require('fs');
const createFolder  = require('./createFolder.js');
const writeToFile   = require('./writeToFile.js');
const cl            = require('./classes.js');
const createBEM = function (bemEntity){
  let isNeedToCreate = true;
  this.blocksArr.forEach(block=>{//проверка на наличие блока с таким именем в массиве блоков
    isNeedToCreate = (block.title == bemEntity)? false: isNeedToCreate;
  })
  let pugFile = `${bemEntity}\\${bemEntity}.pug`;
  let scssFile = `${bemEntity}\\${bemEntity}.scss`;
  let pugBlockText = "mixin " + bemEntity + "(modifier)\n  ";
  let scssBlockText = `.${bemEntity}{\n  \n}`;

  if(isNeedToCreate){
    try {
      createFolder(this.destination,`${bemEntity}`)
      writeToFile(this.destination, pugFile, pugBlockText)
      writeToFile(this.destination, scssFile, scssBlockText);
  
      this.blocksArr.push(new cl.Block(bemEntity));
    }
    catch(err){console.log(`>>>>>>>>>>>\nerror in create module\n\n${err}\n>>>>>>>>>>>`);}
  }else
    console.log(`>>>>>>>>>>>>>>>>\nblock named "${bemEntity}" is already exist, so stop it baby.`);
};

module.exports = createBEM;