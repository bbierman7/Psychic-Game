//Computer generates random letter
function letters() {
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var index = Math.floor((Math.random() * alphabet.length));
    x.innerHTML = alphabet[index];
  }

//User enters letter
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesSoFar=[]
document.onkeyup=function(event){

})

function keyPressed(event) {
    var x = event.alphabet;
    document.getElementById("guesses").innerHTML = "Your guesses so far: " + x;
  }

//Print user guess next to 'Guesses so far'. Every letter should have a comma next to it.

 

//If user letter matches computer letter, add +1 to wins. Else, add +1 to Losses

