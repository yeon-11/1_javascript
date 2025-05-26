//bigint
let x = 9999999999999999;
let y = BigInt("9999999999999999");
document.getElementById("nums").innerHTML = x + "<br>" + y;

//16진수, 8진수, 2진수
let hex = 0x20000000000003n;
let oct = 0o400000000000000003n;
let bin = 0b100000000000000000000000000000000000000000000000000011n;
document.getElementById("hex").innerHTML = hex + "<br>" + oct + "<br>" + bin;
/*
진법: 숫자를 표현할때 기준이 되는 숫자 체계
10진법: 일상에서 쓰임 0 ~ 9
2진법: 0, 1만 사용
    10진수: 5 = 1×2² + 0×2¹ + 1×2⁰  
    2진수: 101
js에서 0 = 오류(거짓), 1 = 성공(진실)
*/