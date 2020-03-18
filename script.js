// Variables referencing all html elements
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choices = document.getElementById("choices");
var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var D = document.getElementById("D");
var timer = document.getElementById("timer");
var totalTime = document.getElementById("totalTime");
var currentTime = document.getElementById("currentTime");
var counter = document.getElementById("counter");
var scoreArea = document.getElementById("scoreArea");
var validity = document.getElementById("validity");
var startButton = document.getElementbyId("startButton");

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
