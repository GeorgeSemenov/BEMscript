console.log(`__dirname = ${__dirname}`);
const filename = `variables.js`
try{
  const test = require(`${__dirname}/${filename}`)
  console.log(`${filename} reachable by __dirname`);
}catch(err){  console.log(`${filename} unreachable by __dirname\n >>>${err}`);}

try{
  const test = require(`./${filename}`)
  console.log(`${filename} reachable by ./`);
}catch(err){  console.log(`${filename} unreachable by ./\n >>>${err}`);}