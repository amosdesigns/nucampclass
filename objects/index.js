const dragon1 = {
  color: 'red',
  maxHP: 1000,
};

dragon1.roar = function () { console.log( `The ${this.color} dragon roars ferociously.` ) };
dragon1.roar();
// console.log( dragon1.color ); // red
const dragon2 = {
  color: 'blue',
  maxHP: 1000,
  roar() { console.log(`The ${this.color} dragon lets out a tremendous roar!`); }
};
dragon2.roar();
 
const dragon3 = {
  color: "black",
  maxHP: 1000,
  roar: () => {
    console.log(`The ${this.color} dragon roars ferociously.`);
  },
};
dragon3.roar();
// //dragon1.element = "fire";
// dragon1.color = "crimson";
// dragon1.attack = function () { console.error( 'the dragon breathes a stream of white-hot flames at you!' ) };
// dragon1.attack();
// console.table( dragon1 );
// // ========================
// console.table( dragon2 );
// dragon2.element = "water";
// dragon2.swim = function ( dir ) { console.log( `The dragon swims away to the ${dir}.` ); }

// dragon2.swim( 'north' );
