<script setup lang="ts">
//const route = useRoute();

//// When accessing /posts/1, route.params.id will be 1
//console.log(route.params.id);
</script>

<template>
	<nav>
		<ul class="flex justify-between align-middle gap-5">
			<li><NuxtLink to="/">Home</NuxtLink></li>
			<li><NuxtLink to="/favorite">Favorite</NuxtLink></li>
		</ul>
	</nav>
</template>
