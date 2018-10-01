# World War II Trivia

This is run of the mill trivia game.

The user will be presented with a question and four answers. They are given 15 seconds to select an answer.

If an incorrect answer is selected, the user is notified that their selection was incorrect and the correct answer will be displayed along with an image related to the correct answer.

If a correct answer is selected, the user is notified that they were correct and an image related to the correct answer will be display.

If the user fails to make a selection within the alloted 15 seconds, they will be notified that time has expired and the correct answer, along with an image related to the correct answer, will be displayed.

Once the user has been presented with all of the questions the game ends and the total number of correct answers, incorrect answers and unanswered questions will be displayed, along with a replay button.

This project provides a great introduction to timers and ties it in with jquery, vanilla javascript, html and css. It really emphasized creating new elements and assigning them various attributes and text. The one area that I am yet to grasp completely is the formula used to shuffle the questions, see below, which was found through google:
        var ul = document.querySelector('.questionPoint');
        for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);

This project is currently maintained and updated by Andrew Andersen (andersac88@gmail.com) if you have any questions, feel free to contact me directly.

