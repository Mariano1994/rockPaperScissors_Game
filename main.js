const userName = prompt("inform your name");
alert(`Welcome to Rock Paper Scissor Game ${userName}.
Let's play!!`);

const userChose = prompt(
  "Infomr you chose: ROCK PAPER or CSISSOR"
).toLocaleLowerCase();

const items = ["Paper", "Rock", "Scissor"];
const computerChose =
  items[Math.floor(Math.random() * items.length)].toLowerCase();

if (userChose === "rock" && computerChose === "csissor") {
  console.log(`Congratulations! ${userName} you Won!`);
} else if (userChose === "paper" && computerChose === "rock") {
  console.log(`Congratulations! ${userName} you Won!`);
} else if (userChose === "csissor" && computerChose === "paper") {
  console.log(`Congratulations! ${userName} you Won!`);
} else if (computerChose === "rock" && userChose === "csissor") {
  console.log(`Sorry ${userName} you lost`);
} else if (computerChose === "paper" && userChose === "rock") {
  console.log(`Sorry ${userName} you lost`);
} else if (computerChose === "csissor" && userChose === "paper") {
  console.log(`Sorry ${userName} you lost`);
} else {
  console.log("Tied");
}