<svelte:options accessors={true} />

<script context="module">
	import { createEventDispatcher } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { blockH } from '$lib/../store.js';
	import Icon from '$lib/icon.svelte';
</script>

<script>
	export let active;
	export let props;
	const defaults = {
		icon: '',
		label: 'Dropdown',
		options: [],
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
			switch (event.keyCode) {
				case 38: // up
					if (hovered > 0) hovered--;
					else hovered = props.options.length;
					parentStop = true;
					break;
				case 40: // down
					if (hovered < props.options.length) hovered++;
					else hovered = 0;
					parentStop = true;
					break;
				case 13: // enter
					if (hovered !== 0) {
						setSelected(hovered - 1);
						parentStop = true;
					}
					break;
			}
		}
		updateCursor();
		return parentStop;
	}
	function updateCursor() {
		dispatch('cursor', {
			y: expanded ? hovered * $blockH : 0
		});
	}
	function setSelected(index) {
		// close
		expanded = false;
		updateCursor();
		// exec
		props.options[index].value();
	}
</script>

<template lang="pug">
	.cell-dropdown(
		class:active,
		class:expanded,
		style="{`height: ${expanded ? (props.options.length + 1) * $blockH : $blockH}px`}")
		button(on:click, class:hovered!="{expanded && hovered === 0}")
			Icon {props.icon}
			div
				p.text.label {$_(props.label)}:
				p.text.bold {$_(props.text)}
			Icon arrow_drop_down
		.options
			+each('props.options as option, index')
				button(
					class:hovered="{hovered - 1 === index}",
					on:click|preventDefault!="{() => setSelected(index)}",)
					Icon {option.icon}
					p.text.bold {$_(option.text)}
</template>

<style lang="stylus" global>
		
	.cell-dropdown
		height           var(--SizeBlock)
		box-shadow       var(--Shadow)
		background-color var(--ColorBG)
		border-radius    var(--Radius)
		transition       height var(--TimeTrans), box-shadow var(--TimeTrans), background-color var(--TimeTrans) !important
		will-change      height
		
		> #container-cursor
			width 100%
			> #cursor
				width  50%
				height var(--SizeBlock)
				margin-left 25%
		
		> button
			display         flex
			align-items     center
			width           100%
			height          var(--SizeBlock)
			
			> .icon
				width var(--SizeBlock)
				
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

				> .icon
					width var(--SizeBlock)

				> .text
					ellipsis()
				
				&.hovered
					> .icon
						color var(--ColorAccentIcon)
						
		&.active > button > .icon
			&:first-child
				color var(--ColorAccentIcon)
			&:last-child
				color var(--ColorIconPri)
							
		&.expanded
			> button
				> .icon:last-child
					transform rotateX(180deg)
</style>
