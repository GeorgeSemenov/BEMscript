const fs            = require('fs');
const ask           = require(`./ask.js`);
const createFolder  = require('./createFolder.js');
const writeToFile   = require('./writeToFile.js');
const cl            = require('./classes.js');
function unifersalCreateFunction(){

}
module.exports = {
  createForBEMBD(bemEntity){
    let isNeedToCreate = true;
    this.blocksArr.forEach(block=>{//проверка на наличие блока с таким именем в массиве блоков
      isNeedToCreate = (block.title == bemEntity)? false: isNeedToCreate;
    })
    let file = `${this.destination}\\${bemEntity}\\${bemEntity}`;
    let pugFile = `${file}.pug`;
    let scssFile = `${file}.scss`;
    let defaultPugVariablesText = `if modifier == undefined\n    - modifier = {}\n    `;
    let pugBlockText = `mixin ${bemEntity}(modifier)\n  .${bemEntity}&attributes(attributes)\n    ${defaultPugVariablesText}`;
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
    },
    createForBlock(bemEntity){
      let isNeedToCreate = true;
      let forbidenPlace = 0;
      this.elements.forEach((element,index)=>{//проверка на наличие блока с таким именем в массиве блоков
        isNeedToCreate = (element.title == bemEntity)? false: isNeedToCreate;
        forbidenPlace = index;
      })
      let fullFileName = `${this.grandParentName}${this.parentName}${bemEntity}`;
      let file = `${this.destination}\\${bemEntity}\\${fullFileName}`;
      let pugFile = `${file}.pug`;
      let scssFile = `${file}.scss`;
      
      let pugBlockText = `mixin ${fullFileName}(modifier)\n  .${fullFileName}&attributes(attributes)\n    `;
      let scssBlockText = `.${fullFileName}{\n  \n}`;

      if(isNeedToCreate){
        try {
          createFolder(this.destination,`${bemEntity}`)
          writeToFile(this.destination, pugFile, pugBlockText)
          if()
          writeToFile(this.destination, scssFile, scssBlockText);
      
          this.blocksArr.push(new cl.Block(bemEntity));
        }
        catch(err){console.log(`>>>>>>>>>>>\nerror in create module\n\n${err}\n>>>>>>>>>>>`);}
      }else
        console.log(`>>>>>>>>>>>>>>>>\nblock named "${bemEntity}" is already exist, so stop it baby.\nBy the way it take place : ${forbidenPlace}`);
    },
    createForElement(bemEntity){},
    createForModification(bemEntity){},
};


// let isNeedToCreate = true;
//   this.blocksArr.forEach(block=>{//проверка на наличие блока с таким именем в массиве блоков
//     isNeedToCreate = (block.title == bemEntity)? false: isNeedToCreate;
//   })
//   let pugFile = `${bemEntity}\\${bemEntity}.pug`;
//   let scssFile = `${bemEntity}\\${bemEntity}.scss`;
//   let pugBlockText = "mixin " + bemEntity + "(modifier)\n  ";
//   let scssBlockText = `.${bemEntity}{\n  \n}`;

//   if(isNeedToCreate){
//     try {
//       createFolder(this.destination,`${bemEntity}`)
//       writeToFile(this.destination, pugFile, pugBlockText)
//       writeToFile(this.destination, scssFile, scssBlockText);
  
//       this.blocksArr.push(new cl.Block(bemEntity));
//     }
//     catch(err){console.log(`>>>>>>>>>>>\nerror in create module\n\n${err}\n>>>>>>>>>>>`);}
//   }else
//     console.log(`>>>>>>>>>>>>>>>>\nblock named "${bemEntity}" is already exist, so stop it baby.`);  