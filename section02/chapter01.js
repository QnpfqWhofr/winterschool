//1.falsy한 값
let f1=undefined;
let f2=null;
let f3=0;
let f4=-0;
let f5=NaN;
let f6="";
let f7=0n;

//2.truthy한 값
//7가지 falsy 제외 나머지 모두
let t1="hello";
let t2=123;
let t3=[];
let t4={};
let t5=()=>{};

//3.활용 사례

function printname(person) {
    if (!person) {
        console.log("이름 없음");
        return;
    }
    console.log(person.name);
}

let person;
printname(person);