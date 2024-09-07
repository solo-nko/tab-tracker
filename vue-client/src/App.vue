<template>
	<v-app>
		<PageHeader></PageHeader>
		<v-main>
			<v-container fluid>
				<RouterView />
			</v-container>
		</v-main>

	</v-app>

</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
// see below link for info on linking vue components
// https://stackoverflow.com/a/76286386
import PageHeader from "@/components/Header.vue";
</script>

<style scoped>

</style>
