function solve(args) {
    var width = +args[0],
        height = +args[1];

    var perimeter = 2 * (width + height);
    var area = width * height;

    return area.toFixed(2) + ' ' + perimeter.toFixed(2);
}

console.log(solve(['2.5', '3']));