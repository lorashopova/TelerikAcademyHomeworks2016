function solve(args) {
    var chars = args[0].split('\n'),
        charFirst = chars[0],
        charSecond = chars[1];
    if (charFirst === charSecond) {
        return '=';
    } else if (charFirst > charSecond) {
        return '>';
    } else {
        return '<';
    }
}

console.log(solve(['hello\nhalo']));
console.log(solve(['food\nfood']));
console.log(solve(['find\nfood']));

