/* globals $ */

/*
Create a function that takes a selector and:
* Finds all elements with class `button` or `content` within the provided element
  * Change the content of all `.button` elements with "hide"
* When a `.button` is clicked:
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:
  * The provided ID is not a **jQuery object** or a `string` 

*/
function solve() {
  return function (selector) {
    if (typeof selector !== 'string' || !($(selector).length)) {
      throw Error('Not valid selector');
    }

    var $selector = $(selector);
    var $buttons = $selector.find('.button');

    $buttons.text('hide');
    $buttons.on('click', function () {
      var $this = $(this);
      var nextSibling = $this.next();

      while (nextSibling) {
        if (nextSibling.hasClass('button')) {
          return;
        }
        if (nextSibling.hasClass('content')) {
          break; //next sibling with class content was found
        }

        nextSibling = nextSibling.next();
      }

      if (nextSibling.css('display') === 'none') {
        nextSibling.css('display', '');
        $this.text('hide');
      } else {
        nextSibling.css('display', 'none');
        $this.text('show');
      }

    });
  };
}

module.exports = solve;