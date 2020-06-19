// Variables referencing all html elements
let start = document.getElementById("start");
let quiz = document.getElementById("quiz");
let question = document.getElementById("question");
let choices = document.getElementById("choices");
let A = document.getElementById("A");
let B = document.getElementById("B");
let C = document.getElementById("C");
let D = document.getElementById("D");
let timer = document.getElementById("timer");
let totalTime = document.getElementById("totalTime");
let currentTime = document.getElementById("currentTime");
let counter = document.getElementById("counter");
let scoreArea = document.getElementById("scoreArea");
let validity = document.getElementById("validity");
let startButton = document.getElementbyId("startButton");

startButton.addEventListener("click", startQuiz)

 

// There must be a start page 
// There must be start button that prompts the begining of the game 
// THEN a timer starts and I am presented with a question
// as soon as game starts,
// time commeces count down
// first question is presented
// first question must have a question field
// first question must have an answer field
// WHEN I answer a question
// THEN I am presented with another question
// after an answer is submited, 
// first question is replaced by the next question in line
// first answer is replaced by the next answer in line 
// second question must have an answer field 
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// when answer to any question is false, timer value must be adjusted accordingly
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// two ways for the game to end.
// Timer reaches 0 or player answers all the questions 
// WHEN the game is over
// THEN I can save my initials and score
// end game results in the submission of initial and the display of score gained. 
