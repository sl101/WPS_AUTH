<script setup lang="ts">
import { computed } from 'vue';
import { useProductsStore } from '../store/products';
import ProductItem from "./ProductItem.vue";

const produtsStore = useProductsStore();
const products =	computed(() => produtsStore.getAllProducts);

</script>

<template>
  <div
    class="relative z-0 top-0 left-0 flex justify-center items-center h-screen w-full mt-[-80px]"
  >
    <Head>
      <Title>Home page</Title>
    </Head>
    <div
      class="absolute z-0 top-0 left-0 h-full w-screen bg-no-repeat bg-top bg-cover before:absolute before:top-0 before:left-0 before:h-full before:w-screen before:z-10 before:bg-black before:opacity-60"
      :style="{
        backgroundImage: `url('https://sat7plus.org/images/bg_lg.webp')`,
      }"
    />

    <section
		
      class="_container min-w-full relative flex justify-center items-center gap-2 z-20"
    >
      <Swiper
				v-if="products.length > 0"
        class="w-full flex justify-center items-center"
        :modules="[SwiperNavigation]"
        :slides-per-view="4"
        :space-between="10"
        :navigation="true"
      >
        <SwiperSlide
          v-for="product of products"
          :key="product.id"
          class="h-20"
        >
          <ProductItem :product="product" />
        </SwiperSlide>
      </Swiper>
			<p 
			v-else 
			class="text-white text-xl ">Loading...</p>
    </section>

  </div>
</template>
section