function solve(args) {
    var array = args[0].split('\n');
    array = array.map(Number);
    array.shift();
    var num = array.pop();
    array.sort(function (a, b) {
        return a - b;
    });

    var max = array.length - 1,
        min = 0,
        middle;   

    while (min <= max) {
        middle = Math.floor((min + max) / 2, 10);
        if (array[middle] < num) {
            min = middle + 1;
        }
        else if (array[middle] > num) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
}

console.log(solve(['10\n1\n2\n4\n8\n16\n31\n32\n64\n77\n99\n32']));