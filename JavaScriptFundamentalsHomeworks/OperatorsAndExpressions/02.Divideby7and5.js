function solve(args) {
	var num = +args[0];
    if (num % 5 === 0 && num % 7 === 0) {
        return 'true' + ' ' + num;
    } else {
        return 'false' + ' ' + num;
    }
}

console.log(solve(['5']));
console.log(solve(['7']));
console.log(solve(['35']));
