function getMax(...args) {
    return args.reduce((max, currentVal) => {
        return currentVal > max ? currentVal : max;
    });
}

function getSum(...numbers) {
    return numbers.reduce((sum, val) => {
        return sum+val;
    });
}

console.log(getMax(1, 2));
console.log(getSum(1, 2));
console.log(getMax(9, 0, 100, 500));
console.log(getSum(9, 0, 100, 500));

