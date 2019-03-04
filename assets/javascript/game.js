//Define variables. User enters letter
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuess=[,];


//Functions:

    //Computer generates random letter
    function letters() {
      var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
      var index = Math.floor((Math.random() * alphabet.length));
      x.innerHTML = alphabet[index];
      console.log();
    }

    //User presses any key
      function userGuess(event){
        var x = event.key;
      }

    function guessesLeft(){
          var i;
          for(i = 9; i <= guessesLeft; i--){
              if(userGuess === letters){
                wins++, guessesLeft === 9 //add +1 to wins. Reset guessesLeft to 9
                console.log()
              }
              else{
                losses++, guessesLeft--
                console.log()
              }
          }
    }

