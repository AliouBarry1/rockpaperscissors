let computerNumber = 0;
let userInput = "";
let computerChoice = "";

$(".play").click(function() {
  userInput = $(".input").val();
  if (
    userInput !== "rock" &&
    userInput !== "scissors" &&
    userInput !== "paper"
  ) {
    $(".userChoice").text("Try Again");
  } else {
    $(".userChoice").text(userInput);
  }

  computerNumber;
  computerNumber = Math.random() * 4;
  computerNumber = Math.ceil(computerNumber);

  computerChoice;
  if (computerNumber === 1) {
    computerChoice = "rock";
    $(".computerChoice").text(computerChoice);
  } else if (computerNumber === 2) {
    computerChoice = "paper";
    $(".computerChoice").text(computerChoice);
  } else if (computerNumber === 3) {
    computerChoice = "scissors";
    $(".computerChoice").text(computerChoice);
  }

  if (userInput === computerChoice) {
    $(".result").text("Tie");
  } else if (
    (userInput === "rock" && computerChoice === "scissors") ||
    (userInput === "paper" && computerChoice === "rock") ||
    (userInput === "scissors" && computerChoice === "paper")
  ) {
    $(".result").text("User Won!! :)");
  } else if (
    (userInput === "scissors" && computerChoice === "rock") ||
    (userInput === "rock" && computerChoice === "paper") ||
    (userInput === "paper" && computerChoice === "scissors")
  ) {
    $(".result").text("Computer Won!! :(");
  }
  $("input").val(" ");
});
