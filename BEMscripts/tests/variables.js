const cl             = require(`${__dirname}/../classes.js`);
const c              = require(`${__dirname}/../constants.js`);
const readFromFile   = require(`${__dirname}/../readFromFile.js`);
const getFolders     = require(`${__dirname}/../getFolders.js`);
const getFiles       = require(`${__dirname}/../getFiles.js`);

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
  {
    sentence : `1{tag__elementName} blockName2 3{__element<variables>}`,
    rightAnswerForReturnBEMObjesctsFunction: [
      {title: `1`, inner: `tag__elementName`},
      {title: `blockName2`},
      {title: `3`, inner: `__element<variables>`},
    ],
  },
  {
    sentence : `tag.blockName2{tag__elementName_modifierName<variables>[arrName,mixin/elementName]  someMixin}`,
    rightAnswerForReturnBEMObjesctsFunction: [
      {title: `tag.blockName2`, inner: `tag__elementName_modifierName<variables>[arrName,mixin/elementName]  someMixin`},
    ],
  },
  {
    sentence : `tag.Block1`,
    rightAnswerForReturnBEMObjesctsFunction: [
      {title: `tag.Block1`},
    ],
  },
  {
    sentence : `tag.Block1 tag.Block2`,
    rightAnswerForReturnBEMObjesctsFunction: [
      {title: `tag.Block1`},
      {title: `tag.Block2`},
    ],
  },
  {
    sentence : `tag.blockName1{tag__elementName<variables>[arrName,mixin/elementName] someMixin} tag.Block2{tag__elementName<variables>[arrName,mixin/elementName]  ~someMixin}`,
    rightAnswerForReturnBEMObjesctsFunction: [
      {title: `tag.blockName1`, inner: `tag__elementName<variables>[arrName,mixin/elementName] someMixin`},
      {title: `tag.Block2`, inner: `tag__elementName<variables>[arrName,mixin/elementName]  ~someMixin`},
    ],
  },
  {
    sentence : `tag.blockName2{tag__elementName_modifierName<variables>[arrName,mixin/elementName]  someMixin} tag.blockName3`,
    rightAnswerForReturnBEMObjesctsFunction: [
      {title: `tag.blockName2`, inner: `tag__elementName_modifierName<variables>[arrName,mixin/elementName]  someMixin`},
      {title: `tag.blockName3`},
    ],
  },
  {
    sentence : `tag.blockName1 tag.blockName3 tag.blockName2 tag.blockName4`,
    rightAnswerForReturnBEMObjesctsFunction: [
      {title: `tag.blockName1`},
      {title: `tag.blockName3`,},
      {title: `tag.blockName2`,},
      {title: `tag.blockName4`},
    ],
  },
  {
    sentence : `blockName1{tag__elementName} blockName2 tag.blockName3{__element<variables>} blockName4`,
    rightAnswerForReturnBEMObjesctsFunction: [
      {title: `blockName1`, inner: `tag__elementName`},
      {title: `blockName2`},
      {title: `tag.blockName3`, inner: `__element<variables>`},
      {title: `blockName4`},
    ],
  },
  {
    sentence : `tag.blockName<var1,var2>[arrName,arrItemName,mixement]{tag__elementName_modifierName<var1,var2,va3>[arrName,arrItemName,mixin/elementName]  someMixin} blockName2`,
    rightAnswerForReturnBEMObjesctsFunction: [
      {title: `tag.blockName<var1,var2>[arrName,arrItemName,mixement]`, inner: `tag__elementName_modifierName<var1,var2,va3>[arrName,arrItemName,mixin/elementName]  someMixin`},
      {title: `blockName2`},
    ],
  },
  {
    sentence : `tag.blockName[arrName,arrItemName,mixement]{tag__elementName_modifierName<var1,var2,va3>[arrName,arrItemName,mixin/elementName]  someMixin} blockName2`,
    rightAnswerForReturnBEMObjesctsFunction: [
      {title: `tag.blockName[arrName,arrItemName,mixement]`, inner: `tag__elementName_modifierName<var1,var2,va3>[arrName,arrItemName,mixin/elementName]  someMixin`},
      {title: `blockName2`},
    ],
  },
  {
    sentence : `tag.blockName{tag__elementName_modifierName<var1,var2,va3>[arrName,arrItemName,mixin/elementName]  someMixin} blockName2`,
    rightAnswerForReturnBEMObjesctsFunction: [
      {title: `tag.blockName`, inner: `tag__elementName_modifierName<var1,var2,va3>[arrName,arrItemName,mixin/elementName]  someMixin`},
      {title: `blockName2`},
    ],
  },
  {
    sentence : `blockName<var1,var2>[arrName,arrItemName,mixement]{tag__elementName_modifierName<var1,var2,va3>[arrName,arrItemName,mixin/elementName]  someMixin} blockName2`,
    rightAnswerForReturnBEMObjesctsFunction: [
      {title: `blockName<var1,var2>[arrName,arrItemName,mixement]`, inner: `tag__elementName_modifierName<var1,var2,va3>[arrName,arrItemName,mixin/elementName]  someMixin`},
      {title: `blockName2`},
    ],
  },
  {
    sentence : `blockName[arrName,arrItemName,mixement]{tag__elementName_modifierName<var1,var2,va3>[arrName,arrItemName,mixin/elementName]  someMixin} blockName2`,
    rightAnswerForReturnBEMObjesctsFunction: [
      {title: `blockName[arrName,arrItemName,mixement]`, inner: `tag__elementName_modifierName<var1,var2,va3>[arrName,arrItemName,mixin/elementName]  someMixin`},
      {title: `blockName2`},
    ],
  },
  {
    sentence : `blockName{tag__elementName_modifierName<var1,var2,va3>[arrName,arrItemName,mixin/elementName]  someMixin} blockName2`,
    rightAnswerForReturnBEMObjesctsFunction: [
      {title: `blockName`, inner: `tag__elementName_modifierName<var1,var2,va3>[arrName,arrItemName,mixin/elementName]  someMixin`},
      {title: `blockName2`},
    ],
  },
]

