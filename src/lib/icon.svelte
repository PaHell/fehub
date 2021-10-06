<template lang="pug">
	i.icon.material-icons-round
		slot
</template>

<script>
</script>

<style lang="stylus" global>
	i.icon
		display     block
		text-align  center
		line-height var(--SizeBlock)
		color       var(--ColorIconSec)
		transition  color var(--TimeTrans)
</style>
