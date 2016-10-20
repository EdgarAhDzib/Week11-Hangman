var lettersToSpaces = [];

var WordSpaces = function(word){
	this.word = word;
	this.hasSpaces = true;
	this.letters = this.word.split("");
	this.spacesArray = function(){
		lettersToSpaces = this.word.split("");
		for (i=0; i<lettersToSpaces.length; i++) {
			lettersToSpaces.splice(i,1,"_");
		}
		var fullSpaceString = lettersToSpaces.join(" ");
		console.log(fullSpaceString + "\n");
	}
	this.spacesToFill = function(char){
		if (lettersToSpaces.indexOf("_") !== -1) {
			this.hasSpaces = true;
			for (i=0; i<this.letters.length; i++) {
				if (this.letters[i] === char) {
					lettersToSpaces.splice(i,1,char);
				}
			}
			var fillingSpaces = lettersToSpaces.join(" ");
			console.log(fillingSpaces);
		}
	}
	this.checkSpaces = function(){
		if (lettersToSpaces.indexOf("_") === -1) {
			console.log(this.word);
			this.hasSpaces = false;
		}
	}
}

module.exports = WordSpaces;