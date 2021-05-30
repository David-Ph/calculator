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


//              FUNCTION
// /////////////////////////////
function onButtonClick(e){  

    if(e.target.classList.contains('calculator-button')){
        if(e.target.classList.contains('input-digit')){
            onDigitClick(e.target);
        }else if(e.target.classList.contains('input-operator')){
            onOperatorClick(e.target);
        }else if(e.target.classList.contains('input-enter')){
            onEnterClick();
        }else if(e.target.classList.contains('input-clear')){
            clearEverything();
        }
    }

}

function onDigitClick(e){
    let clickedDigit = e.innerText;

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
    changeDisplay('0');
    operator = e.innerText;
    console.log(operator);
}

function onEnterClick(){
    let firstNumber = parseFloat(firstInput);
    let secondNumber = parseFloat(secondInput);
    let finalResult = calculate(firstNumber, secondNumber, operator);
    changeDisplay(finalResult);
}

function clearEverything(){
    firstInput = '';
    secondInput = '';
    operator = '';
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