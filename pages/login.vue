<script setup lang="ts">
definePageMeta({
	title: "Login page",
});
//if (process.client) {
//	localStorage.getItem("auth_token");
//}

console.log("Process client: ", process.client);
// Данные, которые нужно отправить в теле запроса
const data = {
	email: "v.zhevaga@gmail.com",
	password: "Qwerty1!",
	device_os: "Windows",
	device_type: "browser",
	uniq_device_id: "kr5lvcexjsm27h8c3paa2poglunu3z6i",
	//uniq_device_id: process.client
	//	? JSON.parse(localStorage.getItem("device_id") || "")
	//	: "",
};
//let token = "";
// Отправляем POST-запрос
async function login() {
	console.log("start fetch");
	try {
		const response = await $fetch(
			"https://sat7.faulio.com/api/v1/login/signin",
			{
				method: "POST",
				body: data,
			}
		);
		console.log("Response data:", response);
		//token = response?.auth_token;
	} catch (error) {
		console.error("Error:", error);
	}
}

//if (process.client) {
//	localStorage.setItem("auth_token", JSON.stringify(token));
//}
</script>

<template>
	<div>
		<Head>
			<Title>Login page</Title>
		</Head>
		<p>Page login</p>

		<button @click="login">Get data</button>
		<!--<p>{{ data }}</p>-->
	</div>
</template>
