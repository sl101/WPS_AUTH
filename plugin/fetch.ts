//import axios from "axios";
import type { LoginForm } from "~/types";

const config = useRuntimeConfig();
const url = config.public.baseURL

//export const addFavorite = async () => {
//	try {
//		const {data, error} = await $fetch(`${url}member/favorites/add?program=`,	{
//			headers: {
//				'Authorization': `Bearer ${authStore.authToken}`,
//			},
//			query: {
//				program: 'id ghjuuhfvvs',
//			},
//		});
//		console.log("🚀 ~ getProjects ~ response:", response?.value?.blocks[5]?.projects)
//		return response?.value?.blocks[5]?.projects || [];
//	} catch (error) {
//		console.log(error);
//	}
//}

export const login = async (formData: LoginForm) => {
	try {
		const response: any = await $fetch(
			`${url}login/signin`,
			{
				method: "POST",
				body: formData,
			}
		);
		return response?.data; 
	} catch (error) {
		console.error("Error:", error);
	}
};