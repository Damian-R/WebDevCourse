var boxes = document.querySelectorAll(".square");
var rgbHeader = document.querySelector("#colourDisplay");
var header = document.querySelector("h1");
var message = document.querySelector("#message");
var resetBtn = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var winnerBox;
var bGameWon;

init();

function init(){
    setModeButtons();
    setBoxListeners();
    setResetButton();
    
    resetGame(6);
}

function setModeButtons(){
    // difficulty button listeners
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            for(var j = 0; j < modeButtons.length; j++){
                modeButtons[j].classList.remove("selected");
            }
            winnerBox.classList.remove("winner");
            this.classList.add("selected");

            this.textContent === "EASY" ? resetGame(3): resetGame(6);
        });
    }
}

function setBoxListeners(){
    // box click listeners
    for(var i = 0; i < boxes.length; i++){
        boxes[i].addEventListener("click", function(){
            if(this.classList.contains("winner")){
                message.textContent = "Correct!";
                resetBtn.textContent = "Play Again?";
                bGameWon = true;
                changeColours();
            } else if(!bGameWon){
                this.style.backgroundColor = "#232323";
                message.textContent= "Try Again";
            }
        });
    }
}

function setResetButton(){
    // reset click listener
    resetBtn.addEventListener("click", function(){
        winnerBox.classList.remove("winner");
        if(hardBtn.classList.contains("selected"))
            resetGame(6);
        else
            resetGame(3);
    });
}

function changeColours(colour){
    for(var i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = winnerBox.style.backgroundColor;
        header.style.background = winnerBox.style.backgroundColor;
    }
}

function generateRandomColours(num){
    var array = [];
    for(var i = 0; i < num; i++){
        array.push("rgb(" + (Math.floor((Math.random() * 256))) + ", " + (Math.floor((Math.random() * 256))) + ", " + (Math.floor((Math.random() * 256))) + ")");
    }
    return array;
}

function resetGame(num){
    bGameWon = false;
    header.style.background = "steelblue";
    var colours = generateRandomColours(num);
    console.log(colours);
    var winner = Math.floor((Math.random() * colours.length));
    resetBtn.textContent = "New Colours";
    message.textContent = "";
    winnerBox = boxes[winner];

    for(var i = 0; i < boxes.length; i++){
        if(colours[i]){
            boxes[i].style.display = "block";
            boxes[i].style.backgroundColor = colours[i];
        } else {
            boxes[i].style.display = "none";
        }
    }
    winnerBox.classList.add("winner");
    rgbHeader.textContent = winnerBox.style.backgroundColor;
}