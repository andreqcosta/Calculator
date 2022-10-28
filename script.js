const numbers = document.querySelectorAll(".num");

numbers.forEach(number => number.addEventListener('click', showNumber));


function showNumber(e){

console.log("i'm here");
    console.log(this.classList.item(1));
}

console.log("i'm here");
