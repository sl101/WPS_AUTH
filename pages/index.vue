<script setup lang="ts">
import type { HomeResponse } from "../types";

definePageMeta({
	title: "Home page",
});

if (process.client) {
	localStorage.setItem(
		"device_id",
		JSON.stringify("kr5lvcexjsm27h8c3paa2poglunu3z6i")
	);
}

let arr: any[] = [];

try {
	const { data: projects } = await useFetch<HomeResponse>(
		"https://sat7.faulio.com/api/v1/home"
	);
	arr = projects?.value?.blocks[5]?.projects || [];
} catch (error) {
	console.log(error);
}
</script>

<template>
	<div
		class="relative z-0 top-0 left-0 flex justify-center items-center h-screen w-full mt-[-80px]"
	>
		<Head>
			<Title>Home page</Title>
		</Head>
		<div
			class="absolute z-0 top-0 left-0 h-full w-screen bg-no-repeat bg-top bg-cover before:absolute before:top-0 before:left-0 before:h-full before:w-screen before:z-10 before:bg-black before:opacity-60"
			:style="{
				backgroundImage: `url('https://sat7plus.org/images/bg_lg.webp')`,
			}"
		></div>

		<ul
			class="_container relative flex justify-between items-center gap-2 z-20"
		>
			<li v-for="item in arr" :key="item.id" class="text-white">
				<article>
					<h3>{{ item.title }}</h3>
					<span>ID: {{ item.id }} </span>
					<button>
						{{ item.favorite }}
					</button>
				</article>
			</li>
		</ul>
	</div>
</template>
