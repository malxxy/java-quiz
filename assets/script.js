// Variables
var container = document.getElementById("container");
var btn = document.querySelectorAll("btn");
var h1El = document.getElementById("h1-title");
var startCard = document.querySelector(".opener");
var start = document.getElementById("start-btn");
var sectionOne = document.getElementById("section-one");
var sectionTwo = document.getElementById("section-two");
var sectionThree = document.getElementById("section-three")
var GameOver = document.getElementById("game-over")
var correctAns = document.querySelectorAll(".correct");
var incorrectAns = document.querySelectorAll(".incorrect");
var btn1 = document.getElementById("first-btn");
var btn2 = document.getElementById("second-btn");
var btn3 = document.getElementById("finish-btn");
var allSections = [sectionOne,sectionTwo,sectionThree];

console.log(correctAns);

// PROMPT FOR LIGHT MODE OR DARK MODE????
 // Set default mode to dark
// var setMode = "light";
// // Listen for a click event on toggle switch
// mode.addEventListener("click", function() {
// // If mode is light switch to dark mode
//    if (mode === "light") {
//      mode = "dark";
//      container.setAttribute("class", "dark");
//    } 
//    // If mode is dark switch to light
//   else {
//     mode = "light";
//      container.setAttribute("class", "light");
//   }
//  });

// Style header h1
h1El.setAttribute("style","background-color: --light; font-family: --headerFont; font-size: 36px; padding: 12px; text-align: center;");

// Style start card
startCard.setAttribute("style",
    "width: 400px; height: 300px; border: --dBlue; background-color: --lBlue;");

// Hide start card upon clicking start button and reveal next card
function hideCard() {
  startCard.setAttribute("style","display: none;");
  sectionOne.setAttribute("style","display:block;")
  // START TIMER COUNTDOWN;
}
start.addEventListener("click",hideCard); // when user clicks on start btn, hide card and go to next section

// Hide question sections when webpage is opened
sectionOne.setAttribute("style","display:none;");
sectionTwo.setAttribute("style","display:none;");
sectionThree.setAttribute("style","display:none;");
GameOver.setAttribute("style","display:none;");

// Style paragraph answer backgrounds
container.setAttribute("style","background: linear-gradient(90deg, --mTeal 0%, --mGreen 0%, --dTeal 100%); text:white; padding: 5px;");

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
    var youWrong = document.createElement("Incorrect!");
    document.section.appendChild(youWrong);
    // FUNCTION TO SUBTRACT TIME
  };

incorrectAns.addEventListener("click",incorrect);