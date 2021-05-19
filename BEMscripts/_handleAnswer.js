const v = require(`./variables.js`);

function handleAnswerUniversalFunction(answer, arr, preSymbols){
  if( isNaN(parseInt(answer)) ){//Если это не число, значит создаём бэм
      this.create(answer);
    }
  else {//Если это всё таки число, значит выбираем нужное число.
    if(answer > arr.length){
      console.log("choosen number is too big, where is no so many BEM entities.");
    }else{
      console.log(`\n${preSymbols}${arr[answer - 1].title}`);
      arr[answer - 1].showEntities(answer);
    }
  }
}

module.exports = {
  handleAnswerForBEMBD(answer){
     handleAnswerUniversalFunction.call(
      this, answer, this.blocksArr, v.SHOW_BLOCK_PRE_SYMBOL) 
  },
  handleAnswerForBlock(answer){
    handleAnswerUniversalFunction.call(
      this, answer, this.elements, v.SHOW_ELEMENT_PRE_SYMBOL) 
  },
  handleAnswerForElement(answer){

  },
  handleAnswerForModification(answer){}//Модификатору незачем обрабатывать ответ, но метод должен быть переопределён, иначе будет выходить предупреждение, что метод не переопределён.
};