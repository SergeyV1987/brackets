module.exports = function check(str, bracketsConfig) {
    let brackets = {};
    let openingBrackets = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        brackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
    }

    for (let c of str) {
        if (brackets[openingBrackets[openingBrackets.length - 1]] === c) {
            openingBrackets.pop();
        } else if (c in brackets) {
            openingBrackets.push(c);
        } else {
            return false;
        }
    }

    return openingBrackets.length === 0;
};
