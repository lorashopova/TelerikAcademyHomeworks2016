function solve(args) {
    var x = +args[0],
        y = +args[1];
    var radius = 1.5;
    var result = '';

    var distance = Math.sqrt((x - 1) * (x - 1) + (y - 1) * (y - 1));
    if (distance <= radius) {
        result = 'inside circle';
    } else {
        result = 'outside circle';
    }
    if ((x <= 5) && (x >= -1) && (y <= 1) && (y >= -1)) {
        result += ' inside rectangle';
    } else {
        result += ' outside rectangle';
    }
    return result;
}

console.log(solve(['2.5', '2']));
console.log(solve(['0', '1']));
console.log(solve(['2.5', '1']));
console.log(solve(['1', '2']));



    
        

