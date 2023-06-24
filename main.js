let operationDisplay = document.querySelector(".operate-text");
let resultDisplay = document.querySelector(".result-text");
let equals = document.querySelector("#equals");
let decimalPoint = document.querySelector("#decimal");

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
  return a / b;
}

let numberA = 5;
let numberB = 4;
let operator = "/";

function operate() {
  if (operator === "+") {
    return add(numberA, numberB);
  } else if (operator === "-") {
    return subtract(numberA, numberB);
  } else if (operator === "*") {
    return multiply(numberA, numberB);
  } else if (operator === "/") {
    return divide(numberA, numberB);
  }
}

console.log(operate());

function displayUpper(event) {
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

digits.forEach((item) => item.addEventListener("click", displayUpper));
operands.forEach((item) => item.addEventListener("click", displayUpper));