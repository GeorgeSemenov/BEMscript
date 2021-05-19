function showArray(arr=[],preSymbols = '',isWithoutIndex=false){
  arr.forEach(function(item, index){
    if (item !=undefined){
      if(isWithoutIndex)
        console.log(`${preSymbols}  ${item.title}`); 
      else
        console.log(`${preSymbols}${index + 1} ${item.title}`); 
    }
  })
}

module.exports = showArray;