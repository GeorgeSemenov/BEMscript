//Очень важно чтобы MODIFIER_BEGINING было на один символ меньше чем ELEMENT_BEGINING, потому что так отличают модификатор от элемента
const v = {
  STOP_WORD                               : 'exit',
  ONE_LEVEL_UP_WORD                       : 'up',
  SYMBOL_END_OF_LINE                      : '\n',
  ELEMENT_BEGINING                        : "__",
  MODIFIER_BEGINING                       : "_",
  SYMBOL_BEFORE_ENTITY                    : "    ",
  SYMBOLS_BEFORE_NAME_OF_PUG_VARIABLE     : `- modifier["`,
  SYMBOLS_AFTER_NAME_OF_PUG_VARIABLE      : `"] =`,
  SYMBOLS_BEFORE_DEFVALUE_OF_PUG_VARIABLE : `"] =`,
  SYMBOLS_AFTER_DEFVALUE_OF_PUG_VARIABLE  : `;\r`,
  SHOW_BLOCK_PRE_SYMBOL                   : '>',
  SHOW_ENTITIES_PRE_SYMBOLS               : `> `,
  SHOW_ELEMENT_PRE_SYMBOL                 : '>>',
  SHOW_MODIFICATIONS_PRE_SYMBOLS          : '>>',
};

module.exports = v;