
//sets up an array so you can choose a random word
var wordArray = ["wordone", "wordtwo", "wordthree"];
var blankArray = ["_______", "_______", "_________"];
var randomWord;
var randomWordPlaceHolder;
//a function to choose a random index value; //uses the random number as an index number for your array i.e. chooses a word in the array
function randomIndexValue(){
var randomIndex = Math.floor(Math.random()* wordArray.length);
randomWord = wordArray[randomIndex];
randomWordPlaceHolder = blankArray[randomIndex];
}

randomIndexValue();

//sets a score value, using it right now to track if my guesses are registering
var score = 0;
var alreadyGuessed = ' ';
//logs the randomword so i can see what is a right guess and what isn't
console.log(randomWord);
//set up a score text that will be updated on screen to visualize if i get a correct answer
var wordText = document.getElementById("word");
var scoreText = document.getElementById("score");
var guessLetter = document.getElementById("guessed")
wordText.textContent = randomWordPlaceHolder;

//a function used to replace text in a string
function replaceAt(rword, index, replacement){
     return rword.substr(0, index) + replacement + rword.substr(index + replacement.length);
}

//sets up a key event that watches for you to let go off your key. sets a variable to the key you pressed. //a for loop that loops through the random word to search for the letter you pressed. If your guess is one of the letters in the random word then it adds to score
document.onkeyup = function(event){
    var count = 0;
var userGuess = event.key;
for (let i = 0; i < randomWord.length; i++) {
    if(userGuess === randomWord[i]){
        randomWordPlaceHolder = replaceAt(randomWordPlaceHolder, i, userGuess);
        wordText.textContent = randomWordPlaceHolder;

        count++;
    }
}
//if the letter isn't guessed then it will display that letter. 
if(count == 0){
//if the letter has been added to already guess previously, then dont add it.
    for (let i = 0; i < alreadyGuessed.length; i++) {
        if(userGuess === alreadyGuessed[i])
        return;
    }
    alreadyGuessed += ' ' + userGuess;
    guessLetter.textContent = alreadyGuessed;
}
//adds to score if the word is fully guessed
if(randomWordPlaceHolder === randomWord){
    score++;
    randomIndexValue();
    alreadyGuessed = " ";
    guessLetter.textContent = alreadyGuessed;
    wordText.textContent = randomWordPlaceHolder;
}
//updates the score text before returning
scoreText.textContent = score;

return;
}



