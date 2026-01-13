//1.date 객체 생성법
let date1 = new Date(); //생성자

let date2 = new Date("2024/06/10/10:20:30");

//2.타임스탬프
//특정 시간이 "1970년 1월 1일 00:00:00 UTC"로부터 몇 ms가 지났는지 나타내는 숫자값
let ts1 = date1.getTime();
let date4 = new Date(ts1);

//3.시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();

//4.시간 수정
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

//5.시간을 여러 포맷으로 출력
console.log(date1.toDateString());
console.log(date1.toLocaleString());