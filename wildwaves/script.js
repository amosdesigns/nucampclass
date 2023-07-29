const WAVE_POOL_MIN_HEIGHT = 42; //IN INCHES
const WATERSLIDE_MIN_HEIGHT = 48; //IN INCHES
const LAZY_RIVER_MIN_HEIGHT = 36; //IN POUNDS

//link the click event from the button to this function
const buyTicket = () => {
  // Test with various values, monitor the developer console
 let attractionType = prompt(
   "What attraction would you like to ride? (wave pool, waterslide, lazy river)"
 );
  let userHeight = prompt( "What is your height in inches?" );
 
  console.log( `User's selected attraction is ${attractionType}.` );
  console.log( `User's height is ${userHeight}.` );
  checkHeight( attractionType, userHeight );
};

// This function should be called from the buyTicket function
const checkHeight = (attraction, height) => {
  // calling the function from buyTicket function()
  // if (
  //   ( attraction !="wave pool" )
  //   || ( attraction != "waterslide" )
  //   || ( attraction != "lazy river" ) ) {
  //   console.log( `Sorry, we don't offer this ${attraction} here` );
  //   return null;
  // }
    if (height >= 43) {
      console.log("You are tall enough to ride all attractions!");
    } else {
      // Test the returned value
      switch (attraction) {
        case "wave pool":
          if (userHeight >= WAVE_POOL_MIN_HEIGH) {
            console.log("Enjoy the wave pool! Wave your way in.");
          }
          break;
        case "waterslide":
          if (userHeight >= WATERSLIDE_MIN_HEIGHT) {
            console.log(
              "Enjoy the ride down the waterslide! slide into Happiness."
            );
          }
          break;
        case "lazy river":
          if (userHeight >= LAZY_RIVER_MIN_HEIGHT) {
            console.log(
              "Enjoy the ride down the lazy river! it can be very lazy and wet."
            );
          }
          break;
        default:
          console.log("Sorry you are not tall enough to ride.");
          break;
      }
    }
  
};

//bonus: allow users who are 43 inches or taller and accompanied by an adult to access all attractions
