<script setup lang="ts">
import { useAuthStore } from "../store/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const showPassword = ref(false);
const router = useRouter();

const form = reactive({
  email: "",
  password: "",
});



const handleSubmit = async () => {
	await authStore.singIn({
		email: form.email,
    password: form.password,
  })
	
	//TODO: что то не так работает с перегрузкой
	const isAuth = authStore.isAuth

	if (isAuth) {
    router.push("/");
    form.email = "";
    form.password = "";
  }
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <div
    class="absolute xl:relative flex flex-col justify-center items-center xl:w-1/2 w-screen h-screen xl:bg-cyan-071 text-white"
  >
    <form
      class="flex flex-col gap-4 relative z-20 xl:w-3/4 min-w-72 w-1/3 items-center"
      @submit.prevent="handleSubmit"
    >
      <h1 class="w-full justify-self-start">
        <span class="border-solid border-red-620 border-b-[8px] pb-[14px]"
          >Log in</span
        >
        <hr class="w-full h-1 my-4 border-cyan-730" >
      </h1>

      <label class="w-full cursor-pointer">
        <span>Email</span>
        <div class="relative mt-1">
          <input
            v-model="form.email"
            class="rounded-md w-full border-2 border-cyan-730 transition focus:border-red-620 hover:border-red-620 text-black py-[6px] px-[16px] outline-none"
            placeholder=""
            type="email"
            required
          >
        </div>
      </label>

      <label class="w-full cursor-pointer">
        <span>Password</span>
        <div class="relative mt-1">
          <input
            v-model="form.password"
            placeholder=""
            class="rounded-md w-full py-[6px] px-[16px] border-2 border-cyan-730 transition focus:border-red-620 hover:border-red-620 text-black outline-none"
            :type="showPassword ? 'text' : 'password'"
            required
          >

          <button
            type="button"
            class="absolute z-30 w-10 h-full top-1/2 right-0 -translate-y-1/2 flex justify-center items-center text-black outline-none"
            @click="togglePasswordVisibility"
          >
            <img
              v-if="showPassword"
              src="../assets/icons/open_eye.svg"
              alt="icon open eye"
            >
            <img
              v-else
              src="../assets/icons/closed_eye.svg"
              alt="icon closed eye"
            >
          </button>
        </div>
      </label>
      <NuxtLink
        class="ml-[auto] mt-[-14px] text-cyan-730 outline-none focus:text-red-620 hover:text-white"
        to="/auth/pass-recovery"
      >
        Forgot password?
      </NuxtLink>

      <button
        type="submit"
        class="rounded-md w-full bg-red-620 border-red-620 focus:border-white hover:border-black outline-none py-[6px] px-[16px]"
      >
        Log in
      </button>
      <hr class="w-full h-1 mt-4 mb-2 border-cyan-730" >
      <div class="flex flex-col self-start">
        <span> Don't you have an account? </span>
        <NuxtLink
          to="/auth/sign-up"
          class="outline-none focus:text-red-620 hover:text-white"
        >
          <span class="mt-1 text-cyan-730 focus:text-red-620 hover:text-white">
            Click to register
          </span>
        </NuxtLink>
      </div>
    </form>
  </div>
</template>
