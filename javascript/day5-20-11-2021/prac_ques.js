function isValidPassword(password, username) {
    if(password.length>=8 && !password.includes(" ") && !password.includes(username)){
        return true;
    }

    return false;
}

function average(lst) {
    let sum = 0;
    for(i of lst) {
        sum+=i;
    }

    return sum/lst.length;
}

function checkPangram(str) {
    str = str.toLowerCase();

    if(str.includes('a') && str.includes('b') && str.includes('c') &&
    str.includes('d') && str.includes('e') && str.includes('f') &&
    str.includes('g') && str.includes('h') && str.includes('i') &&
    str.includes('j') && str.includes('k') && str.includes('l') &&
    str.includes('m') && str.includes('n') && str.includes('o') &&
    str.includes('p') && str.includes('q') && str.includes('r') &&
    str.includes('s') && str.includes('t') && str.includes('u') &&
    str.includes('v') && str.includes('w') && str.includes('x') &&
    str.includes('y') && str.includes('z')) {
        return true;
    }

    return false;
}

// Following function contains much more precised code than the above one. 
function checkPangramv2(str) {
    let strLowered = str.toLowerCase();

    for(let char of 'abcdefghijklmnopqrstuvwxyz') {
        // console.log(char);
        if(!strLowered.includes(char)) {
            return false;
        }
    }

    return true;
}
console.log(isValidPassword("89Fjjklnms", "dogLuvr"));
console.log(isValidPassword("dogLuvr123", "dogLuvr"));
console.log(isValidPassword("abeer 123", "dogLuvr"));
console.log(average([0, 50]));
console.log(average([75, 76, 80, 95, 100]));
console.log(checkPangram("The five boxing wizards jump quickly"));
console.log(checkPangram("The five boxing wizards jump quick"));
console.log(checkPangramv2("The five boxing wizards jump quickly"));
console.log(checkPangramv2("The five boxing wizards jump quick"));

