var boxes = document.querySelectorAll(".square");
var rgbHeader = document.querySelector("#colourDisplay");
var header = document.querySelector("h1");
var message = document.querySelector("#message");
var resetBtn = document.querySelector("#reset");
var winnerBox;

resetGame();

resetBtn.addEventListener("click", function(){
    header.style.background = "#232323"
    winnerBox.classList.remove("winner");
    resetGame();
})

function changeColours(colour){
    for(var i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = winnerBox.style.backgroundColor;
        header.style.background = winnerBox.style.backgroundColor;
    }
}

function generateRandomColours(){
    var array = [];
    for(var i = 0; i < boxes.length; i++){
        array.push("rgb(" + (Math.floor((Math.random() * 256))) + ", " + (Math.floor((Math.random() * 256))) + ", " + (Math.floor((Math.random() * 256))) + ")");
    }
    return array;
}

function resetGame(){
    var winner = Math.floor((Math.random() * 6));
    resetBtn.textContent = "New Colours";
    message.textContent = "-";
    winnerBox = boxes[winner];
    console.log(winner);
    var colours = generateRandomColours();

    for(var i = 0; i < boxes.length; i++){
        console.log("Box " + (i+1) + ": " + colours[i]);
        boxes[i].style.backgroundColor = colours[i];

        boxes[i].addEventListener("click", function(){
            if(this.classList.contains("winner")){
                message.textContent = "Correct";
                resetBtn.textContent = "Play Again?";
                changeColours();
            } else {
                this.style.backgroundColor = "#232323";
                message.textContent= "Try Again";
            }
        });
    }
    winnerBox.classList.add("winner");
    rgbHeader.textContent = winnerBox.style.backgroundColor;
}