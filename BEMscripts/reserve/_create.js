const path          = require('path');
const fs            = require('fs');
const ask           = require(`./ask.js`);
const createFolder  = require('./createFolder.js');
const writeToFile   = require('./writeToFile.js');
const cl            = require('./classes.js');
const isElement     = require('./isElement.js');
const isModifier    = require('./isModifier.js');

module.exports = {
  import obj from './classes';
  createForBEMBD(bemEntity){
    let isNeedToCreate = true;
    this.blocksArr.forEach(block=>{//проверка на наличие блока с таким именем в массиве блоков
      isNeedToCreate = (block.title == bemEntity)? false: isNeedToCreate;
    })
    // let file = `${this.destination}/${bemEntity}/${bemEntity}`;
    //Вначале попробовал указать путь, как в верху указанно, но в windows разделителем
    //Директорий является \, а в ubuntu / Пришлось искать универсальный путь, используя path
    let file = path.join(this.destination, bemEntity, bemEntity);
    let pugFile = `${file}.pug`;
    let scssFile = `${file}.scss`;
    let defaultPugVariablesText = `if modifier == undefined\n    - modifier = {}\n    `;
    let pugFileText = `mixin ${bemEntity}(modifier)\n  .${bemEntity}&attributes(attributes)\n    ${defaultPugVariablesText}`;
    let scssFileText = `.${bemEntity}{\n  \n}`;

    if(isNeedToCreate){
      try {
        createFolder(this.destination,bemEntity);
        writeToFile(pugFile, pugFileText);
        writeToFile(scssFile, scssFileText);
        this.blocksArr.push( new obj.Block(bemEntity) );
      }
      catch(err){
        if (err.errno == (-4075) )
          console.log(`---error in create module\n---${bemEntity} file already exists in folder\n`);
        else
          console.log(`---error in create module\n---${err}\n${JSON.stringify(err)}\n`);
      }
    }else
      console.log(`---error in create module\n---block named "${bemEntity}" is already exist in array blocksArr, so stop it baby.\n`);
    },
    createForBlock(bemEntity){
      let isNeedToCreate = true;
      let forbidenPlace = 0;
      let summedArr = this.elements.concat(this.modifications)
      summedArr.forEach((element,index)=>{//проверка на наличие сущности с таким именем в массивах элементов и модификаторов
        isNeedToCreate = (element.title == bemEntity)? false: isNeedToCreate;
        forbidenPlace = index;
      })
      let fullFileName = `${this.title}${bemEntity}`;
      let file = `${this.destination}\\${bemEntity}\\${fullFileName}`;
      let pugFile = `${file}.pug`;
      let scssFile = `${file}.scss`;
      
      let pugFileText = `mixin ${fullFileName}(modifier)\n  .${fullFileName}&attributes(attributes)\n    `;
      let scssFileText = `.${fullFileName}{\n  \n}`;

      if(isNeedToCreate){
        try {
          createFolder(this.destination,`${bemEntity}`)
          writeToFile(this.destination, pugFile, pugFileText)
          let isNeedToCreatePUGFile = ask(`Is need to create PUG file ? 1/0`);
          if(isNeedToCreatePUGFile)
            writeToFile(this.destination, pugFile, pugFileText);
          if(isModifier(bemEntity))
            this.modifications.push(new cl.Modification(bemEntity));
          if(isElement(bemEntity))
            this.elements.push(new cl.Element(bemEntity));
        }
        catch(err){console.log(`>>>>>>>>>>>\nerror in create module\n\n${err}\n>>>>>>>>>>>`);}
      }else{
        console.log(`>>>>>>>>>>>>>>>>\nelement named "${bemEntity}" is already exist, so stop it baby.\nBy the way it take place : ${forbidenPlace}`);
      }
    },
    createForElement(bemEntity){
      let isNeedToCreate = true;
      let forbidenPlace = 0;
      this.modifications.forEach((modification,index)=>{//проверка на наличие сущности с таким именем в массивах элементов и модификаторов
        isNeedToCreate = (modification.title == bemEntity)? false: isNeedToCreate;
        forbidenPlace = index;
      })
      let fullFileName = `${this.parentName}${this.title}${bemEntity}`;
      let file = `${this.destination}\\${bemEntity}\\${fullFileName}`;
      let scssFile = `${file}.scss`;
      
      let scssFileText = `.${fullFileName}{\n  \n}`;

      if(isNeedToCreate){
        try {
          createFolder(this.destination,`${bemEntity}`)
        }
        catch(err){console.log(`>>>>>>>>>>>\nerror in create module\n\n${err}\n>>>>>>>>>>>`);}
      }else{
        console.log(`>>>>>>>>>>>>>>>>\nmodification named "${bemEntity}" is already exist, so stop it baby.\nBy the way it take place : ${forbidenPlace}`);
      }
    },
    createForModification(bemEntity){},//Переопределяем метод create для модификатора, чтобы в дальнейшем не выходило сообщение, что метод не переопределён.
};


// let isNeedToCreate = true;
//   this.blocksArr.forEach(block=>{//проверка на наличие блока с таким именем в массиве блоков
//     isNeedToCreate = (block.title == bemEntity)? false: isNeedToCreate;
//   })
//   let pugFile = `${bemEntity}\\${bemEntity}.pug`;
//   let scssFile = `${bemEntity}\\${bemEntity}.scss`;
//   let pugFileText = "mixin " + bemEntity + "(modifier)\n  ";
//   let scssFileText = `.${bemEntity}{\n  \n}`;

//   if(isNeedToCreate){
//     try {
//       createFolder(this.destination,`${bemEntity}`)
//       writeToFile(this.destination, pugFile, pugFileText)
//       writeToFile(this.destination, scssFile, scssFileText);
  
//       this.blocksArr.push(new cl.Block(bemEntity));
//     }
//     catch(err){console.log(`>>>>>>>>>>>\nerror in create module\n\n${err}\n>>>>>>>>>>>`);}
//   }else
//     console.log(`>>>>>>>>>>>>>>>>\nblock named "${bemEntity}" is already exist, so stop it baby.`);  