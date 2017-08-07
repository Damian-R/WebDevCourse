var p1Button = document.getElementById("playerOne");
var p2Button = document.getElementById("playerTwo");
var resetButton = document.getElementById("resetBtn");

var scoreText = document.getElementById("scoreText");
var p1Text = document.getElementById("p1");
var p2Text = document.getElementById("p2");
var playingTo = document.getElementById("max");

var input = document.querySelector("input");

var p1Score = 0;
var p2Score = 0;

var bGameWon = false;

var maxScore = 5;

p1Button.addEventListener("click", function(){
    if(!bGameWon){
            p1Score++;
        if(p1Score == maxScore){
            p1Text.style.color = "green";
            bGameWon = true;
        }
        updateScoresText();
    }
});

p2Button.addEventListener("click", function(){
    if(!bGameWon){
            p2Score++;
        if(p2Score == maxScore){
            p2Text.style.color = "green";
            bGameWon = true;
        }
        updateScoresText();
    }
});

resetButton.addEventListener("click", function(){
    reset();
});

input.addEventListener("change", function(){
    if(this.valueAsNumber > 0){
        maxScore = this.valueAsNumber;
        playingTo.textContent = maxScore;
    }
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    bGameWon = false;
    p1Text.style.color = "black";
    p2Text.style.color = "black";
    updateScoresText();
}

function updateScoresText(){
    // scoreText.textContent = p1Score + " to " + p2Score;
    p1Text.textContent = p1Score;
    p2Text.textContent = p2Score;
}