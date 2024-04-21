<script setup lang="ts"></script>

<template>
  <div
    class="relative flex justify-between items-center h-screen w-full mt-[-80px]"
  >
    <Head>
      <Title>Login page</Title>
    </Head>
    <AuthForm />
    <div
      class="relative z-0 w-full h-full bg-no-repeat bg-top bg-cover before:absolute before:top-0 before:left-0 before:h-full before:w-full before:z-10 before:bg-black xl:before:opacity-0 before:opacity-60"
      :style="{
        backgroundImage: `url('https://sat7plus.org/images/bg_lg.webp')`,
      }"
    />
  </div>
</template>
