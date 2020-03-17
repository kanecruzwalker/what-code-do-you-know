// Variables referencing all html elements
var start = document.getElementById("start");
var start = document.getElementById("quiz");
var start = document.getElementById("question");
var start = document.getElementById("choices");
var start = document.getElementById("A");
var start = document.getElementById("B");
var start = document.getElementById("C");
var start = document.getElementById("D");
var start = document.getElementById("timer");
var start = document.getElementById("totalTime");
var start = document.getElementById("currentTime");
var start = document.getElementById("counter");
var start = document.getElementById("scoreArea");

// Variables created to alleviate array values 
var lastQuestionIndex = question.length -1;
var runningQuestionIndex = 0;
renderQuestion()

runningQuestionIndex++ 
renderQuestion()

// Layout that is used to display all questions 
function renderQuestion(){
    var q = question[runningQuestionIndex];
    question.innerHTML = "<h2>" + q.question + "</h2>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}



// Array to store all questions, possible answers, and correct answer
var questions = [ 
    {
    question : "Question 1 goes here?",
    choiceA : "Choice 1 goes here?",
    choiceB : "Choice 2 goes here?",
    choiceC : "Choice 3 goes here?",
    choiceD : "Choice 4 goes here?",
    correct : "Correct Answer Herer"    
    },
    {
    question : "Question 2 goes here?",
    choiceA : "Choice 1 goes here?",
    choiceB : "Choice 2 goes here?",
    choiceC : "Choice 3 goes here?",
    choiceD : "Choice 4 goes here?",
    correct : "Correct Answer Herer"   
    },
    {
    question : "Question 3 goes here?",
    choiceA : "Choice 1 goes here?",
    choiceB : "Choice 2 goes here?",
    choiceC : "Choice 3 goes here?",
    choiceD : "Choice 4 goes here?",
    correct : "Correct Answer Herer"   
    },
    {
    question : "Question 4 goes here?",
    choiceA : "Choice 1 goes here?",
    choiceB : "Choice 2 goes here?",
    choiceC : "Choice 3 goes here?",
    choiceD : "Choice 4 goes here?",
    correct : "Correct Answer Herer"   
    },
    {
    question : "Question 5 goes here?",
    choiceA : "Choice 1 goes here?",
    choiceB : "Choice 2 goes here?",
    choiceC : "Choice 3 goes here?",
    choiceD : "Choice 4 goes here?",
    correct : "Correct Answer Herer"   
    }
];










// Build a timed code quiz with multiple-choice questions. 
// This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. 
// It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.


// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers
// ```
// GIVEN I am taking a code quiz

// WHEN I click the start button
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
