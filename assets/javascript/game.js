//Create constant array of the words to be guessed
var wordBank = ["galaxy", "eclipse", "meteor", "comet", "asteroid", "nebula", "quasar"];

//Create variable to hold randmoly chosen word
var chosenWord = [];

//Create variable for wrong letters
var wrongLetter = [];

//Create variable for guesses remaining
var remainingGuesses = 10;

//Create variable for wins
var wins = 0;

//Create variable for underscores
var underscores = [];

//Assign variables to IDs
var winDiv = document.getElementById("total-wins");
winDiv.setAttribute("class", "game");
var newDiv = document.getElementById("current-word");
newDiv.setAttribute("class", "game");
var guessDiv = document.getElementById("guesses-remaining");
guessDiv.setAttribute("class", "game");
var wrongLetterDiv = document.getElementById("guessed-letters");
wrongLetterDiv.setAttribute("class", "game");

//Create audio variable for winning sound
var audio = new Audio('/sci-fi-sound.mp3');

//Declare global variable for images
var img;

//Create function to reset game
function resetGame() {
    //Chooses random string from wordBank
    chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    //Reset underscores array to empty
    underscores = [];

    //Display number of wins
    winDiv.innerHTML = wins;

    //Reset remaining guesses 
    remainingGuesses = 10;
    guessDiv.innerHTML = remainingGuesses;

    //Reset wrong letters
    wrongLetter = [];
    wrongLetterDiv.innerHTML = wrongLetter;

    //Loop for creating underscores to match chosenWord length
    for (var i = 0; i < chosenWord.length; i++) {
        underscores[i] = "_";
        newDiv.innerHTML = underscores.join(" ");
    }
}

//Create function to reset images
function resetImage(){
var img = document.getElementById("image");   
img.removeChild(img.childNodes[0]);
}

//  ===========  Start Game Loop  ===========  //
resetGame();

// Function is run whenever the user presses a key
document.onkeyup = function (event) {

    //Determines which key was pressed
    var userGuess = event.key;

    //Make sure only keys A to Z are valid
    if (event.keyCode >= 65 && event.keyCode <= 90) {

        //Check if userGuess is included in chosenWord string
        if (chosenWord.indexOf(userGuess) > -1) {

            //Replace underscores with userGuess
            for (var i = 0; i < chosenWord.length; i++) {
                if (chosenWord[i] == userGuess) {
                    underscores[i] = userGuess;
                }
            }
            newDiv.innerHTML = underscores.join(" ");

            //If userGuess is not in chosenWord, push to wrongLetter and remove 1 guess
        } else {
            if (wrongLetter.indexOf(userGuess) == -1) {
                wrongLetter.push(userGuess);
                remainingGuesses--;
                //Push remaining guesses and wrongLetters to HTML
                guessDiv.innerHTML = remainingGuesses;
                wrongLetterDiv.innerHTML = wrongLetter;
            }
        }
    }

    // Add win if underscores are filled with correct letters
    if (underscores.join("") == chosenWord) {
        wins++;
        winDiv.innerHTML = wins;

        //Create images for correct word
        if (underscores.join("") == "comet") {
            img = document.createElement('img');
            img.setAttribute("id", "win-image")
            img.src = "assets/images/comet.gif";
            document.getElementById("image").appendChild(img);
            document.getElementById("win-text").innerHTML = "Comet";
        }
        if (underscores.join("") == "galaxy") {
            img = document.createElement('img');
            img.setAttribute("id", "win-image")
            img.src = "assets/images/galaxy.gif";
            document.getElementById("image").appendChild(img);
            document.getElementById("win-text").innerHTML = "Galaxy";
        }
        if (underscores.join("") == "eclipse") {
            img = document.createElement('img');
            img.setAttribute("id", "win-image")
            img.src = "assets/images/eclipse.gif";
            document.getElementById("image").appendChild(img);
            document.getElementById("win-text").innerHTML = "Eclipse";
        }
        if (underscores.join("") == "meteor") {
            img = document.createElement('img');
            img.setAttribute("id", "win-image")
            img.src = "assets/images/meteor.gif";
            document.getElementById("image").appendChild(img);
            document.getElementById("win-text").innerHTML = "Meteor";
        }
        if (underscores.join("") == "asteroid") {
            img = document.createElement('img');
            img.setAttribute("id", "win-image")
            img.src = "assets/images/asteroid.gif";
            document.getElementById("image").appendChild(img);
            document.getElementById("win-text").innerHTML = "Asteroid";
        }
        if (underscores.join("") == "nebula") {
            img = document.createElement('img');
            img.setAttribute("id", "win-image")
            img.src = "assets/images/nebula.gif";
            document.getElementById("image").appendChild(img);
            document.getElementById("win-text").innerHTML = "Nebula";
        }
        if (underscores.join("") == "quasar") {
            img = document.createElement('img');
            img.setAttribute("id", "win-image")
            img.src = "assets/images/quasar.gif";
            document.getElementById("image").appendChild(img);
            document.getElementById("win-text").innerHTML = "Quasar";
        }


        //Play winning sound
        document.getElementById("audio-win").play();
        resetGame();
        //Run reset function after first win image is appended
        if(wins > 1){
            resetImage();
        }
    }

    //Reset game when remainingGuesses are 0
    if (remainingGuesses == 0) {
        //Play losing sound
        document.getElementById("audio-lose").play();
        document.getElementById("win-text").innerHTML = "Try Again";
        resetGame();
    }

}