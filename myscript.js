const display = document.querySelector('#display');
let o = '';
let result = 0;
num1 = '';
num2 = '';



//basic operators
function add (o,num1,num2) {
    if (num1 === NaN || num2 === NaN) {
        alert("Enter a valid number:");
    }return parseInt(num1) + parseInt(num2);
};



function subtract (o,num1,num2) {
    if (num1 === NaN || num2 === NaN) {
        alert("Enter a valid number:");
    }return parseInt(num1) - parseInt(num2);
};



function multiply (o,num1,num2) {
    if (num1 === NaN || num2 === NaN) {
        alert("Enter a valid number:");
    }return parseInt(num1) * parseInt(num2);
};


function divide (o,num1,num2) {
    if (num1 === NaN || num2 === NaN) {
        alert("Enter a valid number:");
    }return parseInt(num1) / parseInt(num2);
};


const digits = document.querySelectorAll('.number-btn');
digits.forEach(button => {
    button.addEventListener('click', () => {
        if (o === '') {
            num1 += button.textContent;
            display.textContent = num1 + ' ' + o;
        }else {
            num2 += button.textContent;
            display.textContent = num1 + ' ' + o + ' ' + num2;
        }
    })
});



const operators = document.querySelectorAll('.operator-btn');
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (operator.textContent !== '=') {
            o = operator.textContent
            console.log(num1);
            console.log(o);
            }else {
                console.log(num2);
                switch(o) {
                    case '+' :
                        display.textContent = (add(o,num1,num2))
                        result = display;
                        break;

                    case '-' :
                        display.textContent = (subtract(o,num1,num2))
                        break;

                    case '*' :
                        display.textContent = (multiply(o,num1,num2))
                        break;
                    case '/' :
                        display.textContent = (divide(o,num1,num2))
                        break;

                    default :
                        break;
                }
            }
    })
});


const clear = document.getElementById('#btn-clear');
clear.addEventListener('click', () => { 
    
})
