function filterRangeInPlace(arr, a, b) {
    arr.forEach((element, index) => {
        if (element > b || element < a) {
            arr.splice(index, 1);
        }
    });
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

alert(arr);