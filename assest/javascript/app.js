

//establish necessary variables
var number = 15;
var count = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var intervalId;
//create array of questions and answers; each question is an new object with the incorrect and correct answers being keys
var questionsAnswers = [{
    question:"When was the attack on Pearl Harbor?",
    answer: ["September 1, 1939",
            "May 7, 1945",
            "December 11, 1941", "December 7, 1941"],
    image: "assest/images/Pearl.jpg"
}, {
    question: "Who was the Supreme Allied Commander in Europe?",
   answer: ["Winston Churchill",
    "George S. Patton",
    "Franklin Roosevelt",
    "Dwight Eisenhower"],
    image: "assest/images/Eisenhower.jpg"
}, {
    question: "What does D-Day refer too?",
    answer: ["The end of the war in Europe",
    "Germany invading Poland",
    "The United states recapturing the Philippines",
    "The Allied invasion of Normandy"],
    image: "assest/images/dday.jpg"
}, {
    question: "What was the first city that the atomic bomb was dropped on?",
    answer: ["Nagasaki",
    "Tokyo",
    "Okinawa",
    "Hiroshima"],
    image: "assest/images/Hiroshima.jpeg"
}, {
    question: "Who was the fascist dictator of Italy?",
    answer: ["Adolf Hitler",
    "Napoleon Bonaparte",
    "Amerigo Dumini",
    "Benito Mussolini"],
    image: "assest/images/Mussolini.jpeg"
}, {
    question: "What famous author was in Dresden, Germany when it was bombed by the Allies",
    answer: ["Ian Fleming",
    "Roald Dahl",
    "Ernest Hemingway",
    "Kurt Vonnegut"],
    image: "assest/images/Vonnegut.jpeg",
}, {
    question: "Who was Hitler's mistress?",
    answer: ["Bridget von Hammersmark",
    "Magda Goebbels",
    "Traudl Junge",
    "Eva Braun"],
    image: "assest/images/Braun.jpeg",
}, {
    question: "Who was nicknamed 'The Desert Fox'?",
    answer: ["Abdul Munim Wassel",
    "George Patton",
    "Bernard Montgomery",
    "Erwin Rommel"],
    image: "assest/images/Rommel.jpeg",
}, {
    question: "What was the code-name for the German invasion of the Soviet Union",
    answer: ["Operation Sea Lion",
    "Operation Torch",
    "Operation Blue",
    "Operation Barbarossa"],
    image: "assest/images/Barbarossa.jpeg",
}
];

function gameIsAfoot () {
// end condition for game
    if (count >= questionsAnswers.length) {
        console.log("success")
            clearInterval(intervalId);
            intervalId = null;
            $(".timer").empty()
            $(".point").empty()
            $(".image").empty()
            //Display Game Over along with the relative counts of correct, incorrect and unanswered
            var gameOver = $("<div class='mt-3 gameOver temp'>")
            gameOver.text("Game Over!")
            $(".point").append(gameOver)
            var endCorrect = $("<div class='mt-3 temp'>")
            endCorrect.text("Total Correct: " + correct)
            $(".point").append(endCorrect)
            var endIncorrect = $("<div class='mt-3 temp'>")
            endIncorrect.text("Total Incorrect: " + incorrect)
            $(".point").append(endIncorrect)
            var endUnanswered = $("<div class='mt-3 temp'>")
            endUnanswered.text("Total Unanswered: " + unanswered)
            $(".point").append(endUnanswered)
            //add a reset button at the end of the game
            var ResetDiv = $("<div>");
            var Reset = $("<button>");
            ResetDiv.addClass("row justify-content-center")
            Reset.attr("type", "button");
            Reset.addClass("btn btn-outline-dark btn-lg mb-2 reset");
            Reset.text("Play Again?")
            $(".questionPoint").append(ResetDiv)
            ResetDiv.append(Reset);
            $(".reset").on("click", function() {
                console.log("Success");
                number = 15;
                count = 0;
                correct = 0;
                incorrect = 0;
                unanswered = 0;
                timer();
                gameIsAfoot(); 
            });
            return
      }
//empty elements whenever function starts
    $(".questionPoint").empty();
    $(".point").empty();
    $(".image").empty();
// create elements to display question and potential answers on screen
// answers to questiosn should be buttons
// so not DRY......
var Question = $("<div>");
Question.text(questionsAnswers[count].question)
$(".point").append(Question)

for (i=0; i<questionsAnswers[count].answer.length; i++) {
    var buttonDiv = $("<div>")
    buttonDiv.addClass("row justify-content-center")
    var button = $("<button>")
    button.attr("type", "button");
    button.attr("data-value", [i])
    button.addClass("btn btn-outline-dark btn-lg mb-2 answer");
    button.text(questionsAnswers[count].answer[i])
    $(".questionPoint").append(buttonDiv)
    buttonDiv.append(button);
}
// randomizes the above elemants
var ul = document.querySelector('.questionPoint');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}

// click incorrect answer, somethinh should display signiying incorrect; keep tally of incorrect answer
$(".answer").on("click", function() {
    if ($(this).attr("data-value") === "3") {
        correct++;
        $(".btn").remove();
        var youAreCorrect = $("<div class='mt-3 temp'>");
        youAreCorrect.text("You are Correct!");
        $(".point").append(youAreCorrect);
        $(".image").html("<img src=" + questionsAnswers[count].image + ">");
        clearInterval(intervalId);
       setTimeout(nextQuestion, 2000);
       return;
    } else if ($(this).attr("data-value") !== "3") {
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
    setTimeout(nextQuestion, 2000);
    return
 }
}) 
// click correct answer, something should display signifying correct answer; keep tally of correct answers
};
// following one of the options (correct, incorrect, unasnwered), move onto next question and restart timer
function nextQuestion() {
    count++
    console.log(count)
    number = 15;
    timer();
    gameIsAfoot();
}

// timer ticking down from 30 seconds should display for each question
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
        setTimeout(nextQuestion, 2000);
    } 
};

// have it so clicking "start" initiates game
$(".initiator").on("click", function() {
    $(".container").addClass("paperBag")
    $(".Button").remove()
   timer();
   gameIsAfoot(); 
});