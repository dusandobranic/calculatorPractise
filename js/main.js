const operations = document.querySelector(".operations");
const divs = operations.querySelectorAll("div");
const numbers = document.querySelectorAll(".num");
const operator = document.querySelectorAll(".operator");

const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
  result: 0,
};

let op = calculator.operator;

for (var i = 0; i < divs.length; i++) {
  divs[i].classList.add("item");
}

const keys = Array.from(document.querySelectorAll(".item"));

keys.forEach((key) => {
  key.addEventListener("click", (event) => {
    const { target } = event;

    if (target.classList.contains("operator")) {
      operatorClicked(target.innerText);
      op = target.innerText;
      return;
    }

    if (target.classList.contains("decimal")) {
      addDecimal(".");
      return;
    }

    if (target.classList.contains("all-clear")) {
      allClear();
      return;
    }
    if (target.classList.contains("equals")) {
      equalsSwitch(op);
      return;
    }

    inputDigit(target.innerText);
    updateDisplay();
  });
});

// function equals() {
//   const first = parseInt(calculator.firstOperand, 10);
//   const second = parseInt(calculator.displayValue, 10);
//   let res = calculator.result;
//   if (calculator.operator === "+") {
//     res = first + second;
//     calculator.displayValue = res;
//     updateDisplay();
//   } else if (calculator.operator === "-") {
//     res = first - second;
//     calculator.displayValue = res;
//     updateDisplay();
//   } else if (calculator.operator === "*") {
//     res = first * second;
//     calculator.displayValue = res;
//     updateDisplay();
//   } else if (calculator.operator === "/") {
//     res = first / second;
//     calculator.displayValue = res;
//     updateDisplay();
//   }
// }

function equalsSwitch(op) {
  const first = parseInt(calculator.firstOperand, 10);
  const second = parseInt(calculator.displayValue, 10);
  let res = calculator.result;
  switch (op) {
    case "+":
      res = first + second;
      calculator.displayValue = res;
      updateDisplay();
      break;
    case "-":
      res = first - second;
      calculator.displayValue = res;
      updateDisplay();
      break;
    case "*":
      res = first * second;
      calculator.displayValue = res;
      updateDisplay();
      break;
    case "/":
      res = first / second;
      calculator.displayValue = res;
      updateDisplay();
      break;
    default:
      alert("Nije unet validan operator");
      break;
  }
}

function addDecimal(dot) {
  if (calculator.displayValue.includes(".")) {
    return;
  } else {
    calculator.displayValue = calculator.displayValue + dot;
  }
  updateDisplay();
}

function updateDisplay() {
  const _display = document.querySelector("#display");
  _display.value = calculator.displayValue;
}

function inputDigit(digit) {
  const { displayValue } = calculator;
  calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
}

function clearDisplay() {
  waitingForSecondOperand = true;
  calculator.displayValue = "";
  updateDisplay();
}

function allClear() {
  calculator.displayValue = "0";
  updateDisplay();
}

function operatorClicked(operator) {
  actions = operator;
  switch (actions) {
    case "+":
      calculator.operator = "+";
      calculator.firstOperand = calculator.displayValue;
      clearDisplay();
      break;
    case "-":
      calculator.operator = "-";
      calculator.firstOperand = calculator.displayValue;
      clearDisplay();
      break;
    case "*":
      calculator.operator = "*";
      calculator.firstOperand = calculator.displayValue;
      clearDisplay();
      break;
    case "/":
      calculator.operator = "/";
      calculator.firstOperand = calculator.displayValue;
      clearDisplay();
      break;
    default:
      alert("Nije unet ispravan znak");
      break;
  }
}

updateDisplay();
