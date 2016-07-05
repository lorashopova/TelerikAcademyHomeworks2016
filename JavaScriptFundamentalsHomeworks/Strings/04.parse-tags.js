function solve(args) {
    var text = args[0],
        inTag = false,
        currentTag = '',
        tags = [],
        result = [];

    for (var i = 0; i < text.length; i++) {
        if (text[i] === '<') {
            inTag = true;
        } else if (text[i] === '>' && inTag) {
            inTag = false;
            currentTag += text[i];
            tags.push(currentTag);
            currentTag = '';
        } else if (!inTag) {
            if (tags.length === 0) {
                result.push(text[i]);
            } else if (tags[tags.length - 1].indexOf('upcase') !== -1) {
                result.push(text[i].toUpperCase());
            } else if (tags[tags.length - 1].indexOf('lowcase') !== -1) {
                result.push(text[i].toLowerCase());
            } else {
                result.push(text[i]);
            }
        }

        if (inTag || text[i] === '>') {
            currentTag += text[i];
        }

        if (tags.length !== 0 && tags[tags.length - 1].indexOf('</') !== -1) {
            tags.pop();
            tags.pop();
        }
    }

    console.log(result.join(''));
}

solve(['We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything <upcase>text</upcase> </lowcase> else.']);

/*
//does not work when regions are nested like this: <upcase>text <lowcase>another text</lowcase></upcase>
function solve(args) {
    var upcase = /<upcase>(.*?)<\/upcase>/gi;
    var lowcase = /<lowcase>(.*?)<\/lowcase>/gi;
    var orgcase = /<orgcase>(.*?)<\/orgcase>/gi;

    var text = args[0].replace(upcase, function (match, text) {
        return text.toUpperCase();
    });

    text = text.replace(lowcase, function (match, text) {
        return text.toLowerCase();
    });

    text = text.replace(orgcase, function (match, text) {
        return text;
    });


    console.log(text);
}

 */