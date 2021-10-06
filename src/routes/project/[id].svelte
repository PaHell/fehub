<script context="module">
	export async function load(ctx) {
		return { props: { id: ctx.page.params.id } };
	}
</script>

<script>
	import { onMount } from 'svelte';
	import { get as httpGet } from '$src/http';
	import Grid from '$lib/grid.svelte';

	export let id;

	httpGet(`/api/project/${id}`)
		.then((data) => {
			console.log(data);
			gridElements.textName.text = data.Name;
			gridElements.textUrl.text = data.Url;
			gridElements.textDesc.text = data.Description;
			gridElements.image.text = data.Icon;
			gridElements.buttonUrl.value = `https://${data.Url}`;
		})
		.catch((err) => {
			console.log('could not load proj.', err);
		});

	let gridElements = {
		textApp: {
			type: 'text',
			text: import.meta.env.VITE_APP_NAME,
			icon: 'image',
			level: 'heading'
		},
		heading: {
			type: 'text',
			text: 'project.view.heading',
			icon: 'folder_shared',
			level: 'headline'
		},
		buttonBack: {
			type: 'button',
			icon: 'arrow_back',
			text: 'general.back',
			value: '/',
			autofocus: true
		},
		toggleFav: {
			type: 'checkbox',
			variant: 'toggle',
			icon: 'favorite_outline',
			text: 'project.view.favorite',
			value: false
		},
		buttonUrl: {
			type: 'button',
			icon: 'public',
			text: 'project.view.open_url',
			value: '/'
		},
		image: {
			type: 'text',
			text: 'Image',
			icon: 'image',
			level: 'headline'
		},
		textName: {
			type: 'text',
			text: '',
			icon: 'source'
		},
		textUrl: {
			type: 'text',
			text: '',
			icon: 'public'
		},
		textDesc: {
			type: 'text',
			text: '',
			icon: 'description'
		},
		textState: {
			type: 'text',
			text: 'projectState',
			icon: 'model_training'
		}
	};
	// 12:9
	// prettier-ignore
	let gridLayout = [
		[ 0, 1           , 1          , 2          , 4          , 1          , 3          ],
		[ 1, 'buttonBack', 'textApp'  , 'textApp'  , 'textApp'  , 'textApp'  , '.'        ],
		[ 1, 'heading'   , 'heading'  , 'heading'  , 'heading'  , 'heading'  , 'toggleFav'],
		[ 1, 'image'     , 'image'    , 'textName' , 'textName' , 'textName' , 'textName' ],
		[ 1, 'image'     , 'image'    , 'textState', 'textState', '.'        , '.'        ],
		[ 1, '.'         , '.'        , 'textUrl'  , 'textUrl'  , 'textUrl'  , 'buttonUrl'],
		[ 4, '.'         , '.'        , 'textDesc' , 'textDesc' , 'textDesc' , 'textDesc' ],
	];
</script>

<template lang="pug">
	Grid(bind:elements="{gridElements}", layout="{gridLayout}")
</template>
