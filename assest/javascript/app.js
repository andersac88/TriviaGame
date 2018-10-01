

//create array of questions and answers; each question is an new object with the incorrect and correct answers being keys
var number = 15;
var count = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var intervalId;
var questionsAnswers = [{
    question: "When was the attack on Pearl Harbor?",
    wrong1: "September 1, 1939",
    wrong2: "May 7, 1945",
    wrong3: "December 11, 1941",
    correct: "December 7, 1941",
    image: "assest/images/Pearl.jpg"
}, {
    question: "Who was the Supreme Allied Commander in Europe?",
    wrong1: "Winston Churchill",
    wrong2: "George S. Patton",
    wrong3: "Franklin Roosevelt",
    correct: "Dwight Eisenhower",
    image: "assest/images/Eisenhower.jpg"
}, {
    question: "What does D-Day refer too?",
    wrong1: "The end of the war in Europe",
    wrong2: "Germany invading Poland",
    wrong3: "The United states recapturing the Philippines",
    correct: "The allied invasion of Normandy",
    image: "assest/images/dday.jpg"
}, {
    question: "What was the first city that the atomic bomb was dropped on?",
    wrong1: "Nagasaki",
    wrong2: "Tokyo",
    wrong3: "Okinawa",
    correct: "Hiroshima",
    image: "assest/images/Hiroshima.jpeg"
}, {
    question: "Who was the fascist dictator of Italy?",
    wrong1: "Adolf Hitler",
    wrong2: "Napoleon Bonaparte",
    wrong3: "Amerigo Dumini",
    correct: "Benito Mussolini",
    image: "assest/images/Mussolini.jpeg"
}, {
    question: "What famous author was in Dresden, Germany when it was bombed by the Allies",
    wrong1: "Ian Fleming",
    wrong2: "Roald Dahl",
    wrong3: "Ernest Hemingway",
    correct: "Kurt Vonnegut",
    image: "assest/images/Vonnegut.jpeg",
}, {
    question: "Who was Hitler's mistress?",
    wrong1: "Bridget von Hammersmark",
    wrong2: "Magda Goebbels",
    wrong3: "Traudl Junge",
    correct: "Eva Braun",
    image: "assest/images/Braun.jpeg",
}
];
// upon game commenceing, have first set of questions and answers displayed on screen
// answers to questiosn should be buttons
function gameIsAfoot () {
    if (count >= questionsAnswers.length) {
        console.log("success")
            clearInterval(intervalId);
            intervalId = null;
            $(".timer").remove()
            return
      }
    $(".point").empty();
    $(".image").empty();
var Question = $("<div>");
var Wrong1Div = $("<div>");
var Wrong1 = $("<button>");
var Wrong2Div = $("<div>");
var Wrong2 = $("<button>");
var Wrong3Div = $("<div>");
var Wrong3 = $("<button>");
var RightDiv = $("<div>");
var Right = $("<button>");

Wrong1Div.addClass("row justify-content-center");
Wrong1.attr("type", "button");
Wrong1.addClass("btn btn-outline-dark btn-lg mb-2 wrong");
Wrong2Div.addClass("row justify-content-center")
Wrong2.attr("type", "button");
Wrong2.addClass("btn btn-outline-dark btn-lg mb-2 wrong");
Wrong3Div.addClass("row justify-content-center")
Wrong3.attr("type", "button");
Wrong3.addClass("btn btn-outline-dark btn-lg mb-2 wrong");
RightDiv.addClass("row justify-content-center")
Right.attr("type", "button");
Right.addClass("btn btn-outline-dark btn-lg mb-2 right");

Question.text(questionsAnswers[count].question)
Wrong1.text(questionsAnswers[count].wrong1)
Wrong2.text(questionsAnswers[count].wrong2)
Wrong3.text(questionsAnswers[count].wrong3)
Right.text(questionsAnswers[count].correct)

$(".point").append(Question)
//how do I randomize the below...
$(".questionPoint").append(Wrong1Div)
Wrong1Div.append(Wrong1);
$(".questionPoint").append(Wrong2Div)
Wrong2Div.append(Wrong2);
$(".questionPoint").append(Wrong3Div)
Wrong3Div.append(Wrong3);
$(".questionPoint").append(RightDiv)
RightDiv.append(Right);

// click incorrect answer, somethinh should display signiying incorrect; keep tally of incorrect answer
$(".wrong").on("click", function() {
    incorrect++;
    $(".btn").remove()
    var wrongGuess = $("<div class='mt-3 temp'>")
    wrongGuess.text("That is incorrect.")
    $(".point").append(wrongGuess)
    var correctGuess = $("<div class='mt-3 temp'>")
    correctGuess.text("The correct answer is " + questionsAnswers[count].correct)
    $(".point").append(correctGuess)
    $(".image").html("<img src=" + questionsAnswers[count].image + ">")
    clearInterval(intervalId);
    setTimeout(nextQuestion, 3000);
    return

 });
// click correct answer, something should display signifying correct answer; keep tally of correct answers
$(".right").on("click", function(){
     correct++
     $(".btn").remove()
     var youAreCorrect = $("<div class='mt-3 temp'>")
     youAreCorrect.text("You are Correct!")
     $(".point").append(youAreCorrect)
     $(".image").html("<img src=" + questionsAnswers[count].image + ">")
     clearInterval(intervalId);
    setTimeout(nextQuestion, 3000);
     return
 });
}

function nextQuestion() {
    count++
    console.log(count)
    number = 15;
    timer();
    gameIsAfoot();
   
}

// time of ticking down from 30 seconds should display for each question
function timer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
function decrement() {
    number--;
    $(".timer").text("Time Remaining: " + number + " seconds");
    // if time runs out, display correct answer then move onto the next question;
    if (number === 0) {
        $(".btn").remove()
        unanswered++;
        var timesUp = $("<div class='mt-3 temp'>")
        timesUp.text("You are out of Time")
        $(".point").append(timesUp)
        var correctGuess = $("<div class='mt-3 temp'>")
        correctGuess.text("The correct answer is " + questionsAnswers[count].correct)
        $(".point").append(correctGuess)
        $(".image").html("<img src=" + questionsAnswers[count].image + ">")
        clearInterval(intervalId);
        setTimeout(nextQuestion, 3000);
    } 
};

// have it so clicking "start" initiates game
$(".initiator").on("click", function() {
    $(".Button").remove()
   timer();
   gameIsAfoot(); 
});






// following one of the three above options (correct, incorrect, unasnwered), move onto next question and restart timer