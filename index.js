var numberOfCalcButtons = document.querySelectorAll(".btnn").length;

var chosenValue1 = [];
var chosenOperator = [];
var chosenValue2 = [];

for (var i = 0; i < numberOfCalcButtons; i++) {
  document.querySelectorAll(".btnn")[i].addEventListener("click", function() {
    if (chosenOperator.length > 1) {
      document.querySelector("#results").innerText = "Clear First!";
    } else if (this.innerText === "+" || this.innerText === "-" || this.innerText === "*" || this.innerText === "/") {
      var userChosenOperator = this.innerText;
      chosenOperator.push(userChosenOperator);
      forOperator(this.id);
    } else if (chosenOperator.length === 0) {
      buttonAnimation(this.id);
      var userChosenValue = this.innerText;
      chosenValue1.push(userChosenValue);
      document.querySelector("#results").innerText = parseInt(chosenValue1.join(''));
    } else {
      buttonAnimation(this.id);
      var userChosenValue = this.innerText;
      chosenValue2.push(userChosenValue);
      document.querySelector("#results").innerText = parseInt(chosenValue2.join(''));
    }
  })
}

document.querySelector(".btnequal").addEventListener("click", function() {
  buttonAnimation(this.id);
  if (chosenOperator[0] === "+") {
    document.querySelector("#results").innerText = add(parseInt(chosenValue1.join('')), parseInt(chosenValue2.join('')));
  } else if (chosenOperator[0] === "-") {
    document.querySelector("#results").innerText = subtract(parseInt(chosenValue1.join('')), parseInt(chosenValue2.join('')));
  } else if (chosenOperator[0] === "*") {
    document.querySelector("#results").innerText = multiply(parseInt(chosenValue1.join('')), parseInt(chosenValue2.join('')));
  } else if (chosenOperator[0] === "/") {
    document.querySelector("#results").innerText = divide(parseInt(chosenValue1.join('')), parseInt(chosenValue2.join('')));
  } else if (chosenOperator.length > 1) {
    document.querySelector("#results").innerText = "Clear First!";
  } else {
    console.log("error");
  }
})

document.querySelector(".btnclear").addEventListener("click", function() {
  chosenValue1 = [];
  chosenOperator = [];
  chosenValue2 = [];
  document.querySelector("#results").innerText = "0";
  buttonAnimation(this.id);
})

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("#" + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100)
}

function forOperator(opo) {
  var activeButton = document.querySelector("#" + opo);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 2000)
}
