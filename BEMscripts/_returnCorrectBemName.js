const _returnCorrectBemName = function (name){
  if ( name[0] == '\n') {
    name = name.slice(1);
  }
  return name;
};

module.exports = _returnCorrectBemName;