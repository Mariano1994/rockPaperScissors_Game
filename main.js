// FUNCTION TO GET THE USER CHOSE
const getUserChoice = function () {
  return prompt("Infomr you chose: ROCK PAPER or CSISSOR").toLocaleLowerCase();
};

// FUNCTION TO GET THE COMPUTER CHOSE
const items = ["Paper", "Rock", "Scissor"];
const getComputerSelection = function () {
  return items[Math.floor(Math.random() * items.length)].toLocaleLowerCase();
};

// FUNCTION TO PLAY HE GAME
const playRound = function (
  computer = getComputerSelection(),
  user = getUserChoice()
) {
  if (user === "rock" && computer === "csissor") {
    return `You Won! ${user} beats ${computer}`;
  } else if (user === "paper" && computer === "rock") {
    return `You Won! ${user} beats ${computer}`;
  } else if (user === "csissor" && computer === "paper") {
    return `You Won! ${user} beats ${computer}`;
  } else if (computer === "rock" && user === "csissor") {
    return `You Lost! ${computer} beats ${user}`;
  } else if (computer === "paper" && user === "rock") {
    return `You Lost! ${computer} beats ${user}`;
  } else if (computer === "csissor" && user === "paper") {
    return `You Lost! ${computer} beats ${user}`;
  } else {
    return "Tied";
  }
};

console.log(playRound());
