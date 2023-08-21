const performCoinFlip = () => {
  const coinFlip = new Promise((resolve, reject) => {
    const outcomes = ["heads", "tails", "edge"];
    const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];

    if (outcome === "heads" || outcome === "tails") {
      // TODO: Resolve the Promise with the outcome (either "heads" or "tails")
      resolve(outcome);
    } else {
      // TODO: Reject the Promise with the message "Landed on the edge! Try again."
      reject("Landed on the edge! Try again.");
    }
  });

  // Do not modify this part, it will display the result of your Promise
  coinFlip
    .then((result) => {
      document.getElementById(
        "result"
      ).textContent = `The coin landed on ${result}!`;
    })
    .catch((error) => {
      document.getElementById("result").textContent = error;
    });
};

document
  .getElementById("flipCoinButton")
  .addEventListener("click", performCoinFlip);
