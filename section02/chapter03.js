//1.배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three,four=4] = arr;

let person = {
    name: "우종혁",
    age: 18,
    hobby: "게임",
};

let { name, age : myAge, hobby, extra="hello" } = person;

//3.객체 구조 분해 할당을 이용해 함수의 매개변수 받기
const func = ({ name, age, hobby, extra }) => {
    console.log(name, age, hobby, extra);
};

func(person);