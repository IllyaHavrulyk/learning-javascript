function camelize(str) {
    let arr = str.split("-");
    let tempElem = arr[0];
    arr.shift();
    let newArr = arr.map(elem => {
        return elem[0].toUpperCase() + elem.slice(1);
    })
    newArr.unshift(tempElem);
    return newArr.join("");
}

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));