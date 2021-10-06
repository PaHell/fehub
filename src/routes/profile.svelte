<script context="module">
	import { get as httpGet } from '$src/http';
</script>

<script>
	import Grid from '$lib/grid.svelte';

	httpGet('/api/projects')
		.then(data => {
			gridElements.listProjects.items = [];
			data.forEach(item => {
				gridElements.listProjects.items.push({
					id: item.ID,
					img: item.Icon,
					name: item.Name,
					owner: item.User
				});
			});
		})
		.catch((err) => {
			console.log('could not load projects', err);
		});

	httpGet('/api/user')
		.then(data => {
			console.log(data);
			gridElements.image.text = data.Picture;
			gridElements.inputName.value = data.Username;
			gridElements.inputUrl.value = data.Homepage,
			gridElements.inputDesc.value = data.Biography,
			gridElements.textCreated.text = data.CreationDate
		})
		.catch((err) => {
			console.log('could not load user data', err);
		});

	let gridElements = {
		heading: {
			type: 'text',
			text: import.meta.env.VITE_APP_NAME,
			icon: 'image',
			level: 'heading'
		},
		buttonBack: {
			type: 'button',
			icon: 'home',
			text: 'general.back_home',
			value: '/',
			autofocus: true
		},
		buttonNew: {
			type: 'button',
			icon: 'add',
			text: 'profile.projects.new',
			value: '/project/new'
		},
		headerProjects: {
			type: 'text',
			icon: 'source',
			text: 'profile.projects.heading',
			level: 'headline'
		},
		listProjects: {
			type: 'list',
			empty: {
				icon: 'star_outline',
				text: 'index.favorites.empty',
			},
			more: {
				icon: 'chevron_right',
				text: 'index.favorites.more',
				onClick: () => {
					console.log('favorites show more');
				}
			},
			items: [],
			onClick: (item, index) => {
				console.log(item, index);
			}
		},
		textCreated: {
			type: 'text',
			text: '',
			icon: 'event',
			level: 'caption',
		},
		inputName: {
			type: 'input',
			value: '',
			name: 'search',
			label: 'profile.username.label',
			placeholder: 'profile.username.placeholder',
			icon: 'face',
		},
		inputUrl: {
			type: 'input',
			value: '',
			name: 'search',
			label: 'profile.homepage.label',
			placeholder: 'profile.homepage.placeholder',
			icon: 'public',
		},
		inputDesc: {
			type: 'input',
			value: '',
			name: 'search',
			label: 'profile.homepage.label',
			placeholder: 'profile.homepage.placeholder',
			icon: 'public',
		},
		buttonSave: {
			type: 'button',
			icon: 'save',
			text: 'general.save',
		},
		image: {
			type: 'text',
			text: 'Image',
			icon: 'image',
			level: 'headline'
		}
	};
	// 12:9
	// prettier-ignore
	let gridLayout = [
        [ 0, 2               , 2               , 4               , 1               , 3             ],
        [ 1, 'heading'       , 'heading'       , 'heading'       , 'heading'       , 'buttonBack'  ],
        [ 1, 'image'         , '.'             , 'headerProjects', 'headerProjects', 'buttonNew'   ],
        [ 1, 'image'         , '.'             , 'listProjects'  , 'listProjects'  , 'listProjects'],
        [ 1, 'inputName'     , 'inputName'     , 'listProjects'  , 'listProjects'  , 'listProjects'],
        [ 1, 'inputUrl'      , 'inputUrl'      , 'listProjects'  , 'listProjects'  , 'listProjects'],
        [ 1, 'inputDesc'     , 'inputDesc'     , 'listProjects'  , 'listProjects'  , 'listProjects'],
        [ 1, 'buttonSave'    , 'buttonSave'    , 'listProjects'  , 'listProjects'  , 'listProjects'],
        [ 1, 'textCreated'   , 'textCreated'   , 'listProjects'  , 'listProjects'  , 'listProjects'],
        [ 1, '.'             , '.'             , 'listProjects'  , 'listProjects'  , 'listProjects'],
	];
</script>

<template lang="pug">
	Grid(bind:elements="{gridElements}", layout="{gridLayout}")
</template>
