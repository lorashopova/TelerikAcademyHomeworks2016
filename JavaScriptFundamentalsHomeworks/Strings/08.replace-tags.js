function solve(args) {
    var regex = /<a href="(.*?)">(.*?)<\/a>/g;

    var result = args[0].replace(regex, '[$2]($1)');

    console.log(result);
}

solve(['<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>']);

//another solution that works
/*
function solve(args) {
    var regex = /<a href="(.*?)">(.*?)<\/a>/g;

    var result = args[0].replace(regex, function (none, address, content) {

        return '[' + content + '](' + address + ')';
    });

    console.log(result);
}
*/