function solve(args) {
	var x = +args[0],
		y = +args[1];

	var radius = 2;
	var distance = Math.sqrt((x * x) + (y * y)).toFixed(2);
	if (distance <= (radius * radius)) {
		return 'yes ' + distance;
	} else {
		return 'no ' + distance;
	}
}

console.log(solve(['-2', '0']));
console.log(solve(['-1', '2']));
console.log(solve(['2.5', '2']));

