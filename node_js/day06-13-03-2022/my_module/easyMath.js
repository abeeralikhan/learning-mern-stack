const internals = require('./internals');

function power(n, m) {
    let result = internals.multiply.multiply(n, n);
    for(let i = 1; i < (m - 1); i++) {
        result = internals.multiply.multiply(result, n);
    }
    return result;
}

function average(...nums) {
    return internals.add.add(...nums)/nums.length;
}

// we use module.exports = {} 
// OR,

module.exports = {
    average,
    power,
};