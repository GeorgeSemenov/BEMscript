let Block = function(title= 'no block title', elements=[], modifications =[]) { 
  this.title         = title,
  this.elements      = elements,
  this.modifications = modifications
};
let Element = function(title= 'no element title', modifications =[]) { 
  this.title         = title,
  this.modifications = modifications
};
let Modification = function(title= 'no modification title') { 
  this.title         = title;
};

module.exports = {
  Block        : Block,
  Element      : Element,
  Modification : Modification
};