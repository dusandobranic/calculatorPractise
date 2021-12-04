const operations = document.querySelector(".operations");
const divs = operations.querySelectorAll("div");
const numbers = document.querySelectorAll(".num");
const operator = document.querySelectorAll(".operator");

const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

for (var i = 0; i < divs.length; i++) {
  divs[i].classList.add("item");
}

const keys = Array.from(document.querySelectorAll(".item"));

keys.forEach((key) => {
  key.addEventListener("click", (event) => {
    const { target } = event;

    if (target.classList.contains("operator")) {
      operatorClicked(target.innerText);
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
      console.log("equals", target.innerText);
      return;
    }

    inputDigit(target.innerText);
    updateDisplay();
  });
});

function addDecimal(dot) {
  if (calculator.displayValue.includes('.')) {
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
      calculator.operator = "+"
      calculator.firstOperand = calculator.displayValue;
      clearDisplay();
      break;
    case "-":
      calculator.operator = "-";
      firstOperand = calculator.displayValue;
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
