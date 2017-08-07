var boxes = document.querySelectorAll(".square");
var rgbHeader = document.querySelector("#colourDisplay");
var header = document.querySelector("h1");
var message = document.querySelector("#message");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var winnerBox;
var bGameWon;

resetGame(6);

easyBtn.addEventListener("click", function(){
    winnerBox.classList.remove("winner");
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    resetGame(3);
    for(var i = 3; i < boxes.length; i++){
        boxes[i].style.display = "none";
    }
});

hardBtn.addEventListener("click", function(){
    winnerBox.classList.remove("winner");
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    resetGame(6);
    for(var i = 3; i < boxes.length; i++){
        boxes[i].style.display = "block";
    }
});

resetBtn.addEventListener("click", function(){
    winnerBox.classList.remove("winner");
    if(hardBtn.classList.contains("selected"))
        resetGame(6);
    else
        resetGame(3);
});

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
        boxes[i].style.backgroundColor = colours[i];

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

    winnerBox.classList.add("winner");
    rgbHeader.textContent = winnerBox.style.backgroundColor;
}