


	// TODO: 
	var images = {GRATEFULDEAD: 'assets/images/jerry_garcia.png', PHISH: 'assets/images/trey.jpeg', STRINGCHEESE: 'assets/images/cheese.jpeg', GALACTIC: 'assets/images/galactic.jpg', LETTUCE: 'assets/images/lettuce.jpeg'};
	// to look up an image:
	var bands = ["GRATEFULDEAD", "PHISH", "STRINGCHEESE", "GALACTIC", "LETTUCE"];
	// var bands = ["GRATEFULDEAD", "PHISH", "STRINGCHEESE", "GALACTIC", "LETTUCE"]
	var wins = 0;
	var wrongCounter = 15;
	var badLetters = []; 
	var rightLetters = [];
	var randomBand = bands[Math.floor(Math.random() * bands.length)];
	var bandUnderScore = randomBand.split("").map(function(){return "_"});
	document.getElementById("correctLetters").innerHTML = bandUnderScore.join(" ");
	document.getElementById("band-pic").setAttribute('src', images[randomBand]);


function reset() {
	randomBand = bands[Math.floor(Math.random() * bands.length)];
	bandUnderScore = randomBand.split("").map(function(){return "_"});
	document.getElementById("correctLetters").innerHTML = bandUnderScore.join(" ");
	badLetters = [];
	rightLetters = [];
	wrongCounter = 15;
	document.getElementById("winsCounter").innerHTML = wins;
	document.getElementById("wrongLetters").innerHTML ="<h3>" + badLetters + "</h3>";
	document.getElementById("wrongCounter").innerHTML = "<h3>" + wrongCounter + "</h3>";
	document.getElementById("band-pic").setAttribute('src', images[randomBand]);
};



document.onkeyup = function (event) {
	console.log(rightLetters);
// matching keycode numebrs
	var keyGuess = event.keyCode;

	var guess = String.fromCharCode(keyGuess).toUpperCase();
	var index = randomBand.indexOf(guess);
	

	if(!((keyGuess >= 65 && keyGuess <= 90) || (keyGuess >= 97 && keyGuess <= 122))) {
	    return // do nothing
	}

	if ((badLetters.indexOf(guess) != -1) || (rightLetters.indexOf(guess) != -1)) {
		console.log("returning because letter is in badletters or goodletters");
		return // do nothing
	} else if (index >= 0) {
	    while(index >= 0) {
		    bandUnderScore[index] = guess;
		    document.getElementById("correctLetters").innerHTML = "<h3>" + bandUnderScore.join(" ") + "</h3>";
		    index = randomBand.indexOf(guess,index + 1);
		    rightLetters.push(guess);
		    // badLetters.push(guess);
    	}
	} else {
		wrongCounter--;
    	console.log("losing life");
    	document.getElementById("wrongCounter").innerHTML = "<h3>" + wrongCounter + "</h3>";
    	// var badLetters = []; 
    	badLetters.push(guess);
		document.getElementById("wrongLetters").innerHTML ="<h3>" + badLetters + "</h3>";

	}


  //   if (index === -1) {
  //   	wrongCounter--;
  //   	console.log("losing life");
  //   	document.getElementById("wrongCounter").innerHTML = "<h3>" + wrongCounter + "</h3>";
  //   	// var badLetters = []; 
  //   	badLetters.push(guess);
		// document.getElementById("wrongLetters").innerHTML ="<h3>" + badLetters + "</h3>";
  //   };

// if (index >= 0) {

// }
            
	if (bandUnderScore.indexOf("_") == -1) {
					// console.log("inside the bandUnderScore if block")
					wins ++;
					// document.getElementById("wins").innerHTML = "<h3>" + "Wins = " + wins + "</h3>";
					alert("You win! Play again!");
					// location.reload();
					reset();

				
			};

	if (wrongCounter == 0) {
		alert("You lose! Play again!");
		reset();
	}
};

// if (location.reload()) {
// 	wins ++;
// };



// if (wins > 0) {

