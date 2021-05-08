function Cat(name,age) {
    this.age = age;
    this.name = name;
    this.describe = ()=>{
      console.log(`This is cat ${this.age} y/o, it's name is ${this.name}`);
    }
}
function Dog(name) {
    this.name = name;
    this.bark = function(){
      console.log(`Dog ${name} spelled Gav Gav`);
    }
    this.blocksArr = [1,2,3];
    this.showEntities = require(`${__dirname}/_showEntities.js`);
}
module.exports = {
  Cat : Cat,
  Dog : Dog
};