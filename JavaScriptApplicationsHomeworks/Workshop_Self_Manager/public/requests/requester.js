function makeRequest(method, url, options) {
  options = options || {};

  let headers = options.headers || {},
    data = options.data || undefined;

  let promise = new Promise(function (resolve, reject) {
    $.ajax({
      url: url,
      method: method,
      contentType: 'application/json',
      headers: headers,
      data: JSON.stringify(data),
      success: function (res) {
        resolve(res);
      },
      error: function (err) {
        reject(err);
      }
    });
  });
  return promise;
}

class Requester {
  get(url, options) {
    return makeRequest('GET', url, options);
  }

  post(url, options) {
    return makeRequest('POST', url, options);
  }

  put(url, options) {
    return makeRequest('PUT', url, options);
  }

  del(url, options) {
    return makeRequest('POST', url, options);
  }

}

let requester = new Requester();

export { requester };