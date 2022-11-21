// Variables
var h1El = document.getElementById("h1-title");
var startCard = document.querySelector(".opener");
var start = document.getElementById("start-btn");
var questionSection = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var gameOver = document.getElementById("game-over");
var nextBtn = document.getElementById("next-btn");
var answers = document.getElementById("answers");

// Style header h1
h1El.setAttribute("style","background-color: --light; font-family: --headerFont; font-size: 36px; padding: 12px; text-align: center;");

// Style start card
startCard.setAttribute("style",
    "width: 400px; height: 300px; border: --dBlue; background-color: --lBlue;");

// Hide question section and game over section
gameOver.setAttribute("style","display: none;"); // Hide game over card

// Define variable for amount of time user has to finish quiz
var seconds = 20

// Timer function
function beginTimer() {
  seconds = seconds-1;
  console.log(seconds);
  if (seconds > 0) {
    document.getElementById.innerHTMl = seconds;
  }
  // code to print time document.getElementById("timer").innerHTML = seconds.toLocaleTimeString();
  else if (seconds === 0) {
    document.getElementById("timer").innerHTMl = "You're out of time!"
  };
};

// Start game function
function hideStartCard() {
  startCard.setAttribute("style","display: none;"); // Hide start card
  setInterval(beginTimer,1000); // start countdown timer
  questionSection.setAttribute("style","display:block");s
}
start.addEventListener("click",hideStartCard); // when user clicks on start btn, hide card and go to next section & start timer

var questions = [
  {
    title: "Here is Question one",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer1"
  },
  {
    title: "Here is Question two",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer3"
  },
  {
    title: "Here is Question two",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer3"
  }
];

function displayQuestion() {
  for (let i = 0; i < questions.length; i++) {
    questionTitle.innerHTML = questions.title[i];
    answers.innerText = questions.choices[i];
  };
};
nextBtn.addEventListener("click",displayQuestion); // when user clicks on start btn, hide card and go to next section

// select answer 
function userAnswer() {
  // if (userInput != correctAns)
  count = count -3
  // print
  console.log("Incorrect answer time loss", incorrect + "You lost 3 seconds!");
};
// Then, you can use a for loop to keep track of your "question index" or what question your on.
// With that, you can use the createElement operator to create an HTML element for the question title, and then buttons for each of the answers

// Style paragraph answer backgrounds
questionSection.setAttribute("style","background: linear-gradient(90deg, --mTeal 0%, --mGreen 0%, --dTeal 100%); text:white; padding: 5px;");










// Function to change correct answer to green, display "correct!" message and display next button
function correct(event) {
    event.stopPropagation();
    event.currentTarget.setAttribute(
      "style",
      "background-color: --dGreen;"
    );
     // Create element for correct message
     var youRight = document.createElement("Correct!");
     document.section.appendChild(youRight);
  };
// When correct answer is clicked on, launch function "correct"
correctAns.addEventListener("click",correct);

// When user selects incorrect answer
  function incorrect(event) {
    // event.stopPropagation();
    event.currentTarget.setAttribute(
      "style",
      "background-color: --mteal;"
    );
    // Create elelemnt for incorrect message
    var youWrong = document.createElement("p");
    document.section.appendChild(youWrong);
    // FUNCTION TO SUBTRACT TIME
  };

incorrectAns.addEventListener("click",incorrect);