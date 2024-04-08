<script setup lang="ts">
import { useAuthStore } from "../store/auth";
import { uuid } from "vue-uuid";

const emailRef = ref("");
const passwordRef = ref("");

//const useIsLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const router = useRouter();

// Отправляем POST-запрос
const handleSubmit = async () => {
	//console.log("start fetch");
	// Данные, которые нужно отправить в теле запроса
	const data = {
		email: "v.zhevaga@gmail.com",
		password: "Qwerty1!",
		device_os: "Windows",
		device_type: "browser",
		uniq_device_id: uuid.v1(),
		//uniq_device_id: process.client
		//	? JSON.parse(localStorage.getItem("device_id") || "")
		//	: "",
	};

	try {
		const response = await $fetch(
			"https://sat7.faulio.com/api/v1/login/signin",
			{
				method: "POST",
				body: data,
			}
		);
		//await account.createEmailSession(emailRef.value, passwordRef.value);
		if (response) {
			console.log("Response data:", response);
			authStore.set({
				email: response.data.email,
				name: response.data.name,
				auth_token: response.data.auth_token,
				unique_id: response.data.unique_id,
				uuid: response.data.uuid,
				status: true,
			});
			//router.push({ path: "/" });
		}
		//token = response?.auth_token;
	} catch (error) {
		console.error("Error:", error);
	}
};

//if (process.client) {
//	localStorage.setItem("auth_token", JSON.stringify(token));
//}
</script>

<template>
	<div
		class="absolute xl:relative flex flex-col justify-center items-center xl:w-1/2 w-screen h-screen xl:bg-cyan-071 text-white"
	>
		<form
			@submit.prevent="handleSubmit"
			class="flex flex-col gap-4 relative z-20 xl:w-3/4 min-w-72 w-1/3 items-center"
		>
			<h1 class="w-full justify-self-start">
				<span class="border-solid border-red-620 border-b-[8px] pb-[14px]"
					>Log in</span
				>
				<hr class="w-full h-1 my-4 border-cyan-730" />
			</h1>

			<label class="w-full cursor-pointer">
				<span>Email</span>
				<div class="relative mt-1">
					<input
						v-model="emailRef"
						class="_input border-2 border-cyan-730 transition focus:border-red-620 hover:border-black"
						placeholder=""
						type="email"
					/>
				</div>
			</label>

			<label class="w-full cursor-pointer">
				<span>Password</span>
				<div class="relative mt-1">
					<input
						v-model="passwordRef"
						placeholder=""
						class="_input border-2 border-cyan-730 transition focus:border-red-620 hover:border-black"
						type="password"
					/>

					<button class="absolute top-1/2 right-2 text-black outline-none">
						open
					</button>
				</div>
			</label>
			<NuxtLink
				class="block w-full text-right mt-[-14px] text-cyan-730 outline-none focus:text-red-620 hover:text-white"
				to="/auth/pass-recovery"
			>
				Forgot password?
			</NuxtLink>

			<button
				type="submit"
				class="_button bg-red-620 border-red-620 focus:border-white hover:border-black"
			>
				Log in
			</button>
			<hr class="w-full h-1 mt-4 mb-2 border-cyan-730" />
			<div class="flex flex-col self-start">
				<span> Don't you have an account? </span>
				<NuxtLink
					to="/auth/sign-up"
					class="outline-none focus:text-red-620 hover:text-white"
				>
					<span class="mt-1 text-cyan-730 focus:text-red-620 hover:text-white">
						Click to register
					</span>
				</NuxtLink>
			</div>
		</form>
	</div>
</template>

<style scope>
._input,
._button {
	width: 100%;
	padding: 6px 16px;
	outline: none;
	border-radius: 6px;
}
</style>
