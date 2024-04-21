<script setup lang="ts">
const authStore = useAuthStore();
</script>

<template>
  <nav>
    <ul class="flex justify-between align-middle gap-5">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li v-if="authStore.isAuth">
        <NuxtLink to="/favorite">Favorite</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
