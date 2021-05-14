const fs = require('fs');
const writeToFile = function(destination='./', file="**^dummyFile**^^^", msg="empty message"){
  fs.writeFileSync(`${destination}\\${file}`, msg , function(err) {
    if(err) {
      console.log('\n\n-----------Error in writeToFile function-----------\n');
      console.log(err);
    }
  }); 
}

module.exports = writeToFile;