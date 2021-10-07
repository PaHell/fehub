<svelte:options accessors={true} />

<script context="module">
	import { createEventDispatcher } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { blockW, blockH, spaceL, border } from '$lib/../store.js';
	import Icon from '$lib/icon.svelte';
</script>

<script>
	// const
	const ITEM_WIDTH = 2;
	const ITEM_HEIGHT = 2;
	// props
	export let active;
	export let props;
	export let specs;
	const defaults = {
		icon: '',
		text: '',
		items: [],
		callback: () => {},
	};
	props = { ...defaults, ...props };
	// local
	const dispatch = createEventDispatcher();
	let focused = 0;

	export function onEnter() {
		updateCursor();
	}
	export function handleKeydown(event) {
		let parentStop = false;
		const width  = specs.w / ITEM_WIDTH;
		const height = specs.h / ITEM_HEIGHT;
		switch (event.keyCode) {
			case 37: // left
				if (focused % width !== 0) {
					focused -= 1;
					parentStop = true;
				}
				break;
			case 38: // up
				if (focused - width > -1) {
					focused -= width;
					parentStop = true;
				}
				break;
			case 39: // right
				if (focused % width < width - 1 && focused < props.items.length - 1) {
					focused += 1;
					parentStop = true;
				}
				break;
			case 40: // down
				if (focused + width < props.items.length) {
					focused += width;
					parentStop = true;
				}
				break;
			case 13: // enter
				onItemClick(focused);
				parentStop = true;
				break;
		}
		updateCursor();
		return parentStop;
	}

	function onItemClick(index) {
		focused = index;
		props.callback?.(props.items[index], index);
		updateCursor();
	}

	function updateCursor() {
		const w = specs.w / ITEM_WIDTH;
		const x = focused % w;
		const y = Math.trunc(focused / w);
		dispatch('cursor', {
			x: x * (ITEM_WIDTH * ($blockW + $spaceL)),
			y: y * (ITEM_HEIGHT * ($blockH + $spaceL)) + $blockH + $border,
			w: ITEM_WIDTH * $blockW + $spaceL,
			h: ITEM_HEIGHT * $blockH + $spaceL
		});
	}
</script>

<template lang="pug">
	.cell-list.unstyled(class:active)
		header
			+if('props.icon')
				Icon { props.icon }
			+if('props.text')
				p.text.headline.bold { $_(props.text) }
		.items
			+if('props.items.length')
				+each('props.items as item, index')
					button(
						class:focused="{focused === index}",
						on:click|preventDefault!="{() => onItemClick(index)}",)
						.img
							+if('item.img')
								img(src="{item.img}")
								+else
									Icon image_not_supported
						p.text.ta-center.bold {item.name}
						p.text.ta-center.caption {item.subtitle}
				+else()
					.empty
						Icon {props.empty.icon}
						p.text.headline {$_(props.empty.text)}
</template>

<style lang="stylus" global>
		
	.cell-list
		display          flex
		flex-direction   column
		border-top       var(--WidthBorder) solid var(--ColorBorder)
		
		> header
			display     flex
			align-items center
			
			> .icon
				margin 0 calc(.5 * (var(--SizeBlock) - var(--FZ_Icon)))
			> .text
				ellipsis()
				flex         1
				margin-right calc(.5 * (var(--SizeBlock) - var(--FZ_Icon)))
			
			> *
				margin 0
				&:first-child:last-child
					flex       1
					text-align center
		
		> .items
			flex         1
			display      flex
			flex-wrap    wrap
			margin       calc(-.5 * var(--SpacingLarge))

			> button
				display          flex
				flex-direction   column
				justify-content  center
				align-items      center
				width            calc(2 * var(--SizeBlock) + var(--SpacingLarge))
				height           calc(2 * var(--SizeBlock) + var(--SpacingLarge))
				margin           calc(.5 * var(--SpacingLarge))
				background-color var(--ColorBG)
				box-shadow       var(--Shadow)
				border-radius    var(--Radius)
				backdrop-filter  blur(var(--AcrylicBlur))
				transition       background-color var(--TimeTrans), box-shadow var(--TimeTrans)

				> .img
					overflow         hidden
					display          flex
					justify-content  center
					align-items      center
					width            var(--SizeBlock)
					height           var(--SizeBlock)
					margin-bottom    var(--Spacing)
					//background-color var(--ColorBGLight)
					border-radius    var(--Radius)

					> img
						height 100%

					> .icon
						color var(--ColorIconTri)

				> .text
					width   100%
					padding 0 var(--Spacing)
					ellipsis()
				
					&:not(:last-child)
						margin-bottom var(--SpacingText)

			> .empty
				flex            1
				display         flex
				align-items     center
				margin          calc(.5 * var(--SpacingLarge))

				> .icon
					width var(--SizeBlock)
					color var(--ColorIconTri)

				> .text
					color var(--ColorTextTri)
					text-align left
					ellipsis()

		&.active > .items > button.focused
			background-color var(--ColorBGLight)
			box-shadow       var(--ShadowRaised)

</style>
