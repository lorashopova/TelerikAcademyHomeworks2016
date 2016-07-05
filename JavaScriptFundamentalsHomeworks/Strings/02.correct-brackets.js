function solve(args) {
    var bracketsCounter = 0;
    var array = args[0].split('');
    for (var char = 0; char < array.length; char += 1) {
        if (array[char] === '(') {
            bracketsCounter += 1;
        }
        else if (array[char] === ')') {
            bracketsCounter -= 1;
        }
    }
    if (bracketsCounter === 0) {
        console.log('Correct');
    } else {
        console.log('Incorrect');
    }
}

solve(['((a+b)/5-d)']);
solve([')(a+b))']);