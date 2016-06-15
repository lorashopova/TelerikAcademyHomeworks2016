function solve(args) {
	var num = +args[0];
    if (num %2 === 0) {
        return 'even' + ' ' + num; 
    }
    else{
        return 'odd' + ' ' + num;
    }
}

console.log(solve(['3']));
console.log(solve(['2']));
