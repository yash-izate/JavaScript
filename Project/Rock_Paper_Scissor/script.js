let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
  //rock paper scissor
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const drawGame = () => {
  console.log("game was draw");
}
const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  // generate comp choice 
  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);

  if(userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;

    if(userChoice === "rock") {
      userWin = compChoice === "paper"? false:true;
    } else if (userChoice === "paper") {

      compChoice = "scissors"? false:true;
    } else {
      compChoice = "rock"? false : true;
    }
    
    showWinner(userWin);
  }
}

const showWinner = (userWin) => {
  if (userWin) {
    console.log("you win");
  } else {
    console.log("you loose");
  }
}
