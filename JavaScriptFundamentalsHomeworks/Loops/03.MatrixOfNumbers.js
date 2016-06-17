function solve(args) {
	var num = +args[0];
    var result = [];
    for (var i = 1; i <= num; i++) {
       for (var j = i; j <= num + i -1; j++) {
          result += j + ' ';          
       }
       result += ('\n');
    }
         return result;
}

console.log(solve(['2']));
console.log(solve(['3']));
console.log(solve(['4']));