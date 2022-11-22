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
var answerChoices = document.getElementById("answer-btn");
var answerOptions = document.querySelectorAll('.answer-btn');
var correctDiv = document.getElementById("correct")
// Style header h1
h1El.setAttribute("style","background-color: --light; font-family: --headerFont; font-size: 36px; padding: 12px; text-align: center;");

// Style start card
startCard.setAttribute("style",
    "width: 400px; height: 300px; border: --dBlue; background-color: --lBlue;");

container.setAttribute("style", "display: flex; justify-content:center;");

// Hide question section and game over section
gameOver.setAttribute("style","display: none;"); // Hide game over card

// Define variables
var seconds = 15
var questionIndex;
var userAnswer;
var score = 0;

document.getElementById("timer").setAttribute("style","display:flex; justify-content:center;") // Center timer

// Timer function
function beginTimer() {
  seconds = seconds-1;
  console.log(seconds);
  if (seconds > 0) {
    document.getElementById("timer").textContent = seconds;
  }
  // code to print time document.getElementById("timer").innerHTML = seconds.toLocaleTimeString();
  else if (seconds === 0) {
    document.getElementById("timer").textContent = "You're out of time!"
    questionSection.setAttribute("style","display: none;"); // Hide questions
    gameOver.setAttribute("style","display:block;")
  };
};


// Start game function
function hideStartCard() {
  startCard.setAttribute("style","display: none;"); // Hide start card
  setInterval(beginTimer,1000); // start countdown timer
  questionSection.setAttribute("style","display:block");
  questionIndex = 0; // set question index = to 0 to start at first question
  displayQuestion();
}
start.addEventListener("click",hideStartCard); // when user clicks on start btn, hide card and go to next section & start timer

var questionObject = [
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
    choices: ["answer1", "ananswer2", "swer3", "answer4"],
    answer: "answer3"
  }
];

function displayQuestion() {
  questionTitle.textContent = questionObject[questionIndex].title;
  console.log(answerOptions)
  console.log(typeof answerOptions)
  
  for (let i = 0; i < answerOptions.length; i++) {
    //answerChoices.innerHTML = questionObject.choices[i];
    console.log(answerOptions[i]);
    console.log(questionObject[questionIndex].choices[i]);
    answerOptions[i].textContent = questionObject[questionIndex].choices[i];
  };

  // ok now what(?)

  // Capture the User choice --> event bubbling 
  answers.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log(event)
    console.log(event.target);
    console.log(event.target.textContent);
    var userAnswer = event.target.textContent;
    if (userAnswer === questionObject[0].answer) {
      score = score + score++;
      let userCorrect = document.createElement('p')
      userCorrect.setAttribute("style","color:green; background-color: --mTeal;")
      userCorrect.textContent = "Correct";
      correctDiv.append(userCorrect);
    } else {
      let userIncorrect = document.createElement('p')
      userIncorrect.setAttribute("style","color:red; background-color: --mTeal;")
      userIncorrect.textContent = "Incorrect - You lost 3 seconds!";
      correctDiv.append(userIncorrect);
      count = count -3
    }
  })

    // show next question
      // have to clear the previous questions 
      // 
};
nextBtn.addEventListener("click",displayQuestion); // when user clicks on start btn, hide card and go to next section

// Then, you can use a for loop to keep track of your "question index" or what question your on.
// With that, you can use the createElement operator to create an HTML element for the question title, and then buttons for each of the answers

// Style paragraph answer backgrounds
questionSection.setAttribute("style","background: linear-gradient(90deg, --mTeal 0%, --mGreen 0%, --dTeal 100%); text:white; padding: 5px;");