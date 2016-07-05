function solve(args) {
    var url = args[0],
        len = url.length,
        protocolEnd = url.indexOf(':'),
        protocol = url.substring(0, protocolEnd),
        surverStart = protocolEnd + 3,
        serverEnd = url.indexOf('/', surverStart),
        server = url.substring(surverStart, serverEnd),
        resource = url.substring(serverEnd);

        console.log('protocol: ' +  protocol);
        console.log('server: ' +  server);
        console.log('resource: ' + resource);


    /*
    //work but only zero tests pass
    var regex = /(\w+):\/\/(\w+\.\w+)(.*)/g;
    var result = args[0].replace(regex, 'protocol: $1' + '\n' + 'server: $2' + '\n' + 'resource: $3');
    console.log(result);
    */
}

solve(['http://telerikacademy.com/Courses/Courses/Details/239']);
