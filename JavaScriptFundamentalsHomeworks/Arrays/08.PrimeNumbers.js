function solve(args) {
    var num = +args[0];
    for (num = num; num >= 2; num -= 1) {
        var isPrime = true;
        var maxDivisor = Math.sqrt(num);
        for (var i = 2; i <= maxDivisor; i += 1) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            return num;
        }
    }
}

console.log(solve(['13']));
console.log(solve(['126']));
console.log(solve(['26']));
