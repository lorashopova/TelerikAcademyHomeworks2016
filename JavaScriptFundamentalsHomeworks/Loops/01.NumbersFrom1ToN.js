function solve(args) {
	var num = +args[0];
    var result = [];
	
    for (var i = 1; i <= num; i+=1) {
        result.push(i);
    }
    return result.join(' ');
}

console.log(solve('5'));
console.log(solve('1'));

