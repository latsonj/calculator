const operationDisplay = document.querySelector(".operate-text");
const equalsBtn = document.querySelector("#equals");
const decimalPointBtn = document.querySelector("#decimal");
const clearBtn = document.querySelector(".clear");
const plusMinusToggleBtn = document.querySelector(".plus-minus-toggle");
const deleteBtn = document.querySelector(".delete");

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

    digits.forEach((item) => item.removeEventListener("click", displayText));
    operands.forEach((item) => item.removeEventListener("click", displayText));
    operands.forEach((item) => item.removeEventListener("click", calculateResult));
    equalsBtn.removeEventListener("click", calculateResult);
    plusMinusToggleBtn.removeEventListener("click", toggleSign);
    decimalPointBtn.removeEventListener("click", displayDecimal);
    deleteBtn.removeEventListener("click", deleteLatestValue);

    return "CANNOT COMPUTE PRESS AC"

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

  if (event.target.classList.contains("digits")) { // For deleting operator
    if (checkerArray.length === 2) {
      operationDisplay.textContent += ` ${buttonText}`;
    } else {
    operationDisplay.textContent += `${buttonText}`;
    console.log(checkerArray);}

  } else if (checkerArray[0] !== "" // Operand cannot be written as first item
      && checkerArray.length < 3 // Operands cannot be written 2 times in a row
      && event.target.classList.contains("operands") 
      && !(checkerArray[0] === "-" || checkerArray[2] === "-")) { // Operator will not display if number is single negative

    operationDisplay.textContent += ` ${buttonText} `;
    console.log(checkerArray);}
}

function calculateResult(event) {
  let checkerArray = operationDisplay.textContent.split(" ");
  if (checkerArray.length >= 3 // Make sure 2 numbers & operator are present before feeding them into operate()
      && !checkerArray.includes("") // Operands will not operate with empty strings
      && (checkerArray[0] !== "-" && checkerArray[2] !== "-")) { // Not allow empty negatives to be evaluated

    let numberA = +checkerArray[0];
    let numberB = +checkerArray[2];
    let operator = checkerArray[1];

        if (operator === "÷" && numberB == "0") {
          operationDisplay.textContent = operate(operator, numberA, numberB);

        } else if (event.target.textContent === "=") { // + returnVal.toFixed(5) to get rid of long decimal results
          operationDisplay.textContent = `${+ operate(operator, numberA, numberB).toFixed(5)}`;
          console.log(`${numberA} ${operator} ${numberB}`);

        } else {
          operationDisplay.textContent = `${+ operate(operator, numberA, numberB).toFixed(5)} ${event.target.textContent} `;
          console.log(`${numberA} ${operator} ${numberB}`);
        }
    console.log(checkerArray);
  }
}

function clearAll() {
  if (operationDisplay.textContent === "CANNOT COMPUTE PRESS AC") {
    
    digits.forEach((item) => item.addEventListener("click", displayText));
    operands.forEach((item) => item.addEventListener("click", displayText));
    operands.forEach((item) => item.addEventListener("click", calculateResult));
    equalsBtn.addEventListener("click", calculateResult);
    plusMinusToggleBtn.addEventListener("click", toggleSign);
    decimalPointBtn.addEventListener("click", displayDecimal);
    deleteBtn.addEventListener("click", deleteLatestValue);
    operationDisplay.textContent = "";

  } else operationDisplay.textContent = "";
}

function toggleSign() {
  let checkerArray = operationDisplay.textContent.split(" ");
  if ((checkerArray.length === 1 || checkerArray.length === 3)
  && !checkerArray.includes("")) {

    checkerArray[checkerArray.length - 1] = -checkerArray[checkerArray.length - 1]; // Turns current num from +ve to -ve and vice versa.
    operationDisplay.textContent = checkerArray.join(" ");
  }
}

function displayDecimal() {
  let checkerArray = operationDisplay.textContent.split(" ");

  if (checkerArray.length === 1 || checkerArray.length === 3)
    if (checkerArray[checkerArray.length - 1] === "") {
    operationDisplay.textContent += "0.";

  } else if (!checkerArray[checkerArray.length - 1].includes(".")) {
    operationDisplay.textContent += ".";}
}

function deleteLatestValue() { 
  let checkerArray = operationDisplay.textContent.split(" ");
  
  if (checkerArray.length === 3
    && checkerArray[checkerArray.length - 1] === "") { // If 3rd item is empty string, delete 2 arr items, leaving 1 item
      checkerArray.pop();
      checkerArray.splice(checkerArray.length - 1, 1);
      
    } else checkerArray[checkerArray.length - 1] = checkerArray[checkerArray.length - 1].slice(0, -1);
    operationDisplay.textContent = checkerArray.join(" ");
    console.log(checkerArray);
}

/* // Keyboard support considered after CSS */

digits.forEach((item) => item.addEventListener("click", displayText));
operands.forEach((item) => item.addEventListener("click", displayText));
operands.forEach((item) => item.addEventListener("click", calculateResult));

equalsBtn.addEventListener("click", calculateResult);
clearBtn.addEventListener("click", clearAll);
plusMinusToggleBtn.addEventListener("click", toggleSign);
decimalPointBtn.addEventListener("click", displayDecimal);
deleteBtn.addEventListener("click", deleteLatestValue);