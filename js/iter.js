const name = "ABCD"; //상수 이름 = 문자열
let text = ""; // 비어진 값 대입 //상수 활용을 위해 변수 만듬
for (const x of name) { //변수개별에 줄바꿈<br>을 더함
    text += x + "<br>";
}
// document.write(text);
document.getElementById("one").innerHTML = text;

const letter = new Set(["a", "a", "b", "c"]); //set: 고유한 값만 출력
let txt = "";
for (const q of letter) {
    txt += q + "<br>";
}
document.getElementById("two").innerHTML = txt;

const fruits = new Map([
    ["apples", 1000], //key, value
    ["banana", 500],
    ["orange", 200]
]);
let nums = fruits.get("orange");
document.getElementById("three").innerHTML
    = "지금 창고에 " + nums + "개의 오렌지가 있어";