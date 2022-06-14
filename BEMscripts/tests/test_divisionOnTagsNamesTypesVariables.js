const dotntv = require(`${__dirname}/../divisionOnTagsNamesTypesVariables.js`);
const v = require(`${__dirname}/variables.js`);

console.log(`*********************************************************************\n*********************************************************************\n*********************************************************************\n\n`);
for (let obj of v.BEMStrings){
  console.log(`${obj.str} =>`)
  console.log(`--${JSON.stringify(dotntv(obj.str, obj.isItBlockTitle))}`);
  console.log();
}
