function solve(args) {
    var result = '';
    var array = args[0].split('');
    for (var i = array.length - 1; i >= 0; i -= 1) {
        result += array[i];
    }
    console.log(result);
}

solve(['sample']);
solve(['qwertytrewq']);