// 						var wrongCounter = 15;
// 						document.getElementById("wrongCounter").innerHTML = "<h3>" + wrongCounter + "</h3>";
// 						var bands = ["GRATEFULDEAD", "PHISH", "STRINGCHEESE", "GALACTIC", "LETTUCE"];
// 						var randomBand = bands[Math.floor(Math.random() * bands.length)];
// 						var bandUnderScore = randomBand.split("").map(function(){return "_"});
// 						document.getElementById("correctLetters").innerHTML = bandUnderScore.join(" ");
// 						var badLetters = [];
// 						document.getElementById("wrongLetters").innerHTML ="<h3>" + badLetters + "</h3>";

// 			};


// 						// var wrongCounter = 15;
// 						// document.getElementById("wrongCounter").innerHTML = "<h3>" + wrongCounter + "</h3>";
// 						// var bands = ["GRATEFULDEAD", "PHISH", "STRINGCHEESE", "GALACTIC", "LETTUCE"];
// 						// var randomBand = bands[Math.floor(Math.random() * bands.length)];
// 						// var bandUnderScore = randomBand.split("").map(function(){return "_"});
// 						// document.getElementById("correctLetters").innerHTML = bandUnderScore.join(" ");
// 						// var badLetters = []; 
// 		    //         	badLetters.push(guess);
// 						// document.getElementById("wrongLetters").innerHTML ="<h3>" + badLetters + "</h3>";

// if (bandUnderScore.indexOf("_") == -1) {
// 				wins ++;
// 				document.getElementById("wins").innerHTML = "<h3>" + "Wins = " + wins + "</h3>";
// 				alert("You win!");
// 			// 	if (wins + 1) {
// 			// 			var wrongCounter = 15;
// 			// 			document.getElementById("wrongCounter").innerHTML = "<h3>" + wrongCounter + "</h3>";
// 			// 			var bands = ["GRATEFULDEAD", "PHISH", "STRINGCHEESE", "GALACTIC", "LETTUCE"];
// 			// 			var randomBand = bands[Math.floor(Math.random() * bands.length)];
// 			// 			var bandUnder = randomBand.split("").map(function(){return "_"});
// 			// 			document.getElementById("correctLetters").innerHTML = bandUnder.join(" ");
// 			// 			var badLetters = []; 
// 		 //            	// badLetters.push(guess);
// 			// 			document.getElementById("wrongLetters").innerHTML ="<h3>" + badLetters + "</h3>";
						
// 			// }};
// 		};

// if (wins + 1) {

						// var wrongCounter = 15;
						// document.getElementById("wrongCounter").innerHTML = "<h3>" + wrongCounter + "</h3>";
						// var bands = ["GRATEFULDEAD", "PHISH", "STRINGCHEESE", "GALACTIC", "LETTUCE"];
						// var randomBand = bands[Math.floor(Math.random() * bands.length)];
						// var bandUnderScore = randomBand.split("").map(function(){return "_"});
						// document.getElementById("correctLetters").innerHTML = bandUnderScore.join(" ");
						// var badLetters = [];
						// document.getElementById("wrongLetters").innerHTML ="<h3>" + badLetters + "</h3>";
			
// 	// 		};



// 		}};



	// if (wins + 1) {
	// 					var wrongCounter = 15;
	// 					document.getElementById("wrongCounter").innerHTML = "<h3>" + wrongCounter + "</h3>";
	// 					var bands = ["GRATEFULDEAD", "PHISH", "STRINGCHEESE", "GALACTIC", "LETTUCE"];
	// 					var randomBand = bands[Math.floor(Math.random() * bands.length)];
	// 					var bandUnderScore = randomBand.split("").map(function(){return "_"});
	// 					document.getElementById("correctLetters").innerHTML = bandUnderScore.join(" ");
	// 					var badLetters = []; 
	// 	            	// badLetters.push(guess);
	// 					document.getElementById("wrongLetters").innerHTML ="<h3>" + badLetters + "</h3>";
			
	// 		};
// document.keypress = function () {

// 	if (bandUnderScore.indexOf("_") == -1) {
// 				wins ++;
// 				document.getElementById("wins").innerHTML = "<h3>" + "Wins = " + wins + "</h3>";
// 				alert("You win!");
						
