<script setup lang="ts">
const props = defineProps({
  project: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const projectStore = useProjectsStore();
const authStore = useAuthStore();

const action = props.project.isFavorite ? "remove" : "add";
</script>

<template>
  <article class="slide text-white p-3 bg-cyan-740 rounded hover:shadow-2xl">
    <img
      class="rounded h-[50vh] object-contain"
      loading="lazy"
      :src="project.image"
      :alt="project.title"
    >
    <h3 class="mt-3 text-2xl">{{ project.title }}</h3>
    <button
      v-if="authStore.isAuth"
      class="flex justify-center items-center w-10 h-10 mt-2 border-[1px] border-red-620 transition rounded focus:border-white hover:border-white hover:bg-red-620 text-white bg-cyan-071"
      @click="projectStore.toggleFavorite(props.project.id, action)"
    >
      <span v-if="project.isFavorite" class="text-xl">&#10003;</span>
      <span v-else class="w-10 h-10 text-3xl text-white">+</span>
    </button>
  </article>
</template>

<style scope>
.slide {
  min-width: 290px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
