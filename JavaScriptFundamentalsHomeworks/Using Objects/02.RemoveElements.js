function solve(args) {
    Array.prototype.remove = function (value) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === value) {
            this.splice(i, 1);
            i--;
        }
    }
};
    var valueToRemove = args[0];
    args.remove(valueToRemove);

    return args.join('\n');
}

console.log(solve(['1', '2', '3', '2', '1', '2', '3', '2']));
console.log(solve([
    '_h/_',
    '^54F#',
    'V',
    '^54F#',
    'Z285',
    'kv?tc`',
    '^54F#',
    '_h/_',
    'Z285',
    '_h/_',
    'kv?tc`',
    'Z285',
    '^54F#',
    'Z285',
    'Z285',
    '_h/_',
    '^54F#',
    'kv?tc`',
    'kv?tc`',
    'Z285'
]));