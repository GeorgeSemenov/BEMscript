const v   = require(`${__dirname}/variables.js`);
const rpc = require(`${__dirname}/../returnPugContent.js`)
const wtf = require(`${__dirname}/../writeToFile.js`)

console.log(`*********************************************************\n*********************************************************\n*********************************************************\n`);
v.objectsForTestingGetFilesContentFunctions.forEach(obj=>{
  let generated = rpc(obj.ruleObj,obj.blockName);
  if(generated == obj.rightAnswer.pugContent){console.log(`pug content for file ${obj.rightAnswer.fileName}.pug create properly`);}
  else{console.log(`>>>\n\nАбшибка\nСодержимое файла ${obj.rightAnswer.fileName}.pug созданно некоретно.\nСгенерированно:\n${generated}\n\nА нужно:\n\n${obj.rightAnswer.pugContent}`);}

  rightAnswerSpl = obj.rightAnswer.pugContent.split('\n');
  generated.split('\n').forEach((str, index)=>{
    let begin = 0;
    let end = 10;
    let comparedStr = str.slice(begin,end);
    let contrComparedStr = rightAnswerSpl[index].slice(begin,end);
    console.log(`str = ${comparedStr} ||| contr = ${contrComparedStr} ||| isCorrect = ${comparedStr == contrComparedStr}`);
    // if( str == rightAnswerSpl[index]){console.log(`${str} == ${rightAnswerSpl[index]}`);}
    // else{`>>> ${str} != ${rightAnswerSpl[index]}`}
  })
})
