function solve(args) {
    var array = args[0].split('\n');
    array = array.map(Number);
    var minIndex;
    var temp;
    for (var i = 1; i < array.length; i += 1) {
        minIndex = i;
        for (var j = i + 1; j < array.length; j += 1) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    array.shift();
    return array.join('\n');
}

console.log(solve(['6\n3\n4\n1\n5\n2\n6']));
console.log(solve(['10\n36\n10\n1\n34\n28\n38\n31\n27\n30\n20']));






