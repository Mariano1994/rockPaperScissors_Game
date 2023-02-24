// SELECTING RESULT ELEMENT
const result = document.querySelector(".result");
let userConter = 0;
let computerConter = 0;

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
        userConter++;
        result.textContent = `${userChoice.toUpperCase()} beats CSISSOR!`;
      } else if (userChoice === "paper" && getComputerSelection() === "rock") {
        userConter++;
        result.textContent = `${userChoice.toUpperCase()} beats ROCK!`;
      } else if (
        userChoice === "csissor" &&
        getComputerSelection() === "paper"
      ) {
        userConter++;
        result.textContent = `${userChoice.toUpperCase()} beats PAPER!`;
      } else if (
        getComputerSelection() === "rock" &&
        userChoice === "csissor"
      ) {
        computerConter++;
        result.textContent = ` ROCK beats ${userChoice.toUpperCase()}`;
      } else if (getComputerSelection() === "paper" && userChoice === "rock") {
        computerConter++;
        result.textContent = ` PAPER beats ${userChoice.toUpperCase()}`;
      } else if (
        getComputerSelection() === "csissor" &&
        userChoice === "paper"
      ) {
        computerConter++;
        result.textContent = `CSISSOR beats ${userChoice.toUpperCase()}`;
      } else {
        result.textContent = ` Tied`;
      }

      if (userConter == 5) {
        result.textContent = `You Woonn the Game!!`;
      } else if (computerConter === 5) {
        result.textContent = `You lose the game`;
      }
    });
  });
}

playRound();
