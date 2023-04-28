let startButton = document.querySelector("#start-btn")
let resultsButton = document.querySelector("#submit-btn")
let timerEl = document.querySelector("#timer")
let viewScoresButton = document.querySelector("#view-scores")
let secondsLeft = 60
let timerId
let questionIndex = 0
let answersContainerEl = document.body.querySelector("#answer-buttons");
answersContainerEl.addEventListener("click", function(event){
  var currentChoice = event.target.textContent

  console.log(currentChoice)
  if(currentChoice === questions[questionIndex].answer) {
   console.log("Elizabeth nailed this");
   
  } 
  

})
//..notations the objects to the left of the dot. The objects property to right of the dot.
//I need an event listener for method for when the buttons that are clicked. 
startButton.addEventListener("click", startQuiz)
//I tried to insert an event listener for submit button but got an error.
resultsButton.addEventListener("click", submitButton)
//I need varible for my questions ex: var questions =
//I need a score box
//I need a timer on the left of the screen and I need the timer to countdown from 60 seconds.
let questions= [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts", 
    correct: true,
    wrong: false,
  },
  {
    question: "The condition in an if/else statement is enclosed with______?",
    choices: ["qoutes", "curly brackets", "parenthesis", "square brackets"],
    answer: "parenthesis",
    correct: true,
    wrong:false,
  },
  {
    question: "Arrays in JavaScript can be used to store_____?",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above",
    correct: true,
    wrong: false,
  },
  {
    question: "String values must be enclosed within ______ when being assigned to variables?",
    choices: ["commas", "curly brackets", "parenthesis", "qoutes"],
    answer: "qoutes",
    correct: true,
    wrong: false,
    
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/Bash", "for loops", "console.log"],
    answer: "console.log",
    correct: true,
    wrong: false,
  }

]
//I need the timer to stop after it is done. 
//I need the timer to reduce time when the user gets the answer wrong.
//I need a function to start the quiz.
//I need to hide the start quiz button and disappear. 
function startQuiz() {
  console.log('Started Quiz');
  timerId=setInterval(clockTick, 1000)
  timerEl.textContent=secondsLeft
  nextQuestion ()
  
}
//I need something to keep score.
let score = 0
function clockTick () {
  secondsLeft--
  timerEl.textContent=secondsLeft

  if (secondsLeft <=0 ) {
    clearInterval(timerEl);
    
    

  }
}
function submitButton() {
  
  submitButton();
//I need to find a way to insert a box for initials and submit and I need the submit button hidden and reaapear at the end.
}
//I need a function for the question.
function nextQuestion () {
let currentQuestion=questions[questionIndex]
let titleEl=document.getElementById('question')
titleEl.textContent=currentQuestion.question

for (let i = 0; i < questions.length; i++) {
  const element = questions[i].choices[i];
  console.log(element)
  
}
}
for (let i = 0; i < questions[questionIndex].choices.length; i++) {
  const element = document.createElement("button");
element.textContent = questions[questionIndex].choices[i];
document.getElementById("answer-buttons").append(element);
}
if (element.textContent = questions[questionIndex].choices) {
  score += secondsLeft;
} else {
  score -= 10;
  secondsLeft = secondsLeft - 15;
}

//I need a timer at the top of the screen maybe to the left.
//I need the questions to continue to pop up after the question has been answered. May be for loop.





//I need an event listener for method for when the buttons that are clicked. 

//I need an array for the questions. 

//I need a All done! page with the final score and a enter initial box with a submit button. 
