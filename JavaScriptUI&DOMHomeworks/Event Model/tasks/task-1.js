/* globals $ */

/* 

Create a function that takes an id or DOM element and:
  

*/

function solve() {
  return function (selector) {
    var element;
    if (typeof selector !== 'string' && !(selector instanceof HTMLDocument)) {
      throw new Error();
    }

    if (typeof selector === 'undefined') {
      throw new Error();
    }

    if (typeof selector === 'string') {
      element = document.getElementById(selector);
    } else {
      element = selector;
    }

    var buttons = element.getElementsByClassName('button');
    var contents = element.getElementsByClassName('content');

    for (var b = 0; b < buttons.length; b += 1) {
      buttons[b].innerHTML = 'hide';
      buttons[b].addEventListener('click', function (e) {
        var target = e.target;
        var next = target.nextElementSibling;

        while (next) {
          if (next.className === 'button') {
            return;
          } else if (next.className === 'content') {
            break;
          } else {
            next = next.nextElementSibling;
          }
        }

        if (next.style.display === 'none') {
          next.style.display = '';
          target.innerHTML = 'hide';
        } else {
          next.style.display = 'none';
          target.innerHTML = 'show';
        }
      }, false);

    }
  };
}

module.exports = solve;