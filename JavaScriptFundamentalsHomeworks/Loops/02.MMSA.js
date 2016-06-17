function solve(args) {
    var min = +args[0];
    var max = +args[0];
    var sum = 0;
    var average = 0;

    for (var j = 0; j < args.length; j += 1) {
        if (min > +args[j]) {
            min = +args[j];
        }
        if (max < +args[j]) {
            max = +args[j];
        }
        sum += +args[j];
    }
    average = sum/args.length;

    return 'min=' + min.toFixed(2) + '\n' + 'max=' + max.toFixed(2) + '\n'+ 'sum=' + sum.toFixed(2) + '\n' + 'avg=' + average.toFixed(2);
}

console.log(solve(['3', '2', '5', '1']));
console.log(solve(['3', '2', '-1', '4']));

