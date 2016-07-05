function solve(args) {
    String.prototype.format = function (options) {
        var str = this,
            property,
            regex;
        for (property in options) {
            regex = new RegExp('#{' + property + '}', 'g');
            str = str.replace(regex, options[property]);
        }
        return str;
    };

    var options = JSON.parse(args[0]);
    var result = args[1].format(options);

    console.log(result);
}

solve([
    '{ "name": "John" }',
    "Hello, there! Are you #{name}?"
]);

solve([
    '{ "name": "John", "age": 13 }',
    "My name is #{name} and I am #{age}-years-old"
]);

