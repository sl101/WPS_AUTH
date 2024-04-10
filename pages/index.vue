<script setup lang="ts">
const projectStore = useProjectsStore();
const authStore = useAuthStore();

if (authStore.authToken) {
	projectStore.setPagedProjects();
} else {
	projectStore.setAllProjects();
}
</script>

<template>
	<GalleryHome />
</template>
