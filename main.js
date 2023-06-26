let operationDisplay = document.querySelector(".operate-text");
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
  } else if ((checkerArray[0] !== "" // Operand cannot be written as first item
      && checkerArray.length < 3 // Operands cannot be written 2 times in a row
      && event.target.classList.contains("operands"))) {

    operationDisplay.textContent += ` ${buttonText} `;
    console.log(checkerArray);
  }
}

function displayResult(event) {
  let checkerArray = operationDisplay.textContent.split(" ");
  if (checkerArray.length >= 3 // Make sure 2 numbers & operator are present before feeding them into operate()
      && !checkerArray.includes("")) { // Operands will not operate with empty strings
    let numberA = +checkerArray[0];
    let numberB = +checkerArray[2];
    let operator = checkerArray[1];
        if(event.target.textContent === "=") {
          operationDisplay.textContent = `${operate(operator, numberA, numberB)}`;
        } else {
          operationDisplay.textContent = `${operate(operator, numberA, numberB)} ${event.target.textContent}`;
        }
    digits.forEach((item) => item.removeEventListener("click", displayUpper)); //Add back on operand press
    console.log(checkerArray);
  }
}

/* // On operand press, result set to numA, numB set to "". 
  // Make event listeners work again.
  // Decimal point need to be fixed -probably check arr[length - 1] for "."
  // Think of toggle function for +/- , maybe use unary "-"
  // AC wipes everything
  // Del can split, slice, join, output num
  // if statement for result decimals. toFixed only output when decimal present
  // .toFixed(1) for decimals
  // Tell user to reset if CANNOT COMPUTE */

digits.forEach((item) => item.addEventListener("click", displayUpper));
operands.forEach((item) => item.addEventListener("click", displayUpper));
operands.forEach((item) => item.addEventListener("click", displayResult));
equalsBtn.addEventListener("click", displayResult);