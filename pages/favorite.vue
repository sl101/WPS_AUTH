<script setup lang="ts">
definePageMeta({
	title: "Favorite page",
});

//console.log("Page favorite");

// Данные, которые нужно отправить в теле запроса
const data = {
	uniq_device_id: JSON.parse(localStorage.getItem("device_id") || ""),
};

const response = await $fetch(
	"https://sat7.faulio.com/api/v1/member/project?user_list=1&page=1",
	{
		method: "GET",
		body: data,
	}
);
console.log("Response data:", response);
</script>

<template>
	<div>
		<Head>
			<Title>Favorite page</Title>
		</Head>

		<p>Page favorite</p>
	</div>
</template>
