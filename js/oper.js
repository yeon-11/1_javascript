//연산자
let x = 10;
x **= 5; //거듭제곱

let q = 10;
q %= 5; //나머지값

document.getElementById("one").innerHTML =
    "거듭제곱의 값 " + x + "<br>" +
    "나눈 나머지 값 " + q + "<br>"


let num1 = 1;
let num2 = "1";
let result = num1 == num2;

let result2 = num1 === num2;

let num3 = 10;
let num4 = 3;
let result3 = num4 > num3;

document.getElementById("two").innerHTML =
    "타입을 고려하지 않은 같음의 결과값 " + result + "<br>" +
    "타입까지 고려하여 같음의 결과값 " + result2 + "<br>" +
    "변수의 수를 비교할때의 결과값 " + result3 + "<br>"


// 논리연산자
let w = 6;
let e = 3;

document.getElementById("three").innerHTML = 
"&&: 그리고(and)여서 두개의 조건이 일치해야함 " + "<br>" +
"(w < 10 && e > 1) 는 " + (w < 10 && e > 1) + "<br>" +
"(w < 10 && e < 1) 는 " + (w < 10 && e < 1) + "<br>" +
"(w == 10 && e == 1) 는 " + (w == 10 && e == 1) + "<br>" +
"(w == 6 && e == 3) 는 " + (w == 6 && e == 3) + "<br>" +
"!(w === 6) 는 " + !(w === 6) + "<br>" +
"!(w > 6) 는 " + !(w > 6);