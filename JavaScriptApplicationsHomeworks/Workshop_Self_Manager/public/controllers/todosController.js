import 'jquery';
import { data } from 'data';
import { templates } from 'templates';
import toastr from 'toastr';

let todosController = (function() {

 function all(context) {
    let todos;
    data.todosGet()
      .then(function(resTodos) {
        todos = resTodos;
        return templates.get('todos');
      })
      .then(function(template) {
        context.$element().html(template(todos));
      })
      .catch(function (error) {
                toastr.error('There are no todos!');
                location.hash = '#/';
            });
  }

  function add(context) {
    templates.get('todo-add')
      .then(function(template) {
        context.$element()
          .html(template());
        return data.categoriesGet();
      })
      .then(function(categories) {
        $('#btn-todo-add').on('click', function() {
          let todo = {
            text: $('#tb-todo-text').val(),
            category: $('#tb-todo-category').val()
          };

          data.todosAdd(todo)
            .then(function(todo) {
              toastr.success(`TODO "${todo.text}" added!`);
              context.redirect('#/todos');
            });
        });
      });
  }

  return {
    all: all,
    add: add
  };

})();

export{todosController};