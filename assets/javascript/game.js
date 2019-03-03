// //Identify variables and set values
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesSoFar = //blank

// document.onkeypress = function(event){
//     var key_press = String.fromCharCode(event.guesses);
//     document.getElementById('guesses').innerHTML = guesses;
//     var status = document.getElementById('status');
//     status.innerHTML = "Your Guesses So far: " + key_press;
// }
// function myFunction() {
// //     var x = 
// //     var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// //     var index = Math.floor((Math.random()*alphabet.length));
// //     x.innerHTML = alphabet[index];
// }
function letters() {
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var index = Math.floor((Math.random() * alphabet.length));
    x.innerHTML = alphabet[index];
  }

function keyPressed(event) {
    var x = event.alphabet;
    document.getElementById("guesses").innerHTML = "Your guesses so far: " + x;
  }

 