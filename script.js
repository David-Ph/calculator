//              DOM
// /////////////////

const calculatorDisplay = document.querySelector('.calculator-display');


//              VARIABLES
// //////////////////////
let firstInput = '';
let secondInput = '';
let operator = '';
let equalButtonPressed = false;

//              EVENT LISTENER
// /////////////////////////////
document.addEventListener('click', onButtonClick);
document.addEventListener('keydown', onKeyDown);


//              FUNCTION
// /////////////////////////////
function onButtonClick(e){  
    if(e.target.classList.contains('calculator-button')){
        if(e.target.classList.contains('input-digit')){
            onDigitClick(e.target.innerText);
        }else if(e.target.classList.contains('input-operator')){
            onOperatorClick(e.target.innerText);
        }else if(e.target.classList.contains('input-enter')){
            onEnterClick();
        }else if(e.target.classList.contains('input-clear')){
            clearVariables();
            clearDisplay();
        }
    }
}
function onKeyDown(e){
    if(e.key >= 0 && e.key <= 9 || e.key === '.'){
        onDigitClick(e.key);
    }else if(e.key === '+' || e.key === '/' || e.key === '-' || e.key === '*'){
        onOperatorClick(e.key);
    }else if(e.key === 'Enter'){
        onEnterClick();
    }
}

function onDigitClick(e){
    let clickedDigit = e;

    if(!operator){
        if(clickedDigit === '.'){
            if(firstInput.includes('.')){
                return;
            }
        }

        firstInput += clickedDigit
        changeDisplay(firstInput);
    }else{
        if(clickedDigit === '.'){
            if(secondInput.includes('.')){
                return;
            }
        }

        secondInput += clickedDigit;
        changeDisplay(secondInput);
    }
}

function onOperatorClick(e){
    // so we can continue clicking the operator button
    // and we can get continues calculating
    if(!equalButtonPressed && firstInput && secondInput){
        let firstNumber = parseFloat(firstInput);
        let secondNumber = parseFloat(secondInput);
        let currentResult = calculate(firstNumber, secondNumber, operator);
        firstInput = currentResult;
        secondInput = '';
    }
    // put this on the bottom
    // otherwise everyime we clicked the operator button after a number
    // it will change the operator
    operator = e;
    changeDisplay('0');
}

function onEnterClick(){
    if(firstInput && secondInput && operator){
        equalButtonPressed = true;
        let firstNumber = parseFloat(firstInput);
        let secondNumber = parseFloat(secondInput);
        let finalResult = calculate(firstNumber, secondNumber, operator);
        changeDisplay(finalResult);
        clearVariables();
    }
}

function clearVariables(){
    firstInput = '';
    secondInput = '';
    operator = '';
    equalButtonPressed = false;
}
function clearDisplay(){
    changeDisplay('0');
}

function changeDisplay(newDisplay){
    calculatorDisplay.innerText = newDisplay;
}

function calculate(firstNumber, secondNumber, operator){
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
            break;
        case '-':
            return firstNumber - secondNumber;
            break;
        case '/':
            return firstNumber / secondNumber;
            break;
        case '*':
            return firstNumber * secondNumber;
            break;    
        default:
            break;
    }
}