function readNumber() {
    let number;
    while (true) {
        number = prompt("Введіть число");
        if (number === null || number === "") {
            return null;
        }
        if (isFinite(number)) {
            return +number;
        }
    }
}

alert(readNumber());