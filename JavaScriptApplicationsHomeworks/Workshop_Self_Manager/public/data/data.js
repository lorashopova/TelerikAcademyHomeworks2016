import 'jquery';
import { requester } from 'requester';
//import Crypto from 'cryptojs';

const LOCAL_STORAGE_USERNAME_KEY = 'signed-in-user-username';
const LOCAL_STORAGE_AUTHKEY_KEY = 'signed-in-user-auth-key';

let data = (function () {

    function register(user) {
        let reqUser = {
            username: user.username,
            passHash: user.password
        };

        let options = {
            data: reqUser
        };

        return requester.post('api/users', options)
            .then(function (resp) {
                let user = resp.result;
                localStorage.setItem(LOCAL_STORAGE_USERNAME_KEY, user.username);
                localStorage.setItem(LOCAL_STORAGE_AUTHKEY_KEY, user.authKey);
                return {
                    username: resp.result.username
                };
            });
    }


    function signIn(user) {
        let reqUser = {
            username: user.username,
            passHash: user.password
        };

        let options = {
            data: reqUser
        };

        return requester.put('api/users/auth', options)
            .then(function (resp) {
                let user = resp.result;
                localStorage.setItem(LOCAL_STORAGE_USERNAME_KEY, user.username);
                localStorage.setItem(LOCAL_STORAGE_AUTHKEY_KEY, user.authKey);
                return user;
            });
    }

    function signOut() {
        let promise = new Promise(function (resolve, reject) {
            localStorage.removeItem(LOCAL_STORAGE_USERNAME_KEY);
            localStorage.removeItem(LOCAL_STORAGE_AUTHKEY_KEY);
            resolve();
        });
        return promise;
    }

    function hasUser() {
        return !!localStorage.getItem(LOCAL_STORAGE_USERNAME_KEY) &&
            !!localStorage.getItem(LOCAL_STORAGE_AUTHKEY_KEY);
    }

    function usersGet() {
        return requester.get('api/users')
            .then(function (res) {
                return res.result;
            });
    }



    function todosGet() {
        let options = {
            headers: {
                'x-auth-key': localStorage.getItem(LOCAL_STORAGE_AUTHKEY_KEY)
            }
        };
        return requester.get('api/todos', options)
            .then(function (res) {              
                return res.result;
            });
    }

    function todosAdd(todo) {
        let options = {
            data: todo,
            headers: {
                'x-auth-key': localStorage.getItem(LOCAL_STORAGE_AUTHKEY_KEY)
            }
        };

        return requester.post('api/todos', options)
            .then(function (resp) {
                return resp.result;
            });
    }

    function todosUpdate(id, todo) {
        let options = {
            data: todo,
            headers: {
                'x-auth-key': localStorage.getItem(LOCAL_STORAGE_AUTHKEY_KEY)
            }
        };
        return requester.put('api/todos/' + id, options)
            .then(function (resp) {
                return resp.result;
            });
    }

    function eventsGet() {
        let options = {
            headers: {
                'x-auth-key': localStorage.getItem(LOCAL_STORAGE_AUTHKEY_KEY)
            }
        };
        return requester.get('api/events', options)
            .then(function (res) {
                return res.result;
            });
    }

    function eventsAdd(event) {
        let options = {
            data: event,
            headers: {
                'x-auth-key': localStorage.getItem(LOCAL_STORAGE_AUTHKEY_KEY)
            }
        };

        return requester.post('api/events', options)
            .then(function (resp) {
                return resp.result;
            });
    }

    function categoriesGet() {
        let options = {
            headers: {
                'x-auth-key': localStorage.getItem(LOCAL_STORAGE_AUTHKEY_KEY)
            }
        };

        return requester.get('api/categories', options)
            .then(function (res) {
                return res.result;
            });
    }

    return {
        signIn,
        signOut,
        register,
        hasUser,
        usersGet,
        todosGet,
        todosAdd,
        todosUpdate,
        eventsGet,
        eventsAdd,
        categoriesGet
    };

})();

export { data };



