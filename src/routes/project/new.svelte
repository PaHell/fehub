<script>
	import { goto } from '$app/navigation';
	import { post as httpPost } from '$src/http';
	import Grid from '$lib/grid.svelte';

	function create() {
		httpPost('/set/project', {
			Name: gridElements.inputName.value,
			Url: gridElements.inputUrl.value,
			Description: gridElements.inputDesc.value,
			Icon: 'base64',
		})
		.then(data => { goto(`/project/${data.id}`); })
		.catch(err => { console.log('could not create proj.', err); });
	}

	let gridElements = {
		textApp: {
			type: 'text',
			text: import.meta.env.VITE_APP_NAME,
			icon: 'image',
			level: 'heading'
		},
		buttonBack: {
			type: 'button',
			icon: 'arrow_back',
			text: 'general.back',
			value: '/',
			autofocus: true
		},
		image: {
			type: 'text',
			text: 'Image',
			icon: 'image',
			level: 'headline'
		},
		inputName: {
			type: 'input',
			value: '',
			name: 'username',
			label: 'project.new.name.label',
			placeholder: 'project.new.name.placeholder',
			icon: 'source',
			autofocus: true,
		},
		inputUrl: {
			type: 'input',
			value: '',
			name: 'url',
			label: 'project.new.url.label',
			placeholder: 'project.new.url.placeholder',
			icon: 'public',
		},
		inputDesc: {
			type: 'input',
			value: '',
			name: 'desc',
			label: 'project.new.desc.label',
			placeholder: 'project.new.desc.placeholder',
			icon: 'description',
		},
		selectState: {
			type: 'select',
			value: '',
			label: 'project.new.state',
			icon: 'model_training',
			selected: 'womm',
			options: {
				'wip': 'project.state.wip',
				'womm': 'project.state.womm',
			}
		},
		buttonUpload: {
			type: 'button',
			icon: 'cloud_upload',
			text: 'project.new.upload',
			value: () => {}
		},
		buttonSave: {
			type: 'button',
			icon: 'save',
			text: 'project.new.save',
			value: create
		},
	};
	// 12:9
	// prettier-ignore
	let gridLayout = [
		[ 0, 1             , 3             , 4             , 1           , 3           ],
		[ 1, 'buttonBack'  , 'textApp'     , 'textApp'     , 'textApp'   , 'buttonSave'],
		[ 1, 'image'       , 'image'       , 'inputName'   , 'inputUrl'  , 'inputUrl'  ],
		[ 1, 'image'       , 'image'       , 'selectState' , '.'         , '.'         ],
		[ 2, 'image'       , 'image'       , 'inputDesc'   , 'inputDesc' , 'inputDesc' ],
		[ 1, 'buttonUpload', 'buttonUpload', 'inputDesc'   , 'inputDesc' , 'inputDesc' ],
		[ 3, '.'           , '.'           , '.'           , '.'         , '.'         ],
	];
</script>

<template lang="pug">
	Grid(bind:elements="{gridElements}", layout="{gridLayout}")
</template>
