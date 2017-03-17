function solve() {
  return function (selector) {
    var $selector = $(selector);
    var $container = $('<div>').addClass('dropdown-list');
    $selector.css('display', 'none');
    var $current = $('<div>').addClass('current').attr('data-value', '').text('Option 1');
    var $optionsContainer = $('<div>').addClass('options-container').css('display', 'none').css('position', 'absolute');
    var options = $selector.find('option');

    for (var i = 0; i < options.length; i += 1) {
      var text = options[i].textContent;
      var $currentOption = $('<div>').addClass('dropdown-item').attr('data-value', $(options[i]).val()).attr('data-index', i).text(text).appendTo($optionsContainer);
    }

    $current.on('click', function () {
      $optionsContainer.css('display', 'block');
      $(this).text('Select a value');
    });

    $optionsContainer.on('click', function (e) {
      var target = $(e.target);
      var text = target.html();
      $current.text(text);
      $optionsContainer.css('display', 'none');
      $selector.val(target.attr('data-value'));
    });

    $selector.appendTo($container);
    $current.appendTo($container);
    $optionsContainer.appendTo($container);

    $(document.body).append($container);
  };
}

module.exports = solve;


