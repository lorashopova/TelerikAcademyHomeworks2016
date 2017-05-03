import 'jquery';
import { templates } from 'templates';

let homeController = (function() {

    function home(context) {
        templates.get('home')
            .then(function (template) {
                context.$element().html(template());
            });
    }

     return {
    home: home
  };

})();

export { homeController };