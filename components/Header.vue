<script setup lang="ts">
const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
	authStore.clear();
	router.push("/");
};
</script>
<template>
	<header
		class="relative z-50 bg-cyan-071 text-white text-base h-20 font-Roboto"
	>
		<div class="_container flex justify-between items-center gap-5 h-full">
			<img
				alt="SAT-7 PLUS logo"
				width="99"
				height="47"
				class="h-full max-w-full object-contain w-20 max-h-10 md:w-24.75 md:max-h-12 xl:before:bg-black xl:before:opacity-60"
				src="https://sat7plus.org/images/logo.png"
			/>
			<Navigathions />
			<button v-if="authStore.isAuth" @click="logout">Sing out</button>
			<NuxtLink v-else to="/auth/sign-in">Login</NuxtLink>
		</div>
	</header>
</template>
