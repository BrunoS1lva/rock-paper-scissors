let userWins = 0;
let botWins = 0;
let numberBattles = 0;
let userLifes = 3;
let botLifes = 3;

const rockBtn = document.getElementById("rock-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const paperBtn = document.getElementById("paper-btn");
const reloadBtn = document.getElementById("try-again-btn");

const userHeartsSpan = document.getElementById("user-hearts");
const botHeartsSpan = document.getElementById("bot-hearts");
const resultContainer = document.getElementById("result-container");

function saveState() {
  const state = {
    userWins,
    botWins,
    numberBattles,
    userLifes,
    botLifes,
    resultsHTML: resultContainer.innerHTML,
  };
  localStorage.setItem("rpsGameState", JSON.stringify(state));
}

function loadState() {
  const saved = localStorage.getItem("rpsGameState");
  if (!saved) return false;
  try {
    const state = JSON.parse(saved);
    userWins = state.userWins;
    botWins = state.botWins;
    numberBattles = state.numberBattles;
    userLifes = state.userLifes;
    botLifes = state.botLifes;
    resultContainer.innerHTML = state.resultsHTML;
    updateLifesDisplay();
    if (userWins >= 3 || botWins >= 3) {
      disableBtns();
      reloadBtn.style.display = "block";
    }
    return true;
  } catch {
    return false;
  }
}

rockBtn.disabled = false;
scissorsBtn.disabled = false;
paperBtn.disabled = false;

rockBtn.addEventListener("click", () => gameOn("rock"));
scissorsBtn.addEventListener("click", () => gameOn("scissors"));
paperBtn.addEventListener("click", () => gameOn("paper"));
reloadBtn.addEventListener("click", resetGame);

function botChoiceMaker() {
  return ["rock", "scissors", "paper"][Math.floor(Math.random() * 3)];
}

function gameOn(userAttack) {
  if (rockBtn.disabled) return;
  const botChoice = botChoiceMaker();
  numberBattles++;
  if (
    (userAttack === "rock" && botChoice === "scissors") ||
    (userAttack === "scissors" && botChoice === "paper") ||
    (userAttack === "paper" && botChoice === "rock")
  ) {
    battle("player");
    resultMaker(userAttack, botChoice, "WON 🥳");
  } else if (userAttack === botChoice) {
    resultMaker(userAttack, botChoice, "TIE");
  } else {
    battle("bot");
    resultMaker(botChoice, userAttack, "LOST 🥲");
  }
  saveState();
}

function resultMaker(userAttack, botChoice, result) {
  const resultElement = document.createElement("p");
  if (result === "WON 🥳" || result === "LOST 🥲") {
    resultElement.textContent = `ROUND ${numberBattles} | You ${result} because you chose ${userAttack} and the bot chose ${botChoice}.`;
  } else {
    resultElement.textContent = `ROUND ${numberBattles} | It's a TIE! because you chose ${userAttack} and the bot chose ${botChoice}.`;
  }
  resultContainer.appendChild(resultElement);
  resultContainer.scrollTop = resultContainer.scrollHeight;
}

function disableBtns() {
  rockBtn.disabled = true;
  scissorsBtn.disabled = true;
  paperBtn.disabled = true;
  reloadBtn.style.display = "block";

  rockBtn.style.backgroundColor = "transparent";
  scissorsBtn.style.backgroundColor = "transparent";
  paperBtn.style.backgroundColor = "transparent";
}

function resetGame() {
  localStorage.removeItem("rpsGameState");
  location.reload();
}

function battle(battleWinner) {
  if (battleWinner === "player") {
    userWins++;
    botLifes--;
  } else if (battleWinner === "bot") {
    botWins++;
    userLifes--;
  }
  updateLifesDisplay();

  if (userWins === 3) {
    swal("You won the match! You are a master of Rock Paper Scissors!!", {
      button: "Let's goo",
    });
    disableBtns();
  } else if (botWins === 3) {
    swal("SKYNET wins this time!", {
      button: "Better luck next time!",
    });
    disableBtns();
  }
}

function updateLifesDisplay() {
  userHeartsSpan.textContent = "❤️".repeat(userLifes) + (userLifes === 0 ? "☠️" : "");
  botHeartsSpan.textContent = "❤️".repeat(botLifes) + (botLifes === 0 ? "☠️" : "");
}

loadState();
