// Variables
var h1El = document.getElementById("h1-title");
var startCard = document.querySelector(".opener");
var container = document.getElementById("container");
var start = document.getElementById("start-btn");
var questionSection = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var gameOver = document.getElementById("game-over");
var nextBtn = document.getElementById("next-btn");
var answers = document.getElementById("answers");
var answerOptions = document.querySelectorAll('.answer-btn');
var correctDiv = document.getElementById("correct");
var finalScore = document.getElementById("final-score");
var initials = document.getElementById("initials");
var saveBtn = document.getElementById("save-score")

// Style header h1
h1El.setAttribute("style","background-color: --light; font-family: --headerFont; font-size: 36px; padding: 12px; text-align: center;");

// Style start card
startCard.setAttribute("style",
    "width: 400px; height: 300px; border: --dBlue; background-color: --lBlue;");

container.setAttribute("style", "display: flex; justify-content:center;");

// Hide question section and game over section
gameOver.setAttribute("style","display: none;");

// Define variables
var seconds = 20;
var questionIndex;
var userAnswer;
var score = 0;
var timer;

// Question object
var questionObject = [
  {
    title: "What does API stand for?",
    choices: ["Application Programming Interface", "Application Program Interaction", "Automatic Programming Interface", "Automatic Program Integration"],
    answer: "Application Programming Interface"
  },
  {
    title: "What command targets an ID named 'specific' Element from the HTML file?",
    choices: ["document.querySelector('.specific')", "document.querySelectorAll('specific')", "document.getElementbyID('specific')", "document.getElementbyID('#specific')"],
    answer: "document.getElementbyID('specific')"
  },
  {
    title: "What fuction repeatedly executes code every X millisecond?",
    choices: ["getInterval(func,X);", "beginTimer(func,X);", "setTimeout(func,X);", "setInterval(func,X);"],
    answer: "setInterval(func,X);"
  }
];

document.getElementById("timer").setAttribute("style","display:flex; justify-content:center;") // Center timer

// Timer function
function beginTimer() {
  seconds = seconds-1;
  if (seconds > 0) {
    document.getElementById("timer").textContent = seconds;
  }
  // code to print time
  else if (seconds === 0) {
    document.getElementById("timer").textContent = "You're out of time!"
    questionSection.setAttribute("style","display: none;"); // Hide questions
    gameOver.setAttribute("style","display:block;")
  };
};

// Start game function
function hideStartCard() {
  startCard.setAttribute("style","display: none;"); // Hide start card
  timer = setInterval(beginTimer,1000); // start countdown timer
  questionSection.setAttribute("style","display:block");
  displayQuestion();
}
start.addEventListener("click",hideStartCard); // when user clicks on start btn, hide card and go to next section & start timer

// Display first question function
function displayQuestion() {
  questionIndex = 0; // set question index = to 0 to start at first question
  questionTitle.textContent = questionObject[questionIndex].title; // add question 1 text to question sections
  // Loop through answer options to display answer text content
  for (let i = 0; i < answerOptions.length; i++) {
    answerOptions[i].textContent = questionObject[questionIndex].choices[i];
  };

  // Capture the user choice --> event bubbling 
  answers.addEventListener("click", function(event) {
    clearDiv();
    event.stopPropagation();
    var userAnswer = event.target.textContent;
    if (userAnswer === questionObject[0].answer) {
      score++;
      let userCorrect = document.createElement('p')
      userCorrect.setAttribute("style","color:green; background-color: --mTeal;")
      userCorrect.textContent = "Correct";
      correctDiv.append(userCorrect);
    } else {
      let userIncorrect = document.createElement('p')
      userIncorrect.setAttribute("style","color:red; background-color: --mTeal;")
      userIncorrect.textContent = "Incorrect - You lost 1 second!";
      correctDiv.append(userIncorrect);
      seconds = seconds - 1;
    }
    nextBtn.addEventListener("click",displayNextQuestion);
  });

function displayNextQuestion() {
    clearDiv();
    // Set index to 1
    questionIndex = [1];
    questionTitle.textContent = questionObject[questionIndex].title;
    for (let i = 0; i < answerOptions.length; i++) {
      answerOptions[i].textContent = questionObject[questionIndex].choices[i];
    };

    answers.addEventListener("click",inputAnswer);
    nextBtn.addEventListener("click",displayLastQuestion);
  };
};

