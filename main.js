const operationDisplay = document.querySelector(".operate-text");
const equalsBtn = document.querySelector("#equals");
const decimalPointBtn = document.querySelector("#decimal");
const clearBtn = document.querySelector(".clear");

const digits = Array.from(document.querySelectorAll(".digits"));
const operands = Array.from(document.querySelectorAll(".operands"));

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

function displayText(event) { // Need to write code to prevent multiple decimal points on one number
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

function calculateResult(event) {
  let checkerArray = operationDisplay.textContent.split(" ");
  if (checkerArray.length >= 3 // Make sure 2 numbers & operator are present before feeding them into operate()
      && !checkerArray.includes("")) { // Operands will not operate with empty strings
    let numberA = +checkerArray[0];
    let numberB = +checkerArray[2];
    let operator = checkerArray[1];
        if (event.target.textContent === "=") { // + returnVal.toFixed(2) to get rid of long decimal results
          operationDisplay.textContent = `${+ operate(operator, numberA, numberB).toFixed(2)}`;
          console.log(`${numberA} ${operator} ${numberB}`);
        } else {
          operationDisplay.textContent = `${+ operate(operator, numberA, numberB).toFixed(2)} ${event.target.textContent} `;
          console.log(`${numberA} ${operator} ${numberB}`);
        }
    console.log(checkerArray);
  }
}

function clearAll() {
  operationDisplay.textContent = "";
  let checkerArray = operationDisplay.textContent.split(" ");
  console.log(checkerArray);
}

/* // Decimal point need to be fixed -probably check arr[length - 1] for "."
  // Think of toggle function for +/- , maybe use unary "-"
  // AC wipes everything
  // Del can split, slice, join, output num
  // Tell user to reset if CANNOT COMPUTE */

digits.forEach((item) => item.addEventListener("click", displayText));
operands.forEach((item) => item.addEventListener("click", displayText));
operands.forEach((item) => item.addEventListener("click", calculateResult));
equalsBtn.addEventListener("click", calculateResult);

clearBtn.addEventListener("click", clearAll);