module.exports = function reverse (n) {
    let strN = n.toString().split('').reverse();
    let newArr = [];
    for (let i = 0; i < strN.length; i++) {
        if (strN[i] !== '-') {
            newArr.push(strN[i])
        }
    }
    return newArr.join('')
};
