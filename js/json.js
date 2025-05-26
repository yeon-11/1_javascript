let text = '{"emp":[' + '{"firstName":"jiyeon", "lastName":"park"}]}'

const obj = JSON.parse(text); //json을 js형태에 맞게 파싱
document.getElementById("json").innerHTML = obj.emp[0].firstName +
    " " + obj.emp[0].lastName;