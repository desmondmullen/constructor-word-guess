/*
* **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses
*/
const Word = require('./word.js');
const inquirer = require('inquirer');

let theWordTest = new Word('ermagerd').theWordDisplay();
theWordTest.promptAndDisplay;