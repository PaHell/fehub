<script>
	import Grid from '$lib/grid.svelte';
	import { themeDark } from '$src/store';

	let gridElements = {
		textApp: {
			type: 'text',
			text: import.meta.env.VITE_APP_NAME,
			icon: 'image',
			level: 'heading'
		},
		heading: {
			type: 'text',
			text: 'settings.visual',
			icon: 'visibility',
			level: 'headline'
		},
		buttonBack: {
			type: 'button',
			icon: 'arrow_back',
			text: 'general.back',
			value: '/',
			autofocus: true
		},
		darkMode: {
			type: 'checkbox',
			variant: 'toggle',
			icon: 'dark_mode',
			text: 'settings.dark_mode',
			value: $themeDark,
			onChange: dark => { themeDark.set(dark); }
		},
	};
	// 12:9
	// prettier-ignore
	let gridLayout = [
		[ 0, 1           , 1          , 2          , 4          , 1          , 3          ],
		[ 1, 'buttonBack', 'textApp'  , 'textApp'  , 'textApp'  , 'textApp'  , 'textApp'  ],
		[ 1, 'heading'   , 'heading'  , 'heading'  , 'heading'  , 'heading'  , 'heading'  ],
		[ 1, 'darkMode'  , 'darkMode' , 'darkMode' , '.'        , '.'        , '.'        ],
		[ 1, '.'         , '.'        , '.'        , '.'        , '.'        , '.'        ],
		[ 5, '.'         , '.'        , '.'        , '.'        , '.'        , '.'        ],
	];
</script>

<template lang="pug">
	Grid(bind:elements="{gridElements}", layout="{gridLayout}")
</template>
