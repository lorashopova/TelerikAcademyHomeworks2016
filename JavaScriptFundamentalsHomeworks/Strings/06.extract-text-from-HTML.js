function solve(args) {
    var regex = /<[^<]+>/g;
    var result = '';
    for (var i = 0; i < args.length; i++) {
       result += args[i].replace(regex, '').trim();
    }
    console.log(result);
}

solve([
    '<html>',
    '  <head>',
    '    <title>Sample site</title>',
    '  </head>',
    '  <body>',
    '    <div>text',
    '      <div>more text</div>',
    '      and more...',
    '    </div>',
    '    in body',
    '  </body>',
    '</html>'
]);