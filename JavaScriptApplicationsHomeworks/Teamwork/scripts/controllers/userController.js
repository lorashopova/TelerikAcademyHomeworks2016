import 'jquery';
import toastr from 'toastr';
import { logInUser, registerUser, logOutUser } from 'authentication';
import { viewGallery } from 'view';
import { templates } from "templates";
//import { AuthenticationManager } from 'authenticationManager';

const USERNAME_MIN_LENGTH = 3;
const PASSWORD_MIN_LENGTH = 3;
const USERNAME_MAX_LENGTH = 40;
const PASSWORD_MAX_LENGTH = 20;

let userController = (function () {
    class UserController {
        constructor(templates) {
            this.templates = templates;
        }

        getHomePage(selector) {
            $(selector).empty();
            $('#linkGallery').addClass('hidden');
            $('#loggedInUser').addClass('hidden');
            $('#menu').addClass('col-md-6');
            $('#register-form').removeClass('hidden');
            $('#linkLogout').addClass('hidden');
            this.templates.getTemplate('load-home-page').then(function (responseTemplate) {
                selector.html(responseTemplate());
            });
        }

        getRegisterForm(selector) {
            $(selector).empty();
            this.templates.getTemplate('show-register-form').then(function (responseTemplate) {
                selector.html(responseTemplate());
                $('#btn-register').on('click', function () {
                    let registerUserData = {
                        username: $('.form-signin input[name=user]').val(),
                        password: $('.form-signin input[name=pass]').val(),
                        confirmPassword: $('.form-signin input[name=confirmPass]').val()
                    };

                    if (registerUserData.username.length < USERNAME_MIN_LENGTH || registerUserData.username.length > USERNAME_MAX_LENGTH) {
                        toastr.error('Username must be between 3 and 40 symbols');
                        return;
                    }
                    if (registerUserData.password.length < PASSWORD_MIN_LENGTH || registerUserData.password.length > PASSWORD_MAX_LENGTH) {
                        toastr.error('Password must be between 3 and 20 symbols');
                        return;
                    }
                    if (/\W+/.test(registerUserData.username)) {
                        toastr.error('Username contains invalid symbols');
                        return;
                    }
                    if (/\W+/.test(registerUserData.password)) {
                        toastr.error('Password contains invalid symbols');
                        return;
                    }
                    if (registerUserData.password !== registerUserData.confirmPassword) {
                        toastr.error('Please confirm password correct');
                        return;
                    }

                    registerUser(selector);
                });
            });
        }

        getLogInUser(selector) {
            $(selector).empty();
            $('#linkGallery').removeClass('hidden');
            $('#register-form').addClass('hidden');
            $('#menu').removeClass('col-md-6');   //col-md-6 -> col-md-12
            $('#linkLogout').removeClass('hidden');
            $('#loggedInUser').removeClass('hidden');
            logInUser(selector);
        }

        getLogOutUser() {
            $('#linkGallery').addClass('hidden');
            $('#loggedInUser').addClass('hidden');
            $('#menu').addClass('col-md-6');
            $('#register-form').removeClass('hidden');
            $('#linkLogout').addClass('hidden');
            logOutUser();
        }
    }

    return new UserController(templates);
})();

export { userController };