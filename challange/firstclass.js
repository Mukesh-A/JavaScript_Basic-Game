function ageInDate() {
  var birthyear = prompt("whic Year You Where Born??");
  var ageIndays = (2021 - birthyear) * 365;
  var h2 = document.createElement("h2");

  var h1 = document.createElement("h1");
  var textAns = document.createTextNode("You Are " + ageIndays + " Days Old");
  // h1.setAttribute("id", "ageInDays");
  h1.id = "ageInDays";
  h1.appendChild(textAns);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

function generateCat() {
  var img = document.createElement("img");
  var getbox = document.getElementById("catdiv");
  (img.src =
    "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&rect=37%2C29%2C4955%2C3293&q=45&auto=format&w=926&fit=clip"),
    (img.width = "200"),
    (img.height = "200");
  getbox.appendChild(img);
}

function rpc(yourchoice) {
  // console.log(yourchoice.id)
  var humanChoice, botChoice;

  humanChoice = yourchoice.id;
  botChoice = numToChoice(randomnum());
  console.log("computer choice", botChoice);
  result = decideWinner(humanChoice, botChoice);
  console.log(result);
  message = finalMessage(result);
  console.log("messge", message);
  rpsfrontEnd(yourchoice.id, botChoice, message);
}

function randomnum() {
  return Math.floor(Math.random() * 3);
}

function numToChoice(number) {
  return ["rock", "paper", "sicc"][number];
}

function decideWinner(yourchoice, computerChoice) {
  var rpsDatabase = {
    rock: { sicc: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, sicc: 0 },
    sicc: { paper: 1, sicc: 0.5, rock: 0 },
  };

  var yourscore = rpsDatabase[yourchoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourchoice];

  return [yourscore, computerScore];
}

function finalMessage([yourscore, computerScore]) {
  if (yourscore === 0) {
    return { message: "You Lost", color: "red" };
  } else if (yourscore === 0.5) {
    return { message: "You Tied", color: "Yellow" };
  } else {
    return { message: "You Won", color: "green" };
  }
}
function rpsfrontEnd(humanImagechoice, botImagechoice, finalMessage) {
  var imageDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    sicc: document.getElementById("sicc").src,
  };

  console.log("hello", botImagechoice);
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("sicc").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img id='humanres' src='" +
    imageDatabase[humanImagechoice] +
    "' height=120 width=100 style='box-shadow:0px 10px 50px rgba(243, 38, 24, 1);'>";

  messageDiv.innerHTML =
    "<h1 style='color: " +
    finalMessage["color"] +
    "; font-size: 60px; padding:30px;'>" +
    finalMessage["message"] +
    "</h1>";

  botDiv.innerHTML =
    "<img id='botres' src='" +
    imageDatabase[botImagechoice] +
    "' height=120 width=100 style='box-shadow:0px 10px 50px rgba(243, 38, 24, 1);'>";
  // humanDiv.innerHTML = "<img src='" + imageDatabase[humanImagechoice] + "'>";

  document.getElementById("flex-box").appendChild(humanDiv);
  document.getElementById("flex-box").appendChild(messageDiv);
  document.getElementById("flex-box").appendChild(botDiv);

  if (finalMessage["message"] == "You Won") {
    document.getElementById("humanres").style.boxShadow =
      "0px 10px 50px rgba(37, 50, 233, 1)";
  } else if (finalMessage["message"] == "You Tied") {
    document.getElementById("humanres").style.boxShadow =
      "0px 10px 50px rgb(197, 233, 37)";
    document.getElementById("botres").style.boxShadow =
      "0px 10px 50px rgb(197, 233, 37)";
  } else {
    document.getElementById("botres").style.boxShadow =
      "0px 10px 50px rgba(37, 50, 233, 1)";
  }
}
