//Assignment 1: The below program is to guess the correct number between 1 to 100
const readline = require("readline");
const readCommandLineInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class GuessGame {
  private _correctAnswer: number;
  private _hasUserGuessedCorrectAnswer: boolean;
  private _guessedAnswer: number | null;
  private _noOfGuesses: number;

  constructor() {
    this._correctAnswer = Math.floor(Math.random() * 100 + 1);
    this._hasUserGuessedCorrectAnswer = false;
    this._guessedAnswer = null;
    this._noOfGuesses = 0;
  }

  isInputANumber(userInput: string): boolean {
    return /^[+-]?\d+(\.\d+)?$/.test(userInput.trim());
  }

  isValidGuess(): boolean {
    return !!this._guessedAnswer && this._guessedAnswer >= 1 && this._guessedAnswer <= 100;
  }

  isCorrectGuess(newGuess: number): boolean {
    this._guessedAnswer = newGuess;
    if (!this.isValidGuess()) {
      console.log("I wont count this one Please enter a number between 1 to 100");
      return false;
    }
    this._noOfGuesses++;
    if (this._guessedAnswer < this._correctAnswer) console.log("Too low. Guess again");
    else if (this._guessedAnswer > this._correctAnswer) console.log("Too High. Guess again");
    else {
      console.log(`You guessed it in ${this._noOfGuesses} guesses!`);
      this._hasUserGuessedCorrectAnswer = true;
      return true;
    }
    return false;
  }

  play() {
    if (this._hasUserGuessedCorrectAnswer) return;
    readCommandLineInput.question("Guess the answer between 1 and 100: ", async (answer: string) => {
      if (!this.isInputANumber(answer)) {
        console.log("I wont count this one Please enter a number between 1 to 100");
      } else {
        var userGuess = Number(answer);
        if (this.isCorrectGuess(userGuess)) readCommandLineInput.close();
      }
      this.play();
    });
  }
}

var guess = new GuessGame();
guess.play();
