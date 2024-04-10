<script setup lang="ts">
import { useAuthStore } from "../store/auth";
import { login } from "../plugin/fetch";
import { useRouter } from "vue-router";
import type { AuthStore } from "~/types";

const authStore = useAuthStore();
const showPassword = ref(false);
const router = useRouter();

const form = reactive({
	email: "",
	password: "",
});

//let deviceId = "a7fccd00-f660-11ee-bfa6-a3fa65d1a4a9";
//if (process.client) {
//	deviceId = JSON.parse(localStorage.getItem("device_id") || "");
//}
// Отправляем POST-запрос
const handleSubmit = async () => {
	//console.log("start fetch");
	const formData = {
		//email: form.email,
		//password: form.password,
		email: "v.zhevaga@gmail.com",
		password: "Qwerty1!",
		device_os: "Windows",
		device_type: "browser",
		//uniq_device_id: authStore.deviceID,
		uniq_device_id: "51f0e490-f6b1-11ee-a1ce-d940c222a976",
	};
	//console.log("🚀 ~ handleSubmit ~ formData:", formData);

	const response = await login(formData);
	//console.log("🚀 ~ handleSubmit ~ response:", response);
	if (response) {
		const authData: AuthStore = {
			email: response?.data.email,
			name: response?.data.name,
			auth_token: response?.data.auth_token,
			unique_id: response?.data.unique_id,
			uuid: response?.data.uuid,
			profile_id: response?.profiles[0].id,
			status: true,
		};
		//console.log("🚀 ~ handleSubmit ~ response.set:", response.set);
		authStore.set(authData);
	}
	form.email = "";
	form.password = "";
	router.push("/");
	//console.log("🚀 ~ authStore:", authStore);
	//console.log("🚀 ~ authStore:", authStore.authToken);
};

const togglePasswordVisibility = () => {
	showPassword.value = !showPassword.value;
};
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
						v-model="form.email"
						class="_input border-2 border-cyan-730 transition focus:border-red-620 hover:border-black text-black"
						placeholder=""
						type="email"
					/>
				</div>
			</label>

			<label class="w-full cursor-pointer">
				<span>Password</span>
				<div class="relative mt-1">
					<input
						v-model="form.password"
						placeholder=""
						class="_input border-2 border-cyan-730 transition focus:border-red-620 hover:border-black text-black"
						:type="showPassword ? 'text' : 'password'"
					/>

					<button
						type="button"
						class="absolute z-30 w-10 h-full top-1/2 right-0 -translate-y-1/2 flex justify-center items-center text-black outline-none"
						@click="togglePasswordVisibility"
					>
						<img
							v-if="showPassword"
							src="../assets/icons/open_eye.svg"
							alt="icon open eye"
						/>
						<img
							v-else
							src="../assets/icons/closed_eye.svg"
							alt="icon closed eye"
						/>
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
../plugin/fetch
