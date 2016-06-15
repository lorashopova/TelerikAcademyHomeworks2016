function solve(args) {
    var a = +args[0],
        b = +args[1],
        h = +args[2];

   var area = ((a + b) * h) / 2;
   return area.toFixed(7);
}

console.log(solve(['5', '7', '12']));
console.log(solve(['2', '1', '33']));
console.log(solve(['8.5', '4.3', '2.7']));
console.log(solve(['100', '200', '300']));
console.log(solve(['0.222', '0.333', '0.555']));

