import Hangman from "./hangman";
import getPuzzle from "./requests";
/*
console.log(uuidv4());

console.log(validator.isEmail("Shaimaaalsersy@gmail.com"));
console.log(validator.isEmail("Shimo@123")); */

let puzzleElement = document.querySelector("#puzzle");
let guessesElement = document.querySelector("#guesses");
let game;

// instead of writing the guesses we can take it from keyboard
window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  game.makeGuess(guess);
  render();
});

//Render Func
const render = () => {
  puzzleElement.innerHTML = "";
  guessesElement.textContent = game.statusMessage;

  game.Puzzle.split("").forEach(letter => {
    const letterElment = document.createElement("span");
    letterElment.textContent = letter;
    puzzleElement.appendChild(letterElment);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game = new Hangman(puzzle, 5);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();
