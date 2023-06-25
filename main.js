let operationDisplay = document.querySelector(".operate-text");
let resultDisplay = document.querySelector(".result-text");
let equalsBtn = document.querySelector("#equals");
let decimalPointBtn = document.querySelector("#decimal");

let digits = Array.from(document.querySelectorAll(".digits"));
let operands = Array.from(document.querySelectorAll(".operands"));

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "CANNOT COMPUTE"
  } else return a / b;
}

function operate(operator, numberA, numberB) {
  if (operator === "+") {
    return add(numberA, numberB);
  } else if (operator === "-") {
    return subtract(numberA, numberB);
  } else if (operator === "×") {
    return multiply(numberA, numberB);
  } else if (operator === "÷") {
    return divide(numberA, numberB);
  }
}

function displayUpper(event) { // Need to write code to prevent multiple decimal points on one number
  let buttonText = event.target.textContent;
  let checkerArray = operationDisplay.textContent.split(" ");

  if (event.target.classList.contains("digits")) {
    operationDisplay.textContent += `${buttonText}`;
    console.log(checkerArray);
  } else if (((checkerArray.length >= 1 && checkerArray.length < 3) && event.target.classList.contains("operands"))) {
    operationDisplay.textContent += ` ${buttonText} `;
    console.log(checkerArray);
  }
}

function displayResult() {
  let checkerArray = operationDisplay.textContent.split(" ");
  if ((resultDisplay.textContent === "" && checkerArray.length >= 3)) {
    let numberA = +checkerArray[0];
    let numberB = +checkerArray[2];
    let operator = checkerArray[1];
    operationDisplay.textContent += ` ${equalsBtn.textContent}`;
    resultDisplay.textContent += operate(operator, numberA, numberB);
    digits.forEach((item) => item.removeEventListener("click", displayUpper));
  // Variable updating come later
  // .toFixed(1) for decimals
  }
}

/* // On operand press, result set to numA, numB set to "". 
  // Make event listeners work again.
  // Use symbols from HTML
  // Decimal point need to be fixed -probably check arr[length - 1] for "."
  // Think of toggle function for +/- , maybe use unary "-"
  // AC wipes everything
  // Del can split, slice, join, output num
  // if statement for result decimals. toFixed only output when decimal present
  // Make equals sign visible on displayUpper */ 

digits.forEach((item) => item.addEventListener("click", displayUpper));
operands.forEach((item) => item.addEventListener("click", displayUpper));
equalsBtn.addEventListener("click", displayResult);