function inputAnswer(event) {
  //clear div
  clearDiv();
  let userCorrect = undefined;
  let userIncorrect = undefined;
  event.stopPropagation();
  questionIndex = [1];
  var userAnswer = event.target.textContent;
  if (userAnswer === questionObject[questionIndex].answer) {
       score = score + score++;
       userCorrect = document.createElement('p')
       userCorrect.setAttribute("style","color:green; background-color: --mTeal;")
       userCorrect.textContent = "Correct";
       correctDiv.append(userCorrect);
     } else {
       userIncorrect = document.createElement('p')
       userIncorrect.setAttribute("style","color:red; background-color: --mTeal;")
       userIncorrect.textContent = "Incorrect - You lost 1 second!";
       correctDiv.append(userIncorrect);
       seconds = seconds - 1;
     };
};

// FUnction to display last question
function displayLastQuestion() {
  // clear div
  clearDiv();
  // Set index to 2
  questionIndex = [2];
  questionTitle.textContent = questionObject[questionIndex].title;
  for (let i = 0; i < answerOptions.length; i++) {
    answerOptions[i].textContent = questionObject[questionIndex].choices[i];
  };

  answers.addEventListener("click",inputLastAnswer);
  nextBtn.addEventListener("click",displayGameOver);
};

function inputLastAnswer(event) {
  clearDiv();
  let userCorrect = undefined;
  let userIncorrect = undefined;
  event.stopPropagation();
  questionIndex = [2];
  var userAnswer = event.target.textContent;
  if (userAnswer === questionObject[questionIndex].answer) {
       score++;
       userCorrect = document.createElement('p')
       userCorrect.setAttribute("style","color:green; background-color: --mTeal;")
       userCorrect.textContent = "Correct";
       correctDiv.append(userCorrect);
     } else {
       userIncorrect = document.createElement('p')
       userIncorrect.setAttribute("style","color:red; background-color: --mTeal;")
       userIncorrect.textContent = "Incorrect - You lost 1 second!";
       correctDiv.append(userIncorrect);
       seconds = seconds - 1;
     };
};

function displayGameOver () {
  questionSection.setAttribute("style","display: none;"); // Hide questions
  gameOver.setAttribute("style","display:block;"); // Show game over
  clearInterval(timer); // STOP TIMER & set timer to 0
  document.getElementById("timer").textContent = "0:00";
  let showScore = document.createElement('h3');
  showScore.textContent = "Your final score is: " + score + "/3.";
  finalScore.append(showScore);
};

function clearDiv () {
  correctDiv.innerHTML = "";
}
// Style paragraph answer backgrounds
questionSection.setAttribute("style","background: linear-gradient(90deg, --mTeal 0%, --mGreen 0%, --dTeal 100%); text:white; padding: 5px;");

// STORE SCORE!
function save() {
  // Prompt user to input initials
  var initials = window.prompt("Please enter your initials");
  // Create object to hold initials and score
  let myScore = {
      userInitials: initials,
      userScores: score,
  };
  // set item and json stringify to hold in local storage
  localStorage.setItem("myScore",JSON.stringify(myScore)) || [];
  console.log("myScore",myScore);
  
  let pullScore = JSON.parse(localStorage.getItem("myScore"));
  console.log(pullScore);
  // get item and parse to retrieve storage
  
  alert(initials + " score is " + score + ". Check the console to view saved score.");
  return;
};
saveBtn.addEventListener("click",save);