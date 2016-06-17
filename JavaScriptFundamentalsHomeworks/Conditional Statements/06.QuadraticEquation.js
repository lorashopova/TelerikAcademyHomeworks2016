function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2];

    var d = b * b - 4 * a * c;

    if (d > 0) {
        var x1 = ((-b) - Math.sqrt(d)) / (2 * a);
        var x2 = ((-b) + Math.sqrt(d)) / (2 * a);
        return 'x1=' + x1.toFixed(2) + '; x2=' + x2.toFixed(2);
    } else if (d === 0) {
        var x = (-b) / (2 * a);
        return 'x1=x2=' + x.toFixed(2);
    } else {
        return 'no real roots';
    }
}

console.log(solve(['2', '5', '-3']));
console.log(solve(['-1', '3', '0']));
console.log(solve(['-0.5', '4', '-8']));
console.log(solve(['5', '2', '8']));
console.log(solve(['0.2', '9.572', '0.2']));
