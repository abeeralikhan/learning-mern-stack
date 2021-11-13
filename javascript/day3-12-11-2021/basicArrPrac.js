// Declare a list only with fruits starting with A

function checkFruits(fruits) {
    for(let fruit of fruits) {
        if (fruit[0]!=="A") {
            return false;
        }
    }
    return true;
}

const fruits1 = ["Apple", "Appricot"];
const fruits2 = ["Apple", "Banana"];

console.log(`Is first list valid? --> ${checkFruits(fruits1)}`)
console.log(`Is first list valid? --> ${checkFruits(fruits2)}`)