const _showEntities = function (blockNumber){
  this.blocksArr[blockNumber].forEach(item => {
    console.log(item);
  })
};

module.exports = _showEntities;