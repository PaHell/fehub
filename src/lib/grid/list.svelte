<svelte:options accessors={true} />

<script context="module">
	import { createEventDispatcher } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { blockH, blockW, spaceL, elemS } from '$lib/../store.js';
	import Icon from '$lib/icon.svelte';
</script>

<script>
	export let active;
	export let props;
	const defaults = {
		items: [],
		empty: {
			icon: 'close',
			text: 'Empty'
		}
	};
	props = { ...defaults, ...props };
	const dispatch = createEventDispatcher();
	let hovered = 0;

	export function onEnter() {
		updateCursor();
	}

	export function onLeave() {
		hovered = 0;
	}

	export function handleKeydown(event) {
		let parentStop = false;
		switch (event.keyCode) {
			case 37: // left
				if (hovered > 0) {
					hovered--;
					parentStop = true;
				}
				break;
			case 39: // right
				if (hovered < props.items.length) {
					hovered++;
					parentStop = true;
				}
				break;
			case 13: // enter
				if (hovered < props.items.length) onChildClick(hovered);
				else onShowMore();
				parentStop = true;
				break;
		}
		updateCursor();
		return parentStop;
	}
	function updateCursor() {
		dispatch('cursor', {
			x: hovered * ($elemS + $spaceL),
			w: $elemS,
			h: $elemS
		});
	}
	// Callbacks

	function onChildClick(index) {
		props.onClick?.(props.items[index], index);
	}
	function onShowMore() {
		props.more?.onClick?.();
	}
</script>

<template lang="pug">
	.cell-list(class:active)
		+if('props.items.length > 0')
			.items
				+each('props.items as item, index')
					button(
						class:hovered="{hovered === index}",
						on:click|preventDefault!="{() => onChildClick(index)}")
						.img
							img(src="{item.img}")
						p.text.bold {item.name}
						p.text.caption {item.owner}
				button(
					class:hovered="{hovered === props.items.length}",
					on:click|preventDefault!="{() => onShowMore()}")
					Icon {props.more.icon}
					p.text.bold {$_(props.more.text)}
			+else()
				.empty
					Icon {props.empty.icon}
					p.text.headline {$_(props.empty.text)}
</template>

<style lang="stylus" global>

	.cell-list
		overflow         visible !important
		height           100%
		background-color transparent !important
		box-shadow       none !important

		> .items
			display flex
			
			> button
				display          flex
				flex-direction   column
				justify-content  center
				align-items      center
				width            $SizeElemS
				height           $SizeElemS
				background-color $ColorBG
				box-shadow       $Shadow
				border-radius    $Radius
				transition       background-color $TimeTrans, box-shadow $TimeTrans

				&:not(:last-child)
					margin-right $SpacingLarge

				> .img
					overflow         hidden
					display          flex
					justify-content  center
					align-items      center
					width            $SizeBlock
					height           $SizeBlock
					margin-bottom    $Spacing
					//background-color $ColorBGLight
					border-radius    $Radius

					> img
						height 100%

				> .text:not(:last-child)
					margin-bottom $SpacingText

		&.active > .items > button.hovered
			background-color $ColorBGLight
			box-shadow       $ShadowRaised

		> .empty
			display         flex
			justify-content center
			align-items     center

			> .icon
				margin-right $SpacingText
				color        $ColorIconTri

			> .text
				color $ColorBlackTextTri

</style>
