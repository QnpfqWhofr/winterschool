// function add(a, b, callback) {
//     setTimeout(() => {
//         const sum = a + b;
//         callback(sum);
//     }, 3000);
// }

// add(1,2, (value) => {
//     console.log(value);
// });


function orderfood(callback) {
    setTimeout(() => {
        const food = "스파게티";
        callback(food);
    }, 3000);
}

function cooldownfood(food, callback) {
    setTimeout(() => {
        const cooldownfood = `식은 ${food}`;
        callback(cooldownfood);
    }, 2000);
}

function freezefood(food, callback) {
    setTimeout(() => {
        const freezedfood = `얼어버린 ${food}`;
        callback(freezedfood);
    }, 1500);
}

orderfood((food) => {
    console.log(food);
    cooldownfood(food, (cooldownfood) => {
        console.log(cooldownfood);
        freezefood(cooldownfood, (freezedfood) => {
            console.log(freezedfood);
        });
    });
});