/*
* **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

  * An array of `new` Letter objects representing the letters of the underlying word

  * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

  * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

 4. `Word.js` *should only* require `Letter.js`
*/
const letter = require('./letter.js');

const Word = function (theWord) {
    this.theWord = theWord.split('');
    this.theWordDisplay = () => {
        let theDisplay = [];
        this.theWord.forEach(function (item) {
            theDisplay.push(new letter(item));
        });
        theDisplay.forEach(function (item) {
            theDisplay.push(item.showIfGuessed());
        });
        console.log(theDisplay.join(' '));
    };
};

let theWordTest = new Word('ermagerd').theWordDisplay();