function solve(args) {
    var array = args[0].split('\n');
    array = array.map(Number);
    array.shift();
    array.sort(function (a, b) {
        return a - b;
    });

    var current = 1,
        max = 1,
        maxNumber = array[0];

    for (var i = 0; i < array.length; i+=1) {
        if (array[i] === array[i+1]) {
            current ++;
            if(current > max){
                max = current;
                maxNumber = array[i];
            }
        } else {
            current = 1;
        }

    }
    return maxNumber + ' (' + max + ' times)';
}


console.log(solve(['13\n4\n1\n1\n4\n2\n3\n4\n4\n1\n2\n4\n9\n3']));