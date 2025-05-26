// ↓ 상수 시간 = 데이트 객체를 얻고 거기서 시간을 얻어옴
const time = new Date().getHours(); //new: 객체 생성
let greeting; //let: 재선언 재할당 금지 (일회용)
if (time < 10) {
    greeting = "비 싫어잉"
}
else if (time < 20) {
    greeting = "피곤하다"
}
else {
    greeting = "집 최고"
}
document.getElementById("con").innerHTML = greeting;

let text;
if (Math.random() < 0.5) {
    text = "나는 0.5보다 작아"
}
else {
    text = "<a href='http://youtube.com'>유튜브</a>";
}
document.getElementById("txt").innerHTML = text;

let day;
switch (new Date().getDay()) {
    case 0: //일요일
        day = "일요일"
        break;
    case 1: //월요일
        day = "월요일"
        break;
    case 4: //목요일
        day = "목요일"
        break;
    case 6: //토요일
        day = "토요일"
        break;
    default:
        day = "이 수업 받는 오늘은 목요일"
}
document.getElementById("day").innerHTML = day;