// 			};

// if (wins == 1) {
// 						var wrongCounter = 15;
// 						document.getElementById("wrongCounter").innerHTML = "<h3>" + wrongCounter + "</h3>";
// 						var bands = ["GRATEFULDEAD", "PHISH", "STRINGCHEESE", "GALACTIC", "LETTUCE"];
// 						var randomBand = bands[Math.floor(Math.random() * bands.length)];
// 						var bandUnderScore = randomBand.split("").map(function(){return "_"});
// 						document.getElementById("correctLetters").innerHTML = bandUnderScore.join(" ");
// 						var badLetters = []; 
// 		            	// badLetters.push(guess);
// 						document.getElementById("wrongLetters").innerHTML ="<h3>" + badLetters + "</h3>";
			
// 			}};

// if (wins > 0) {
// 						var wrongCounter = 15;
// 						document.getElementById("wrongCounter").innerHTML = "<h3>" + wrongCounter + "</h3>";
// 						var bands = ["GRATEFULDEAD", "PHISH", "STRINGCHEESE", "GALACTIC", "LETTUCE"];
// 						var randomBand = bands[Math.floor(Math.random() * bands.length)];
// 						var bandUnderWin = randomBand.split("").map(function(){return "_"});
// 						document.getElementById("correctLetters").innerHTML = bandUnderWin.join(" ");
// 						var badLetters = []; 
// 		            	// badLetters.push(guess);
// 						document.getElementById("wrongLetters").innerHTML ="<h3>" + badLetters + "</h3>";
	  
// 			// if (bandUnderScore.indexOf("_") == -1) {
// 			// 	wins++;
// 			// 	document.getElementById("wins").innerHTML = "<h3>" + "Wins = " + wins + "</h3>";
// 			// 	alert("You win!");
// 			// 			// var wrongCounter = 15;
// 			// 			// document.getElementById("wrongCounter").innerHTML = "<h3>" + wrongCounter + "</h3>";
// 			// 			// var bands = ["GRATEFULDEAD", "PHISH", "STRINGCHEESE", "GALACTIC", "LETTUCE"];
// 			// 			// var randomBand = bands[Math.floor(Math.random() * bands.length)];
// 			// 			// var bandUnderScore = randomBand.split("").map(function(){return "_"});
// 			// 			// document.getElementById("correctLetters").innerHTML = bandUnderScore.join(" ");
// 			// 			// var badLetters = []; 
// 		 //    //         	badLetters.push(guess);
// 			// 			// document.getElementById("wrongLetters").innerHTML ="<h3>" + badLetters + "</h3>";

// 			// };


// 	}};

// document.onkeypress = function () {

	// var bands = ["GRATEFULDEAD", "PHISH", "STRINGCHEESE", "GALACTIC", "LETTUCE"]
	// var randomBand = bands[Math.floor(Math.random() * bands.length)];
	// var bandUnderScore = randomBand.split("").map(function(){return "_"});
	// // document.getElementById("correctLetters").innerHTML = bandUnderScore.join(" ");

// if (bandUnderScore.indexOf("_") = -1) {
// 				wins ++;
// 				document.getElementById("wins").innerHTML = "<h3>" + "Wins = " + wins + "</h3>";
// 				alert("You win!");
// 						var wrongCounter = 15;
// 						document.getElementById("wrongCounter").innerHTML = "<h3>" + wrongCounter + "</h3>";
// 						var bands = ["GRATEFULDEAD", "PHISH", "STRINGCHEESE", "GALACTIC", "LETTUCE"];
// 						var randomBand = bands[Math.floor(Math.random() * bands.length)];
// 						var bandUnderScore = randomBand.split("").map(function(){return "_"});
// 						document.getElementById("correctLetters").innerHTML = bandUnderScore.join(" ");
// 						var badLetters = []; 
// 		            	badLetters.push(guess);
// 						document.getElementById("wrongLetters").innerHTML ="<h3>" + badLetters + "</h3>";
// 			};

