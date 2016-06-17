function solve(args) {
    var a = +args[0],
        b = +args[1];

    if (a < b) {
        return a + ' ' + b;
    } else {
        return b + ' ' + a;
    }
}

console.log(solve(['5', '2']));
console.log(solve(['3', '4']));
console.log(solve(['5.5', '4.5']));
