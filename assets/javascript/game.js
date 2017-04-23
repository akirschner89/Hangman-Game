// var firstBand = ["G", "R", "A", "T", "E", "F", "U", "L", "D", "E", "A", "D"];

document.onkeyup = function(event) {

var firstBand = ["G", "R", "A", "T", "E", "F", "U", "L", "D", "E", "A", "D"];
        // Captures the key press, converts it to lowercase, and saves it to a variable.
        var letter = String.fromCharCode(event.keyCode).toUpperCase();

        // If the letter is h, run the following functions/methods.
        if (letter === firstBand.indexOf()) {
          // document.getElementById().innerHTML
          console.log(letter);
        }

        else {
        	console.log("You Lose a life");
        }

     
    };

