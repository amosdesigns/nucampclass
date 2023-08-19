window.addEventListener("load", () => {
  const gameOver = () => {
    document.body.removeEventListener("click", gameOver);
    theLeftSide.lastChild.removeEventListener("click", nextLevel);
    alert("Game Over");
    //end game
  };

  let numberOfFaces = 5;
  const theLeftSide = document.getElementById("leftSide");
  const theRightSide = document.getElementById("rightSide");
  const randomPosition = () => Math.floor((Math.random() * 400) + 1);

  function generateFaces() {
    //console.log("numberOfFaces:", numberOfFaces);
    for (let i = 0; i < numberOfFaces; i++) {
      const face = document.createElement("img");
      face.src = "./imgs/smile.png";
      face.alt = "Happy Face";
      face.style.top = `${randomPosition()}px`;
      face.style.left = `${randomPosition()}px`;
      theLeftSide.appendChild(face);
    }

    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);
    theLeftSide.lastChild.addEventListener("click", nextLevel);
    document.body.addEventListener("click", gameOver);
  }

  function nextLevel(event) {
    event.stopPropagation();
    while (theLeftSide.firstChild) {
      theLeftSide.removeChild(theLeftSide.firstChild);
    }
    while (theRightSide.firstChild) {
      theRightSide.removeChild(theRightSide.firstChild);
    }
    numberOfFaces += 5;
    generateFaces();
  }
  generateFaces();
  //end
});
