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
    showArrayBemEnteties(this.elements,v.SHOW_ENTITIES_PRE_SYMBOLS);
    showArrayBemEnteties(this.modifications,
      v.SHOW_ENTITIES_PRE_SYMBOLS, true);
  },
  showEntetiesForElement(){
    showArrayBemEnteties(
      this.modifications,v.SHOW_MODIFICATIONS_PRE_SYMBOLS, true);
  },
  showEntetiesForModification(){}//Модификатору нечего показывать
}