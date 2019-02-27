const Letter = require('./letter.js');
const inquirer = require('inquirer');
const chalk = require('chalk');
let theLettersArr = [];
let theDisplayArr = [];
let theLettersGuessed = '';

const Word = function (theWord, theGuessesRemaining) {
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
        console.log('\n     ' + theDisplayArr.join(' ') + '\n');
    };
    this.promptAndDisplay = () => {
        let theNumberLeft = theDisplayArr.join('').split('_').length - 1;
        if (theNumberLeft > 0 && theGuessesRemaining > 0) {
            console.log('You have ' + theGuessesRemaining + ' guesses remaining.\n');
            inquirer.prompt([{
                name: 'guess',
                type: 'input',
                message: 'Please enter your guess: ',
            }]).then((answer) => {
                if (answer.guess.length > 1 || !'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.includes(answer.guess) || answer.guess === '') {
                    console.log(''); //a '\n' cannot be used because it messes up inquirer
                    console.log(chalk.black.bgYellow.bold('Please enter a single letter only.'));
                    console.log('');
                    this.updateDisplay();
                } else {
                    if (theLettersGuessed.includes(answer.guess)) {
                        console.log(''); //a '\n' cannot be used because it messes up inquirer
                        console.log(chalk.black.bgYellow.bold('You already guessed that letter! Please try again.'));
                        console.log('');
                        this.updateDisplay();
                    } else {
                        theLettersArr.forEach(function (item) {
                            item.checkGuess(answer.guess);
                        });
                        this.updateDisplay();
                        if (theNumberLeft === theDisplayArr.join('').split('_').length - 1) {
                            theGuessesRemaining--;
                        };
                    };
                };
                this.promptAndDisplay();
                theLettersGuessed += answer.guess;
            });
        } else {
            if (theGuessesRemaining < 1) {
                let theString = '';
                theLettersArr.forEach(function (item) {
                    theString += item.theLetter;
                });

                console.log(chalk.black.bgMagenta.bold('\nYou ran out of guesses. The word was ' + theString + '.\n'));
            } else {
                console.log(chalk.black.bgGreenBright.bold('\nYay! You guessed the word!\n'));
            };
        };
    };
};

module.exports = Word;