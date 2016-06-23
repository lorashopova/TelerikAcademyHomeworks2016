function solve(args) {
    var array = args[0].split('\n');
    var current = 1,
        max = 1;

    for (var i = 1; i < array.length - 1; i++) {
        var currentElement = +array[i];
        var nextElement = +array[i + 1];
        if (currentElement === nextElement) {
           current++;
           if (current > max) {
               max = current;
           }
        }
        else {
            current = 1;
        }
    }
    return max;
}

console.log(solve(['10\n2\n1\n1\n2\n3\n3\n2\n2\n2\n1']));
