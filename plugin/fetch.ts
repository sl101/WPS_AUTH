import type { LoginForm } from "~/types";

const url = "https://sat7.faulio.com/api/v1/"
//const url = "/api/v1/";

export const login = async (formData: LoginForm) => {
	try {
		const response: any = await $fetch(
			`${url}login/signin`,
			{
				method: "POST",
				body: formData,
			}
		);
		localStorage.setItem("auth_token", JSON.stringify(response.data.auth_token))
		return response; 
	} catch (error) {
		console.error("Error:", error);
	}
};