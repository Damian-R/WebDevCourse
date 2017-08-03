var hiddenNum = 7;

do {
    var guess = prompt("Enter a number");
    if(guess > hiddenNum)
        alert("Your guess was too high");
    else if(guess < hiddenNum)
        alert("Your guess was too low");
}while(Number(guess) !== 7)

alert("Congratulations, you won!");