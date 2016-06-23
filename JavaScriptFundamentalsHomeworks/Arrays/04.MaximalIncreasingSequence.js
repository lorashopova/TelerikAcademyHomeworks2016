function solve(args) {
    var array = args[0].split('\n');
    var current = 1,
        max = 1;
        var result = [],
        start = 1,
        best = 1;

    for (var i = 1; i < array.length; i++) {
        var currentElement = +array[i];
        var nextElement = +array[i + 1];
        if (currentElement < nextElement) {
           current++;
           if (current > max) {
               max = current;
               best = start;
           }
        }
        else {
            start = i + 1;
            current = 1;
        }
    }
    for (var j = best; j <= best + max -1; j++) {
        result.push(array[j]);
        
    }
    return result;
}

console.log(solve(['8\n7\n3\n2\n3\n4\n2\n2\n4\n6\n8\n9']));
