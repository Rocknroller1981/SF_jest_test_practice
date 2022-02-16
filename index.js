function repWord(a, b) {
    let str = a + 1 + ',';
    for (i = 2; i <= b; i++) {
        str += a + i + ',';
    }
    return str
}


function multiply(a, c) {
    return a * c
}


function search(a) {
    return a.filter(item => typeof(item) == "number");
}


function getNum(a) {
    if (!a) { return false } else {
        let b;
        b = a + 1;
        if (b % 2 == 0) { return b } else { return false }
    }
}

module.exports = { repWord, multiply, search, getNum };