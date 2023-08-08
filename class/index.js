class Monster {
  constructor(name, color, maxHP,type) {

    this.name = name;
    this.color = color;
    this.maxHP = maxHP;
    this.type = type;
    this.isScary = true;
  }
  roar() {
    console.log(`The  ${this.color}${this.type} lets out a tremendous roaring!`);
  }
}

class Dragon extends Monster {
  constructor(name, color, type, element, maxHP) {
    super(name, type, color, maxHP);
    this.element = element;
  }

  fire() {
    console.log(`${this.name} the dragon is breathing ${this.color} fire!`);
  }
  fly() {
    console.log(
      `The ${this.color} ${this.element} ${this.type} flaps it's wings and begins to fly.`
    );
  }
}

const dragon1 = new Dragon("Fluffy", "pink",'dragon','stone', 100);
const dragon2 = new Dragon("Toothless", "black", "dragon", "fruit", 200);
dragon1.fire();
dragon2.fly();

class Werewolf extends Monster {
  constructor(name, color, type, maxHP) {
    super(name, type, color, maxHP);
    this.isScary = false;
  }
  howl() {
    console.log(
      `The ${this.color} ${this.type} howls at the moon.`
    );
  }
  transform() {
    console.log(
      `The ${this.color} ${this.type} transforms into a human.`
    );
  }
}

const werewolf1 = new Werewolf( "Jacob", "brown", "werewolf", 100 );
const werewolf2 = new Werewolf( "Remus", "grey", "werewolf", 200 );
werewolf1.howl();
werewolf2.transform();
