const rboa = require(`${__dirname}/../returnBEMObjectsArray.js`);
const v = require(`${__dirname}/variables.js`);

console.log(`*********************************************************************\n*********************************************************************\n*********************************************************************\n\n`);
for (let str of v.syntaxRequests){
  console.log(`${str.sentence} =>`)
  rboa(str.sentence).forEach((item, index)=>{console.log(`--${JSON.stringify(item)}           ${(JSON.stringify(item) == JSON.stringify(str.rightAnswerForReturnBEMObjesctsFunction[index]))?'':`\n>>>>>>>>>>>>>>>>>>>Обшибка!!!<<<<<<<<<<<<<<<<<<<<<\n\n\n`}`);});
  console.log();
}