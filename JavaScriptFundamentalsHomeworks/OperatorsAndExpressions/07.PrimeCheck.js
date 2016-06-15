function solve(args) {
    var num = +args[0];
    if (num < 2) {
        return false;
    } else {
        for (var index = 2; index <= num; index += 1) {
            if (num % index === 0 && index !== num) {
                return false;
            }
        }
        return true;
    }
}

console.log(solve(['2']));
console.log(solve(['23']));
console.log(solve(['-3']));
console.log(solve(['5']));
console.log(solve(['6']));
