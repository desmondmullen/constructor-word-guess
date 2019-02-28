# constructor-word-guess

**This Constructor Word Guess app uses `node` and the `inquirer`, `fs`, and `chalk` npm modules to create an engaging, extensible word guess game**

# Features
In addition to the basic functions of picking a random word to guess, collecting player guesses, and tracking and giving feedback to the player, this app does the following:

### ADDITIONAL FEATURES:
* Brief, clear instructions are shown in black-on-white text when `node index` is first invoked. If the player wishes to replay at the end of a round, the instructions are, logically, not shown again.
* The "guesses remaining" is calculated on-the-fly for whatever word is randomly chosen (from the `wordsToGuess.txt` file). This calculation starts with the number of *unique* letters in the word and adds two. For example, "banana" has three unique letters so while it is a six letter word, the player will be given five guesses (three unique letters plus two).
* Guesses remaining are only decremented when the player's guess does not match a letter in the word.
* If a player types a guess that is not a letter, is more than one letter, or is empty (he/she has hit return without entering a letter), black-on-yellow text guides the player to making a valid guess.

### SCREENSHOTS:
1. `node index` brings up basic instructions:
![basic instructions](screenshots/1.constructor-word-guess.png)
2. player enters guesses and can choose to play again at the end of each round:
![entering guesses, play again](screenshots/2.entering-guesses-and-play-again.png)
3. in the event of erroneous entries (entering more than one letter at a time, entering characters other than letters), error-checking prompts guide the player:
![error checking](screenshots/3.error-checking.png)