"use strict";

const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}

const displayNumber = function(number){
    document.querySelector(".number").textContent = number;
}

const displayScore = function(score){
    document.querySelector(".score").textContent = score;
}



let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

let gameContainer = document.querySelector(".game-container");

const check = document.querySelector(".check");

const again = document.querySelector(".again");

check.addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value);
    // when there is no input
    if(!guess){
        displayMessage("No number")
    }
    // when players guess the correct number
    else if(guess === secretNumber){
        displayMessage("Correct Number");
        gameContainer.setAttribute("style", "background: rgba( 63, 221, 20, 0.25 ); boxShadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); backdropFilter: blur( 4px );");

        displayNumber(secretNumber);

        if(score > highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }

    // when guess is wrong
        
    }
    else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? "Too high" : "Too Low");
            score--;
            displayScore(score);
        }
        else{
            displayMessage("You lost the game...");
            displayScore("0");
            gameContainer.setAttribute("style", "background: rgba( 225, 14, 14, 0.25 );boxShadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );backdropFilter: blur( 4px );");
        }
    }

});

// reset game

again.addEventListener("click", function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    displayMessage("Start Gussing...");
    displayScore(score);
    displayNumber("?");
    document.querySelector(".guess").value = ""
    gameContainer.setAttribute("style", "background: rgba( 255, 255, 255, 0.2 ); boxShadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); backdropFilter: blur( 3.5px );")
})