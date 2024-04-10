<script setup lang="ts">
const projectStore = useProjectsStore();
</script>

<template>
	<div
		class="relative z-0 top-0 left-0 flex justify-center items-center h-screen w-full mt-[-80px]"
	>
		<Head>
			<!--<Title>{{ title }}</Title>-->
			<Title>Home page</Title>
		</Head>
		<div
			class="absolute z-0 top-0 left-0 h-full w-screen bg-no-repeat bg-top bg-cover before:absolute before:top-0 before:left-0 before:h-full before:w-screen before:z-10 before:bg-black before:opacity-60"
			:style="{
				backgroundImage: `url('https://sat7plus.org/images/bg_lg.webp')`,
			}"
		></div>

		<section
			class="_container min-w-full relative flex justify-between items-center gap-2 z-20"
		>
			<Swiper
				class="w-full flex justify-center items-center"
				:modules="[SwiperNavigation]"
				:slidesPerView="3"
				:space-between="10"
				:navigation="true"
			>
				<SwiperSlide
					class="h-full"
					v-for="project of projectStore.getAllProjects"
					:key="project.id"
				>
					<ProjectItem :project="project" />
				</SwiperSlide>
			</Swiper>
		</section>
	</div>
</template>

<style scope>
.swiper-wrapper {
	height: 100%;
	display: flex;
	align-items: stretch;
}
</style>
