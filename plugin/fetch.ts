//import axios from "axios";
import type { LoginForm } from "~/types";

//const config = useRuntimeConfig();
const url = "https://sat7.faulio.com/api/v1/"

export const login = async (formData: LoginForm) => {
	try {
		const response: any = await $fetch(
			`${url}login/signin`,
			{
				mode: "no-cors",
				method: "POST",
				body: formData,
			}
		);
		console.log("🚀 ~ login ~ response:", response)
		localStorage.setItem("auth_token", JSON.stringify(response.data.auth_token))
		return response; 
	} catch (error) {
		console.error("Error:", error);
	}
};