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
	<article class="text-white">
		<img :src="project.image" :alt="project.title" />
		<span>ID: {{ project.id }} </span>
		<h3>{{ project.title }}</h3>
		<button @click="isFavoriteToggle">
			<span v-if="status">{{ project.isFavorite }}</span>
		</button>
	</article>
</template>
