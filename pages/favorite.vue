<script setup lang="ts">
const projectStore = useProjectsStore();
const authStore = useAuthStore();
//const response = await $fetch(
//	"https://sat7.faulio.com/api/v1/member/project?user_list=1&page=1",
//	{
//		method: "GET",
//		body: data,
//	}
//);
</script>

<template>
	<div
		class="relative z-0 top-0 left-0 flex justify-center items-center h-screen w-full mt-[-80px]"
	>
		<Head>
			<Title>Favorite page</Title>
		</Head>
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
				v-for="project of projectStore.favoritesProjects"
				:key="project.id"
				:project="project"
				:status="authStore.isAuth"
			/>
		</section>
	</div>
</template>
