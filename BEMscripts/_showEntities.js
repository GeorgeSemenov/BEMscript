//Напоминаю тебе, что в файле BEMScripts/classes.js находится другой метод showEnteties,
//Он выполняет почти тоже самое, но чтобы не запутаться - имей ввиду
const isElement   = require('./isElement.js');
const isModifier  = require('./isModifier.js');
const v = require('./variables.js');
const showArrayBemEnteties = require('./showArrayBemEnteties');

const _showEntities = function (bemEntity){
};

module.exports = {
  showEntetiesForBEMBD(){
    showArrayBemEnteties(this.blocksArr);
  },
  showEntetiesForBlock(){
    showArrayBemEnteties(this.elements);
    showArrayBemEnteties(this.modifications, true);
  },
  showEntetiesForElement(){
    showArrayBemEnteties(this.modifications,true);
  }
}