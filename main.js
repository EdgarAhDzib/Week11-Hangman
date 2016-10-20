var WordSpaces = require('./letter.js');
var Hangman = require('./word.js');
var theWord = require('./game.js');

var keystrokes = require('inquirer');

var play = new Hangman(theWord[0],theWord[1]);
play.chars();

var spaceList = new WordSpaces(theWord[0]);
spaceList.spacesArray();

var counter = 1;

function getTheLetters(){
	spaceList.checkSpaces();

	if (spaceList.hasSpaces === true) {
		keystrokes.prompt([
		{
			"type":"input",
			"name":"letter",
			"message":"Give me a letter!"
		}
		]).then (function(result){
			var lower = result.letter.toLowerCase();
			console.log("\nYou entered " + lower);
			if (play.alphabet.indexOf(lower) === -1) {
				console.log("Sorry, that's not a single letter!");
				spaceList.spacesToFill(lower);
			}
			if (play.chars().indexOf(lower) !== -1) {
				console.log("In the word");
				spaceList.spacesToFill(lower);
				if (play.correctLets.indexOf(lower) === -1) {
					play.correctArr(lower);
				}
			} else {
				console.log("Not in word");
				spaceList.spacesToFill(lower);
				counter++;
			}
			console.log(16-counter + " guesses left!");
			if (play.guesses.indexOf(lower) === -1) {
				play.addLetter(lower);				
			} else {
				console.log("You already guessed this letter!");
				counter++;
			}
			console.log("Your letter guesses: " + play.guesses + "\n ");
			console.log("Correct letters: " + play.correctLets + "\n ");
			if (counter < 16) {
			getTheLetters();
			} else {
				console.log("Sorry, game over! Please try again!");
				console.log(spaceList.word);
			}
		});
	} else {
		console.log("You got it! Way to go!");
		console.log(play.punchline);
	}
}

getTheLetters();