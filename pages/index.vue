<script setup lang="ts">
const productsStore = useProductsStore();
const authStore = useAuthStore();

onMounted(async () => {
  if (authStore.authToken) {
		productsStore.setMemberProducts();
	} else {
		productsStore.setProducts();
	}
});
</script>

<template>
  <GalleryHome />
</template>
