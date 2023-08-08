class Monster {
  constructor(type, color) {
    this.type = type;
    this.color = color;
    this.isScary = true;
  }
  roar() {
    console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
  }
}

class Dragon extends Monster {
  constructor(type, color, element) {
    super(type, color);
    this.element = element;
  }
  fly() {
    console.log(
      `The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`
    );
  }
  breatheFire() { 
    console.log(`The ${this.color} ${this.element} ${this.type} breathes fire!`);
  }
}

class Werewolf extends Monster {
  constructor(type, color) {
    super(type, color);
  }
  howl() {
    console.log(`The ${this.type} howls loudly.`);
  }
}

class Zombie extends Monster {
  constructor(type, color) {
    super( type, color );
    this.hasTeeth = true;
    this.isScary = false;
  }
  runs() {
    console.log( `The ${this.type} move fast.` );
    console.log( `The ${this.type} is scary? ${this.isScary}` );
    console.log( `The ${this.type} has teeth? ${this.hasTeeth}` );
  }
}

const woodDragon = new Dragon("dragon", "brown", "wood");
woodDragon.roar();
woodDragon.fly();
woodDragon.breatheFire();

const werewolf1 = new Werewolf( "werewolf", "gray" );
werewolf1.howl();

const zombie1 = new Zombie( "zombie", "green" );
zombie1.runs();
