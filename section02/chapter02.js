//단락 평가
// function returnfalse() {
//     console.log("false 함수");
//     return undefined;
// }

// function returntrue() {
//     console.log("true 함수");
//     return 18;
// }

// console.log(returnfalse() && returntrue());


//단락 평가 활용 사례

function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "우종혁" });