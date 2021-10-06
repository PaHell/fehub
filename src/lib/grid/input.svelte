<svelte:options accessors={true} />

<script context="module">
	import { _ } from 'svelte-i18n';
	import Icon from '$lib/icon.svelte';
</script>

<script>
	export let active;
	export let props;
	const defaults = {
		label: false,
		icon: false,
		value: false,
		name: false,
		placeholder: 'placeholder',
		disabled: false,
		onChange: val => {}
	};
	props = { ...defaults, ...props };

	// DOM node
	let ref;

	// Events
	export const onEnter = (event) => {
		ref.focus();
	};
	export const onLeave = (event) => {
		ref.blur();
	};
</script>

<template lang="pug">
	.cell-input(class:active)
		input(
			type="text",
			name="{props.name}",
			on:click,
			bind:value="{props.value}",
			bind:this="{ref}",
			disabled="{props.disabled}",
			placeholder="",
			class:has-icon="{props.icon}",
			class:has-label="{props.label}",
			onchange="{props.onChange?.(props.value)}")
		.overlay
			+if('props.icon')
				Icon {props.icon}
			.right
				+if('props.label')
					p.label {$_(props.label)}:
				p.placeholder {props.value ? '' : $_(props.placeholder)}
				.line
</template>

<style lang="stylus" global>

	body
		--InputLabelHeight calc(var(--FZ_Caption) + 4px)
		--InputLineHeight  calc(var(--SizeBlock) - 2 * var(--InputLabelHeight) - 4 * var(--WidthBorder))

	.cell-input
		width    100%
		height   100%
			
		> input
			width         calc(100% - var(--WidthBorder))
			height        calc(100% - var(--WidthBorder))
			margin        var(--WidthBorder)
			padding-left  calc(.5 * (var(--SizeBlock) - var(--FZ_Icon)) - var(--WidthBorder))
			line-height   var(--InputLineHeight)
			border-radius calc(var(--Radius) - var(--WidthBorder))
			
			&.has-label
				padding-top calc(var(--InputLabelHeight) - 4 * var(--WidthBorder))

			&.has-icon
				padding-left calc(var(--SizeBlock) - var(--WidthBorder))
				
			&:not(.has-label)
				padding-bottom calc(var(--InputLabelHeight) - 6 * var(--WidthBorder))
				
				~ .overlay > .right
					margin-top calc(var(--InputLabelHeight) + var(--WidthBorder))

			&:not(.has-icon)
				
				~ .overlay > .right
					margin-left  calc(.5 * (var(--SizeBlock) - var(--FZ_Icon)))
			
			&:focus ~ .overlay
				> .icon
					color var(--ColorAccentIcon)
				> .right
					> .label
						color var(--ColorTextSec)
					> .placeholder
						padding-left     2px
						background-image linear-gradient(to right, var(--ColorTextSec), transparent calc(1.25*var(--SizeBlock)))
					> .line
						background-color var(--ColorAccentIcon)
		
		> .overlay
			display        flex
			width          100%
			height         100%
			margin-top     calc(-1 * var(--SizeBlock))
			pointer-events none
			
			> .icon
				width  var(--SizeBlock)
				height var(--SizeBlock)
			
			> .right
				flex         1
				margin-right calc(.5 * (var(--SizeBlock) - var(--FZ_Icon)))
				
				> .label
					height         var(--InputLabelHeight)
					margin-top     calc(4 * var(--WidthBorder))
					font-size      var(--FZ_Caption)
					text-transform uppercase
					font-weight    var(--FW_Bold)
					line-height    var(--InputLabelHeight)
					color          var(--ColorTextTri)
					letter-spacing .25px
				
				> .placeholder
					height            var(--InputLineHeight)
					line-height       var(--InputLineHeight)
					color             var(--ColorTextTri)
					transition        padding-left var(--TimeTrans), background-image var(--TimeTrans)
					// gradient fade out text
					background-color        transparent
					background-image        linear-gradient(to right, var(--ColorTextTri), transparent calc(1.25*var(--SizeBlock)))
					background-size         100%
					-webkit-background-clip text
					-moz-background-clip    text
					-webkit-text-fill-color transparent
					-moz-text-fill-color    transparent
				
				> .line
					height           var(--WidthBorder)
					margin-bottom    calc(var(--InputLabelHeight) - var(--WidthBorder))
					border-radius    var(--Radius)
					background-color var(--ColorBorder)
					transition       background-color var(--TimeTrans)
</style>
