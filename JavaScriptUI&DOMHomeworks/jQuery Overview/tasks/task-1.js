/* globals $ */

/* 

Create a function that takes a selector and COUNT, then generates inside a UL with COUNT LIs:   
  * The UL must have a class `items-list`
  * Each of the LIs must:
    * have a class `list-item`
    * content "List item #INDEX"
      * The indices are zero-based
  * If the provided selector does not selects anything, do nothing
  * Throws if
    * COUNT is a `Number`, but is less than 1
    * COUNT is **missing**, or **not convertible** to `Number`
      * _Example:_
        * Valid COUNT values:
          * 1, 2, 3, '1', '4', '1123'
        * Invalid COUNT values:
          * '123px' 'John', {}, [] 
*/

function solve() {
  return function (selector, count) {
    if (!count || typeof count !== 'number' || !Number(count) || count < 1) {
      throw Error('Incorrect count');
    }
    if (!selector || typeof selector !== 'string') {
      throw Error('Incorrect selector');
    }
    var wrapper = $(selector);
    var ul = $('<ul>').addClass('items-list');
    for (var i = 0; i < count; i += 1) {
      $('<li>').addClass('list-item').text("List item #" + i).appendTo(ul);
    }
    ul.appendTo(wrapper);
  };
}

module.exports = solve;