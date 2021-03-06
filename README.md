# constructor-word-guess

**This Constructor Word Guess app uses `node` and the `inquirer`, `fs`, and `chalk` npm modules to create an engaging, extensible word guess game.**

# Features
In addition to the basic functions of picking a random word to guess, collecting player guesses, and tracking and giving feedback to the player, this app does the following:

### ADDITIONAL FEATURES:
* Brief, clear instructions are shown in black-on-white text when `node index` is first invoked.
* The "guesses remaining" is calculated on-the-fly for whatever word is randomly chosen (from the `wordsToGuess.txt` file). This calculation starts with the number of *unique* letters in the word and adds two. For example, "banana" has three unique letters so while it is a six letter word, the player would be given five guesses (three unique letters plus two).
* The `wordToGuess.txt` file contains the words to guess. There is no maximum number of words that can be in this file - the game logic handles picking a truly random word from however many words are in the file.
* The game logic ensures that words will be chosen at random and *will not be duplicated in subsequent rounds* - even if a duplicate random number is generated - until the list of words has been exhausted. Then the random choosing and non-duplicating cycle starts over again.
* Guesses remaining are only decremented when the player's guess does not match a letter in the word.
* If a player types a guess that is not a letter, is more than one letter, or is empty (he/she has hit return without entering a letter), black-on-yellow text guides the player to making a valid guess.
* At the end of a round, the player is asked if he/she wants to play again. The default answer is "yes", so a simple press of the [return] key starts a new round. If the player wishes to replay, the instructions shown at the beginning of the first round are, logically, not shown again.

### SCREENSHOTS:
1. `node index` brings up basic instructions:
![basic instructions](screenshots/1.constructor-word-guess.png)
2. player enters guesses and can choose to play again at the end of each round:
![entering guesses, play again](screenshots/2.entering-guesses-and-play-again.png)
3. in the event of erroneous entries (entering more than one letter at a time, entering characters other than letters), error-checking prompts guide the player:
![error checking](screenshots/3.error-checking.png)