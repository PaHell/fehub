import { goto } from '$app/navigation';
import { post, setHeader } from './http';
import { token } from '$src/store';

export let authenticated = false;
export let user = {};

export const login = (username, password) => {
    return new Promise((resolve, reject) => {
        post('/login', { username, password })
            .then(data => {
                console.log('auth/login success', data);
                token.set(data.token);
                authenticated = true;
                resolve('success');
            })
            .catch(err => {
                console.log('auth/login error', err);
                reject(err);
            });
    });
};

export const register = (username, password) => {
    return new Promise((resolve, reject) => {
        post('/signup', { username, password })
            .then(data => {
                console.log('auth/register success', data);
                resolve(data);
            })
            .catch(err => {
                console.log('auth/register error', err);
                reject(err);
            });
    });
};

export const logout = () => {
    authenticated = false;
    token.set('');
}