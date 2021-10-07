<script>
	import Grid from '$lib/grid.svelte';
	import { themeDark } from '$src/store';

	let gridElements = {
		textApp: {
			type: 'image',
			src: '/logo.png',
			align: 'left',
			class: 'logo', 
		},
		heading: {
			type: 'text',
			text: 'settings.visual',
			icon: 'visibility',
			level: 'headline'
		},
		buttonBack: {
			type: 'button',
			value: '<',
			autofocus: true,
		},
		darkMode: {
			type: 'checkbox',
			variant: 'toggle',
			icon: 'dark_mode',
			text: 'settings.dark_mode',
			value: $themeDark,
			onChange: dark => { themeDark.set(dark); }
		},
		textArch: {
			type: 'text',
			text: 'I use Arch btw.',
			level: 'caption',
			align: 'right'
		},
	};
	// 12:9
	// prettier-ignore
	let gridLayout = [
		[ 0, 1           , 1          , 2          , 4          , 1          , 3          ],
		[ 1, 'buttonBack', 'textApp'  , 'textApp'  , 'textApp'  , 'textApp'  , 'textApp'  ],
		[ 1, 'heading'   , 'heading'  , 'heading'  , 'heading'  , 'heading'  , 'heading'  ],
		[ 1, 'darkMode'  , 'darkMode' , 'darkMode' , '.'        , '.'        , '.'        ],
		[ 5, '.'         , '.'        , '.'        , '.'        , '.'        , '.'        ],
		[ 1, '.'         , '.'        , '.'        , '.'        , '.'        , 'textArch' ],
	];
</script>

<template lang="pug">
	Grid(bind:elements="{gridElements}", layout="{gridLayout}")
</template>
