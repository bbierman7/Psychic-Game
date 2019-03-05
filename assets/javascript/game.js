//Define variables. User enters letter
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuess = [,];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var randomLetter;
var userGet =


  //Functions:

  //Computer generates random letter
  function letters() {
    randomLetter = alphabet[Math.floor((Math.random() * alphabet.length))]
  }

//User presses any key
function userGuess(event) {
  event.key;
}

document.addEventListener("keyup", function (event) {
  console.log(event.key);

  if (randomLetter === event.key) {
    wins++;
    document.getElementById("wins").innerHTML = wins;
    guessesLeft = 9;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    randomLetter = alphabet[Math.floor((Math.random() * alphabet.length))]
  } else {
    if(guessesLeft=0){
    guessesLeft--;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    }
  }
})

//Tells user how many guesses they have left
function guessesLeft() {
  var i;
  for (i = 9; i <= guessesLeft; i--) {

    if (userGuess === letters) {
      wins++ , guessesLeft === 9 //add +1 to wins. Reset guessesLeft to 9
    }

    else {
      losses++ , guessesLeft--
    }
  }
}

          // document.getEklementById("wins").innerHTML = "You won! " + wins;
          // document.getElementById("losses").innerHTML = "Losses: " + losses;
          // document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;   
          // console.log();         
          // document.getElementById("userGuess").innerHTML = "Your guesses so far: " + userGuess;
          // console.log();

