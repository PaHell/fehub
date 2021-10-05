<script>
	import { set as setLocale, get as getLocale } from '../i18n';
	import Grid from '$lib/grid.svelte';
	let gridElements = {
		textApp: {
			type: 'text',
			text: 'general.app',
			icon: 'image',
			level: 'heading'
		},
		textHeading: {
			type: 'text',
			text: 'auth.login.heading',
			icon: 'perm_identity',
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
			value: '',
			name: 'username',
			label: 'auth.username.label',
			placeholder: 'auth.username.placeholder',
			icon: 'face',
			autofocus: true
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
			value: () => {
				console.log('login...');
			}
		},
		textRegister: {
			type: 'text',
			text: 'auth.register.text',
			align: 'right'
		},
		buttonRegister: {
			type: 'button',
			icon: 'person_add',
			text: 'auth.register.action',
			value: 'register'
		},
	};
	// prettier-ignore
	let gridLayout = [
		[ 0, 3              , 3               ],
		[ 1, 'textApp'      , 'language'      ],
		[ 1, 'textHeading'  , 'textHeading'   ],
		[ 1, 'inputUsername', 'inputUsername' ],
		[ 1, 'inputPassword', 'inputPassword' ],
		[ 1, '.'            , 'buttonLogin'   ],
		[ 1, 'textRegister' , 'buttonRegister'],
	];
</script>

<template lang="pug">
	Grid(bind:elements="{gridElements}", layout="{gridLayout}")
</template>
