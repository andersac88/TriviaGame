//create array of questions and answers; each question is an new object with the incorrect and correct answers being keys
var number = 30
var intervalId;
var questionsAnswers = [{
    question: "When was the attack on Pearl Harbor?",
    wrong1: "September 1, 1939",
    wrong2: "May 7, 1945",
    wrong3: "December 11, 1941",
    correct: "December 7, 1941"
}, {
    question: "Who was the Supreme Allied Commander in Europe?",
    wrong1: "Winston Churchill",
    wrong2: "George S. Patton",
    wrong3: "Franklin Roosevelt",
    correct: "Dwight Eisenhower"
}, {
    question: "What does D-Day refer too?",
    wrong1: "The end of the war in Europe",
    wrong2: "Germany invading Poland",
    wrong3: "The United states recapturing the Philippines",
    correct: "The allied invasion of Normandy"
}];
// answers to questiosn should be buttons
function gameIsAfoot () {
var Question = $("<div>");
var Wrong1 = $("<div>");
Wrong1.addClass("btn btn-outline-dark btn-block wrong");
Wrong1.attr("type", "button");
var Wrong2 = $("<div>");
Wrong2.addClass("btn btn-outline-dark btn-block wrong");
Wrong2.attr("type", "button");
var Wrong3 = $("<div>");
Wrong3.addClass("btn btn-outline-dark btn-block wrong");
Wrong3.attr("type", "button");
var Right = $("<div>");
Right.addClass("btn btn-outline-dark btn-block Right");
Right.attr("type", "button");


Question.text(questionsAnswers[i].question)
Wrong1.text(questionsAnswers[i].wrong1)
Wrong2.text(questionsAnswers[i].wrong2)
Wrong3.text(questionsAnswers[i].wrong3)
Right.text(questionsAnswers[i].correct)

$(".point").append(Question)
$(".point").append(Wrong1)
$(".point").append(Wrong2)
$(".point").append(Wrong3)
$(".point").append(Right)
}
}

// time of ticking down from 30 seconds should display for each question
function timer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

function decrement() {
    number--;
    $(".timer").text("Time Remaining: " + number + " seconds");
    if (number === 0) {
        clearInterval(intervalId);
    }
  }

// have it so clicking "start" initiates game
$(".initiator").on("click", function() {
    $(".Button").remove()
    timer();
    gameIsAfoot();

// upon game commenceing, have first set of questions and answers displayed on screen


});


// click correct answer, something should display signifying correct answer; keep tally of correct answers
// click incorrect answer, somethinh should display signiying incorrect; keep tally of incorrect answer
// if time runs out, display correct answer; 
// following one of the three above options (correct, incorrect, unasnwered), move onto next question and restart timer