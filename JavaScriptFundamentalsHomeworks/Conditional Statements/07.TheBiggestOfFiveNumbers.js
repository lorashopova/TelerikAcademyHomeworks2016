function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        d = +args[3],
        e = +args[4];

    if (a > b) {
        if (a > c) {
            if (a > d) {
                if (a > e) {
                    return a;
                }
                else {
                    return e;
                }
            }
            else {
                if (d > e) {
                    return d;
                } else {
                    return e;
                }
            }
        }
        else {
            if (c > d) {
                if (c > e) {
                    return c;
                } else {
                    return e;
                }
            } else {
                if (d > e) {
                    return d;
                } else {
                    return e;
                }
            }
        }
    }
    else {
        if (b > c) {
            if (b > d) {
                if (b > e) {
                    return b;
                } else {
                    return e;
                }
            } else {
                if (d > e) {
                    return d;
                } else {
                    return e;
                }
            }
        } else {
            if (c > d) {
                if (c > e) {
                    return c;
                } else {
                    return e;
                }
            } else {
                if (d > e) {
                    return d;
                } else {
                    return e;
                }
            }
        }
    }
}

console.log(solve(['5', '2', '2', '4', '1']));
console.log(solve(['-2', '-22', '1', '0', '0']));
console.log(solve(['-2', '4', '3', '2', '0']));
console.log(solve(['0', '-2.5', '0', '5', '5']));
console.log(solve(['-3', '-0.5', '-1.1', '-2', '-0.1']));