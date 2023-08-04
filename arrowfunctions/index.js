// function sayHello(userName) {
//     console.log('Hello'+ userName);
// }
const sayHello = (userName) => {
  console.log("Hello" + userName);
};

const getPizzaCost = (size, nToppings) => {
  let cost = 10;

  if (size === "medium") {
    cost += 4;
  } else if (size === "large") {
    cost += 8;
  }

  cost += nToppings;
  console.log("The Cost of this pizza is: " + cost);
};
getPizzaCost( 'medium', 3 );
getPizzaCost( 'large', 4 );

const firstNamesArray = ["Violet", "Charlie", "Veruca", "Mike", "Augustus"];
const lastNamesArray = ["Beauregarde", "Bucket", "Salt", "Teavee", "Gloop"];

const chal1 = ( arr, arr2 ) => {

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + " " + arr2[i]);
  }
};
chal1( firstNamesArray, lastNamesArray );

