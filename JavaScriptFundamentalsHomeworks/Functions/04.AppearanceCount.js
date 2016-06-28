function solve(args) {
    var array = args[1].split(' ').map(Number);
    var num = +args[2];
    var counter = 0;

    for (var i = 0; i < array.length; i += 1) {
        if (array[i] === num) {
            counter ++;
        }
    }

    return counter;
}

console.log(solve(['8', '28 6 21 6 -7856 73 73 -56', '73']));