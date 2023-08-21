// const questionDiv = document.getElementById( "question" );
// const answerDiv = document.getElementById( "answers" );
// const feedbackDiv = document.getElementById( "feedback" );
// let currentQuestion = null;

//console.log(JSON.stringify(a));
fetch( "questions.json" )
  .then( ( res ) => res.json(); )
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// const randomNumber = ( max ) => {return Math.floor(Math.random() * max.length); };

// const getTriviaQuestion = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const question = question[randomNumber( q.length )];
//       if (index > questions.length) {
//   reject('An error occurred while fetching the trivia question.');
// } else {
//   resolve(question);
// }
//     }, 1000);
//   //question
// };
