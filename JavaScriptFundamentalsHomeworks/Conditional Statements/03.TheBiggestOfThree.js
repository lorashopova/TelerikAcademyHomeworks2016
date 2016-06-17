function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2];

    if (a > b) {
        if (a > c) {
            return a;
        } else {
            return c;
        }
    } else if (b > c) {
        return b;
    } else {
        return c;
    }
}

console.log(solve(['5', '2', '2']));
console.log(solve(['-2', '-2', '1']));
console.log(solve(['-2', '4', '3']));
console.log(solve(['0', '-2.5', '5']));
console.log(solve(['-0.1', '-0.5', '-1.1']));
