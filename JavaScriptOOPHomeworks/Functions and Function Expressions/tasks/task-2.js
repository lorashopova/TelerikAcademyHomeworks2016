/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/

function solve() {
	return function findPrimes(min, max) {
		if(min === undefined || max === undefined){
			throw new Error('Missing parameter.');
		}
		min = +min;
		max = +max;
		let arr = [];
		for (let i = min; i <= max; i += 1) {
			let isPrime = true;
			let divisor = Math.sqrt(i);
			for (let j = 2; j <= divisor; j += 1) {
				if (!(i % j)) {
					isPrime = false;
					break;
				}
			}
			if (isPrime && i > 1) {
				arr.push(i);
			}
		}
		return arr;
	};
}

//console.log(solve()(4, 19)); 	//[5, 7, 11, 13, 17, 19]

module.exports = solve;
