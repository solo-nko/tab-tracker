<template>
	<v-card title="Register" variant="elevated">
		<v-text-field label="Email" v-model="email" />
		<v-text-field label="Password" v-model="password" type="password" />
		<div class="error" v-html="errorBody"></div>
		<v-card-actions>
			<v-btn v-on:click="registerInfo">Register</v-btn>
		</v-card-actions>

	</v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AuthService from "../services/AuthService";
// not sure what's going on with this, but it works
import type { Credential } from "@/types/Credential";
import { AxiosError } from "axios";

const email = ref("");
const password = ref("");
const errorBody = ref("");

async function registerInfo() {
	let credToRegister: Credential = {email: email.value, password: password.value};
	try {
		// call register
		const response = await AuthService.register(credToRegister);
		console.log(response);
		console.log("The following information was registered:", `\n\t${credToRegister.email}\n\t${credToRegister.password}`);
	} catch (error: any) {
		// insert AxiosError info returned from server into errorBody
		if (error.response && error instanceof AxiosError) errorBody.value = error.response.data.error;
	}
}

</script>


<style scoped>
.error {
	color: red;
}

</style>