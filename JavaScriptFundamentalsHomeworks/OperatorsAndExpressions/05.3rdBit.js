function solve(args) {
	var num = +args[0];
    if (((num >> 3) & 1) === 0) {
        return 0;
    } else {
        return 1;
    }
}

console.log(solve(['15']));
console.log(solve(['1024']));
