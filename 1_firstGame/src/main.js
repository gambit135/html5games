/*
// Hello World
const gameTypeString = "Telegram Bot";
alert (`Let's make a ${gameTypeString} game!`);
*/

const myGuess = Math.floor(Math.random() * 20 /*+ 1*/);
let guesses = 0;
let guess;
let done = false;
while (!done){
    guess = parseInt(prompt("What number am I thinking of?! " + myGuess), 10);
    guesses++;
    
    switch (true){
        case (guess < myGuess):
            alert("Go Higher!");
            break;
        case (guess > myGuess):
            alert("Go Lower!");
            break;
        default:
            done = true;
            alert(`Well done! Finished in ${guesses}  guesses`);
            guesses = 0;
            break;
    }
}