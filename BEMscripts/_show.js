
function enumirateAndShow(arr, ruleObj){
  if (ruleObj == undefined){ 
    arrayItemIndex = -1,
    itemName = undefined,
    isNeedToShowAllEmbedArrayItems = false,
    embedRuleObj = {},
    preEmbedSymbols=''
  }
  Пропиши свойства этого объекта по отдельности на случай, если они небудут определенны
    
}

const _show = function(cmd) {
  if(cmd){
    if (cmd.toLowerCase() == "all"){
      enumirateAndShow(this.blocks,{
        isNeedToShowAllEmbedArrayItems : true,
        preEmbedSymbols  :  '>',
        embedRuleObj : {
          isNeedToShowAllEmbedArrayItems : true,
          preEmbedSymbols  :  '>>',
          embedRuleObj : {
            isNeedToShowAllEmbedArrayItems : false,
            preEmbedSymbols  :  '>>>',
          }
        }
      });
    }else if(isFinite(cmd)){ // если команда - число
      enumirateAndShow(thils.blocks,{
        itemIndex: parseInt(cmd)
      })
    }else{
      enumirateAndShow(thils.blocks,{
        itemName: parseInt(cmd)
      })
    }
  }else{
    enumirateAndShow(thils.blocks)
  }
}

module.exports = _show;