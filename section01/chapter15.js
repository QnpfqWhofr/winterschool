//1.객체 생성
let obj1 = new Object(); //객체 생성자
let obj2 = {}; //객체 리터럴(대부분 사용)

//2.객체 프로퍼티(객체 속성)
let person = {
    name: "우종혁",
    age: 18,
    hobby: "게임",
    extra: {},
    18: 18,
    "like computer game": true, //공백이 있는 키는 따옴표로 감싸기
};

//3.객체 프로퍼티를 다루는 방법
//3.1 특정 프로퍼티 접근 (점 표기법, 괄호 표기법)
let name = person.name;

let age = person["age"];

let property = "hobby";
let hobby = person[property];

//3.2 프로퍼티 추가
person.job = "학생";
person["favorite food"] = "치킨";

//3.3 프로퍼티 수정
person.job = "고등학생";
person["favorite food"] = "스파게티";

//3.4 프로퍼티 삭제
delete person.job;
delete person["favorite food"];

//4.프로퍼티 존재 유무 확인
let result1 = "name" in person;
let result2 = "game" in person;