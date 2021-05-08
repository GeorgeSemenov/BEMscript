function showArray(arr=[],isWithoutIndex=false){
  arr.forEach(function(item, index){
    if (item !=undefined){
      if(isWithoutIndex)
        console.log(`  ${item.title}`); 
      else
        console.log(`${index + 1} ${item.title}`); 
    }
  })
}

module.exports = showArray;