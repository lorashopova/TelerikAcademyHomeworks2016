$.fn.lists = function (lists) {
    let container = $('#container');
    let wrapper = $('<div>').addClass('lists-wrapper').appendTo(container);
    let array = $(lists);
    let len = array.length;
    for (let list = 0; list < len; list += 1){
        let itemsContainer = $('<div>').addClass('items-section');
        let strong = $('<strong>').text(array[list][0]).appendTo(itemsContainer);
        let addItem = $('<div>').addClass('add-item-wrapper');
        let addLink = $('<a href = "#">').addClass('add-btn').addClass('visible').appendTo(addItem);
        let addInput = $('<input>').addClass('add-input').attr('type', 'text').appendTo(addItem);
        let item = array[list];
        let ul = $('<ul>');
        for (let i = 1; i < item.length; i += 1) {
            let li = $('<li>').attr('draggable', 'true');
            let link = $('<a>').attr('href', 'https://www.google.bg/search?q=' + item[i]).attr('target', '_blank').text(item[i]).appendTo(li);

            li.appendTo(ul);
        }

        ul.appendTo(addItem);
        addItem.appendTo(itemsContainer);
        itemsContainer.appendTo(wrapper);
    }

    $('.add-btn').on('click', function(){
        let $this = $(this);
        $this.toggleClass('visible');
        $this.next().addClass('visible');
    });

    /*
    $('.add-btn').on('click', showInputField);

    function showInputField() {
        let $this = $(this);
        $this.removeClass('visible');
        if ($this.next().hasClass('add-input')) {
            $this.next().addClass('visible');
        }
    }
*/

    $('.add-input').on('keypress', function(ev){
        let $this = $(this);
        let value = $this.val();
         if (ev.which === 13) {
             $('<li>').append($('<a>').attr('href', 'https://www.google.bg/search?q=' + value).attr('target', '_blank').text(value)).appendTo($this.next($('ul')));
             $this.toggleClass('visible');
             $this.prev().addClass('visible');
         }
    });

    /*
    $('.add-input').keypress(addNewItem);

    function addNewItem(ev) {
        let $this = $(this);
        if (ev.which === 13) {
            let newItemText = $this.val();
            let newLi = $('<li>');
            let newLink = $('<a>').attr({
                'target': '_blank',
                'href': 'https://www.google.bg/search?q=' + newItemText
            }).text(newItemText).appendTo(newLi);

            newLi.appendTo($this.next($('ul')));
            $this.removeClass('visible');
            $this.prev().addClass('visible');
        }
    }
*/
}


