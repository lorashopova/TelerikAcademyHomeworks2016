/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	

*/

function solve() {
	return function sum(array) {
		if(array.length < 1){
			return null;
		}
		if(!array.every(x => x == Number(x) )){
			throw new Error('Not a number');
		}
		if (!Array.isArray(array)) {
			throw new Error('Array not passed.');
		}
		return array.reduce((x,y) => x + (+y), 0);
	};
}

module.exports = solve;
