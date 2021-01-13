function getMaxSubSum(arr) {
    let sum = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum += arr[i];
        if (maxSum < sum) {
            maxSum = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9]));
alert(getMaxSubSum([2, -1, 2, 3, -9]));
alert(getMaxSubSum([-1, 2, 3, -9, 11]));
alert(getMaxSubSum([-2, -1, 1, 2]));
alert(getMaxSubSum([100, -9, 2, -3, 5]));
alert(getMaxSubSum([1, 2, 3]));