<template>
	<v-toolbar title="Tab Tracker">
		<v-spacer></v-spacer>
			<!--interestingly, the "to" prop here lets you forego using routerlink components-->
			<v-btn to="/">Home</v-btn>
			<v-btn to="about">Browser</v-btn>
			<v-btn>Log In</v-btn>
			<v-btn to="register">Register</v-btn>
	</v-toolbar>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>