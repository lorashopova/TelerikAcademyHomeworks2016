function getMax(args) {
    var array = args[0].split(' ');
    array =  array.map(Number);
    var max = array[0];

    for (var i = 0; i < array.length; i+=1) {
        if (array[i] > max) {
            max = array[i];
        } 
    }
    return max;
}

console.log(getMax(['8 3 6']));
console.log(getMax(['7 19 19']));
