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
        if (this.theLetter.toLowerCase() === theGuess.toLowerCase()) {
            this.beenGuessed = true;
        };
        return this.showIfGuessed();
    };
};

module.exports = Letter;