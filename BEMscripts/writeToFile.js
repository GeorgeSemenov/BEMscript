const fs = require('fs');
const writeToFile = function(file="**^dummyFile**^^^", msg="empty message"){
  let canIWriteToFile = true;
  try{
    if (file == "**^dummyFile**^^^"){
      throw new Error("\n\n>>>>>>>>>>>\nfile name undefined.\nWriting imposibru\n>>>>>>>>>>>\n\n");
    }
  }
  catch(err){
    console.log(err);
    canIWriteToFile = false;
  }
  if (canIWriteToFile){
    fs.writeFileSync(file, msg , function(err) {
        if(err) {
          console.log('\n\n-----------Error description beginning-----------\n');
          console.log(err);
          console.log('\n-----------Error description end-----------\n\n')
        }
    }); 
  }
}

module.exports = writeToFile;