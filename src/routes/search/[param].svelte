<script context="module">
	export async function load(ctx) {
		return { props: { param: ctx.page.params.param } };
	}
</script>
<script>
	import { goto } from '$app/navigation';
	import { get as httpGet } from "$src/http";
	import Grid from '$lib/grid.svelte';

	export let param;

	httpGet('/api/projects/all')
		.then((data) => {
			gridElements.listResults.items = [];
			data.forEach(item => {
				gridElements.listResults.items.push({
					id: item.ID,
					img: item.Icon,
					name: item.Name,
					subtitle: item.Username
				});
			});
		})
		.catch((err) => {
			console.log('could not load projects', err);
		});

	let gridElements = {
		textApp: {
			type: 'text',
			text: import.meta.env.VITE_APP_NAME,
			icon: 'image',
			level: 'heading'
		},
		buttonBack: {
			type: 'button',
			value: '<',
		},
		inputSearch: {
			type: 'input',
			value: param,
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
				console.log('searching...');
			}
		},
		listResults: {
			type: 'list',
			icon: 'sort',
			text: 'search.heading',
			empty: {
				icon: 'biotech',
				text: 'search.empty',
			},
			more: {
				icon: 'chevron_right',
				text: 'more',
				onClick: () => {}
			},
			items: [],
			callback: (item, index) => { goto(`/project/${item.id}`); }
		},
	};
	// 12:9
	// prettier-ignore
	let gridLayout = [
        [ 0, 1             , 8             , 3             ],
        [ 1, 'buttonBack'  , 'textApp'     , 'textApp'     ],
        [ 1, 'inputSearch' , 'inputSearch' , 'buttonSearch'],
        [ 7, 'listResults' , 'listResults' , 'listResults' ],
	];
</script>

<template lang="pug">
	Grid(bind:elements="{gridElements}", layout="{gridLayout}")
</template>
