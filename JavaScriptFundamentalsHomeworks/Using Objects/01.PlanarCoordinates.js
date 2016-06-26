function solve(args) {
    args = args.map(Number);
    var point1X = args[0],
        point1Y = args[1],
        point2X = args[2],
        point2Y = args[3],
        point3X = args[4],
        point3Y = args[5],
        point4X = args[6],
        point4Y = args[7],
        point5X = args[8],
        point5Y = args[9],
        point6X = args[10],
        point6Y = args[11];

    var line1 = {
        point1: {
            x: point1X,
            y: point1Y
        },
        point2: {
            x: point2X,
            y: point2Y
        }
    };

    var line2 = {
        point1: {
            x: point3X,
            y: point3Y
        },
        point2: {
            x: point4X,
            y: point4Y
        }
    };

    var line3 = {
        point1: {
            x: point5X,
            y: point5Y
        },
        point2: {
            x: point6X,
            y: point6Y
        }
    };

    var segment1 = calculeteDistanceBetweenPoints(line1.point1, line1.point2);
    var segment2 = calculeteDistanceBetweenPoints(line2.point1, line2.point2);
    var segment3 = calculeteDistanceBetweenPoints(line3.point1, line3.point2); 
    var result = canFormTriangle(segment1, segment2, segment3);


    return segment1.toFixed(2) + '\n' + segment2.toFixed(2) + '\n' + segment3.toFixed(2) + '\n' + result;

    function calculeteDistanceBetweenPoints(point1, point2) {
        return Math.sqrt((point2.x - point1.x) * (point2.x - point1.x) + (point2.y - point1.y) * (point2.y - point1.y));
    }

    function canFormTriangle(line1, line2, line3) {
        if(line1 + line2 > line3 && line2 + line3 > line1 && line3 + line1 > line2){
            return 'Triangle can be built';
        }
        else{
            return 'Triangle can not be built';
        }
    }
}

console.log(solve([
    '5', '6', '7', '8',
    '1', '2', '3', '4',
    '9', '10', '11', '12'
]));

console.log(solve([
    '7', '7', '2', '2',
    '5', '6', '2', '2',
    '95', '-14.5', '0', '-0.123'
]));