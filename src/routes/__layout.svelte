<script context="module">
	import { init as initI18n } from '$lib/../i18n';
	import { waitLocale } from 'svelte-i18n';

	export async function load() {
		// lang
		initI18n();
		waitLocale();
		return {};
	}
</script>

<script>
	import { onMount } from 'svelte';
	import { blockW, blockH, blockS, spaceS, spaceM, spaceL, elemS, border } from '$src/store.js';

	let ref;
	onMount(() => {
		// css var
		const {
			width,
			height,
			paddingTop,
			paddingBottom,
			marginTop,
			marginRight,
			marginBottom,
			marginLeft
		} = window.getComputedStyle(ref);
		blockW.set(parseInt(width));
		blockH.set(parseInt(height));
		blockS.set(parseInt(paddingTop));
		elemS.set(parseInt(paddingBottom));
		spaceS.set(parseInt(marginTop));
		spaceM.set(parseInt(marginRight));
		spaceL.set(parseInt(marginBottom));
		border.set(parseInt(marginLeft));
	});
</script>

<template lang="pug">
	#layout
		#ref.hidden(bind:this="{ref}")
		slot
</template>

<style lang="stylus" global>
	@import './src/styles/app'

	#layout
		height          100%
		display         flex
		flex-direction  column
		align-items     center
		justify-content center
	
	#ref
		width var(--SizeBlock)
		height var(--SizeBlock)
		padding-top var(--SizeBlockSmall)
		padding-bottom var(--SizeElemS)
		margin var(--SpacingSmall) var(--Spacing) var(--SpacingLarge) var(--WidthBorder)

</style>
