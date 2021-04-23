const fs = require('fs');
const createFolder = require('./createFolder.js');
const writeToFile = require('./writeToFile.js');

const createBEM = function (){
  console.log(`creating begin`);
  let pugFile = `${this.currentBEM}/${this.currentBEM}.pug`;
  let scssFile = `${this.currentBEM}/${this.currentBEM}.scss`;
  let pugBlockText = "mixin " + this.currentBEM + "(modifier)\n  ";
  let scssBlockText = `.${this.currentBEM}{\n  \n}`;

  try {
    createFolder(this.currentBEM)
    writeToFile(pugFile, pugBlockText)
    writeToFile(scssFile, scssBlockText);

    this.blocksArr.push({
      title:this.currentBEM,
      elementsArr : [],
      modifiersArr: []
    });
    this.amountOfBlocks++ ;
    this.logToDatabase();
    this.showBlocks();
  }
  catch{console.log(`>>>looks like ${this.currentBEM} directory is created already`);}
};

module.exports = createBEM;