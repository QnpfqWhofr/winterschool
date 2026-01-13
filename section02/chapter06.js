//1.배열 순회
let arr = [1,2,3];

//1.배열 인덱스
for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
}

let arr2=[4,5,6,7,8];
for (let i = 0; i < arr2.length; i++) {
    //console.log(arr2[i]);
}

//1.2 for of 반복문
for (let item of  arr) {
    //console.log(item);
}

//2.객체 순회
let person = {
    name: "우종혁",
    age: 18,
    hobby: "게임",
};

//2.1 object.keys 사용
//객체에서 키만 뽑아서 배열로 반환
let keys = Object.keys(person);

for (let key of keys) {
    const value = person[key];
    //console.log(key,value);
}

//2.2 object.values
//객체에서 값만 뽑아서 배열로 반환
let values = Object.values(person);
for (let value of values) {
    //console.log(value);
}

//2.3 for in
for (let key in person) {
    const value = person[key];
    //console.log(key,value);
}