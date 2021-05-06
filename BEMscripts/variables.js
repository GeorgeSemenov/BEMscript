//Очень важно чтобы MODIFIER_BEGINING было на один символ меньше чем ELEMENT_BEGINING, потому что так отличают модификатор от элемента
const v = {
  STOP_WORD                       : 'exit',
  ONE_LEVEL_UP_WORD               : 'up',
  SYMBOL_END_OF_LINE              : '\n',
  DATABASE_NAME                   : "DB",
  ELEMENT_BEGINING                : "__",
  MODIFIER_BEGINING               : "_",
  SYMBOL_BEFORE_ENTITY            : "    ",
};

module.exports = v;