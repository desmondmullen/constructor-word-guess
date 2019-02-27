const Word = require('./word.js');
const fs = require('fs');
const chalk = require('chalk');

function showInstructions() {
    console.log(chalk.black.bgWhite.bold('\n\nIn this Word Guess game, a random word will be selected and you   '));
    console.log(chalk.black.bgWhite.bold('will try to guess the word, one letter at a time. You will have   '));
    console.log(chalk.black.bgWhite.bold('a limited number of guesses - based on the word\'s length and      '));
    console.log(chalk.black.bgWhite.bold('however many letters might be repeated - to figure out that word. '));
    console.log(chalk.black.bgWhite.bold('                        ----------                                '));
    console.log(chalk.black.bgWhite.bold('If your letter guess is NOT in the word, your guesses remaining   '));
    console.log(chalk.black.bgWhite.bold('will be reduced by 1. The game ends when you guess all the letters'));
    console.log(chalk.black.bgWhite.bold('in the word or you run out of guesses. Good luck!                 \n'));
};

function runGame() {
    fs.readFile('wordsToGuess.txt', 'utf8', (err, data) => {
        if (err) throw err;
        let theWordToGuess = data.split('\n')[Math.floor((Math.random() * 10) + 1)];
        let theNumberOfGuesses = countUniqueLetters(theWordToGuess);
        let theWordObject = new Word(theWordToGuess, theNumberOfGuesses, runGame);
        theWordObject.theWordDisplay();
        theWordObject.promptAndDisplay();
    });
};

function countUniqueLetters(string) {
    var theUniqueOnes = [];
    var theCount = 0;
    var theString = string.split('');
    theString.forEach(element => {
        if (!theUniqueOnes.includes(element)) {
            theUniqueOnes.push(element);
            theCount++;
        }
    });
    return theCount;
};

showInstructions();
runGame();