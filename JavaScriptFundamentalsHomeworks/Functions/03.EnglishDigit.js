function solve(args) {
    var num = +args[0];
    var lastDigit = num % 10;
    var word = '';
    switch (lastDigit) {
        case 1:
            word = 'one';
            break;
        case 2:
            word = 'two';
            break;
        case 3:
            word = 'three';
            break;
        case 4:
            word = 'four';
            break;
        case 5:
            word = 'five';
            break;
        case 6:
            word = 'six';
            break;
        case 7:
            word = 'seven';
            break;
        case 8:
            word = 'eight';
            break;
        case 9:
            word = 'nine';
            break;
        case 0:
            word = 'zero';
            break;
    }
    return word;
}

console.log(solve(['42']));
console.log(solve(['158']));
