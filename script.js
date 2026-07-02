function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess() {
    let guess = prompt("Enter your guess (a whole number between 1 and 100):");

    while (guess === null || guess.trim() === "" || isNaN(guess) || guess < 1 || guess > 100 || Number(guess) % 1 !== 0) {
        if (guess === null) {
            guess = prompt("You can't escape, creator! Enter a whole number between 1 and 100:");
        } else {
            guess = prompt("'" + guess + "' is not valid! Enter a whole number between 1 and 100:");
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

function game(){
    const correctNumber = generateRandomNumber();
    let attempts = 0;
    const maxAttempts = 10;
    let won = false;
    let pastGuesses = [];

    console.log("Welcome to the Mind Reader Game!");
    console.log("A veiled figure sits across from you, eyes closed...");
    console.log("[Mind Reader]: I have sealed a number between 1 and 100 within my mind.");
    console.log("[Mind Reader]: Reach into my thoughts and guess the number I am thinking of... if you dare.");
    console.log("[Mind Reader]: You have " + maxAttempts + " visions to guess the number. Let us begin!");

    while (attempts < maxAttempts && won === false){
        const guess = getPlayerGuess();
        
        if (pastGuesses.includes(guess)){
            console.log("[Mind Reader]: You have already used the number " + guess + ". Your visions are clouded. Try a different number.");
            continue;
        }

        pastGuesses.push(guess);
        attempts++;
        const result = checkGuess(guess, correctNumber);

        console.log("Vision " + attempts + " of " + maxAttempts);
        console.log("You sense the number: " + guess);

        if (result === "Correct!"){
            won = true;
            console.log("[Mind Reader]: You...you saw it. You truly read my mind.");
        } else if (result === "too low!"){
            console.log("[Mind Reader]: Your vision is clouded. The number is higher than " + guess);
        } else {
            console.log("[Mind Reader]: Your vision is clouded. The number is lower than " + guess);
        }
    }

    if (won === true){
        console.log("[Mind Reader]: You pierced my thoughts in " + attempts + " visions.")
        console.log("[Mind Reader]: I am impressed. You have a rare gift.");
        console.log("[Mind Reader]: I shall grant you a glimpse into the secrets of the universe.");

    } else {
        console.log("[Mind Reader]: Your visions have faded. The number was " + correctNumber);
        console.log("[Mind Reader]: Perhaps you will return one day, when your mind is sharper.");
        console.log("[Mind Reader]: Until then, farewell.");
    }
}

function startGame() {
    let playAgain = true;

    while (playAgain === true) {
        game();
        let answer = prompt("Do you want to play again? (yes/no)")

        while (answer === null || (answer.toLowerCase().trim() !== "yes" && answer.toLowerCase().trim() !== "no")) {
            answer = prompt("Please answer 'yes' or 'no'. Do you want to play again?");
        }

        if (answer.toLowerCase().trim() === "no") {
            playAgain = false;
            console.log("[Mind Reader]: Thank you for playing! Farewell, until we meet again.");
        }

    }
}

startGame();