<script context="module">
	import { createEventDispatcher } from 'svelte';
</script>

<script>
	const dispatch = createEventDispatcher();
</script>

<template lang="pug">
	#dialog
		p.text Dialog
</template>

<style lang="stylus" global>
	#dialog
		width            calc(5 * var(--SizeField) + 4 * var(--WidthBorder))
		height           calc(var(--SizeField) + var(--SizeBlockSmall) + var(--WidthBorder))
		position         relative
		background-color var(--ColorBorder)
		box-shadow       var(--ShadowRaised)
		border-radius    var(--Radius)	
</style>
