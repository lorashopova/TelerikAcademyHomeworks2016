import 'jquery';
import { data } from 'data';
import { templates } from 'templates';
import toastr from 'toastr';

let usersController = (function () {

 function all(context) {
    let users;
    data.usersGet()
      .then(function (resUsers) {
        users = resUsers;
        return templates.get('users');
      })
      .then(function (template) {
        context.$element().html(template(users));
      });
  }

  function register(context) {
    templates.get('register')
      .then(function (template) {
        context.$element().html(template());

        $('#btn-register').on('click', function () {
          let user = {
            username: $('#tb-reg-username').val(),
            password: $('#tb-reg-pass').val()
          };

          data.register(user)
            .then(function () {
              toastr.success('User registered!');
              context.redirect('#/');
              document.location.reload(true);
            }).catch(function (error) {
              toastr.error('User is allready registered!');
              location.hash = '#/';
            });
        });
      });
  }

  return {
    all: all,
    register: register
  };

})();

export { usersController };