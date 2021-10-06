<svelte:options accessors={true} />

<script context="module">
	import { _ } from 'svelte-i18n';
	import Icon from '$lib/icon.svelte';
</script>

<script>
	export let active;
	export let props;
	const defaults = {
		text: 'text',
		icon: false,
		variant: 'checkbox',
		value: false,
		disabled: false,
		onChange: () => {}
	};
	props = { ...defaults, ...props };

	export const onClick = (event) => {
		props.value = !props.value;
		props.onChange?.(props.value);
	};
</script>

<template lang="pug">
	button.cell-checkbox(on:click, disabled="{props.disabled}", class:active)
		+if('props.icon')
			Icon {props.icon}
		p.text.bold {$_(props.text)}
		.control(
			class="{props.variant}",
			class:checked="{props.value}")
			div
				Icon done
</template>

<style lang="stylus" global>
	.cell-checkbox
		display         flex
		align-items     center
		justify-content center
		width           100%
		height          100%
		
		> .icon
			width var(--SizeBlock)
		
		> .text
			flex 1
			padding-right calc(.5 * (var(--SizeBlock) - var(--FZ_Icon)))
			ellipsis()
			
			&:first-child
				padding-left calc( .5 * (var(--SizeBlock) - var(--FZ_Icon)))
		
		> .control
			
			&.checkbox
				width            var(--FZ_IconSmall)
				height           var(--FZ_IconSmall)
				margin-right     calc(.5 * (var(--SizeBlock) - var(--FZ_Icon)))
				border           var(--WidthBorder) solid var(--ColorIconTri)
				border-radius    calc(.4 * var(--FZ_IconSmall))
				background-color var(--ColorBGLight)
				
				> div
					width         var(--FZ_Icon)
					height        var(--FZ_Icon)
					margin-top    calc(-.5 * (var(--FZ_Icon) - var(--FZ_IconSmall)) - var(--WidthBorder) - 2px)
					margin-left   -1px
					
					> .icon
						width            100%
						height           100%
						line-height      var(--FZ_Icon)
						color            var(--ColorIconSec)
						transform        scale(.5) rotateY(90deg)
						transform-origin 30% 75%
						transition       transform var(--TimeTrans), color var(--TimeTrans)
			
				&.checked > div > .icon
					transform scale(1) rotateY(0)
				
			&.toggle
				width            calc(1.75 * var(--FZ_IconSmall))
				height           var(--FZ_IconSmall)
				margin-right     calc(.5 * (var(--SizeBlock) - var(--FZ_Icon)))
				border           var(--WidthBorder) solid var(--ColorIconTri)
				border-radius    calc(.4 * var(--FZ_IconSmall))
				background-color var(--ColorBG)
				
				> div
					width            @height
					height           @height
					margin           calc(-1 * var(--WidthBorder))
					border           var(--WidthBorder) solid var(--ColorIconSec)
					border-radius    @border-radius
					background-color var(--ColorBGLight)
					transition       margin-left var(--TimeTrans), border-color var(--TimeTrans)
					will-change      margin-left
					
					> .icon
						display none

				&.checked > div
					margin-left calc(.75 * var(--FZ_IconSmall) - var(--WidthBorder))
		
		&.active
			> .icon
				color var(--ColorAccentIcon)
			
			> .control
				&.checkbox > div > .icon
					color var(--ColorAccentIcon)
				&.toggle > div
					border-color var(--ColorAccentIcon)
</style>
