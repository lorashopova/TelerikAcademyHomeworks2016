function solve(args) {
    var array = args[0].split(/[\s\\n]+/g);
    array = array.map(Number);
    array.shift();
    var num = array.pop();
    var counter = 0;

    for (var i = 0; i < array.length; i += 1) {
        if (array[i] === num) {
            counter ++;
        }
    }

    return counter;
}

console.log(solve(['8\n28 6 21 6 -7856 73 73 -56\n73']));