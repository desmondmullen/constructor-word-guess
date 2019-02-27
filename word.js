/*
* **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

  * An array of `new` Letter objects representing the letters of the underlying word

  * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

  * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

 4. `Word.js` *should only* require `Letter.js`
*/
const Letter = require('./letter.js');
const inquirer = require('inquirer');
let theLettersArr = [];
let theDisplayArr = [];

const Word = function (theWord) {
    this.theWordDisplay = () => {
        theWord.split('').forEach(function (item) {
            theLettersArr.push(new Letter(item));
        });
        this.updateDisplay();
    };
    this.updateDisplay = () => {
        theDisplayArr = [];
        theLettersArr.forEach(function (item) {
            theDisplayArr.push(item.showIfGuessed());
        });
        console.log(theDisplayArr.join(' '));
    };
    this.promptAndDisplay = () => {
        if ((theDisplayArr.join('').split('_').length - 1) > 0) {
            inquirer.prompt([{
                name: 'guess',
                type: 'input',
                message: 'Please enter your guess: ',
            }]).then((answer) => {
                theLettersArr.forEach(function (item) {
                    item.checkGuess(answer.guess);
                });
                updateDisplay();
                promptAndDisplay();
            });
        } else {
            console.log('You guessed the word!');
        };
    };
};

const updateDisplay = function () {
    theDisplayArr = [];
    theLettersArr.forEach(function (item) {
        theDisplayArr.push(item.showIfGuessed());
    });
    console.log(theDisplayArr.join(' '));
};

const promptAndDisplay = function () {
    if ((theDisplayArr.join('').split('_').length - 1) > 0) {
        inquirer.prompt([{
            name: 'guess',
            type: 'input',
            message: 'Please enter your guess: ',
        }]).then((answer) => {
            theLettersArr.forEach(function (item) {
                item.checkGuess(answer.guess);
            });
            updateDisplay();
            promptAndDisplay();
        });
    } else {
        console.log('You guessed the word!');
    };
};

module.exports = Word;