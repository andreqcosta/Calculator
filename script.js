// const numbers = document.querySelectorAll(".num");
// numbers.forEach(number => number.addEventListener('click', showNumber));

// const zeroNumber = document.querySelector(".zero");
// zeroNumber.addEventListener('click', showZero);

// const operatorFunc = document.querySelectorAll(".func");
// operatorFunc.forEach(func => func.addEventListener('click', showOperator));

// const dotFunc = document.querySelector(".dot");
// dotFunc.addEventListener("click", putDot);

// const onClear = document.querySelector(".on");
// onClear.addEventListener('click', clear);





// function showNumber(e){
//     console.log(result);
//     if (operator === "" || result !== ""){
// 	if(operandOne.length < 9){
// 	    operandOne += this.classList.item(2);
// 	    display.textContent = operandOne;
// 	}
//     }else{
// 	if(operandTwo.length < 9){
// 	    operandTwo+= this.classList.item(2);
// 	    display.textContent = operandTwo;
// 	}
//     }    
// }

// function showZero(e){
//     if(operandOne.length >= 1){
// 	if(operandOne.length < 9){
// 	    operandOne += this.classList.item(2);
// 	    display.textContent = operandOne;
// 	}
//     }

//     if(operandTwo.length >= 1){
// 	if(operandTwo.length < 9){
// 	    operandTwo += this.classList.item(2);
// 	    display.textContent = operandTwo;
// 	}
//     }
// }

// function showOperator(e){
//     let op = this.classList.item(2);
//     if(op === "=" && operandTwo !== ""){
// 	operate();
//     }else if(op === "+" || op === "-" ||  op === "*" ||  op === "/"){
// 	if(operandOne !== "" && operandTwo === ""){
// 	    operator = op;
// 	}else if(operandOne !== "" && operandTwo !== ""){
// 	    operate();
// 	    operator = op;
// 	}
//     }else if(op === "root"){
// 	if(operandOne !== "" && operator === ""){
// 	    operandOne = Math.sqrt(operandOne);
// 	}
//     }
// }

// function putDot(e){
//     if(operandOne === ""){
// 	operandOne += "0.";
// 	display.textContent = operandOne;
//     }	
//     if(operandOne.length >= 1  && !operandOne.includes(".") && operator === ""){
// 	operandOne += ".";
// 	display.textContent = operandOne;
//     }
//     if(operandTwo === ""){
// 	operandTwo += "0.";
// 	display.textContent = operandTwo;
//     }
//     if(operandTwo.length >= 1  && !operandTwo.includes(".") && operator !== ""){
// 	operandTwo += ".";
// 	display.textContent = operandTwo;
//     }
// }

// function clear(e){
//     operandOne = "";
//     operandTwo = "";
//     operator = "";
//     display.textContent = "";
// }



// function operate(){
//     if(operator === "+"){
// 	result = add(+operandOne, +operandTwo);
//     }else if(operator === "-"){
// 	result = sub(+operandOne, +operandTwo);
//     }else if(operator === "*"){
// 	result = mult(+operandOne, +operandTwo);
//     }else if(operator === "/"){
// 	result = divs(+operandOne, +operandTwo);
//     }
//     display.textContent = result;
//     operandOne = result;
//     operator = "";
//     operandTwo = "";
//     console.log(result);
    
// }
function getButtonValue(e){
    let mode = this.classList.item(1);
    let value = this.classList.item(2);
    if(mode === "num"){
	display.textContent += getNumber(value);
    }else if(mode === "func"){
	getFunc(value);
    }
}

function getNumber(number){
    let text = display.textContent;
    if(number === "0" && text === "0"){
	return "";
    }else if(text === "0"){
	display.textContent = "";
	return number;
    }
    return number;
}

function getFunc(func){

    
    return func;
}

const buttons = document.querySelectorAll(".column");
buttons.forEach(button => button.addEventListener('click', getButtonValue));

const display = document.querySelector(".display-text");
display.textContent = "0";

let operandOne = "";
let operandTwo = "";
let operator = "";
let result = "";

function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mult(a, b){
    let result = a * b;
    if(result > 999999999){
	return result.toExponential();
    }else{
	return a * b;
    }
}

function divs(a, b){
    if(b === 0){
	display.textContent = "error";
    }
    return a / b;
}

function root(a){
    return Math.sqrt(a);
}
