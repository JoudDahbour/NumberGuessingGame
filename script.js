function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess() {
    let guess = prompt("Enter your guess (between 1 and 100):");

    while (guess === null || guess.trim() === "" || isNaN(guess) || guess < 1 || guess > 100) {
        if (guess === null) {
            guess = prompt("You can't escape, creator! Enter a number between 1 and 100:");
        } else {
            guess = prompt("'" + guess + "' is not valid! Enter a number between 1 and 100:");
        }
           
    }

    return parseInt(guess);
}

function checkGuess(guess, correctNumber){
    if (guess === correctNumber){
        return "Correct!";
    } else if (guess < correctNumber){
        return "too low!";
    } else {
        return "too high!";
    }
    
}