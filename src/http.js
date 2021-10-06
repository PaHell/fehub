const base = import.meta.env.VITE_APP_URL;
// Default options are marked with *
const config = {
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
};

export function setHeader(key, value) {
    config.headers[key] = value;
}

export const get = (url = '') => {
    return new Promise((resolve, reject) => {
        fetch(base + url, {
            ...config,
            method: 'GET',
        })
            .then(res => {
                if (res.ok) return res.json();
                else reject(res.statusText);
            })
            .then(data => resolve(data))
            .catch(err => {
                console.log('http/catch', err);
                reject(err);
            });
    });
};
export const post = (url = '', data = {}) => {
    return new Promise((resolve, reject) => {
        fetch(base + url, {
            ...config,
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then(res => {
                if (res.ok) return res.json();
                else reject(res.statusText);
            })
            .then(data => resolve(data))
            .catch(err => {
                console.log('http/catch', err);
                reject(err);
            });
    });
};
