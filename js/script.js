const teclas = document.getElementsByClassName("btn");
const number0 = teclas[9];
const number1 = teclas[0];
const number2 =teclas[1];
const number3 = teclas[2];
const number4 =teclas[3];
const number5 =teclas[4];
const number6 =teclas[5];
const number7=teclas[6];
const number8 =teclas[7];
const number9 =teclas[8];
const del = teclas[10];
const mais=teclas[11];
const menos=teclas[12];
const mult=teclas[13];
const divisao=teclas[14];
const ponto=teclas[15];
const reset =teclas[16];
const igual=teclas[17];
const displayNumber = document.getElementsByClassName("display-number")[0];
console.log(displayNumber);
let numbers = '';
let listNumbers = [];

number1.addEventListener("click",()=>{
    numbers+= '1';
    displayNumber.textContent = numbers;
    console.log(displayNumber.textContent)
    
})
number2.addEventListener("click",()=>{
    numbers+='2';
    displayNumber.textContent = numbers;
})
number3.addEventListener("click",()=>{
    numbers+= '3';
    displayNumber.textContent = numbers;
})


number4.addEventListener("click",()=>{
    numbers+= '4';
    displayNumber.textContent = numbers;
})


number5.addEventListener("click",()=>{
    numbers+= '5';
    displayNumber.textContent = numbers;
})

number6.addEventListener("click",()=>{
    numbers+= '6';
    displayNumber.textContent = numbers;
})


number7.addEventListener("click",()=>{
    numbers+= '7';
    displayNumber.textContent = numbers;
})


number8.addEventListener("click",()=>{
    numbers+= '8';
    displayNumber.textContent = numbers;
})


number9.addEventListener("click",()=>{
    numbers+= '9';
    displayNumber.textContent = numbers;
})

number0.addEventListener("click",()=>{
    if(displayNumber.textContent != '0'){
        numbers+= '0';
        displayNumber.textContent = numbers;
    }
})

mais.addEventListener("click",()=>{
    if(displayNumber.textContent != '0' && numbers.charAt(numbers.length-1) != '+' && numbers.charAt(numbers.length-1) != 'x'  ){
        numbers += '+';
        displayNumber.textContent = numbers;
    }
})
mult.addEventListener("click",()=>{
    if(displayNumber.textContent != '0' && numbers.charAt(numbers.length-1) != '+' && numbers.charAt(numbers.length-1) != 'x' ){
        numbers += 'x';
        displayNumber.textContent = numbers;
        
    }
})

del.addEventListener("click",()=>{
    if(displayNumber.textContent != '0'){
        numbers = numbers.substring(0,numbers.length-1);
        displayNumber.textContent = numbers;
    }
    if(displayNumber.textContent == ''){
        displayNumber.textContent = '0';
    }
})
reset.addEventListener("click",()=>{
    numbers = '';
    displayNumber.textContent = '0';

})
igual.addEventListener("click",()=>{
        // numbers = '3*3'
        // console.log(eval(numbers))
        numbers =  numbers.replace('x','*');
        console.log(numbers);
        displayNumber.innerHTML = eval(numbers)

        numbers = '';


})