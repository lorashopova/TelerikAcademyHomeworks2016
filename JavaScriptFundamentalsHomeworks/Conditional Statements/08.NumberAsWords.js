function solve(args) {
    var num = +args[0];
    var result = '';
    var hundrets = '';
    var decimals = '';
    var units = '';

    if (num < 0 || num > 999) {
        result = 'Enter number in range [0-999]';
    }
    else if (num === 0) {
        result += 'Zero';
    }
    else {
        switch (Math.floor(num / 100)) {
            case 1: hundrets = 'one hundred';
                break;
            case 2: hundrets = 'two hundred';
                break;
            case 3: hundrets = 'three hundred';
                break;
            case 4: hundrets = 'four hundred';
                break;
            case 5: hundrets = 'five hundred';
                break;
            case 6: hundrets = 'six hundred';
                break;
            case 7: hundrets = 'seven hundred';
                break;
            case 8: hundrets = 'eight hundred';
                break;
            case 9: hundrets = 'nine hundred';
                break;
            case 0: hundrets = '';
                break;
        }
        if (num % 100 !== 0 && num >= 100) {
            hundrets = hundrets + ' and ';
        }
        num = num % 100;
        switch (Math.floor(num / 10)) {
            case 0:
                switch (num) {
                    case 1: decimals = 'one';
                        break;
                    case 2: decimals = 'two';
                        break;
                    case 3: decimals = 'three';
                        break;
                    case 4: decimals = 'four';
                        break;
                    case 5: decimals = 'five';
                        break;
                    case 6: decimals = 'six';
                        break;
                    case 7: decimals = 'seven';
                        break;
                    case 8: decimals = 'eight';
                        break;
                    case 9: decimals = 'nine';
                        break;
                }
                break;
            case 1:
                switch (num % 10) {
                    case 0: decimals = 'ten';
                        break;
                        case 1: decimals = 'eleven';
                        break;
                    case 2: decimals = 'twelve';
                        break;
                    case 3: decimals = 'thirteen';
                        break;
                    case 4: decimals = 'fourteen';
                        break;
                    case 5: decimals = 'fivteen';
                        break;
                    case 6: decimals = 'sixteen';
                        break;
                    case 7: decimals = 'seventeen';
                        break;
                    case 8: decimals = 'eighteen';
                        break;
                    case 9: decimals = 'nineteen';
                        break;
                }
                break;
            case 2: decimals = 'twenty ';
                break;
            case 3: decimals = 'thirty ';
                break;
            case 4: decimals = 'fourty ';
                break;
            case 5: decimals = 'fifty ';
                break;
            case 6: decimals = 'sixty ';
                break;
            case 7: decimals = 'seventy ';
                break;
            case 8: decimals = 'eighty ';
                break;
            case 9: decimals = 'ninety ';
                break;
        }
        if (num < 20) {
            units = '';
        }
        else {
            num = num % 10;
            switch (num) {
                case 1: units = 'one';
                    break;
                case 2: units = 'two';
                    break;
                case 3: units = 'three';
                    break;
                case 4: units = 'four';
                    break;
                case 5: units = 'five';
                    break;
                case 6: units = 'six';
                    break;
                case 7: units = 'seven';
                    break;
                case 8: units = 'eight';
                    break;
                case 9: units = 'nine';
                    break;
            }
        }

    }
    result += hundrets + decimals + units;
    result = result.charAt(0).toUpperCase()+ result.substring(1);
    return result;
}

console.log(solve(['0']));
console.log(solve(['9']));
console.log(solve(['10']));
console.log(solve(['12']));
console.log(solve(['19']));
console.log(solve(['25']));
console.log(solve(['98']));
console.log(solve(['273']));
console.log(solve(['400']));
console.log(solve(['501']));
console.log(solve(['617']));
console.log(solve(['711']));
console.log(solve(['999']));