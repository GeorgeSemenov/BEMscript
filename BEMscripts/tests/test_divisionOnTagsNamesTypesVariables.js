const dotntv = require(`${__dirname}/../divisionOnTagsNamesTypesVariables.js`);
const v = require(`${__dirname}/variables.js`);

console.log(`*********************************************************************\n*********************************************************************\n*********************************************************************\n\n`);
for (let str of v.BEMStrings){
  console.log(`${str} =>`)
  console.log(`--${JSON.stringify(dotntv(str))}`);
  console.log();
}
