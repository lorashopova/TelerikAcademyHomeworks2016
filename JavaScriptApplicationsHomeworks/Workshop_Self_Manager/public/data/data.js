import 'jquery';
import { requester } from 'requester';
//import Crypto from 'cryptojs';

const LOCAL_STORAGE_USERNAME_KEY = 'signed-in-user-username';
const LOCAL_STORAGE_AUTHKEY_KEY = 'signed-in-user-auth-key';

class Data {

    register(user) {
        let reqUser = {
            username: user.username,
            passHash: user.password
        };

        return requester.post('api/users', {
            data: reqUser
        })
            .then(function (resp) {
                let user = resp.result;
                localStorage.setItem(LOCAL_STORAGE_USERNAME_KEY, user.username);
                localStorage.setItem(LOCAL_STORAGE_AUTHKEY_KEY, user.authKey);
                return {
                    username: resp.result.username
                };
            });
    }


    signIn(user) {
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

    signOut() {
        let promise = new Promise(function (resolve, reject) {
            localStorage.removeItem(LOCAL_STORAGE_USERNAME_KEY);
            localStorage.removeItem(LOCAL_STORAGE_AUTHKEY_KEY);
            resolve();
        });
        return promise;
    }

   hasUser() {
        return !!localStorage.getItem(LOCAL_STORAGE_USERNAME_KEY) &&
            !!localStorage.getItem(LOCAL_STORAGE_AUTHKEY_KEY);
    }

    usersGet() {
        return requester.get('api/users')
            .then(function (res) {
                return res.result;
            });
    }



     todosGet() {
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

    todosAdd(todo) {
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

    todosUpdate(id, todo) {
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

    eventsGet() {
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

     eventsAdd(event) {
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

     categoriesGet() {
        let options = {
            headers: {
                'x-auth-key': localStorage.getItem(LOCAL_STORAGE_AUTHKEY_KEY)
            }
        };

        return requester.get('api/categories', options)
            .then(function (res) {
                console.log('THERE!');
                return res.result;
            });
    }
}

let data = new Data();

export { data };



