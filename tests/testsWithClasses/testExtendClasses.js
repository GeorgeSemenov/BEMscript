class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  walk(){
    console.log(`animal ${this.name} is walking around`);
  }
  destroyAllHumanity(){
    console.log(`I'l destroy all humanity, hahahahaha!!!!`);
  }
}

// Наследуем от Animal указывая "extends Animal"
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} прячется!`);
  }
}

class Cat extends Animal {
  constructor(name, age){
    super(name);
    this.age = age;
    this.destroyAllHumanity = ()=>{console.log(`loh`)};
  }
  walk(){
    console.log(`Cat ${this.name} is tigidiging and his age ${this.age}`);
  }
};
class Dog extends Animal {
  destroyAllHumanity () {}
}

let rabbit = new Rabbit("Белый кролик");
let baison = new Cat("Baison", 33);
let mishka = new Dog('Mishail');

rabbit.walk();
baison.walk();
mishka.walk();

rabbit.destroyAllHumanity();
baison.destroyAllHumanity();
mishka.destroyAllHumanity();