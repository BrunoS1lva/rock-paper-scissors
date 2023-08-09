// let wins = 0;
let botChoice = undefined;

let buttons = ['rockBtn','scissorsBtn','paperBtn'];
buttons.forEach(button => {
  button = document.getElementById(button);
});
// let rockBtn = document.getElementById("rock-btn");
// let scissorsBtn = document.getElementById("scissors-btn");
// let paperBtn = document.getElementById("paper-btn");

rockBtn.addEventListener("click", userChoice);
scissorsBtn.addEventListener("click", userChoice);
paperBtn.addEventListener("click", userChoice);


botChoice = fun();
console.log(`Bot Choice is ${botChoice}`);

function fun() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return (botChoice = "rock");
      break;
    case 1:
      return (botChoice = "scissors");
      break;
    case 2:
      return (botChoice = "paper");
      break;
    default:
      alert("ERROR! 💀");
  }
}
function userChoice() {
  alert('eureka!')
  // switch (number) {
  //   case 0:
  //     return (userAttack = "rock");
  //     break;
  //   case 1:
  //     return (userAttack = "scissors");
  //     break;
  //   case 2:
  //     return (userAttack = "paper");
  //     break;
  //   default:
  //     alert("ERROR! 💀");
  // }
}
function gameOn(userAttack){
  if(userAttack == 'rock' && botChoice == 'scissors'){
    document.write('You won!');
  }
}