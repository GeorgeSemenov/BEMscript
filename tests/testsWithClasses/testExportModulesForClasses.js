const cl     = require(__dirname+'/classes.js');//Подключаются классы, которые находятся прямо в этой же папке

let baison = new cl.Cat("Baison", 35);
let mishka = new cl.Dog('Mishail');

baison.describe();
mishka.bark();
mishka.showEntities();