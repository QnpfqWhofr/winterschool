//1.상수 객체
const animal = {
    type: "개",
    name: "뽀삐",
    color: "흰색",
};

animal.age = 11; //추가
animal.name = "모모"; //수정
delete animal.color; //삭제

//2.메서드
//값이 함수인 프로퍼티

let person = {
    name: "우종혁",
    //메서드 선언
    sayhi() {
        console.log("안녕");
    },
};

person.sayhi();
person["sayhi"]();