let createTestStrings = [
  {
    testString: `blockName1{__elementName}`,/*Должна создаться папка blockName1 и в ней должен быть файлы с этим именем и содержимым*/
    rightAnswerForCreateBlockOnly: function(){
      if(getFolders(c.PATH_TO_BLOCKS_DIR).includes(`blockName1`) ){console.log(`Папка созданна`);}//проверяем созданна ли папка
      else{console.log(`\n\n>>>Абшибка папка не созданна\n\n`);}

      files = getFiles(`${c.PATH_TO_BLOCKS_DIR}/blockName1`);
      if(files.includes(`blockName1.pug`)){/*Проверяем созданн ли pug файл*/
        console.log(`pug файл создан`);
        let data = readFromFile(`${c.PATH_TO_BLOCKS_DIR}/blockName1/blockName1.pug`)
        let comparedString = `mixin blockName1(modifier)\n  if modifier == undefined\n    - modifier = {};\n  .blockName1&attributes(attributes)\n`;//Этот контент должен быть в pug файле
        if(data == comparedString){console.log(`Файл blockName1.pug созданн корректно`);}//Если содержимое корректное то всё хорошо
        else{console.log(`\n\n>>>Абшибка pug файл наполненн некорректно\n\n`);}
      }
      if(files.includes(`blockName1.scss`)){/*Проверяем созданн ли scss файл*/
        console.log(`scss файл создан`);
        let data = readFromFile(`${c.PATH_TO_BLOCKS_DIR}/blockName1/blockName1.scss`)
        let comparedString = `.blockName1{\n  background-color: $blockName1--BGColor;\n  color: $blockName1--Color;\n}`
        if(data == comparedString){console.log(`Файл blockName1.scss созданн корректно`);}//Если содержимое корректное то всё хорошо
        else{console.log(`\n\n>>>Абшибка scss файл наполненн некорректно\n\n`);}
      }
    },
  }
]

