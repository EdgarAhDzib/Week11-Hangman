var Hangman = function(word,punchline){
	this.alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	this.guesses = [];
	this.correctLets = [];
	this.word = word;
	this.punchline = punchline;
	this.chars = function(){
		var letters = this.word.split("");
		return letters;
	}
	this.addLetter = function(char){
		this.guesses.push(char);
		this.guesses.sort();
	}
	this.correctArr = function(char){
		this.correctLets.push(char);
		this.correctLets.sort();
	}
}

module.exports = Hangman;