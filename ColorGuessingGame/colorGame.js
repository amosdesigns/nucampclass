
const checkGuess = ( guess, target ) => {
  let correct = false;
  if (guess === target) {
    alert("You guessed the color!");
  } else {
    alert("Sorry, try again.");
  }
};
const COLORS_ARRAY = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "cyan",
  "magenta",
  "white",
  "black",
];

const runGame = () => {
  const randomColor =
    COLORS_ARRAY[Math.floor(Math.random() * COLORS_ARRAY.length)];
  console.log(randomColor);
  const colorList = COLORS_ARRAY.join( ", " );
  let correct = false;
  let numOfGuess = 0;
  let guess = "";

  do { 
      const guess = prompt(`I am thinking of one of these colors: \n\n ${colorList}\n\n What color am I thinking of?`);
    if ( guess === null ) { 
      alert("Sorry, I don't recognize your color.\n\n Please try again.");
      break;
    }

    if (checkGuess(guess, target)) { 

    } else if () { 

    } else { }
  } while (!correct);

  // alert("Sorry, I don't recognize your color.\n\n Please try again.");

  // alert(
  //   "Sorry,your guess is incorrect.\n\n Hint: your color is alphabetically higher than mine. \n\n Please try again."
  // );

  // alert(
  //   `Congratulations! You have guessed the color!\n\n It took you ${numOfGuess} guesses to finish the game!\n\n Hit OK to see the color in the background.`
  // );

  // if (randomColor === prompt) {
  //   alert("You guessed the color!");
  // } else {
  //   alert("Sorry, try again.");
  // }
};