// if (wins == 1) {
// 						var wrongCounter = 15;
// 						document.getElementById("wrongCounter").innerHTML = "<h3>" + wrongCounter + "</h3>";
// 						var bands = ["GRATEFULDEAD", "PHISH", "STRINGCHEESE", "GALACTIC", "LETTUCE"];
// 						var randomBand = bands[Math.floor(Math.random() * bands.length)];
// 						var bandUnderScore = randomBand.split("").map(function(){return "_"});
// 						document.getElementById("correctLetters").innerHTML = bandUnderScore.join(" ");
// 						var badLetters = []; 
// 		            	// badLetters.push(guess);
// 						document.getElementById("wrongLetters").innerHTML ="<h3>" + badLetters + "</h3>";
			
// 			};


// document.onkeyup = function () {
// if (wins > 0) {
// 						var wrongCounter = 15;
// 						document.getElementById("wrongCounter").innerHTML = "<h3>" + wrongCounter + "</h3>";
// 						// var bands = ["GRATEFULDEAD", "PHISH", "STRINGCHEESE", "GALACTIC", "LETTUCE"];
// 						// var randomBand = bands[Math.floor(Math.random() * bands.length)];
// 						// var bandUnderScore = randomBand.split("").map(function(){return "_"});
// 						document.getElementById("correctLetters").innerHTML = bandUnderScore.join(" ");
// 						var badLetters = []; 
// 		            	// badLetters.push(guess);
// 						document.getElementById("wrongLetters").innerHTML ="<h3>" + badLetters + "</h3>";

// 			}};

// if (bandUnderScore.indexOf("_") == -1) {
// 	wins++;
// 	alert("You win!");
// };

// if (wrongCounter <= 0) {
// 	alert("You lose!");
// 	var randomBand = bands[Math.floor(Math.random() * bands.length)];
// 	var bandUnderScore = randomBand.split("").map(function(){return "_"});
// 	document.getElementById("correctLetters").innerHTML = bandUnderScore.join(" ");
// 	document.getElementById("wrongCounter").innerHTML = wrongCounter;



// };


// bands[Math.floor(Math.random() * bands.length)];


// document.onkeyup = { 
// 	console.log(bands[Math.floor(Math.random() * bands.length)]);
// 	// document.qetElementById("correctLetters").innerHTML = function (writeLine) {
// 		// console.log(bands[Math.floor(Math.random() * bands.length)]).split("");

// };



// Set number of wins and guesses available for the first band
// var wins = 0;
// // var numberOfGuess = 15;
// //  // (how to limit at 0 and move onto the next band???)
// var numberOfGuess = 15;


// // declare my array of bands
// var headyHangman = {


// Band_1: document.onkeyup = function(band) {

// // 		 // (how to limit at 0 and move onto the next band???)
// // 		// var numberOfGuess = 15;
// // 		// define the first band for hangman as a variable
// 		var firstBand = ["G", "R", "A", "T", "E", "F", "U", "L", "D", "E", "A", "D"];
// // 		// var wrongGuesses = ();

// // 		// test new var to replace correct guesses in the correct index in the html
// 		var correctLetter = "<h3>" + ["_ " "_ " "_ " "_ " "_ " "_ " "_ " "_ " "_ " "_ " "_ " "_ "] + "</h3>";
// // 		// var correctLetter = <h3> + ["_ " "_ " "_ " "_ " "_ " "_ " "_ " "_ " "_ " "_ " "_ " "_ "] + </h3>;
		

				
        
// //         var letter = String.fromCharCode(event.keyCode).toUpperCase();

// //         // If the letter is in the var firstBand, run the following functions/methods.
//         if (firstBand.indexOf(letter) >= 0) {
// //         		// find the index of firstBand that the guess is 
//         		console.log(firstBand.indexOf(letter));



// //         		// putting this here b/c it's so much closer
// //         			document.querySelector("#correctLetters").innerHTML = letter


// //         		// test with splice

//         		console.log(correctLetter.splice ([firstBand.indexOf(letter)], 1, letter));


//         		// find that index in the correctLetter variable and replace the _ with the letter
//         		// function (replace) {
//         		// 	correctletter = [0][firstBand.indexOf(letter)];
//         		// };

