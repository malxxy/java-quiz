// Variables
var h1El = document.getElementById("h1-title");
var startCard = document.querySelector(".opener");
var start = document.getElementById("start-btn");
var questionSection = document.getElementById("questions");
var GameOver = document.getElementById("game-over");

// Style header h1
h1El.setAttribute("style","background-color: --light; font-family: --headerFont; font-size: 36px; padding: 12px; text-align: center;");

// Style start card
startCard.setAttribute("style",
    "width: 400px; height: 300px; border: --dBlue; background-color: --lBlue;");

// Define variable for amount of time user has to finish quiz
var seconds = 20

// Timer function
function beginTimer() {
  seconds = seconds-1;
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
  nextQuestion();
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
  }
];

// go to next question
function nextQuestion() {
};
btn.addEventListener("click",nextQuestion); // when user clicks on start btn, hide card and go to next section

// select answer 
function userAnswer() {

};
// Then, you can use a for loop to keep track of your "question index" or what question your on.
// With that, you can use the createElement operator to create an HTML element for the question title, and then buttons for each of the answers


// Hide question sections when webpage is opened
sectionOne.setAttribute("style","display:none;");
sectionTwo.setAttribute("style","display:none;");
sectionThree.setAttribute("style","display:none;");
GameOver.setAttribute("style","display:none;");

// Style paragraph answer backgrounds
container.setAttribute("style","background: linear-gradient(90deg, --mTeal 0%, --mGreen 0%, --dTeal 100%); text:white; padding: 5px;");


// THESE MIGHT BE REDUCED 
function hideCard1() {
  sectionOne.setAttribute("style","display: none;");
  sectionTwo.setAttribute("style","display:block;")
}
btn1.addEventListener("click",hideCard1); // when user clicks on next btn, hide card and go to next section

function hideCard2() {
  sectionTwo.setAttribute("style","display: none;");
  sectionThree.setAttribute("style","display:block;")
}
btn2.addEventListener("click",hideCard2); // when user clicks on next btn, hide card and go to next section

function hideCard3() {
  sectionThree.setAttribute("style","display: none;");
  GameOver.setAttribute("style","display:block;")
}
btn3.addEventListener("click",hideCard3); // when user clicks on next btn, hide card and go to next section

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