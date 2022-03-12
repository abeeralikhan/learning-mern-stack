function multiply(...nums) {
    return nums.reduce((prev, current) => {
        return prev*current;
    });
}

// we use module.exports = {} 
// OR,

module.exports = {
    multiply,
};