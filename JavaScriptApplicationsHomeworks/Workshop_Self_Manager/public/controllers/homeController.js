import 'jquery';
import { templates } from 'templates';

class HomeController {

    home(context) {
        templates.get('home')
            .then(function (template) {
                context.$element().html(template());
            });
    }

}

let homeController = new HomeController();

export { homeController };