function filterRange(arr, a, b) {
    return arr.filter(elem => (elem >= a && elem <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered);

alert(arr);