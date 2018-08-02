//Create constant array of the words to be guessed
var wordBank = ["galaxy", "eclipse", "meteor", "comet", "asteroid", "nebula", "quasar"];

//Create variable that chooses words randomly
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(chosenWord);

//Creates variables for wrong letters
var wrongLetter = [];

//Create variable for guesses remaining
var remainingGuesses = 10;

//Create variable for wins
var wins = 0;

//Creates string of underscores based on length of chosenWord
var underscores = [];
for (var i = 0; i < chosenWord.length; i++) {
    underscores[i] = "_";
}

//Insert starting wins to 0 in html
var winDiv = document.getElementById("total-wins");
winDiv.innerHTML = wins;
winDiv.setAttribute("class", "game");

//Insert underscores into html
var newDiv = document.getElementById("current-word");
newDiv.innerHTML = underscores.join(" ");
newDiv.setAttribute("class", "game");

//Insert guesses remaining into html
var guessDiv = document.getElementById("guesses-remaining");
guessDiv.innerHTML = remainingGuesses;
guessDiv.setAttribute("class", "game");

//Insert wrongLetter array into html
var wrongLetterDiv = document.getElementById("guessed-letters");
wrongLetterDiv.innerHTML = wrongLetter;
wrongLetterDiv.setAttribute("class", "game");

//  ===========  Start Game Loop  ===========  //

// Function is run whenever the user presses a key
document.onkeyup = function (event) {

    //Determines which key was pressed
    var userGuess = event.key;

    //Check if userGuess is included in chosenWord string
    if (chosenWord.indexOf(userGuess) > -1) {

        //Replace underscores with userGuess
        for (var i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] == userGuess) {
                underscores[i] = userGuess;
            }
        }
        newDiv.innerHTML = underscores.join(" ");

        // Alert you win if underscores are filled with correct letters
        if (underscores.join("") == chosenWord) {
            wins++;
            winDiv.innerHTML = wins;
        }

        //If userGuess is not in chosenWord, push to wrongLetter and remove 1 guess
    } else {
        wrongLetter.push(userGuess);
        remainingGuesses--;
    }

    //Push remaining guesses and letters guessed to HTML
    guessDiv.innerHTML = remainingGuesses;
    wrongLetterDiv.innerHTML = wrongLetter;

    //Reload page when remainingGuesses are 0
    if (remainingGuesses == 0) {
        location.reload();
    }

}
