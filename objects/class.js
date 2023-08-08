// 3 - shopping cart
console.clear();
const arrayRemove = (arr, value) => {
  return arr.filter(function (ele) {
    return ele != value;
  });
};
// 1 - white rabbit
const rabbit = {
  color: "white",
  checkWatch() {
    console.log(
      `A ${this.color} rabbit checks his watch and exclaims, I'm late!`
    );
  },
};
rabbit.checkWatch();

// 2 - spaceship
const spaceship = {
  //  your code here - uncomment the spaceship.launch() line below when done
  name: "Dark Lord",
  launch: function () {
    alert(`You have launched the spaceship ${this.name}!`);
  },
};
spaceship.launch();

// 3 - shopping cart
const cart = {
  // your code here - uncomment the two lines below this object when done
  contents: [],
  addItem(item) {
    cart.contents.push(item);
  },
  removeItem(item) {
    this.contents = arrayRemove(cart.contents, item);
  },
};
cart.addItem("laptop");
cart.addItem("apple");
cart.addItem("sandwhich");
cart.addItem("book");
console.log("The cart contains:", cart.contents);
cart.removeItem("laptop");
console.log("The cart contains:", cart.contents);
cart.removeItem("book");
console.log("The cart contains:", cart.contents);

// 4 - lever
const lever = {
  stamp: "ACME",
  pull() {
    console.log(`An anvil stamped ${this.stamp} drops on your head.`);
  },
};
// your code here - uncomment the line below when done
lever.pull();

// 5 - Your object here
const sushi = {
  name: "TriColor",
  eat(eater) {
    console.log(
      `${eater} loves ${this.name} sushi, because it is  so good to eat.`
    );
  },
};

sushi.eat("Jerry");
