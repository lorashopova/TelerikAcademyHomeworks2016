function solve(args) {
    var reg = / /g;
    args[0] = args[0].replace(reg, '&nbsp;');
    console.log(args[0]);
}

solve(['hello world']);
solve(['This text contains 4 spaces!!']);