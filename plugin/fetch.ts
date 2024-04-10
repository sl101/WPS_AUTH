//import axios from "axios";
import type { LoginForm } from "~/types";

const config = useRuntimeConfig();
const url = config.public.baseURL

export const login = async (formData: LoginForm) => {
	try {
		const response: any = await $fetch(
			`${url}login/signin`,
			{
				//mode: "no-cors",
				method: "POST",
				body: formData,
			}
		);
		return response; 
	} catch (error) {
		console.error("Error:", error);
	}
};