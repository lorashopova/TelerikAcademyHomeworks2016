import 'jquery';
import 'jquery-ui';

function _makeRequest(method, url, headers, data) {
    return $.ajax({
        method: method,
        url: url,
        headers: headers,
        data: JSON.stringify(data)
    });
}

class Requester {
    get(url, headers) {
        return _makeRequest('GET', url, headers);
    }

    post(url, headers, data) {
        return _makeRequest('POST', url, headers, data);

    }

}
let requester = new Requester();

export { requester };

