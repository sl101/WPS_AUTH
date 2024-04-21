<script setup lang="ts">
const projectStore = useProjectsStore();
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
      class="_container min-w-full relative flex justify-between items-center gap-2 z-20"
    >
      <Swiper
        class="w-full flex justify-center items-center"
        :modules="[SwiperNavigation]"
        :slides-per-view="4"
        :space-between="10"
        :navigation="true"
      >
        <SwiperSlide
          v-for="project of projectStore.getAllProjects"
          :key="project.id"
          class="h-20"
        >
          <ProjectItem :project="project" />
        </SwiperSlide>
      </Swiper>
    </section>
  </div>
</template>
