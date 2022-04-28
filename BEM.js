const fs = require('fs');
const readline = require('readline-sync');

/* ---- Самодельные функшины ---- */
const bemFolder     = ('./BEMscripts');
const createFolder  = require(`${bemFolder}/createFolder.js`);//Просто создаёт папку с переданным именем
const readFromFile  = require(`${bemFolder}/readFromFile.js`);//Возвращает данные содеражщиеся в указанном файле,  Если файла нет - возвращает -1
const getFolders    = require(`${bemFolder}/getFolders.js`);//возвращает имена папок находящихся в директории, откуда вызывается эта функция, если функцию вызывает BEМ.js то вернётся массив папок находящихся в папке с этим файлом
const isElement     = require(`${bemFolder}/isElement.js`);//Принимает имя сущности, возвращает true, если это элемент.
const isModifier    = require(`${bemFolder}/isModifier.js`);//Принимает имя сущности, возвращает true, если это модификатор.
const ask           = require(`${bemFolder}/ask.js`);//Задаёт вопрос, возвращает ответ.

/* ---- Переменные и классы---- */

const co            = require(`${bemFolder}/constants.js`);//Объект в котором хранятся все константы
const cl            = require(`${bemFolder}/classes.js`);//Объект с классами 

let bembd = new cl.BEMBD();

bembd.init()
bembd.showEntities();
while (bembd.currentBEM!=co.STOP_WORD){//Основной цикл
  bem.handleAnswer(ask());
}
