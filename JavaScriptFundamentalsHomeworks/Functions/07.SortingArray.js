function solve(args) {
    var array = args[1].split(' ');
    array = array.map(Number);
    var temp;
    var index;

    for (var i = 0; i < array.length; i += 1) {
        for (var j = i + 1; j < array.length; j += 1) {
            if (array[i] > array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array.join(' ');
}

console.log(solve(['6', '3 4 1 5 2 6']));
console.log(solve(['10', '36 10 1 34 28 38 31 27 30 20']));

/*function solve(args) {
    var array = args[0].split(/[\s\\n]+/g);
    array = array.map(Number);
    array.shift();

    return array.sort(function (a, b) {
        return a - b;
    }).join(' ');
}

console.log(solve(['6\n3 4 1 5 2 6']));
console.log(solve(['10\n36 10 1 34 28 38 31 27 30 20']));
*/
