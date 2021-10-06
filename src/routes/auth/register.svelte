<script>
	import { goto } from '$app/navigation';
	import { set as setLocale, get as getLocale } from '$src/i18n';
	import { login, register } from '$src/auth';
	import { lastUsername } from '$src/store';
	import Grid from '$lib/grid.svelte';

	function perfromRegister() {
		const username = gridElements.inputUsername.value,
		      password = gridElements.inputPassword.value;
		register(username, password).then((response) => {
			console.warn('registered', response);
			login(username, password).then((response) => {
				console.warn('logged in', response);
				goto('/');
			}).catch(err => {
				console.warn('login error', err);
			});;
		}).catch(err => {
			console.warn('register error', err);
		});;
	}

	let gridElements = {
		textApp: {
			type: 'text',
			text: import.meta.env.VITE_APP_NAME,
			icon: 'image',
			level: 'heading'
		},
		textHeading: {
			type: 'text',
			text: 'auth.register.heading',
			icon: 'manage_accounts',
			level: 'headline'
		},
		language: {
			type: 'select',
			label: 'general.language',
			icon: 'public',
			selected: getLocale(),
			options: {
				en: 'languages.en',
				de: 'languages.de',
				'de-sw': 'languages.sw'
			},
			onChange: (key) => setLocale(key)
		},
		inputUsername: {
			type: 'input',
			value: $lastUsername,
			name: 'username',
			label: 'auth.username.label',
			placeholder: 'auth.username.placeholder',
			icon: 'face',
			autofocus: true,
			onChange: val => lastUsername.set(val)
		},
		inputPassword: {
			type: 'input',
			value: '',
			name: 'username',
			label: 'auth.password.label',
			placeholder: 'auth.password.placeholder',
			icon: 'password'
		},
		buttonLogin: {
			type: 'button',
			icon: 'login',
			text: 'auth.login.action',
			value: 'login',
		},
		textLogin: {
			type: 'text',
			text: 'auth.login.text',
			align: 'right'
		},
		buttonRegister: {
			type: 'button',
			icon: 'person_add',
			text: 'auth.register.action',
			value: perfromRegister
		},
	};
	// prettier-ignore
	let gridLayout = [
		[ 0, 3              , 3               ],
		[ 1, 'textApp'      , 'language'      ],
		[ 1, 'textHeading'  , 'textHeading'   ],
		[ 1, 'inputUsername', 'inputUsername' ],
		[ 1, 'inputPassword', 'inputPassword' ],
		[ 1, '.'            , 'buttonRegister'],
		[ 1, 'textLogin'    , 'buttonLogin'   ],
	];

</script>

<template lang="pug">
	Grid(bind:elements="{gridElements}", layout="{gridLayout}")
</template>
