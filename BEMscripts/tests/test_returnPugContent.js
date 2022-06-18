const v   = require(`${__dirname}/variables.js`);
const rpc = require(`${__dirname}/../returnPugContent.js`)

console.log(`*********************************************************\n*********************************************************\n*********************************************************\n`);
v.objectsForTestingGetFilesContentFunctions.forEach(obj=>{
  console.log(`${rpc(obj.ruleObj,obj.blockName)}`);
})