let BEMStrings = [
  {
    str:`tag__elementName_modificatorName<variables>`,
    isItBlockTitle:false,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      tag: `tag`, 
      elementName: `__elementName`,
      modificatorName: `_modificatorName`, 
      variables: [`variables`],
    }
  },
  {
    str:`_modificatorName`,
    isItBlockTitle:false,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      modificatorName: `_modificatorName`, 
    }
  },
  {
    str:`tag__elementName_modificatorName`,
    isItBlockTitle:false,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      tag: `tag`, 
      elementName: `__elementName`,
      modificatorName: `_modificatorName`, 
    }
  },
  {
    str:`tag__elementName<variables>`,
    isItBlockTitle:false,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      tag: `tag`, 
      elementName: `__elementName`,
      variables: [`variables`],
    }
  },
  {
    str:`__elementName_modificatorName<variables>`,
    isItBlockTitle:false,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      elementName: `__elementName`,
      modificatorName: `_modificatorName`, 
      variables: [`variables`],
    }
  },
  {
    str:`__elementName<variables>`,
    isItBlockTitle:false,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      elementName: `__elementName`,
      variables: [`variables`],
    }
  },
  {
    str:`__elementName`,
    isItBlockTitle:false,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      elementName: `__elementName`,
    }
  },
  {
    str:`tag.blockName<variables>[arrName,arrItemName,elementName]`,
    isItBlockTitle:true,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      tag: `tag`, 
      blockName: `blockName`, 
      variables: [`variables`],
      arrObj:{
        arrName:`arrName`,
        arrItemName:`arrItemName`,
        mixinOrElementName: `elementName`
      }
    }
  },
  {
    str:`tag.blockName[arrName,arrItemName,elementName]`,
    isItBlockTitle:true,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      tag: `tag`, 
      blockName: `blockName`, 
      arrObj:{
        arrName: `arrName`,
        arrItemName: `arrItemName`,
        mixinOrElementName: `elementName`
      }
    }
  },
  {
    str:`tag.blockName<variables>`,
    isItBlockTitle:true,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      tag: `tag`, 
      blockName: `blockName`, 
      variables: [`variables`],
    }
  },
  {
    str:`tag.blockName`,
    isItBlockTitle:true,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      tag: `tag`, 
      blockName: `blockName`, 
    }
  },
  {
    str:`blockName<variables>[arrName,arrItemName,elementName]`,
    isItBlockTitle:true,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      blockName: `blockName`,
      variables: [`variables`],
      arrObj:{
        arrName:`arrName`,
        arrItemName: `arrItemName`,
        mixinOrElementName: `elementName`,
      }
    }
  },
  {
    str:`blockName[arrName,arrItemName,elementName]`,
    isItBlockTitle:true,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      blockName: `blockName`, 
      arrObj:{
        arrName: `arrName`,
        arrItemName: `arrItemName`,
        mixinOrElementName: `elementName`
      }
    }
  },
  {
    str:`blockName<variables>`,
    isItBlockTitle:true,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      blockName: `blockName`, 
      variables: [`variables`],
    }
  },
  {
    str:`blockName`,
    isItBlockTitle:true,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      blockName: `blockName`, 
    }
  },
  {
    str:`tag__elementName_modificatorName<var1,var2,var3>`,
    isItBlockTitle:false,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      tag: `tag`, 
      elementName: `__elementName`,
      modificatorName: `_modificatorName`, 
      variables: [`var1`,`var2`,`var3`],
    }
  },
  {
    str:`tag__elementName_modificatorName<var1,var2,var3>[arrName,arrItemName,elementName]`,
    isItBlockTitle:false,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      tag: `tag`, 
      elementName: `__elementName`,
      modificatorName: `_modificatorName`, 
      variables: [`var1`,`var2`,`var3`],
      arrObj:{
        arrName: `arrName`,
        arrItemName: `arrItemName`,
        mixinOrElementName:`elementName`
      }
    }
  },
  {
    str:`__elementName_modificatorName<var1,var2,var3>[arrName,arrItemName,elementName]`,
    isItBlockTitle:false,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      elementName: `__elementName`,
      modificatorName: `_modificatorName`, 
      variables: [`var1`,`var2`,`var3`],
      arrObj:{
        arrName: `arrName`,
        arrItemName: `arrItemName`,
        mixinOrElementName: `elementName`
      }
    }
  },
  {
    str:`__elementName<var1,var2,var3>[arrName,arrItemName,elementName]`,
    isItBlockTitle:false,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      elementName: `__elementName`,
      variables: [`var1`,`var2`,`var3`],
      arrObj:{
        arrName: `arrName`,
        arrItemName: `arrItemName`,
        mixinOrElementName: `elementName`}
    }
  },
  {
    str:`tag__elementName<var1,var2,var3>[arrName,arrItemName,elementName]`,
    isItBlockTitle:false,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      tag: `tag`, 
      elementName: `__elementName`,
      variables: [`var1`,`var2`,`var3`],
      arrObj:{
        arrName: `arrName`,
        arrItemName: `arrItemName`,
        mixinOrElementName: `elementName`
      }
    }
  },
  {
    str:`tag__elementName_modificatorName[arrName,arrItemName,elementName]`,
    isItBlockTitle:false,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      tag: `tag`, 
      elementName: `__elementName`,
      modificatorName: `_modificatorName`,
      arrObj:{
        arrName:`arrName`,
        arrItemName: `arrItemName`,
        mixinOrElementName: `elementName`
      }
    }
  },
  {
    str:`tag__elementName[arrName,arrItemName,elementName]`,
    isItBlockTitle:false,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      tag: `tag`, 
      elementName: `__elementName`,
      arrObj:{
        arrName: `arrName`,
        arrItemName: `arrItemName`,
        mixinOrElementName: `elementName`
      }
    }
  },
  {
    str:`__elementName[arrName,arrItemName,elementName]`,
    isItBlockTitle:false,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      elementName: `__elementName`,
      arrObj:{
        arrName: `arrName`,
        arrItemName: `arrItemName`,
        mixinOrElementName: `elementName`
      }
    }
  },
  {
    str:`somemixin`,
    isItBlockTitle:false,
    rightAnswerForDivisionOnTagsNamesTypesVariablesFunction: {
      mixinName: `somemixin`,
    }
  },
];

