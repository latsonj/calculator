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