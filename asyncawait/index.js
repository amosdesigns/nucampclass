// 
// function makeRequest(location) {
//   return new Promise((resolve, reject) => {
//     console.log(`Making Request to ${location}`);
//     if (location === "Google") {
//       resolve("Google says hi");
//     } else {
//       reject("We can only talk to Google");
//     }
//   });
// }


// async function doWork() {
//   try {
//     const resp = await makeRequest("Facebook");
//     console.log("Response Received");
//     const processedResponse = await processRequest(resp);
//     console.log(processedResponse);
//   } catch (err) {
//     console.log(err);
//   }
// }

// doWork();

// fetch("https://official-joke-api.appspot.com/random_joke")
//   .then((response) => response.json())
//   .then((joke) =>
//     console.log(`Here's a joke: ${joke.setup}\n\n${joke.punchline}`)
//   )
//   .catch( ( error ) => console.error( "There was an error!", error ) );
  
//   async function fetchJoke() {
//     try {
//       let response = await fetch(
//         "https://official-joke-api.appspot.com/random_joke"
//       );
//       let joke = await response.json();
//       console.log(`Here's a joke: ${joke.setup}\n${joke.punchline}`);
//     } catch (error) {
//       console.error("There was an error!", error);
//     }
//   }

// fetchJoke();
  fetch("https://api.example.com/data").catch((error) =>
    console.error("Network error:", error)
  );
