const returnBEMStringsArray = require(`${__dirname}/../returnBEMStringsArray.js`);
const v                     = require(`${__dirname}/variables.js`);

for(let sequence of v.syntaxRequests){
  let results = returnBEMStringsArray(sequence)
  console.log(`returnBEMStringsArray(${sequence})`);
  console.log(`>>length = ${results.length}`);
  for (let result of results){
    console.log(`>>>>${result}`);
  }
  console.log(`\n`);
}