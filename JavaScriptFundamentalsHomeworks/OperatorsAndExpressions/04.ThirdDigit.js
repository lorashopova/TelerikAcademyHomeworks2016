function solve(args) {
	var num = +args[0];
	var digit = (num / 100);
	var digitFloor = Math.floor(digit);
	var digitTen = digitFloor % 10;
	if (digitTen % 10 == 7) {
		return 'true';
	} else {
		return 'false' + ' ' + digitTen;
	}
}

console.log(solve(['5']));
console.log(solve(['701']));
console.log(solve(['9703']));
console.log(solve(['877']));
console.log(solve(['777877']));
console.log(solve(['9999799']));


