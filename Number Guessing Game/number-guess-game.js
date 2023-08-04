const checkGuessIsNumber = (guess) => {
  if (isNaN(guess)) {
    return false;
  }
  return true;
};

const runGame = () => {
  const secretNum = Math.floor(Math.random() * 100) + 1;
  let guess = Number(
    prompt(
      "I am thinking of a number in the range of 1 and 100. \n\n What is that number?"
    )
  );

  let attempts = 1;
  while (guess !== secretNum) {
    if (!checkGuessIsNumber(guess)) {
      alert("Please enter a number! Try again. 1 - 100 ");
      guess = Number(prompt("Numbers only, Please!"));
    } else {
      if (guess > secretNum) {
        guess = Number(prompt("Too high! Guess again"));
        attempts++;
      } else {
        guess = Number(prompt("Too low! Guess again"));
        attempts++;
      }
    }
  }

  alert(
    `Congrats!!!! You got it! ${secretNum} It took you ${attempts} attempts.`
  );
};
