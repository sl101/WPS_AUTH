<script setup lang="ts">
import type { HomeResponse } from "~/types";

const projectStore = useProjectsStore();
const authStore = useAuthStore();
const config = useRuntimeConfig();
const url = config.public.baseURL;

//if (authStore.authToken) {
//	try {
//		//const { data: result } = await useFetch<HomeResponse>(`${url}home`, {
//		const { data: result } = await useFetch<HomeResponse>(
//			`https://sat7.faulio.com/api/v1/member/project`,
//			{
//				//mode: "no-cors",
//				method: "GET",
//				headers: {
//					Authorization: authStore.authToken,
//					devicetype: "browser",
//					deviceid: "51f0e490-f6b1-11ee-a1ce-d940c222a976",
//					//deviceid: authStore.deviceID,
//					profile: authStore.profileID,
//					lang: "en",
//					origin: "https://sat7plus.org",
//					referer: "https://sat7plus.org/",
//				},
//				query: {
//					user_list: "1",
//					page: "1",
//				},
//			}
//		);
//		console.log("result: ", result?.value.blocks.projects);
//		const projects = (result?.value?.blocks[5]?.projects || []).map((p) => ({
//			id: p.id,
//			title: p.title,
//			image: p.image,
//			isFavorite: p.favorite,
//		}));
//		projectStore.set(projects);
//	} catch (error) {
//		console.log(error);
//	}
//} else {
try {
	const { data: result } = await useFetch<HomeResponse>(`${url}home`, {
		mode: "no-cors",
	});
	console.log("🚀 ~ result:", result.value);
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
//}
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
			<Swiper
				:modules="[SwiperNavigation]"
				:slides-per-view="5"
				:space-between="10"
				:navigation="true"
			>
				<SwiperSlide v-for="project of projectStore.projects" :key="project.id">
					<ProjectItem :project="project" :status="authStore.isAuth" />
				</SwiperSlide>
			</Swiper>
		</section>
	</div>
</template>
