<template lang="html">
	<div>
		<div class="message">
			{{ message }}
		</div>
	</div>
</template>

<script>
	export default {
		date () {
			return {
				message: 'Vue Calendar'
			}
		}
	}
</script>

<style lang="css">
	.message {
		color: pink;
		font-size: 1.4em;
	}
</style>