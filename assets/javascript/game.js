
//sets up an array so you can choose a random word
var wordArray = ["a r t h a s", "b l o o d l u s t", "b l i z z a r d", "t h r a l l", "o r g r i m m a r", "s t o r m w i n d", "p a l a d i n", "m a g e", "s h a m a n","n a x x r a m a s","d r u i d", " p r i e s t", "v a r y i a n", "d r a g o n", "g h o u l"];
var blankArray = ["_ _ _ _ _ _", "_ _ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _", "_ _ _ _ _ _", "_ _ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _ _", "_ _ _ _ _ _ _", "_ _ _ _", "_ _ _ _ _ _", "_ _ _ _ _ _ _ _ _", "_ _ _ _ _", "_ _ _ _ _ _", "_ _ _ _ _ _ _","_ _ _ _ _ _","_ _ _ _ _"];
var randomWord;
var randomWordPlaceHolder;
var lives = 5;
var previousIndex = [];
var gameStarted = false;
var hangCount=0;


//sets a function to start game on key press. 
document.onkeyup = function(event){
    if( !gameStarted){
        gameStarted = true;
        document.getElementsByClassName("blinking")[0].innerHTML = '<br>';
}
//a function to choose a random index value; //uses the random number as an index number for your array i.e. chooses a word in the array
function randomIndexValue(){
var randomIndex = Math.floor(Math.random()* wordArray.length);
randomWord = wordArray[randomIndex];
randomWordPlaceHolder = blankArray[randomIndex];
for (let i = 0; i < previousIndex.length; i++) {
    if( previousIndex[i] === randomWord){
        randomIndexValue();
    }
    
}
}

randomIndexValue();

//sets a score value, using it right now to track if my guesses are registering
var score = 0;
var alreadyGuessed = ' ';
//set up a score text that will be updated on screen to visualize if i get a correct answer
var wordText = document.getElementById("word");
var scoreText = document.getElementById("score");
var guessLetter = document.getElementById("guessed")
var livesText = document.getElementById("lives");
var imageChange = document.getElementById("hangimage");


//sets the starting contect for the words.
wordText.textContent = randomWordPlaceHolder;
livesText.textContent = "Guesses remaining: " + lives;
scoreText.textContent = "score " + score;
guessLetter.innerHTML = "Used Letters: <br>" + alreadyGuessed;

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
    hangCount++;
    alreadyGuessed += ' ' + userGuess;
    guessLetter.innerHTML = 'Used Letters: <br>' + alreadyGuessed;
    lives--;
    livesText.textContent = "You have " + lives + " guesses left";
    if(hangCount == 1){
        imageChange.src = "./assets/images/hangman2.jpg";
    }
    if(hangCount == 2){
        imageChange.src = "./assets/images/hangman3.jpg";
    }
    if(hangCount == 3){
        imageChange.src = "./assets/images/hangman4.jpg";
    }
    if(hangCount == 4){
        imageChange.src = "./assets/images/hangman5.jpg";
    }
    if(hangCount == 5){
        imageChange.src = "./assets/images/hangman6.jpg";
    }
    if(lives === 0){
        document.getElementsByClassName("blinking")[0].innerHTML = 'YOU LOSE!!! <br> press any button to restart';
        document.onkeyup = function(event){
            location.reload();
        }
    }
}

//adds to score if the word is fully guessed
if(randomWordPlaceHolder === randomWord){
    previousIndex.push(randomWord);

    score++;
    randomIndexValue();
    alreadyGuessed = " ";
    guessLetter.textContent = alreadyGuessed;
    wordText.textContent = randomWordPlaceHolder;
    lives = 5;
    hangCount = 0;

    
}
//updates the score text before returning
scoreText.textContent = 'score:' + score;
livesText.textContent = "Guesses remaining: " + lives;

return;
}

}



