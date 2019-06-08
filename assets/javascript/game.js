
//sets up an array so you can choose a random word
var wordArray = ["wordone", "wordtwo", "wordthree"];
var blankArray = ["_______", "_______", "_________"];
//selects a random number that you will later use to get your random word. //uses the random number as an index number for your array i.e. chooses a word in the array
var randomIndex = Math.floor(Math.random()* wordArray.length);
var randomWord = wordArray[randomIndex];
var randomWordPlaceHolder = blankArray[randomIndex];
//sets a score value, using it right now to track if my guesses are registering
var score = 0;
//logs the randomword so i can see what is a right guess and what isn't
console.log(randomWord);
//set up a score text that will be updated on screen to visualize if i get a correct answer
var wordText = document.getElementById("word");
var scoreText = document.getElementById("score");

wordText.textContent = randomWordPlaceHolder;

//a function used to replace text in a string
function replaceAt(rword, index, replacement){
     return rword.substr(0, index) + replacement + rword.substr(index + replacement.length);

}

//sets up a key event that watches for you to let go off your key. sets a variable to the key you pressed. //a for loop that loops through the random word to search for the letter you pressed. If your guess is one of the letters in the random word then it adds to score
document.onkeyup = function(event){

var userGuess = event.key;
for (let i = 0; i < randomWord.length; i++) {
    if(userGuess === randomWord[i]){
        console.log(userGuess);
        randomWordPlaceHolder = replaceAt(randomWordPlaceHolder, i, userGuess);
        wordText.textContent = randomWordPlaceHolder;
        console.log(randomWordPlaceHolder);
        //score++;
    }
    
}
//updates the score text before returning
scoreText.textContent = score;

return;
}



