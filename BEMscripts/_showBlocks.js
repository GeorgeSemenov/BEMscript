const _showBlocks = function (){
  if (this.blocksArr.length!=0){
    this.blocksArr.forEach(function(item, index){
      // console.log(`${index + 1} ${JSON.stringify(item)}`);
      console.log(`${index + 1} ${item.title}`); 
    })
  }else{
    console.log(`There is no blocks, yet.`);
  }

};

module.exports = _showBlocks;