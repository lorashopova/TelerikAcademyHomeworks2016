SystemJS.config({
    'transpiler': 'plugin-babel',
    'map': {
        'plugin-babel': 'libs/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'libs/systemjs-plugin-babel/systemjs-babel-browser.js',
      
        'jquery': './bower_components/jquery/dist/jquery.js',
        'bootstrap': './bower_components/bootstrap/dist/js/bootstrap.js',
        'handlebars': './bower_components/handlebars/handlebars.js',
        'sammy': './bower_components/sammy/lib/sammy.js',
        'toastr': './bower_components/toastr/toastr.js',
        'cryptojs': './bower_components/cryptojs/lib/Crypto.js',
        'jquery-ui':'./bower_components/jquery-ui/jquery-ui.js',
        'moment':'./bower_components/moment/moment.js',
        'timepicker':'./bower_components/jquery-timepicker-wvega/jquery.timepicker.js',

        'templates': './requests/template.js',
        'requester': './requests/requester.js',
        'data': './data/data.js',
        'homeController': './controllers/homeController.js',
        'todosController':'./controllers/todosController.js',
        'eventsController': './controllers/eventsController.js',
        'usersController':'./controllers/userController.js',
        'sammy-app': './sammy-app.js',
    }
});

System.import('sammy-app');