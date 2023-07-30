const WAVE_POOL_MIN_HEIGHT = 42; //IN INCHES
const WATERSLIDE_MIN_HEIGHT = 48; //IN INCHES
const LAZY_RIVER_MIN_HEIGHT = 36; //IN POUNDS

//link the click event from the button to this function
const buyTicket = () => {
  // Test with various values, monitor the developer console
  const attractionType = prompt(
    "What attraction would you like to ride? (wave pool, waterslide, lazy river)"
  );
  const userHeight = parseInt(prompt("What is your height in inches?"));
  const withAdult = prompt("Are you with an adult? (1=Yes, 0=No)");
  //  console.log( `User's selected attraction is ${attractionType}.` );
  //  console.log( `User's height is ${userHeight}.` );
  checkHeight(attractionType.toLowerCase(), userHeight, withAdult);
};

// This function should be called from the buyTicket function
const checkHeight = (attraction, height, withAdult) => {
  if (height >= 43 && withAdult == 1) {
    alert("You are tall enough to ride all attractions!");
  } else {
    // Test the returned value
    switch (attraction) {
      case "wave pool":
        if (height >= WAVE_POOL_MIN_HEIGHT) {
          alert("Enjoy the wave pool! Wave your way in.");
        }
        break;
      case "waterslide":
        if (height >= WATERSLIDE_MIN_HEIGHT) {
          alert("Enjoy the ride down the waterslide! slide into Happiness.");
        }
        break;
      case "lazy river":
        if (height >= LAZY_RIVER_MIN_HEIGHT) {
          alert(
            "Enjoy the ride down the lazy river! it can be very lazy and wet."
          );
        }
        break;
      default:
        alert("Sorry you are not tall enough to ride.");
        break;
    }
  }
};

//bonus: allow users who are 43 inches or taller and accompanied by an adult to access all attractions
