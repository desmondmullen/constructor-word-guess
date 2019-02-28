const inquirer = require('inquirer');
let theWordsPicked = [];

function doTest() {
    if (theWordsPicked.length === 10) {
        console.log('limit hit');
        theWordsPicked = [];
    };
    let nonDuplicatePicked = false;
    while (nonDuplicatePicked === false) {
        var theRandomNumber = Math.floor(Math.random() * 10);
        if (!theWordsPicked.includes(theRandomNumber)) {
            theWordsPicked.push(theRandomNumber);
            nonDuplicatePicked = true;
        };
    };
    console.log(theWordsPicked);
    inquirer.prompt([{
        name: 'runAgain',
        type: 'confirm',
        message: 'Do you want to run it again? ',
    }]).then((answer) => {
        if (answer.runAgain) {
            doTest();
        };
    });
};

doTest();
