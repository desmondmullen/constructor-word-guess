/*
* **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
 
 * A string value to store the underlying character for the letter
 
 * A boolean value that stores whether that letter has been guessed yet
 
 * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
 
 * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

 3. `Letter.js` *should not* `require` any other files.
*/

const Letter = function (theLetter) {
    this.theLetter = theLetter;
    this.beenGuessed = false;
    this.showIfGuessed = () => {
        if (this.beenGuessed) {
            return this.theLetter;
        } else {
            return '_';
        };
    };
    this.checkGuess = (theGuess) => {
        console.log(`check guess function this letter: ${this.theLetter.toLowerCase()} guess: ${theGuess.toLowerCase()} equals: ${this.theLetter.toLowerCase() === theGuess.toLowerCase()}`);
        if (this.theLetter.toLowerCase() === theGuess.toLowerCase()) {
            this.beenGuessed = true;
        };
    };
};

// let letterTest = new Letter('A');
// letterTest.checkGuess('B');
// console.log('show if guessed: ' + letterTest.showIfGuessed());
// letterTest.checkGuess('A');
// console.log('show if guessed: ' + letterTest.showIfGuessed());

module.exports = Letter;