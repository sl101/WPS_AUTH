<script setup lang="ts">
import type { HomeResponse } from "~/types";

const projectStore = useProjectsStore();
const authStore = useAuthStore();
const config = useRuntimeConfig();
const url = config.public.baseURL;

try {
	const { data: result } = await useFetch<HomeResponse>(`${url}home`, {
		mode: "no-cors",
	});
	const projects = (result?.value?.blocks[5]?.projects || []).map((p) => ({
		id: p.id,
		title: p.title,
		image: p.image,
		isFavorite: p.favorite,
	}));
	projectStore.set(projects);
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
		<h1 class="absolute z-30 top-20 left-20 text-white">
			Status {{ authStore.isAuth }}
		</h1>
		<div
			class="absolute z-0 top-0 left-0 h-full w-screen bg-no-repeat bg-top bg-cover before:absolute before:top-0 before:left-0 before:h-full before:w-screen before:z-10 before:bg-black before:opacity-60"
			:style="{
				backgroundImage: `url('https://sat7plus.org/images/bg_lg.webp')`,
			}"
		></div>

		<section
			class="_container relative flex justify-between items-center gap-2 z-20"
		>
			<ProjectItem
				v-for="project of projectStore.projects"
				:key="project.id"
				:project="project"
				:status="authStore.isAuth"
			/>
		</section>
	</div>
</template>
