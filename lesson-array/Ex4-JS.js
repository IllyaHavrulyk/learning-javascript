function sumInput() {
    let array = [];
    while (true) {
        let temp = prompt("Введіть число");
        if (temp === '' || temp === null || isNaN(temp)) {
            break;
        }
        array.push(+temp);
    }
    let sum = 0;
    for (let elem of array) {
        sum += elem;
    }
    return sum;
}

alert(sumInput());
