const dotntv = require(`${__dirname}/../divisionOnTagsNamesTypesVariables.js`);
const v = require(`${__dirname}/variables.js`);

console.log(`*********************************************************************\n*********************************************************************\n*********************************************************************\n\n`);
for (let obj of v.BEMStrings){
  console.log(`${obj.str} =>`)
  console.log(`--${JSON.stringify(dotntv(obj.str, obj.isItBlockTitle))}`);
  if(!compareObj(obj.rightAnswerForDivisionOnTagsNamesTypesVariablesFunction, dotntv(obj.str, obj.isItBlockTitle))){
    console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>АБШИБКА АБШИБКА!!! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n\n\n\n`);
  }
  console.log();
}


function compareObj(obj1, obj2){
  for(key in obj1){
    if(JSON.stringify(obj1[key]) != JSON.stringify(obj2[key])){return false}
  }
  return true;
}