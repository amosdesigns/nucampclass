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
  "pink",
].sort();

let TRIES = 0;
const colorList = () => COLORS_ARRAY.join(", ");
const randomColor =
  COLORS_ARRAY[Math.floor(Math.random() * COLORS_ARRAY.length)];
const changeScreenColor = (color) => {
  document.body.style.backgroundColor = color;
};
const weHaveAWinner = () => {
  changeScreenColor(randomColor);
  const elem = document.getElementById("winner");
  elem.innerHTML = `<h2>Congratulations!</h2><p>You have guessed the color!</p><p>It took you ${TRIES} guesses to finish the game!</p>`;
  elem.style.display = "block";
};

const checkGuess = (guess, target) => {
  if (target === guess) {
    weHaveAWinner();
    return true;
  } else {
    alert(`Sorry, your guess of ${guess} was not what I was thinking.\n\n Please try again.`);
  }
};

const runGame = () => {
  let correct = false;

  do {
    const guess = prompt(
      `I am thinking of one of these colors: \n\n ${colorList()}\n\n What color am I thinking of?`
    )
      .toLowerCase()
      .trim();

    if (
      guess === undefined ||
      guess === undefined ||
      !COLORS_ARRAY.includes(guess)
    ) {
      alert("Sorry, I don't recognize your color.\n\n Please try again.");
      break;
    } else if ( COLORS_ARRAY.includes( guess ) ) {
      TRIES++;
      correct = checkGuess(guess, randomColor);
    } 
  } while (!correct);
};
