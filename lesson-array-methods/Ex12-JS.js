function unique(arr) {
    let newArr = [];
    for (let elem of arr) {
        if (!newArr.includes(elem)) {
            newArr.push(elem);
        }
    }
    return newArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings));