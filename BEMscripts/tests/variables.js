const cl = require('./../classes.js');
let mod1             = new cl.Modificator('_модификатор№1')
let mod2             = new cl.Modificator('_модификатор№2')
let mod3             = new cl.Modificator('_модификатор№3')

let elm1             = new cl.Element('__элемент№1')
let elm2             = new cl.Element('__элемент№2')
let elm3             = new cl.Element('__элемент№3')

let bl1              = new cl.Block('Блок№1');
let bl2              = new cl.Block('Блок№2');
let bl3              = new cl.Block('Блок№3');
let bl4              = new cl.Block('Блок№4');

let pg1              = new cl.Page('page1');
let pg2              = new cl.Page('page2');
let pg3              = new cl.Page('page3');

let bembdReleased    = new cl.BEMBD(`заполненная база данных`, [bl1,bl2,bl3], [pg1,pg2,pg3,]);



mod1.parents.push('родблмод1',"родэлмод1");
mod2.parents.push('родблмод2',"родэлмод2");
mod3.parents.push('родблмод3',"родэлмод3");

elm1.modificators.push(mod1,mod2) ;
elm2.modificators.push(mod3) ;

elm1.parents.push('родблэлм1');
elm2.parents.push('родблэлм2');
elm3.parents.push('родблэлм3');

bl1.elements.push(elm2,elm1);
bl1.modificators.push(mod2,mod1);

bl2.elements.push(elm1,elm2);

bl3.modificators.push(mod1,mod2);

let syntaxRequests = [
  'tag.Block1',
  'tag.Block1 tag.Block2',
  `tag.blockName1{tag__elementName<variables>[arrName,mixin/elementName]  ~someMixin} tag.Block2{tag__elementName<variables>[arrName,mixin/elementName]  ~someMixin}`,
  `tag.blockName2{tag__elementName_modifierName<variables>[arrName,mixin/elementName]  someMixin} tag.blockName3`,
  `tag.blockName1 tag.blockName3 tag.blockName2 tag.blockName4`,
  `blockName1{tag__elementName} blockName2 tag.blockName3{__element<variables>} blockName4`,
  `1{tag__elementName} blockName2 3{__element<variables>}`,
]
let BEMStrings = [
  `tag__elementName_modificatorName<variables>`,
  `_modificatorName`,
  `tag__elementName_modificatorName`,
  `tag__elementName<variables>`,
  `__elementName_modificatorName<variables>`,
  `__elementName<variables>`,
  `__elementName`,
  `tag.blockName<variables>`,
  `tag.blockName`,
  `blockName<variables>`,
  `blockName`,
  `tag__elementName_modificatorName<var1,var2,var3>`,
  `tag__elementName_modificatorName<var1,var2,var3>[arrName,arrItemName,elementName]`,
  `__elementName_modificatorName<var1,var2,var3>[arrName,arrItemName,elementName]`,
  `__elementName<var1,var2,var3>[arrName,arrItemName,elementName]`,
  `tag__elementName<var1,var2,var3>[arrName,arrItemName,elementName]`,
  `tag__elementName_modificatorName[arrName,arrItemName,elementName]`,
  `tag__elementName[arrName,arrItemName,elementName]`,
  `__elementName[arrName,arrItemName,elementName]`,
  `somemixin`
]

module.exports = {
  folders: [
    '__element',
    '__Element',
    '_Element',
    'modificator',
    'YouAreGomic',
    '111',
    'imposibru__ololo',
  ],
  bembdReleased, 
  syntaxRequests,
  BEMStrings,
}