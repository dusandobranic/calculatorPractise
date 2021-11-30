const operations = document.querySelector(".operations");
const divs = operations.querySelectorAll("div");
const numbers = document.querySelectorAll(".num");

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
    console.log(target)

    if (!target.classList.contains("item")) {
      return;
    }

    if (target.classList.contains("operator")) {
      console.log("operator", target.innerText);
      return;
    }

    if (target.classList.contains("decimal")) {
      console.log("decimal", target.innerText);
      return;
    }

    if (target.classList.contains("all-clear")) {
      console.log("clear", target.innerText);
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

function updateDisplay() {
  // select the element with class of `calculator-screen`
  const display = document.querySelector("#display");
  // update the value of the element with the contents of `displayValue`
  display.value = calculator.displayValue;

  console.log(calculator.displayValue);
  console.log(display);
}

function inputDigit(digit) {
  const { displayValue } = calculator;
  calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
}

updateDisplay();