function getAverageAge(users) {
    let result = users.reduce((sum, current) => sum + current.age, 0);
    return result / users.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

alert(getAverageAge(arr));