const v           = require(`./variables.js`);
const _show       = require(`./../_show.js`);

let bembd         = v.bembdReleased;
bembd.show       = _show;

// console.log(JSON.stringify(bembd));

console.log(`bembd.show() ---------------------`);
bembd.show();

console.log(`bembd.show(all) ---------------------`);
bembd.show('all');

// const readline = require('readline-sync');
// let value = readline.question(`Enter value: `);//пример запроса ввода пользователем

console.log(`bembd.show(2) ---------------------`);
bembd.show('2');
console.log(`bembd.show(1) ---------------------`);
bembd.show(1);