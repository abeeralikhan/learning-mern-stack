const personInfo = {
    name: "Abeer Ali Khan",
    age: 21,
    education: "BS in Software Engineering"
};

// Looping over an object using the for...of loop

for(let key of Object.keys(personInfo)) {
    console.log(key);
}

// Looping over an object using for...in loop

for(let key in personInfo) {
    console.log(key);
}

// for(let key, value in personInfo)  {
//     console.log(`${key} --> ${value}`);
// }