//         		// take letter from the index number of first band and place it in the same index of correctLetter
//         		// console.log(correctletter = [firstBand.indexOf(letter)]);

//         		// document.querySelector("#correctLetters").innerHTML = correctLetter;

//         // return that letter in the id correctLetters in the html
// 		          // document.querySelector("#correctLetters").innerHTML = (correctletter = [firstBand.indexOf(letter)]);
// 		          // console.log(letter);
//         }

//         else {
// //         // the guess counter decreases by 1 & add that letter to the incorrect guesses section
//         	numberOfGuess--;
//         	var wrongGuesses = [];
//         	// wrongGuesses.push(letter);
//         	// console.log("You Lose a " + letter);
//         	wrongGuesses.push(letter);
//         	document.querySelector("#wrongLetters").innerHTML = wrongGuesses;
//         // how to continue to add ALL of the wrong guesses, not just the most recent
//         	document.querySelector("#wrongCounter").innerHTML = numberOfGuess;

//         }

//         // if (numberOfGuess === 0) {
//         // 	alert("Sorry you're out of guesses!");
//         // 	headyHangman.Band_2;
//         // }

//         // if (letter === "G" && letter === "R" && letter === "A" && letter === "T" && letter === "E" && letter === "F" && letter === "U" && letter === "L" && letter === "D") {
//         // 	wins++;
//         // }

//         // if (forEach(firstBand.indexOf(letter))) {
//         // 	wins++;
//         // }
     
//     },


// // second value ie second band for game
// // Band_2: document.onkeyup = function(band) {

// // 		 // (how to limit at 0 and move onto the next band???)
// // 		var numberOfGuess = 15;
// // 		// define the first band for hangman as a variable
// // 		var firstBand = ["G", "R", "A", "T", "E", "F", "U", "L", "D", "E", "A", "D"];
// // 		// var wrongGuesses = [];

// // 		// test new var to replace correct guesses in the correct index in the html
// // 		// var correctLetter = "<h3>" + ["_ " "_ " "_ " "_ " "_ " "_ " "_ " "_ " "_ " "_ " "_ " "_ "] + "</h3>";
				
        
// //         var letter = String.fromCharCode(event.keyCode).toUpperCase();

// //         // If the letter is in the var firstBand, run the following functions/methods.
// //         if (firstBand.indexOf(letter) >= 0) {
// //         		// find the index of firstBand that the guess is 
// //         		// console.log(firstBand.indexOf(letter));



// //         		// putting this here b/c it's so much closer
// //         			document.querySelector("#correctLetters").innerHTML = letter


// //         		// test with splice

// //         		// console.log(correctLetter.splice ([firstBand.indexOf(letter)], 1, letter));


// //         		// find that index in the correctLetter variable and replace the _ with the letter
// //         		// function (replace) {
// //         		// 	correctletter = [0][firstBand.indexOf(letter)];
// //         		// };

// //         		// take letter from the index number of first band and place it in the same index of correctLetter
// //         		// console.log(correctletter = [firstBand.indexOf(letter)]);

// //         		// document.querySelector("#correctLetters").innerHTML = correctLetter;

// //         // return that letter in the id correctLetters in the html
// // 		          // document.querySelector("#correctLetters").innerHTML = (correctletter = [firstBand.indexOf(letter)]);
// // 		          // console.log(letter);
// //         }

// //         else {
// //         // the guess counter decreases by 1 & add that letter to the incorrect guesses section
// //         	numberOfGuess--;
// //         	// wrongGuesses.push(letter);
// //         	// console.log("You Lose a " + letter);
// //         	document.querySelector("#wrongLetters").innerHTML = letter;
// //         // how to continue to add ALL of the wrong guesses, not just the most recent
// //         	document.querySelector("#wrongCounter").innerHTML = numberOfGuess;

// //         }

     
// //     };


// };

// headyHangman.Band_1;

// if (wins === 1 || numberOfGuess === 0) {
// 	alert("Next band bro!")
// 	headyHangman.Band_2;
// }

// // if (wins === 2) {
// // 	headyHangman.Band_3;
// // }

// // etc.....