let imports = [
  {pug: "это pug фаел", scss: "это scss файл"},
  {js: "это js фаел", bem: "это bem файл"},
  {pug: "это нормальный pug файл", scss: "это нормальный scss файл", js: "это нормальный js файл"},
]

//массив objectsForTestingGetFilesContent - составлял так, чтобы при передаче его элементов в функции getPugContent, getScssContent, getJSContent
//Получился текст как AnkoTest.about-us, AnkoTest.differentiators__lists, AnkoTest.about-us__advantage-container
//metallamp_stage2.text-field__description, 
let objectsForTestingGetFilesContentFunctions = [
  {
    ruleObj:{
      blockName: `about-us`,
      tag: 'aside',
    },
    rightAnswer:{
      fileName: `about-us`,
      pugContent: readFromFile(`${__dirname}/rightAnswersForReturnContentFunctions/about-us.pug`),
      scssContent: readFromFile(`${__dirname}/rightAnswersForReturnContentFunctions/about-us.scss`),
      jsContent: readFromFile(`${__dirname}/rightAnswersForReturnContentFunctions/about-us.js`),
    },
    blockName:undefined
  },
  // {
  //   ruleObj:{
  //     elementName: `__lists`,
  //     arrObj:{
  //       arrName: `listsArr`,
  //       arrItemName: `list`,
  //       mixement: `listMixement`
  //     }
  //   },
  //   rightAnswer:{
  //     fileName: `differentiators__lists`,
  //     pugContent: readFromFile(`${__dirname}/rightAnswersForReturnContentFunctions/${this.fileName}.pug`),
  //     scssContent: readFromFile(`${__dirname}/rightAnswersForReturnContentFunctions/${this.fileName}.scss`),
  //     jsContent: readFromFile(`${__dirname}/rightAnswersForReturnContentFunctions/${this.fileName}.js`),
  //   },
  //   blockName:`differentiators`
  // },
  // {
  //   ruleObj:{
  //     elementName: `__advantage-container`,
  //     arrObj:{
  //       arrName: `advantagesArr`,
  //       arrItemName: `advantage`,
  //       mixement: `advantage`
  //     }
  //   },
  //   rightAnswer:{
  //     fileName: `about-us__advantage-container`,
  //     pugContent: readFromFile(`${__dirname}/rightAnswersForReturnContentFunctions/${this.fileName}.pug`),
  //     scssContent: readFromFile(`${__dirname}/rightAnswersForReturnContentFunctions/${this.fileName}.scss`),
  //     jsContent: readFromFile(`${__dirname}/rightAnswersForReturnContentFunctions/${this.fileName}.js`),
  //   },
  //   blockName:`about-us`
  // },
  // {
  //   ruleObj:{
  //     elementName: `__description`,
  //     variables:["description","title"],
  //     tag: 'p',
  //   },
  //   rightAnswer:{
  //     fileName: `text-field__description`,
  //     pugContent: readFromFile(`${__dirname}/rightAnswersForReturnContentFunctions/${this.fileName}.pug`),
  //     scssContent: readFromFile(`${__dirname}/rightAnswersForReturnContentFunctions/${this.fileName}.scss`),
  //     jsContent: readFromFile(`${__dirname}/rightAnswersForReturnContentFunctions/${this.fileName}.js`),
  //   },
  //   blockName:`text-field`
  // },
  // {
  //   ruleObj:{
  //     elementName: `__description`,
  //     modificatorName: "_modification",
  //     variables:["description","title"],
  //     tag: 'p',
  //   },
  //   rightAnswer:{
  //     fileName: `text-field__description`,
  //     pugContent: readFromFile(`${__dirname}/rightAnswersForReturnContentFunctions/${this.fileName}.pug`),
  //     scssContent: readFromFile(`${__dirname}/rightAnswersForReturnContentFunctions/${this.fileName}.scss`),
  //     jsContent: readFromFile(`${__dirname}/rightAnswersForReturnContentFunctions/${this.fileName}.js`),
  //   },
  //   blockName:`text-field`,
  //   type: `modificator`,
  // },
  // {
  //   ruleObj:{
  //     modificatorName: `_modurficontions`,
  //     variables:["description","title"],
  //     tag: 'p',
  //   },
  //   rightAnswer:{
  //     fileName: `text-field_modurficontions`,
  //     pugContent: readFromFile(`${__dirname}/rightAnswersForReturnContentFunctions/${this.fileName}.pug`),
  //     scssContent: readFromFile(`${__dirname}/rightAnswersForReturnContentFunctions/${this.fileName}.scss`),
  //     jsContent: readFromFile(`${__dirname}/rightAnswersForReturnContentFunctions/${this.fileName}.js`),
  //   },
  //   blockName:`text-field`,
  //   type: `modificator`,
  // },
  // {
  //   ruleObj:{
  //     variables:["description","title"],
  //     tag: 'p',
  //     mixinName: "somiMixin",
  //   },
  //   rightAnswer:{
  //     fileName: ``,
  //     pugContent: readFromFile(`${__dirname}/rightAnswersForReturnContentFunctions/${this.fileName}.pug`),
  //     scssContent: readFromFile(`${__dirname}/rightAnswersForReturnContentFunctions/${this.fileName}.scss`),
  //     jsContent: readFromFile(`${__dirname}/rightAnswersForReturnContentFunctions/${this.fileName}.js`),
  //   },
  //   blockName:`text-field`,
  // },
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
  bembdReleased, /*заполненная база данных*/
  syntaxRequests,
  BEMStrings,
  imports,
  objectsForTestingGetFilesContentFunctions,
}