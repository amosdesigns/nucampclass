function logSum(a = 0, b = 0) {
  console.log(a + b);
}

logSum(5, 3); // 8

class Cat {
  constructor(name, color = "gray", age = 1) {
    this.name = name;
    this.color = color;
    this.age = age;
  }
  meow() {
    console.log(`A ${this.color} Cat called ${this.name} says "Meow!"`);
  }
}
const cat1 = new Cat("Socks", "black", 2);
const cat2 = new Cat("Mittens", "brown");
const cat3 = new Cat("Biscuit", undefined, 3);
cat1.meow();
cat2.meow();
cat3.meow();
