<svelte:options accessors={true} />

<script context="module">
	import { createEventDispatcher } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { blockH, blockW } from '$lib/../store.js';
	import Icon from '$lib/icon.svelte';
</script>

<script>
	export let active;
	export let props;
	export let specs;
	const defaults = {
		icon: '',
		label: 'Select',
		options: {},
		selected: ''
	};
	props = { ...defaults, ...props };
	const dispatch = createEventDispatcher();
	let expanded = false;
	let hovered = 0;

	export function onClick() {
		expanded = !expanded;
		hovered = Object.keys(props.options).indexOf(props.selected) + 1;
		updateCursor();
	}
	export function onLeave() {
		expanded = false;
	}
	export function handleKeydown(event) {
		let parentStop = false;
		if (expanded) {
			const keys = Object.keys(props.options);
			const index = keys.indexOf(props.selected);
			switch (event.keyCode) {
				case 38: // up
					if (hovered > 0) hovered--;
					else hovered = keys.length;
					parentStop = true;
					break;
				case 40: // down
					if (hovered < keys.length) hovered++;
					else hovered = 0;
					parentStop = true;
					break;
				case 13: // enter
					if (hovered !== 0) {
						setSelected(keys[hovered - 1]);
						parentStop = true;
					}
					break;
			}
		}
		updateCursor();
		return parentStop;
	}
	function updateCursor() {
		const small = specs.w < 3;
		dispatch('cursor', {
			y: expanded ? hovered * $blockH : 0,
			x: expanded && small ? -2 * $blockW : 0,
			w: expanded && small ? 3 * $blockW : 0,
		});
	}
	function setSelected(key) {
		if (key !== props.selected) {
			props.selected = key;
			if (props.onChange) props.onChange(key, props.options[key]);
		}
		// close
		expanded = false;
		updateCursor();
	}
</script>

<template lang="pug">
	.cell-select(
		class:active,
		class:expanded,
		class="width-{specs.w}"
		style="height: {expanded ? (Object.keys(props.options).length + 1) * $blockH : $blockH}px;")
		button(on:click, class:hovered!="{expanded && hovered === 0}")
			Icon {props.icon}
			div
				p.text.label {$_(props.label)}:
				p.text.bold {$_(props.selected ? props.options[props.selected] : 'general.select.none')}
			Icon arrow_drop_down
		.options
			+each('Object.entries(props.options) as [key, value], index')
				button(
					class:hovered="{hovered - 1 === index}",
					class:selected="{key === props.selected}",
					on:click|preventDefault!="{() => setSelected(key)}",)
					.control
					p.text.bold {$_(value)}
</template>

<style lang="stylus" global>
		
	.cell-select
		overflow         hidden
		height           var(--SizeBlock)
		box-shadow       var(--Shadow)
		background-color var(--ColorBG)
		border-radius    var(--Radius)
		transition       width var(--TimeTrans), height var(--TimeTrans), margin var(--TimeTrans), box-shadow var(--TimeTrans), background-color var(--TimeTrans) !important
		will-change      width, height, margin
		
		> button
			display         flex
			align-items     center
			width           100%
			height          var(--SizeBlock)
			
			> .icon
				width       var(--SizeBlock)
				flex-shrink 0
				
				&:last-child
					color            var(--ColorIconTri)
					transform-origin center center
					transition       color var(--TimeTrans), transform var(--TimeTrans)
				
			> div
				flex 1
				
				> .text
					ellipsis()
					
					&.label
						font-size      var(--FZ_Caption)
						text-transform uppercase
						font-weight    var(--FW_Bold)
						color          var(--ColorTextTri)
						letter-spacing .25px
			
			&.hovered > .icon:last-child
				color var(--ColorAccentIcon) !important
		
		> .options
			flex 1
			
			> button
				display      flex
				align-items  center
				width        100%
				height       var(--SizeBlock)
				
				> .control
					width            var(--FZ_IconSmall)
					height           var(--FZ_IconSmall)
					margin           calc(.5 * (var(--SizeBlock) - var(--FZ_IconSmall)))
					border-radius    100%
					border           var(--WidthBorder) solid var(--ColorIconTri)
					background-color var(--ColorBGLight)
					transition       border-color var(--TimeTrans), background-color var(--TimeTrans)
					
					&:after
						content       ''
						display       block
						width         calc(var(--FZ_IconSmall) - 6 * var(--WidthBorder))
						height        calc(var(--FZ_IconSmall) - 6 * var(--WidthBorder))
						margin        calc(2 * var(--WidthBorder))
						border-radius 100%

				> .text
					ellipsis()
				
				&.selected					
					> .control
						border-color var(--ColorIconPri)
						&:after
							background-color var(--ColorIconPri)
				&.hovered
					> .control
						border-color var(--ColorAccentIcon)
						
					&.selected > .control:after
						background-color var(--ColorAccentIcon)
						
		&.active > button > .icon
			&:first-child
				color var(--ColorAccentIcon)
			&:last-child
				color var(--ColorIconPri)
							
		&.expanded
			overflow visible !important
			> button
				> .icon:last-child
					transform rotateX(180deg)

		// SIZE DEPENDENT
		&.width-1
			width var(--SizeBlock)
		&.expanded.width-1
			width       calc(3 * var(--SizeBlock))
			margin-left calc(-2 * var(--SizeBlock))
</style>
