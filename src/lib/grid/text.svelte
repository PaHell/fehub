<svelte:options accessors={true} />

<script context="module">
	import { _ } from 'svelte-i18n';
	import Icon from '$lib/icon.svelte';
</script>

<script>
	export let active;
	export let props;
	export let specs;
	const defaults = {
		text: false,
		icon: false,
		level: 'default',
		align: 'left',
		vAlign: 'center',
		status: '',
		info: false
	};
	props = { ...defaults, ...props };
</script>

<template lang="pug">
	.cell-text.unstyled(class="{`level-${props.level} align-${props.align} v-align-${props.vAlign} status-${props.status}`}")
		+if('props.icon')
			Icon {props.icon}
		p.text(class="{props.level}") {$_(props.text)}
		+if('props.info')
			.divider
			.info
				Icon info_outline
				p.text.caption {$_(props.info)}
</template>

<style lang="stylus" global>

	.cell-text
		display          flex
		align-items      center
		justify-content  flex-start
		width            100%
		height           100%
		padding          0 calc(.5 * (var(--SizeBlock) - var(--FZ_Icon)))
		
		> .icon
			width  var(--FZ_Icon)
			height var(--SizeBlock)
			
		> .text
			color var(--ColorTextSec)
			
			&:not(:first-child)
				margin-left calc(.5 * (var(--SizeBlock) - var(--FZ_Icon)))
		
		> .divider
			flex             1
			height           var(--WidthBorder)
			background-image linear-gradient(to right, transparent, var(--ColorBGDark))

		> .info
			display          flex
			align-items      center
			height           var(--SizeBlockSmall)
			padding          0 var(--SpacingSmall)
			margin-left      auto
			border           var(--WidthBorder) solid var(--ColorBorder)
			border-radius    var(--RadiusBig)
			background-color var(--ColorBG)
			
			> .icon
				width        var(--FZ_IconSmall)
				margin-right var(--SpacingSmall)
				font-size    var(--FZ_IconSmall)
				color        var(--ColorIconTri)

			> .text
				color        var(--ColorTextTri)
				margin-right calc(.25 * var(--FZ_IconSmall))

		&.level-heading
			> .icon
				width     var(--FZ_IconLarge)
				color     var(--ColorAccent)
				font-size var(--FZ_IconLarge)
				margin    0 calc(-.5 * (var(--FZ_IconLarge) - var(--FZ_Icon)))
			
			> .text
				color var(--ColorTextPri)
		
		&.level-headline
			background-image linear-gradient(to right, var(--ColorBGDark), transparent calc(8*var(--SizeBlock)))
			border-radius    var(--Radius)
			
			> .icon
				color var(--ColorIconPri)
			
			> .text
				font-weight    var(--FW_Bold)
				color          var(--ColorTextSec)
						
		&.level-default
			> .icon
				margin    0 var(--SpacingSmall) 0 0 !important
				font-size var(--FZ_IconSmall)
				color     var(--ColorIconSec)
			> .text
				color var(--ColorTextSec)
		
		&.level-caption
			> .icon
				margin    0 var(--SpacingSmall) 0 0 !important
				font-size var(--FZ_IconSmall)
				color     var(--ColorIconTri)
			> .text
				color var(--ColorTextTri)

		&.align-right
			flex-direction row-reverse
			> .icon:first-child
				margin 0 0 0 var(--SpacingText) !important
			> .text
				margin-left 0

		&.align-center
			justify-content center

		&.v-align-top
			align-items flex-start

			> .text
				margin-top calc((var(--SizeBlock) - var(--FZ_Icon) + var(--SpacingText)) / 2)

		&.status-error
			> .icon,
			> .text:first-child
				color var(--ColorError)

		&.status-success
			> .icon,
			> .text:first-child
				color var(--ColorSuccess)

	body.theme_dark .cell-text.level-headline
		background-image none
		border-radius    0
		box-shadow       inset 0 var(--WidthBorder) 0 var(--ColorBorder) !important

</style>
