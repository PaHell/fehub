<script context="module">
	import { goto } from '$app/navigation';
	import { get as httpGet } from '../http';
	import { set as setLocale, get as getLocale } from '../i18n';
	import { logout } from '../auth';
</script>

<script>
	import Grid from '$lib/grid.svelte';
	import { lastUsername } from '$src/store';

	httpGet('/api/favourites')
		.then((data) => {
			gridElements.listFav.items = [];
			data.forEach(item => {
				gridElements.listFav.items.push({
					id: item.ID,
					img: item.Icon || '',
					name: item.Name,
					subtitle: item.Username
				});
			});
		})
		.catch((err) => {
			console.log('could not load favorites', err);
		});

	httpGet('/api/recent')
		.then((data) => {
			gridElements.listRecent.items = [];
			data.forEach(item => {
				gridElements.listRecent.items.push({
					id: item.ID,
					img: item.Icon || '',
					name: item.Name,
					subtitle: item.Username
				});
			});
		})
		.catch((err) => {
			console.log('could not load recent', err);
		});

	let gridElements = {
		heading: {
			type: 'text',
			text: import.meta.env.VITE_APP_NAME,
			icon: 'image',
			level: 'heading'
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
		account: {
			type: 'dropdown',
			label: 'index.account.label',
			icon: 'person',
			text: $lastUsername,
			options: [
				{
					text: 'index.account.profile',
					icon: 'face',
					value: () => { goto('/profile') }
				},
				{
					text: 'index.account.settings',
					icon: 'settings',
					value: () => { goto('/settings'); }
				},
				{
					text: 'index.account.logout',
					icon: 'exit_to_app',
					value: () => {
						logout();
						goto('/auth/login');
					}
				},
			]
		},
		headerSearch: {
			type: 'text',
			icon: 'data_object',
			text: 'index.search',
			level: 'heading',
			align: 'center'
		},
		inputSearch: {
			type: 'input',
			value: '',
			name: 'search',
			placeholder: 'search.placeholder',
			icon: 'search',
			autofocus: true
		},
		buttonSearch: {
			type: 'button',
			icon: 'navigate_next',
			text: 'search.action',
			value: () => {
				goto(`/search/${gridElements.inputSearch.value || '%20'}`);
			}
		},
		listFav: {
			type: 'list',
			icon: 'favorite',
			text: 'index.favorites.heading',
			items: [],
			empty: {
				icon: 'heart_broken',
				text: 'index.favorites.empty',
			},
			more: {
				icon: 'chevron_right',
				text: 'index.favorites.more',
				callback: () => {
					console.log('favorites show more');
				}
			},
			callback: (item, index) => {
				console.log(item);
				goto(`/project/${item.id}`);
			}
		},
		listRecent: {
			type: 'list',
			icon: 'history_edu',
			text: 'index.recent.heading',
			items: [],
			empty: {
				icon: 'history_toggle_off',
				text: 'index.recent.empty',
			},
			more: {
				icon: 'history',
				text: 'index.recent.more',
				onClick: () => {
					console.log('recent show more');
				}
			},
			callback: (item, index) => {
				console.log(item);
				goto(`/project/${item.id}`);
			}
		},
	};
	// 12:9
	// prettier-ignore
	let gridLayout = [
		[ 0, 1             , 3             , 4             , 1              , 2             , 1             ],
		[ 1, 'heading'     , 'heading'     , 'heading'     , 'language'     , 'account'     , 'account'     ],
		[ 1, '.'           , 'headerSearch', 'headerSearch', 'headerSearch' , 'headerSearch', '.'           ],
		[ 1, '.'           , 'inputSearch' , 'inputSearch' , 'buttonSearch' , 'buttonSearch', '.'           ],
		[ 3, 'listFav'     , 'listFav'     , 'listFav'     , 'listFav'      , 'listFav'     , 'listFav'     ],
		[ 3, 'listRecent'  , 'listRecent'  , 'listRecent'  , 'listRecent'   , 'listRecent'  , 'listRecent'  ],
	];
</script>

<template lang="pug">
	Grid(bind:elements="{gridElements}", layout="{gridLayout}")
</template>
