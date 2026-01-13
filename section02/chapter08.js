//5가지 순회 및 탐색 메서드

//1.forEach
//모든 요소를 순회하며 각각의 요소에 특정 동작을 수행
let arr1 = [1,2,3];

arr1.forEach(function (item, index, arr) {
    //console.log(item, index, arr);
});

let doubledarr = [];

arr1.forEach((item) => {
    doubledarr.push(item * 2);
});

//2.includes
//특정 요소가 배열에 포함되어 있는지 확인
let arr2 = [1,2,3];
let isinclude = arr2.includes(10);

//3.indexOf
//특정 요소의 인덱스 반환
let arr3 = [1,2,3];
let index = arr3.indexOf(2);

//4.findIndex
//모든 요소를 순회하며 콜백함수를 만족하는 요소의 인덱스 반환
let arr4 = [1,2,3];
const findindex = arr4.findIndex((item) => item % 2 !== 0);

//5.find
//모든 요소를 순회하며 콜백함수를 만족하는 첫번째 요소 그대로 반환
let arr5 = [
    {name: "우종혁"},
    {name: "홍길동"},
];

const found = arr5.find(
    (item) => item.name === "우종혁"
);