var startButton = document.querySelector("#start-btn")

startButton.addEventListener("click", startQuiz)
//I need varible for my questions ex: var questions =
//I need a score box
//I need a timer on the left of the screen and I need the timer to countdown from 60 seconds.
var count = 60
function showCount() {
  count --;
}
//I need the timer to reduce time when the user gets the answer wrong.
//I need a function to start the quiz.
//I need to hide the start quiz button and disappear. 
function startQuiz() {
  console.log('Started Quiz');
  

}
//I need a function for the question.
function nextQuestion () {

}
//I need a timer at the top of the screen maybe to the left.
//I need the questions to continue to pop up after the question has been answered. May be for loop.
for (let i = 0; i < questions.length; i++) {
    nextQuestion += questions[i] + "<br>";
  }
//My answer choices need a function.
function answerChoice() {

}
//I need an event listener for method for when the buttons that are clicked. 

//I need an array for the questions. 