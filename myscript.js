const display = document.querySelector('#display');
const display2 = document.querySelector('#display2');
const clear = document.getElementById('#btn-clear');
const digits = document.querySelectorAll('.number-btn');
const operators = document.querySelectorAll('.operator-btn');
const screen = document.querySelector('#screen');
const equals = document.querySelector('#btn-equals');

display.textContent = ' ';
display2.textContent = ' ';



//basic operators
function add (num1,num2) {
    return num1 + num2;
};



function subtract (num1,num2) {
    return num1 - num2;
};



function multiply (num1,num2) {
    return num1 * num2;
};


function divide (num1,num2) {
    return num1 / num2;
};

function operate(num1, num2, operator) {
    switch (operator) {
      case "+":
        return add(num1, num2);
      case "-":
        return subtract(num1, num2);
      case "*":
        return multiply(num1, num2);
      case "/":
        return divide(num1, num2);
    }
  };

let storedNumber = '';
let clickedOperator = ''
let firstNumber = '';
let result = '';


digits.forEach(digit => {
    digit.addEventListener('click', () => {
        storedNumber += digit.textContent;
        display2.textContent = storedNumber;
    })
});




operators.forEach(op => {
    op.addEventListener('click', () => {
       if (firstNumber && storedNumber) {
        displayResults();
       }
        firstNumber = storedNumber;
      
        clickedOperator = op.textContent;
        display2.textContent = ' ';
        display.textContent = storedNumber + clickedOperator;
        storedNumber = ' ';
    })
});

equals.addEventListener('click', () => {
    displayResults()
});

function displayResults() {
    result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator);
    display2.textContent = result;
    display.textContent = firstNumber + ' ' + clickedOperator + ' ' + storedNumber;
    storedNumber = result;
};

function clearBtn() {
  display2.textContent = ' ';
  display.textContent = ' ';

};

clear.addEventListener('click', () => {
  clearBtn()
});