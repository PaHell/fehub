<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { post as httpPost } from '$src/http';
	import Grid from '$lib/grid.svelte';

	let inputFile;

	function create() {
		httpPost('/set/project', {
			Name: gridElements.inputName.value,
			Url: gridElements.inputUrl.value,
			Description: gridElements.inputDesc.value,
			Icon: gridElements.image.src
		})
			.then((data) => {
				goto(`/project/${data.id}`);
			})
			.catch((err) => {
				console.log('could not create proj.', err);
			});
	}

	onMount(() => {
		inputFile.addEventListener('change', () => {
			console.log('CHANGE FILE INPUT');
			const data = inputFile.files[0];
			console.log({ data });
			const reader = new FileReader();
			reader.readAsDataURL(data);
			reader.onload = function () {
				gridElements.image.src = reader.result;
			};
			reader.onerror = function (error) {
				console.log({error});
			};
		});
	});

	let gridElements = {
		textApp: {
			type: 'image',
			src: '/logo.png',
			align: 'left',
			class: 'logo', 
		},
		buttonBack: {
			type: 'button',
			value: '<',
			autofocus: true
		},
		image: {
			type: 'image',
			src: ''
		},
		inputName: {
			type: 'input',
			value: '',
			name: 'username',
			label: 'project.new.name.label',
			placeholder: 'project.new.name.placeholder',
			icon: 'source',
			autofocus: true
		},
		inputUrl: {
			type: 'input',
			value: '',
			name: 'url',
			label: 'project.new.url.label',
			placeholder: 'project.new.url.placeholder',
			icon: 'public'
		},
		inputDesc: {
			type: 'input',
			value: '',
			name: 'desc',
			label: 'project.new.desc.label',
			placeholder: 'project.new.desc.placeholder',
			icon: 'description'
		},
		selectState: {
			type: 'select',
			value: '',
			label: 'project.new.state',
			icon: 'model_training',
			selected: 'womm',
			options: {
				wip: 'project.state.wip',
				womm: 'project.state.womm'
			}
		},
		buttonUpload: {
			type: 'button',
			icon: 'cloud_upload',
			text: 'project.new.upload',
			value: () => {
				inputFile.click();
			}
		},
		buttonSave: {
			type: 'button',
			icon: 'save',
			text: 'project.new.save',
			value: create
		}
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
	input.hidden(
		type="file",
		bind:this="{inputFile}",
		accept="image/*")
	Grid(bind:elements="{gridElements}", layout="{gridLayout}")
</template>
