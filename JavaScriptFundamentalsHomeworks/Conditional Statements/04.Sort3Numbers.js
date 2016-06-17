function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2];

    if ((a >= b) && (a >= c)) {
        if (b >= c) {
            return a + ' ' + b + ' ' + c;
        } else {
            return a + ' ' + c + ' ' + b;
        }
    } else if (b >= c) {
        if (a >= c) {
            return b + ' ' + a + ' ' + c;
        }
        else {
            return b + ' ' + c + ' ' + a;
        }
    } else {
        if (a >= b) {
            return c + ' ' + a + ' ' + b;
        } else {
            return c + ' ' + b + ' ' + a;
        }
    }
}

console.log(solve(['5', '1', '2']));
console.log(solve(['-2', '-2', '1']));
console.log(solve(['-2', '4', '3']));
console.log(solve(['0', '-2.5', '5']));
console.log(solve(['-1.1', '-0.5', '-0.1']));
console.log(solve(['10', '20', '30']));
console.log(solve(['1', '1', '1']));