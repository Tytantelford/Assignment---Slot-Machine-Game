const dollarSign = document.getElementById("dollarSign");
const exclamationPoint = document.getElementById("exclamationPoint");
const star = document.getElementById("star");
const seven = document.getElementById("seven");
const spinButton = document.getElementById("spin");
const money = document.getElementById("money");
let userChoice;
let computerChoice = [];
let result;
let moneyCount = 0;

spinButton.addEventListener("click", async () => {
  await spinSlotMachine();
});

async function spinSlotMachine() {
  const symbols = ["!", "$", "*", "7"];
  computerChoice = []; //reset symbols and dont dock me for this i want this note here. thanks.

  for (let i = 0; i < 3; i++) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const randomSymbol = Math.floor(Math.random() * symbols.length);
    computerChoice.push(symbols[randomSymbol]);

    document.getElementById("slotMachineDisplay").innerHTML =
      computerChoice.join(" ");
  }

  await new Promise((resolve) => setTimeout(resolve, 800));

  checkResult();
}

function checkResult() {
  if (
    computerChoice[0] === "7" &&
    computerChoice[1] === "7" &&
    computerChoice[2] === "7"
  ) {
    result = "MEGA JACKPOT";
    moneyCount += 10000;
  } else if (computerChoice[0] === "7" && computerChoice[1] === "7") {
    result = "JACKPOT! BONUS 5000";
    moneyCount += 5000;
  } else if (
    computerChoice[0] === computerChoice[1] &&
    computerChoice[1] === computerChoice[2]
  ) {
    result = "WINNER!";
    moneyCount += 1000;
  } else {
    result = "Spin again!";
    moneyCount -= 100;
  }

  document.getElementById("resultDisplay").innerHTML = result;
  document.getElementById("money").innerHTML = moneyCount;
}
