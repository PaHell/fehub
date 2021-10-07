import { writable } from 'svelte/store';
import { browser } from '$app/env';
import { setHeader } from '$src/http';

const THEME_DARK = {
	DEFAULT: true,
	CLASS: 'theme_dark',
	COOKIE: 'dark'
};
const USERNAME_COOKIE = 'username';
const TOKEN_COOKIE = 'token';

// STORE
export const themeDark = function () {
	const { subscribe, set } = writable('');
	return {
		subscribe,
		set: val => {
			if (browser) localStorage.setItem(THEME_DARK.COOKIE, val);
			val
				? document.body.classList.add(THEME_DARK.CLASS)
				: document.body.classList.remove(THEME_DARK.CLASS);
			set(val);
		},
	};
}();
export const lastUsername = function () {
	const { subscribe, set } = writable('');
	return {
		subscribe,
		set: val => {
			if (browser) localStorage.setItem(USERNAME_COOKIE, val);
			set(val);
		},
	};
}();
export const token = function () {
	const { subscribe, set } = writable('');
	return {
		subscribe,
		set: val => {
			if (browser) localStorage.setItem(TOKEN_COOKIE, val);
			setHeader('Authorization', `Bearer token="${val}"`);
			set(val);
		},
	};
}();
// CSS
export const blockW = writable(0);
export const blockH = writable(0);
export const blockS = writable(0);
export const elemS  = writable(0);
export const elemM  = writable(0);
export const elemL  = writable(0);
export const border = writable(0);
export const spaceM = writable(0);
export const spaceS = writable(0);
export const spaceL = writable(0);

// init from localStorage
if (browser) {
	// theme
	let stored = localStorage.getItem(THEME_DARK.COOKIE) === 'true';
	themeDark.set(stored !== null ? stored : THEME_DARK.DEFAULT);
	// username
	stored = localStorage.getItem(USERNAME_COOKIE);
	lastUsername.set(stored !== null ? stored : '');
	// token
	stored = localStorage.getItem(TOKEN_COOKIE);
	token.set(stored !== null && stored.length ? stored : '');
}
