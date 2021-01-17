function copySorted(arr) {
    let copyArr = arr.slice();
    return copyArr.sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted);
alert(arr);