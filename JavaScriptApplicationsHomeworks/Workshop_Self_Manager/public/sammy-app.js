import 'jquery';
import Sammy from 'sammy';
import { homeController } from 'homeController';
import { todosController } from 'todosController';
import { eventsController } from 'eventsController';
import { usersController } from 'usersController';

(function () {
    let sammyApp = Sammy('#content', function () {

         this.get('#/', function () {
            this.redirect('#/home');
        });

        this.get('#/home', homeController.home);

         this.get('#/todos', todosController.all);
         this.get('#/todos/add', todosController.add);

         this.get('#/events', eventsController.all);
         this.get('#/events/add', eventsController.add);

        this.get('#/users', usersController.all);
        this.get('#/users/register', usersController.register);
    });

    $(function () {
        sammyApp.run('#/');


    }());
})();

