const fs = require('fs');
const readline = require('readline-sync');

/* ---- Самодельные функшины ---- */
const bemFolder     = ('./BEMscripts/');
const createFolder  = require(bemFolder + 'createFolder.js');
const writeToFile   = require(bemFolder + 'writeToFile.js');
const readFromFile  = require(bemFolder + 'readFromFile.js');
const getFolders    = require(bemFolder + 'getFolders.js');//возвращает имена папок находящихся в директории, откуда вызывается эта функция, если функцию вызывает BEМ.js то вернётся массив папок находящихся в папке с этим файлом
const isElement     = require(bemFolder + 'isElement.js');
const isModifier    = require(bemFolder + 'isModifier.js');

/* ---- Переменные и классы---- */

const v             = require(bemFolder + 'variables.js');
const cl            = require(bemFolder + 'classes.js');

let bembd = new cl.BEMBD();

bembd.init()
// bembd.showEntities();
// while (BEM.currentBEM!=v.STOP_WORD){//Основной цикл
//   BEM.ask();
// }
