const rboa = require(`${__dirname}/../returnBEMObjectsArray.js`);
const v = require(`${__dirname}/variables.js`);

console.log(`*********************************************************************\n*********************************************************************\n*********************************************************************\n\n`);
for (let str of v.syntaxRequests){
  console.log(`${str} =>`)
  rboa(str).forEach(item=>{console.log(`--${JSON.stringify(item)}`);});
  console.log();
}
