const nums = [1, 2, 3, 4, 5, 6, 7];

let sum = nums.reduce((accumulator, currentVal) => {
    return accumulator + currentVal;
});

let max = nums.reduce((maxi, currentVal) => {
    return maxi > currentVal ? maxi : currentVal;
});

let min = nums.reduce((mini, currentVal) => {
    return mini < currentVal ? mini : currentVal;
});
console.log(sum);
console.log(max);
console.log(min);