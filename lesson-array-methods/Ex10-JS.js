function shuffle(array) {
    for (let i = array.length - 1; i > 0; --i) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }
    return arr;
}

let arr = [1, 2, 3];

alert(shuffle(arr));
alert(shuffle(arr));
alert(shuffle(arr));
