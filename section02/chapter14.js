//async
//어떤 함수를 비동기 함수로 만들어주는 키워드
//함수가 프로미스를 반환하도록 변환

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "우종혁",
                age: 18,
            });
        }, 1500);
    });
}

//await
//async 함수 내부에서만 사용 가능
//비동기 함수가 처리될 때까지 기다림

async function printData() {
    const data =  await getData();
    console.log(data);
}

printData();