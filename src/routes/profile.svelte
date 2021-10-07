<script>
	import { goto } from '$app/navigation'; 
	import { get as httpGet } from '$src/http';
	import Grid from '$lib/grid.svelte';

	httpGet('/api/projects')
		.then(data => {
			gridElements.listProjects.items = [];
			data.forEach(item => {
				gridElements.listProjects.items.push({
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

	httpGet('/api/user')
		.then(data => {
			gridElements.image.src = data.Picture || '';
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
			type: 'image',
			src: '/logo.png',
			align: 'left',
			class: 'logo', 
		},
		buttonBack: {
			type: 'button',
			value: '<',
			autofocus: true,
		},
		buttonNew: {
			type: 'button',
			icon: 'add',
			text: 'profile.projects.new',
			value: '/project/new'
		},
		listProjects: {
			type: 'list',
			icon: 'source',
			text: 'profile.projects.heading',
			empty: {
				icon: 'code_off',
				text: 'profile.projects.empty',
			},
			more: {
				icon: 'chevron_right',
				text: 'index.favorites.more',
				callback: () => {
					console.log('favorites show more');
				}
			},
			items: [],
			callback: (item, index) => {
				goto(`/project/${item.id}`);
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
			label: 'profile.description.label',
			placeholder: 'profile.description.placeholder',
			icon: 'description',
		},
		buttonSave: {
			type: 'button',
			icon: 'save',
			text: 'general.save',
		},
		image: {
			type: 'image',
			src: '',
		}
	};
	// 12:9
	// prettier-ignore
	let gridLayout = [
        [ 0, 1               , 1               , 2               , 5             , 3             ],
        [ 1, 'buttonBack'    , 'heading'       , 'heading'       , 'heading'     , 'buttonNew'   ],
        [ 1, 'image'         , 'image'         , '.'             , 'listProjects', 'listProjects'],
        [ 1, 'image'         , 'image'         , '.'             , 'listProjects', 'listProjects'],
        [ 1, 'inputName'     , 'inputName'     , 'inputName'     , 'listProjects', 'listProjects'],
        [ 1, 'inputUrl'      , 'inputUrl'      , 'inputUrl'      , 'listProjects', 'listProjects'],
        [ 1, 'inputDesc'     , 'inputDesc'     , 'inputDesc'     , 'listProjects', 'listProjects'],
        [ 1, 'buttonSave'    , 'buttonSave'    , 'buttonSave'    , 'listProjects', 'listProjects'],
        [ 1, 'textCreated'   , 'textCreated'   , 'textCreated'   , 'listProjects', 'listProjects'],
        [ 1, '.'             , '.'             , '.'             , 'listProjects', 'listProjects'],
	];
</script>

<template lang="pug">
	Grid(bind:elements="{gridElements}", layout="{gridLayout}")
</template>
