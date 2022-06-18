const v   = require(`${__dirname}/variables.js`);
const rsc = require(`${__dirname}/../returnScssContent.js`)

console.log(`*********************************************************\n*********************************************************\n*********************************************************\n`);
v.objectsForTestingGetFilesContentFunctions.forEach(obj=>{
  console.log(`${rsc(obj.ruleObj,obj.blockName)}`);
})
