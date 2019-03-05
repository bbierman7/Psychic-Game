//Define variables. User enters letter
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuess = [];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var randomLetter;
// var userGet =


  //Functions:

  //Computer generates random letter
  function letters() {
    randomLetter = alphabet[Math.floor((Math.random() * alphabet.length))]
  }


//listen for user input with keystroke
document.addEventListener("keyup", function (event) {
  console.log(event.key);

  document.getElementById("outcome").innerHTML = "";

  //if user guess equals computer pick, add +1 to wins, say "You won!" and reset 
  if (randomLetter === event.key) {
    wins++;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("outcome").innerHTML = "You won!";
    guessesLeft = 9;
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    randomLetter = alphabet[Math.floor((Math.random() * alphabet.length))]
    }    
    //else subtract -1 from guessesLeft and keep going
  else {
    if(guessesLeft > 0){
    guessesLeft--;
    console.log(guessesLeft);
    userGuess.push(event.key);
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("user-guess").innerHTML = userGuess;
    }
    //reset Game and say "You lost"
    else{
      guessesLeft = 9;
      randomLetter = alphabet[Math.floor((Math.random() * alphabet.length))];
      losses++;
      document.getElementById("losses").innerHTML = losses;
      userGuess = [];
      document.getElementById("outcome").innerHTML = "You lost";
    }
  }
})

// //Tells user how many guesses they have left
// function guessesLeft() {
//   var i;
//   for (i = 9; i <= guessesLeft; i--) {

//     if (userGuess === letters) {
//       wins++ , guessesLeft === 9 //add +1 to wins. Reset guessesLeft to 9
//     }

//     else {
//       losses++ , guessesLeft--
//     }
//   }
// }

          // document.getEklementById("wins").innerHTML = "You won! " + wins;
          // document.getElementById("losses").innerHTML = "Losses: " + losses;
          // document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;   
          // console.log();         
          // document.getElementById("userGuess").innerHTML = "Your guesses so far: " + userGuess;
          // console.log();

