<script setup lang="ts">
import { useAuthStore } from "~/store/auth";

const props = defineProps({
	project: {
		type: Object,
		required: true,
		default: () => {},
	},
	status: Boolean,
});

const config = useRuntimeConfig();
const url = config.public.baseURL;

const projectStore = useProjectsStore();
const authStore = useAuthStore();

const toggleFavorite = async (programId: string, action: string) => {
	//const deviceID = authStore.deviceID;
	//console.log("🚀 ~ toggleFavorite ~ deviceID:", deviceID);
	try {
		const { set } = await $fetch<any>(`${url}member/favorites/${action}`, {
			method: "GET",
			headers: {
				Authorization: authStore.authToken,
				devicetype: "browser",
				deviceid: authStore.deviceID,
				profile: authStore.profileID,
				lang: "en",
				origin: "https://sat7plus.org",
				referer: "https://sat7plus.org/",
			},
			query: {
				program: programId,
			},
		});

		if (set === 1) {
			projectStore.toggleFavorite(programId);
		}
	} catch (error) {
		console.log("Favorites error:", error);
	}
};

const isFavoriteToggle = () => {
	toggleFavorite(props.project.id, props.project.isFavorite ? "remove" : "add");
};
</script>

<template>
	<article class="text-white p-5 bg-cyan-740 rounded hover:shadow-2xl">
		<img
			class="rounded"
			loading="lazy"
			:src="project.image"
			:alt="project.title"
		/>
		<!--<span>ID: {{ project.id }} </span>-->
		<h3 class="mt-3">{{ project.title }}</h3>
		<button
			v-if="status"
			class="flex justify-center items-center w-10 h-10 mt-2 border-[1px] border-red-620 transition rounded focus:border-white hover:border-white hover:bg-red-620 text-white bg-cyan-071"
			@click="isFavoriteToggle"
		>
			<span v-if="project.isFavorite" class="text-xl">&#10003;</span>
			<span v-else class="w-10 h-10 text-3xl text-white">+</span>
		</button>
	</article>
</template>
