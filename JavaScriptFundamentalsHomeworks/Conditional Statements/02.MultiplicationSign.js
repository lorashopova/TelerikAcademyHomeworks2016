function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2];

    if ((a > 0 && b > 0 && c > 0) || (a < 0 && b < 0 && c > 0) || (a < 0 && b > 0 && c < 0) || (a > 0 && b < 0 && c < 0)) {
        return '+';
    } else if (a === 0 || b === 0 || c === 0) {
        return '0';
    }
    else {
        return '-';
    }
}

console.log(solve(['5', '2', '2']));
console.log(solve(['-2', '-2', '1']));
console.log(solve(['-2', '4', '3']));
console.log(solve(['0', '-2.5', '4']));
console.log(solve(['-1', '-0.5', '-5.1']));
