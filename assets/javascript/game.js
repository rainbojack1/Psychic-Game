var randomLetter;
var yourGuess = document.getElementById("yourGuess");
var winCount = 0;
var win = document.getElementById("win");
var loseCount = 0;
var lose = document.getElementById("lose");
var guessCount = 1097;
var guess = document.getElementById("guess");
var answerList = [];
var answered = document.getElementById("answered");
var letter;

win.textContent = winCount;
lose.textContent = loseCount;
guess.textContent = guessCount;
answered.textContent = answerList;

function generateRandomLetter() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    letter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(letter);
    answerList.push(letter);
    return letter;
}

function letsGo() {
    for(var i = 0; i < 10; i++){
        generateRandomLetter();
        answerList.push(letter);
    }

    answered.textContent = answerList;
    console.log(answerList);
}

function compare() {
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
        // Determines which key was pressed.
        var userGuess = event.key;
        //yourGuess.textContent = (userGuess + " vs " + letter);
        console.log(userGuess + " vs " + letter);

        if(letter === userGuess){
            yourGuess.textContent = "You Win!";
        }
        else{
            yourGuess.textContent = "You Lose, Try Again.";
            generateRandomLetter();
        }
    }
}

generateRandomLetter();
//letsGo();
compare();