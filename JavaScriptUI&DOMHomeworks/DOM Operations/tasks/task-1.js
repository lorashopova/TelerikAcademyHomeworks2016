/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

//module.exports = function () {
function solve() {
  return function (element, contents) {
    var el;

    if (typeof element !== 'string' && !(element instanceof HTMLElement)) {
      throw Error();
    }

    if (typeof element === 'undefined' || typeof contents === 'undefined') {
      throw Error();
    }

    for (var i = 0; i < contents.length; i += 1) {
      if (!contents || typeof contents[i] !== 'string' && typeof contents[i] !== 'number') {
        throw Error();
      }
    }

    if (typeof element === 'string') {
      el = document.getElementById(element);
    } else {
      el = element;
    }

    //delete the element content
    el.innerHTML = '';
    var div = document.createElement('div');
    var fragment = document.createDocumentFragment();

    for (var index = 0; index < contents.length; index += 1) {
      var current = div.cloneNode(true);
      current.innerHTML = contents[index];
      fragment.appendChild(current);
    }
    el.appendChild(fragment);
  };
}

