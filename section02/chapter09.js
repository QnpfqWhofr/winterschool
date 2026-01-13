//5가지의 배열 변형 메서드

//1.filter
//기존 배열에서 특정 조건에 맞는 요소들만 추출하여 배열로 반환

let arr1 = [
    {name: "우종혁", hobby: "게임"},
    {name: "김철수", hobby: "운동"},
    {name: "이영희", hobby: "독서"},
];

const gamers = arr1.filter(
    (item) => item.hobby === "게임"
);

//2.map
//배열의 모든 요소를 순회하며 각각 콜백함수를 실행하고 그 결과를 모아 배열로 반환
let arr2 = [1,2,3];
const mapresult1 = arr2.map((item,idx,arr) => {
    return item * 2;
});

let names = arr1.map((item) => item.name);

//3.sort
//배열을 사전순으로 정렬
let arr3 = [10,3,5];
arr3.sort((a,b) => {
    if (a> b) {
        //b가 a 앞으로
        return 1; //b,a 배치
    }else if (a < b) {
        //a가 b 앞으로
        return -1; //a,b 배치
    }else {
        //두 값의 자리 변경 없음
        return 0; //자리 변경 없음
    }
});

//4.toSorted
//원본 배열을 변경하지 않고 정렬된 새로운 배열 반환
let arr4 = ["c","a","b"];
const sorted = arr4.toSorted();

//5.join
//배열의 모든 요소를 문자열로 결합하여 반환
let arr5 = ["Hi","I'm","JongHyeok"];
const joined = arr5.join(" ");