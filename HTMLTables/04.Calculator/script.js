var display = document.getElementById('display');
var calcButtons = document.getElementsByClassName('calcButtons');
var clear = document.getElementById('clear');
var evalButton = document.getElementById('evalButton');

for (var i = 0; i < calcButtons.length; i++) {
    calcButtons[i].addEventListener('click', function (e) {
        var target = e.target;
        var input = target.innerHTML;
        display.value += input;
    }, false);
}

clear.addEventListener('click', function () {
    display.value = ' ';
}, false);

evalButton.addEventListener("click", function () {
    if (display.value != '') {
        display.value = eval(display.value);
    }
}, false);
