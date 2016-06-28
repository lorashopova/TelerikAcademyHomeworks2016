function solve(args) {
    var array = args[1].split(' ').map(Number);
    var counter = 0;

    for (var i = 1; i < array.length - 1; i += 1) {
        if (array[i] > array[i + 1] && array[i] > array[i - 1]) {
            counter++;
        }
    }

    return counter;
}

console.log(solve(['6', '-26 -25 -28 31 2 27 2 100 1']));
