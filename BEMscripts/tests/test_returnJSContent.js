const v   = require(`${__dirname}/variables.js`);
const rjc = require(`${__dirname}/../returnJSContent.js`)

console.log(`*********************************************************\n*********************************************************\n*********************************************************\n`);
v.objectsForTestingGetFilesContentFunctions.forEach(obj=>{
  console.log(`${rjc(obj.ruleObj,obj.blockName)}`);
})
