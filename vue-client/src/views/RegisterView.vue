<template>
	<h1>Register</h1>
	<input type="email" name="email" placeholder="Email" v-model="email" ref="emailField" /><br>
	<input type="password" name="password" placeholder="Password" v-model="password" ref="passwordField" /><br>
	<button v-on:click="registerInfo">Register</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AuthService from "../services/AuthService";
// not sure what's going on with this
import type { Credential } from "@/types/Credential";

const email = ref("");
const password = ref("");

async function registerInfo() {
	let credToRegister: Credential = {email: email.value, password: password.value};
	const response = await AuthService.register(credToRegister);
	console.log(response.data);
	console.log("The following information was registered:", `\n\t${credToRegister.email}\n\t${credToRegister.password}`);
}

</script>


<style scoped>

</style>