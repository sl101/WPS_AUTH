<script setup lang="ts">
const projectStore = useProjectsStore();

projectStore.setPagedProjects();
</script>

<template>
	<GalleryFavorite />
</template>
