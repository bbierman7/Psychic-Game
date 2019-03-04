//Define variables. User enters letter
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesSoFar=[];


//Computer generates random letter
function letters() {
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var index = Math.floor((Math.random() * alphabet.length));
  x.innerHTML = alphabet[index];
  
}
console.log()
//Determines which key the user pressed
// document.getElementById("letters").innerHTML = 'Your guesses so far: ';
document.onkeyup = function(letters){
  guessesSoFar.textContent = event.key;
};
console.log()
// document.addEventListener("onkeyup", function(){
//   document.getElementById("guesses").innerHTML = " ,";
// });

//Print userGuess next to 'Guesses so far'. Every letter should have a comma next to it.

//If user letter matches computer letter, add +1 to wins. Reset 'Guesses Left' to 9. Computer generates new letter.

//Else, add -1 to 'Guess Left'

//If 'Guess Left' = 0, print "You lose".

