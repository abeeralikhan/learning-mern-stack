const { multiply } = require('./multiply');
const { add } = require('./add');

function power(n, m) {
    let result = multiply(n, n);
    for(let i = 1; i < (m - 1); i++) {
        result = multiply(result, n);
    }
    return result;
}

function average(...nums) {
    return add(...nums)/nums.length;
}

// we use module.exports = {} 
// OR,

module.exports = {
    average,
    power,
};