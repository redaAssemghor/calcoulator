const display = document.querySelector('#display');
let o = '';
num1 = '';
num2 = '';


//basic operators
function add (a,b) {
    if (a === NaN && b === NaN) {
        alert("Enter a valid number:");
    }return a + b;
};



function subtract (a,b) {
    if (a === NaN && b === NaN) {
        alert("Enter a valid number:");
    }return a - b;
};



function multiply (a,b) {
    if (a === NaN && b === NaN) {
        alert("Enter a valid number:");
    }return a * b;
};


function divide (a,b) {
    if (a === NaN && b === NaN) {
        alert("Enter a valid number:");
    }return a / b;
};



const operate = (o,num1,num2) => {
    if (o === '+') return add(a,b);
    if (o === '-') return subtract(a,b);
    if (o === '*') return multiply(a,b);
    if (o === '%') return divide(a,b);
};


const digits = document.querySelectorAll('.number-btn');
digits.forEach(button => {
    button.addEventListener('click', () => {
        if (o === '') {
            num1 += button.textContent;
            display.textContent = num1;
        }else (o !== '=' && o !== "") 
            num2 = e.target.textContent
        
    })
});



const operators = document.querySelectorAll('.operator-btn');
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        o = operator.textContent
        
            display.textContent = num1 + ' ' + o + ' ' + num2;
        
    })
});

/*
const equals = document.getElementById('#btn-equals');
equals.addEventListener('click', operate(o,num1,num2))
*/