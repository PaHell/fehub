<svelte:options accessors={true} />

<script>
	import Icon from '$lib/icon.svelte';
	import { _ } from 'svelte-i18n';
 
	export let active;
	export let specs;
	export let props;
	const defaults = {
		src: '',
		align: 'center'
	};
	props = { ...defaults, ...props };
</script>

<template lang="pug">
	.cell-img.unstyled(class="{`align-${props.align} ${props.class}`}")
		+if('props.src.length')
			img(src="{props.src}")
			+else
				.empty
					Icon image_not_supported
					p.text {$_('general.no_image')}
</template>

<style lang="stylus" global>

	.cell-img
		display          flex
		align-items      center
		justify-content  center
		width            100%
		height           100%

		&.align-left
			justify-content flex-start

		&.logo
			> img
				padding var(--Spacing) 0
		
		> img
			height 100%

		> .empty
			display          flex
			justify-content  center
			align-items      center
			flex-direction   column
			width            100%
			height           100%
			border           var(--WidthBorder) solid var(--ColorBorder)
			background-color var(--ColorBG)
			border-radius    var(--Radius)
			backdrop-filter  blur(var(--AcrylicBlur))

			> .text
				color var(--ColorTextSec)
			> .icon
				color var(--ColorIconTri)
			
</style>
