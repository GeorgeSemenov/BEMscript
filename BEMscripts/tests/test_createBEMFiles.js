const v   = require(`${__dirname}/variables.js`);
const cbf = require(`${__dirname}/../createBEMFiles.js`)

console.log(`*********************************************************\n*********************************************************\n*********************************************************\n`);
let dir   = __dirname;
let title = `someTestBlock2`;
v.imports.forEach(imprt=>{
  cbf(dir,title, imprt);
})
