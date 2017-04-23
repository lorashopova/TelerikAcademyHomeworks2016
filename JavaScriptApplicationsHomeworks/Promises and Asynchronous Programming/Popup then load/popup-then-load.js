function load() {
    let clicked = document.getElementById('text');
    let popup = document.getElementById('popup');

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 3000);
    });

    function showPopup() {
        popup.style.display = 'block';
        clicked.style.display = 'none';
    }

    function redirect() {
        setTimeout(() => window.location = 'http://demos.jquerymobile.com/1.4.5/popup/', 2000);
    }

    function displayError(error) {
        popup.style.display = 'block';
        popup.innerHTML = 'Error: ' + error.message;
    }

    promise.then(showPopup).then(redirect).catch(displayError);


}
