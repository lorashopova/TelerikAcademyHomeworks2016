(function () {
    const baseUrl = "https://baas.kinvey.com/";
    const appKey = "kid_r1MLNB66l";
    const appSecret = "7ed2cd833b9e427db7b508c949b30e2b";
    const user = 'gallery';
    const pass = 'somePass';
    const authHeaders = {
        "Authorisation": "Basic " + btoa(appKey + ":" + appSecret)
    };

    viewGallery();

    function logInUser() {

    }

    function registerUser() {

    }

    function logOutUser() {

    }

    function viewGallery() {
        $('#btnLoad').on('click', function () {
            $('main').css('background-image', 'none');
            $('.container').css('display', 'none');
            $.get({
                url: baseUrl + 'appdata/' + appKey + '/paintings',
                headers: authHeaders
            }).then(displayGallery).catch(displayError);
        });
    }

    function displayGallery(paintings) {
        let main = $('main');
        let list = $('<ul>').addClass('gallery');
        for (let picture of paintings){
            list.append($('<li class="itemGallery">').append($('<img class="imgGallery">').attr('src', picture.image._downloadURL)).append($('<div>').text(picture.artist)).append($('<div>').text(picture.title)));
        }
        main.append(list);
    }

    function displayError(error){
        $('#error').text('Error: ' + error.status + '(' + error.statusText + ')');
        $('#error').show();        
        setTimeout(function(){
            $('#error').fadeOut();
        },3000);
    }
})();