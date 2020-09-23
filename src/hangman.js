class Hangman {
  constructor(word, guesses) {
    this.word = word.toLowerCase().split(""); //setup the word to lower case split for array
    this.guesses = guesses;
    this.guessedLatters = []; // setup instance for guessed latters
    this.status = "Playing";
  }
  get Puzzle() {
    let puzzle = "";

    this.word.forEach(letter => {
      this.guessedLatters.includes(letter) || letter === " "
        ? (puzzle += letter)
        : (puzzle += "*");
    });
    return puzzle;
  }
  clacStatus() {
    const finished = this.word.every(
      letter => this.guessedLatters.includes(letter) || letter === " "
    );

    if (this.guesses === 0) {
      this.status = "Failed";
    } else if (finished) {
      this.status = "Finished";
    } else {
      this.status = "Playing";
    }
  }
  makeGuess(guess) {
    guess = guess.toLowerCase();
    const unique = !this.guessedLatters.includes(guess);
    const wrong = !this.word.includes(guess);

    if (this.status != "Playing") {
      return;
    }

    if (unique && !wrong) {
      // this.guessedLatters.push(guess);
      this.guessedLatters = [...this.guessedLatters, guess];
    }
    if (unique && wrong) {
      this.guesses--;
    }
    this.clacStatus();
  }
  get statusMessage() {
    if (this.status === "Playing") {
      return `Guesses left: ${this.guesses}`;
    } else if (this.status === "Failed") {
      return `Nice try! the word was "${this.word.join("")}"`;
    } else if (this.status === "Finished") {
      return `Great work! you guessed the word`;
    }
  }
}

export { Hangman as default };
