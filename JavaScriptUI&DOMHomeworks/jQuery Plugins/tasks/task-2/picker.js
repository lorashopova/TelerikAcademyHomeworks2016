//works in Firefox (in Chrome color palette can not be displayed)

$.fn.colorpicker = function () {
    let img = $('img');
    let pickerContainer = $('#color-picker-container');
    let closeButton = $('<div>').addClass('close-button').appendTo(pickerContainer);
    let hexInput = $('<input>').addClass('hex').attr('placeholder', 'HEX').appendTo($('<div>').attr('id', 'hex').appendTo(pickerContainer));
    let rgbInput = $('<input>').addClass('rgb').attr('placeholder', 'RGB').appendTo($('<div>').attr('id', 'rgb').appendTo(pickerContainer));
    let colorArea = $('<input>').addClass('color-area').appendTo($('<div>').attr('id', 'color').appendTo(pickerContainer));

    img.on('click', function () {
        pickerContainer.css('display', 'block');
    });

    closeButton.on('click', function () {
        pickerContainer.css('display', 'none');
    });

    var cvs = document.getElementById('picker-image');
    var canvas = cvs.getContext('2d');

    let imgPalette = new Image();
    imgPalette.src = 'imgs/color-picker.png';
    imgPalette.setAttribute('crossOrigin', '');
    imgPalette.crossOrigin = "anonymous";

    imgPalette.onload = function () {
        canvas.drawImage(imgPalette, 0, 0);
        //imgPalette.style.display = 'none';
    };

    function rgbToHex(R, G, B) {
        return toHex(R) + toHex(G) + toHex(B);
    }

    function toHex(n) {
        n = parseInt(n, 10);
        if (isNaN(n)) return "00";
        n = Math.max(0, Math.min(n, 255));
        return "0123456789ABCDEF".charAt((n - n % 16) / 16) + "0123456789ABCDEF".charAt(n % 16);
    }

    let color = $('#color input');

    document.getElementById('picker-image').onclick = function (e) {
        let x = e.layerX;
        let y = e.layerY;
        let pixel = canvas.getImageData(x, y, 1, 1);
        let img_data = pixel.data;
        let R = img_data[0];
        let G = img_data[1];
        let B = img_data[2];   
        let A = img_data[3];   
        let rgb = R + ',' + G + ',' + B;
        let hex = rgbToHex(R, G, B);
        $('#rgb input').val(rgb);
        $('#hex input').val('#' + hex);
         let rgba = 'rgba(' + R + ', ' + G + ', ' + B + ', ' + A/255 + ')';
        color.css('background-color',rgba);
        color.val(rgba);
    };

};