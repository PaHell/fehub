<svelte:options accessors={true} />

<script context="module">
	import { _ } from 'svelte-i18n';
	import Icon from '$lib/icon.svelte';
</script>

<script>
	export let active;
	export let props;
	const defaults = {
		text: false,
		icon: false,
		level: 'headline',
		align: 'left',
		info: false
	};
	props = { ...defaults, ...props };
</script>

<template lang="pug">
	.cell-text(class="{`level-${props.level} align-${props.align}`}")
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
		padding          0 (.5 * ($SizeBlock - $FZ_Icon))
		background-color transparent !important
		box-shadow       none !important
		
		&.align-right
			justify-content flex-end
		
		> .icon
			width  $FZ_Icon
			height $SizeBlock
			
		> .text
			color $ColorBlackTextSec
			
			&:not(:first-child)
				margin-left .5 * ($SizeBlock - $FZ_Icon)
		
		> .divider
			flex             1
			height           $WidthBorder
			background-image linear-gradient(to right, transparent, $ColorBGDark)

		> .info
			display          flex
			align-items      center
			height           $SizeBlockSmall
			padding          0 $SpacingSmall
			margin-left      auto
			border           $WidthBorder solid $ColorBorder
			border-radius    $RadiusBig
			background-color $ColorBG
			
			> .icon
				width        $FZ_IconSmall
				margin-right $SpacingSmall
				font-size    $FZ_IconSmall
				color        $ColorIconTri

			> .text
				color        $ColorBlackTextTri
				margin-right .25 * $FZ_IconSmall

		&.level-heading
			> .icon
				width     $FZ_IconLarge
				color     $ColorAccent
				font-size $FZ_IconLarge
				margin    0 (-.5 * ($FZ_IconLarge - $FZ_Icon))
			
			> .text
				color $ColorBlackTextPri
		
		&.level-headline
			background-image linear-gradient(to right, $ColorBGDark, transparent 8*$SizeBlock)
			border-radius    $Radius
			
			> .icon
				color $ColorIconPri
			
			> .text
				font-weight    $FW_Bold
				color          $ColorBlackTextSec
		
		&.level-caption
			> .icon
				margin    0 $SpacingSmall 0 0 !important
				font-size $FZ_IconSmall
				color     $ColorIconTri
			> .text
				color $ColorBlackTextTri

</style>