function solve(args) {
    var substring = args[0];
    var text = args[1];

    var regex = new RegExp(substring, "gi");
    var count = text.match(regex);
    console.log(count.length);
}

solve([
    'in',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]);