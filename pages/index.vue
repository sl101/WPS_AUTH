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
	<div>
		<Head>
			<Title>Home page</Title>
		</Head>

		<p>Page home...</p>
		<ul>
			<li v-for="item in arr" :key="item.id">
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
