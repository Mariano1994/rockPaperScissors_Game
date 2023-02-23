// SELECTING RESULT ELEMENT
const result = document.querySelector(".result");

// FUNCTION TO GET THE COMPUTER CHOICE
const items = ["Paper", "Rock", "Csissor"];
const getComputerSelection = function () {
  return items[Math.floor(Math.random() * items.length)].toLocaleLowerCase();
};

// FUNCTION TO PLAY THE GAME
function playRound() {
  const userSelection = document.querySelectorAll("a");
  userSelection.forEach((item) => {
    item.addEventListener("click", () => {
      const userChoice = item.textContent.slice(4);

      // CHECKING SELECTION
      if (userChoice === "rock" && getComputerSelection() === "csissor") {
        result.textContent = `You won ${userChoice.toUpperCase()} beats CSISSOR!`;
      } else if (userChoice === "paper" && getComputerSelection() === "rock") {
        result.textContent = `You won ${userChoice.toUpperCase()} beats ROCK!`;
      } else if (
        userChoice === "csissor" &&
        getComputerSelection() === "paper"
      ) {
        result.textContent = `You won ${userChoice.toUpperCase()} beats PAPER!`;
      } else if (
        getComputerSelection() === "rock" &&
        userChoice === "csissor"
      ) {
        result.textContent = `You lose ROCK beats ${userChoice}`;
      } else if (getComputerSelection() === "paper" && userChoice === "rock") {
        result.textContent = `You lose PAPER beats ${userChoice}`;
      } else if (
        getComputerSelection() === "csissor" &&
        userChoice === "paper"
      ) {
        result.textContent = `You lose CSISSOR beats ${userChoice}`;
      } else {
        result.textContent = ` Tied`;
      }
    });
  });
}

// // FUNCTION TO PLAY THE GAME
// const playRound = function (
//   computer = getComputerSelection(),
//   user = getUserChoice()
// ) {
//   if (user === "rock" && computer === "csissor") {
//     return `You Won! ${user} beats ${computer}`;
//   } else if (user === "paper" && computer === "rock") {
//     return `You Won! ${user} beats ${computer}`;
//   } else if (user === "csissor" && computer === "paper") {
//     return `You Won! ${user} beats ${computer}`;
//   } else if (computer === "rock" && user === "csissor") {
//     return `You Lost! ${computer} beats ${user}`;
//   } else if (computer === "paper" && user === "rock") {
//     return `You Lost! ${computer} beats ${user}`;
//   } else if (computer === "csissor" && user === "paper") {
//     return `You Lost! ${computer} beats ${user}`;
//   } else {
//     return "Tied";
//   }
// };

// // FUNCTION TO PLAY THE GAME FIVE TIMES
// const game = function () {
//   console.log(playRound());
// };
// game();
