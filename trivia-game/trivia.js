const questionDiv = document.getElementById("question");
const answerDiv = document.getElementById("answer");
const feedbackDiv = document.getElementById("feedback");
const qBtn = document.getElementById("questionBtn");
const aBtn = document.getElementById("answerBtn");
let currentQuestion = null;
let maxQuestions = Math.floor(Math.random() * questions.length);
function getTriviaQuestion() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = questions[maxQuestions];
      if (maxQuestions > questions.length) {
        reject("An error occurred while fetching the trivia question.");
      } else {
        resolve(data);
      }
    }, 1000);
    //question
  });
}
const displayQuestion = (triviaQuestion) => {
  questionDiv.textContent = triviaQuestion.question;
  answerDiv.innerHTML = "";
  feedbackDiv.textContent = "";
};
qBtn.addEventListener("click", () => {
  console.log("clicked");
  getTriviaQuestion()
    .then( ( question ) => {
      currentQuestion = question;
      displayQuestion(question);
    })
    .catch((err) => {
      console.log(err);
    });
} );
aBtn.addEventListener( "click", () => { 
  let feedbackMessage;
  const userAnswer = answerDiv.value.trim().toLowerCase();
  console.log(userAnswer, currentQuestion.answer);

  if ( currentQuestion && userAnswer === currentQuestion.answer.toLowerCase()) { 
    feedbackDiv.className = "text-success d-inline p-2 bg-white";
    feedbackMessage = `Great Job! Your answer is correct!`;
  } else { 
    feedbackDiv.className = "text-danger d-inline p-2 bg-white";
    feedbackMessage = `Sorry, your answer is incorrect.The Correct answer was ${currentQuestion.answer}`;
  } 
  feedback.textContent = feedbackMessage;
});
