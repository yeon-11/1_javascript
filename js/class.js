class Car { // 인수는 파라미터 항목에 맞는 수로 사용
    constructor(name, brand, year) {
        this.name = name;
        this.brand = brand;
        this.year = year;
    }

    age(x) {
        return x - this.year;
    }
}

const myCar = new Car("자전거", "3000리", 2000);
const yourCar = new Car("그냥걸어가", "", 2002);

const date = new Date(); //현재시간 구하기, 시간 참조(가공x)
let year = date.getFullYear(); //변수 year에 현재 년도를 대입

document.getElementById("in").innerHTML =
    "내가 산 차는 " + myCar.age(year) + " 가 지났어"