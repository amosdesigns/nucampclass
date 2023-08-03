const rollDice = () => {
  let goldCoins = 0;

  for (let i = 0; i < 10; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    alert(`You roll a ${roll}.`);
    switch (roll) {
      case 1:
        alert("Game over, no more rolls!");
        break;
      case 2:
      case 3:
      case 4:
        continue;
      case 5:
       goldCoins += 5;
        alert("Congratulations, you win 5 gold coins!");
        continue;
      case 6:
        goldCoins += 6;
        alert("Congratulations, you win 6 gold coins!");
        continue;
    }
  }

  if (goldCoins > 0) {
    alert(`You have won a total of ${goldCoins} gold coins!`);
  } else {
    alert("You have won no gold coins.");
  }
};
