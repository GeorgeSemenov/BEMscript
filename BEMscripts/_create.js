const fs = require('fs');
const createFolder = require('./createFolder.js');
const writeToFile = require('./writeToFile.js');

const createBEM = function (bemEntity){
  let pugFile = `${bemEntity}/${bemEntity}.pug`;
  let scssFile = `${bemEntity}/${bemEntity}.scss`;
  let pugBlockText = "mixin " + bemEntity + "(modifier)\n  ";
  let scssBlockText = `.${bemEntity}{\n  \n}`;

  try {
    createFolder(bemEntity)
    writeToFile(pugFile, pugBlockText)
    writeToFile(scssFile, scssBlockText);

    this.blocksArr.push({
      title:bemEntity,
      elementsArr : [],
      modifiersArr: []
    });
    this.amountOfBlocks++ ;
    this.logToDatabase();
    this.showBlocks();
  }
  catch{console.log(`>>>looks like ${bemEntity} directory is created already`);}
};

module.exports = createBEM;