var yourGuess = document.getElementById("yourGuess");
var winCount = 0;
var win = document.getElementById("win");
var loseCount = 0;
var lose = document.getElementById("lose");
var guess = document.getElementById("guess");
var answerList = [];
var answered = document.getElementById("answered");
var letter;
var i = 10;

win.textContent = winCount;
lose.textContent = loseCount;
guess.textContent = i;
answered.textContent = answerList;

document.write(39);

function generateRandomLetter() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    letter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("letter: ", letter);

    return letter;
}

function letsGo() {
    //Get a random letter
    generateRandomLetter();
    if(i > 0){
        compare();

        win.textContent = winCount;
        lose.textContent = loseCount;
        guess.textContent = i;
        answered.textContent = answerList;
    }


}

function compare() {
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
        // Determines which key was pressed.
        var userGuess = event.key;
        //yourGuess.textContent = (userGuess + " vs " + letter);
        answerList.push(userGuess);
        console.log(userGuess + " vs " + letter);

            if(letter === userGuess){
                winCount++;
                yourGuess.textContent = userGuess;
                i--;
                alert("You Win!");
            }
            else{
                loseCount++;
                yourGuess.textContent = userGuess;
                i--;
                alert("You Lose, Try Again.");
            }

        if(i < 0){
                alert("Game Over!");
            }

        generateRandomLetter();
        win.textContent = winCount;
        lose.textContent = loseCount;
        guess.textContent = i;
        answered.textContent = answerList;
    }

    //letsGo();     THIS CAUSES AN ENDLESS LOOP!

}

//generateRandomLetter();
letsGo();
//compare();