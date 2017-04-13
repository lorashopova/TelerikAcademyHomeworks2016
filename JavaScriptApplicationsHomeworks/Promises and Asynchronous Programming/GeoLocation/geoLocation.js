function getGeoLocation() {
    let result = document.getElementById('result');
    let promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => resolve(position), (error) => reject(error));
    });

    function parseLocation(location) {
            return { 
                lat: location.coords.latitude, 
                long: location.coords.longitude 
            };
    }

    function showMap(coordinates) {
        let img = document.createElement('img');
        let src = `https://maps.googleapis.com/maps/api/staticmap?center=${coordinates.lat},${coordinates.long}&zoom=12&size=800x600`;
        img.setAttribute('src', src);
        img.style.border = '2px solid lightblue';
        result.appendChild(img);
    }

    function displayError(error){
        result.innerHTML = 'Error: ' + error.message;
        result.style.fontSize = '30px';
    }

    promise.then(parseLocation).then(showMap).catch(displayError);
}

