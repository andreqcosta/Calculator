function getButtonValue(e){
    let mode = this.classList.item(1);
    let value = this.classList.item(2);
    if(mode === "num"){
	display.textContent = getNumber(value);
    }else if(mode === "func"){
	display.textContent = getFunc(value);
    }else if(mode === "on"){
	clear();
    }else if(mode === "dot"){
	putDot();
    }
    
}

function getNumber(number){
    if(operator === ""){
	if(operandOne.length < 9){
	    if(operandOne === "0" || operandOne === "" && number === "0"){
		return "0";
	    }else{
		operandOne += number;
	    }
	}	
	return operandOne;
    }else{	
	if(operandTwo.length < 9){
	    if(operandTwo === "0" || operandTwo === "" && number === "0"){
		return "0";
	    }else{
		operandTwo += number;
	    }
	}	
	return operandTwo;	
    }
}

function getFunc(func){
    if(func === "=" && operandTwo !== ""){
	operandOne = operate();
	operandTwo = "";
	operator = "";
    }else if(func === "+" || func === "-" || func === "*" || func === "/"){
	operator = func;
    }else if(func === "root"){
	if(operator === ""){
	    operandOne = Math.sqrt(operandOne);
	}else{
	    operandTwo = Math.sqrt(operandTwo);
	    return operandTwo;
	}
    }else if(func === "back"){
	return deleteNumber();
    }
    return operandOne;
}

function operate(){
    if(operator === "+"){
	return add(+operandOne, +operandTwo);
    }else if(operator === "-"){
	return sub(+operandOne, +operandTwo);
    }else if(operator === "*"){
	return mult(+operandOne, +operandTwo);
    }else if(operator === "/"){
	return divs(+operandOne, +operandTwo);
    }
}

function clear(){
    operandOne = "";
    operandTwo = "";
    operator = "";
    display.textContent = "0";
}


function putDot(){
    if(operator === ""){
	if(!operandOne.includes(".")){
	    operandOne += ".";
	    display.textContent =  operandOne;
	}
    }else{
	if(!operandTwo.includes(".")){
	    operandTwo += ".";
	    display.textContent =  operandTwo;
	}
    }
}

function deleteNumber(){
    if(operator === ""){
	operandOne = operandOne.slice(0, -1);
	if(operandOne === ""){
	    return "0";
	}
	return operandOne;
	
    }else{
	operandTwo = operandTwo.slice(0, -1);
	return operandTwo;
    }
}

const buttons = document.querySelectorAll(".column");
buttons.forEach(button => button.addEventListener('click', getButtonValue));

const display = document.querySelector(".display-text");
display.textContent = "0";

let operandOne = "";
let operandTwo = "";
let operator = "";

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
