function operationType(operation) {
    switch(operation) {
        case 'add':
            return (a, b) => a + b;

        case 'sub':
            return (a, b) => a - b;

        case 'multiply':
            return (a, b) => a * b;

        case 'divide':
            return (a, b) => a / b;

        default:
            return null;
    }
}

function multiplyBy(num) {
    return (x) => x * num; 
}

const add = operationType('add');
const divide = operationType('divide');
console.log(add(10, 15));
console.log(divide(15, 5));

const tripple = multiplyBy(3);
const chubble = multiplyBy(4);
console.log(tripple(5));
console.log(tripple(15));
console.log(chubble(4));