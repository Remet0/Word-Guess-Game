
//sets up an array so you can choose a random word
var wordArray = ["wordone", "wordtwo", "wordthree"];
//selects a random number that you will later use to get your random word
var randomIndex = Math.floor(Math.random()* wordArray.length);
//uses the random number as an index number for your array i.e. chooses a word in the array
var randomWord = wordArray[randomIndex];
//sets a score value, using it right now to track if my guesses are registering
var score = 0;
//logs the randomword so i can see what is a right guess and what isn't
console.log(randomWord);
//set up a score text that will be updated on screen to visualize if i get a correct answer
var scoreText = document.getElementById("score");
//sets up a key event that watches for you to let go off your key
document.onkeyup = function(event){
//sets a variable to the key you pressed
var userGuess = event.key;

//a for loop that loops through the random word to search for the letter you pressed
for (let i = 0; i < randomWord.length; i++) {

//if your guess is one of the letters in the random word then it adds to score
    if(userGuess === randomWord[i]){
        score++;
    }
    
}
//updates the score text before returning
scoreText.textContent = score;
return;
}


