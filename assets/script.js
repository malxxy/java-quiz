// Variables
var container = document.querySelector(".container");
var h1El = document.getElementById("h1-title");
var startCard = document.querySelector(".opener");
var start = document.getElementById("start-btn");
var sectionOne = document.getElementById("section-one");
var sectionTwo = document.getElementById("section-two");
var sectionThree = document.getElementById("section-three")
var GameOver = document.getElementById("game-over")
var sectionAns = document.getElementById("section-ans");
var correctAns = document.getElementsByClassName(".correct");
var incorrectAns = document.getElementsByClassName(".incorrect");
var btn1 = document.getElementById("first-btn");
var btn2 = document.getElementById("second-btn");
var btn3 = document.getElementById("finish-btn");
var allSections = [sectionOne,sectionTwo,sectionThree];

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

 // Set default mode for sections as HIDDEN
//  btn.addEventListener()
//  var defaultSections = document.querySelectorAll(section);
//  var setDisplay = "hidden";
//  if (defaultSections === "hidden") {
//   defaultSections.setAttribute("style","display:none;");
//  } else {
//     defaultSections.setAttribute("style","display:block;");
//  };

// Style header h1
h1El.setAttribute("style","background-color: --light; font-family: --headerFont; font-size: 36px; padding: 12px;");

// Style start card
startCard.setAttribute("style",
    "width: 400px; height: 300px; border: --dBlue; background-color: --lBlue;");

// Style start button
start.setAttribute(
    "style",
    "border: black; border-radius: 5%; box-shadow: 5px 3px; padding: 20px; font-size: 30px;");

// Hide start card upon clicking start button and reveal next card
function hideCard() {
    startCard.setAttribute("style","display: none;");
    sectionOne.setAttribute("style","display:block;")
    // START TIMER COUNTDOWN;
  }
start.addEventListener("click",hideCard); // when user clicks on start btn, hide card and go to next section

// Style paragraph answer backgrounds
sectionAns.children.setAttribute(
    "style",
    "background: linear-gradient(90deg, --mTeal 0%, --mGreen 0%, --dTeal 100%);; text:white; padding: 5px;");

    // function to turn answers opaque
function opaque(event) {
    event.currentTarget.setAttribute(
        "style",
        "opacity: 50%;"
    );
};
// Event listener when click on ANy of the section answer children p will turn half opaque
sectionAns.children.addEventListener("hover",opaque);

// Function to change correct answer to green, display "correct!" message and display next button
function correct(event) {
    // event.stopPropagation();
    event.currentTarget.setAttribute(
      "style",
      "background-color: --dGreen;"
    );
     // Create element for correct message
     var youRight = document.createElement("Correct!");
     document.section.appendChild(youRight);
    // NEXT BUTTON APPEARS
    // if (correct ===true ) {
    //     var nextBtn = document.createElement(Btn);
    //     nextBtn.textContent = "Next Question";
    //     document.body.appendChild(nextBtn);
    // }
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

// Function to trigger next section - OPTION 1
function done1() {
    sectionOne.setAttribute("style","display: none;");
    sectionTwo.setAttribute("style","display:block;");
    };
// Trigger next section when user selects "Next Question button"
btn1.addEventListener("click",done1);

// For loop for same process ^^ - OPTION 2s
for (let index = 0; index < allSections.length; index++) {
  function done() {
    section[index].setAttribute("style","display: none;");
    section[index++].setAttribute("style","display:block;");
  };

  section[index].btn.addEventListener("click",done);
};

