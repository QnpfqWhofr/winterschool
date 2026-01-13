//6가지의 요소 조작 메서드

//1.push : 배열의 끝에 요소 추가
let arr = [1, 2, 3];
const newlength = arr.push(4,5,6,7);

//2.pop : 배열의 끝 요소 제거 & 반환
let arr2 = [1, 2, 3];
const poppeditem = arr2.pop();

//3.shift : 배열의 첫 요소 제거 & 반환
let arr3 = [1, 2, 3];
const shifteditem = arr3.shift();

//4.unshift : 배열의 첫에 요소 추가
let arr4 = [1, 2, 3];
const newlength2 = arr4.unshift(0);

//5.slice : 배열의 특정 위치를 잘라서 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2,5);
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-1);

//6.concat : 두개의 배열을 합쳐서 배열로 반환

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);