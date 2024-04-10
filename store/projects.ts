import { defineStore } from 'pinia';
import type { Project } from '~/types';

import axios from "axios"; 

//const config = useRuntimeConfig();
//const url = config.public.baseURL;
const url = "https://sat7.faulio.com/api/v1/";

const defaultValue: {projects: Project[]} = {
	projects: []}

export const useProjectsStore = defineStore("projectsStore", {
	state: ()=> defaultValue ,
	getters: {
		getFavoritesProjects(): Project[]{
			return this.projects.filter((project) => project.isFavorite)
		},
		getAllProjects():Project[]{
			return this.projects
		}
	},
	actions:{
		clear(){
			this.$patch(defaultValue)
		},
		set(input: Project []){
			this.$patch({projects: input})
		},
		async setAllProjects(){
			try {
				await axios(`${url}home`)
				.then(result => {
					const projectsData =  (result?.data?.blocks[5]?.projects || []).map((project: any) => ({
						id: project.id,
						title: project.title,
						image: project.image,
						isFavorite: project.favorite,
					}));
					console.log("🚀 ~ setAllProjects ~ projectsData:", projectsData)
				this.projects = projectsData
			})
			
			} catch (error) {
				console.log(error);
			}
		},
		async setPagedProjects(){
			const authStore = useAuthStore();
			try {
				await axios(`${url}member/project`, {
					method: "GET",
					headers: {
					Authorization: authStore.authToken,
					devicetype: "browser",
					deviceid: "51f0e490-f6b1-11ee-a1ce-d940c222a976",
					//deviceid: authStore.deviceID,
					profile: authStore.profileID,
					lang: "en",
					},
					params: {
					user_list: "1",
					page: "1",
				},
				})
				.then(result => {
					const projectsData =  (result?.data?.blocks[0]?.projects || []).map((project: any) => ({
						id: project.id,
						title: project.title,
						image: project.image,
						isFavorite: project.favorite,
					}));
					this.projects = this.projects.map(project=> {
						if(projectsData.containce(project)){
							project.isFavorite = true;
						}
						return project;
					})
			})
			} catch (error) {
				console.log(error);
			}
		},

		async toggleFavorite(input: string, action: string){
			const authStore = useAuthStore();
			try {
				await axios(`${url}member/favorites/${action}`, {
					method: "GET",
					headers: {
						Authorization: authStore.authToken,
						devicetype: "browser",
						deviceid: authStore.deviceID,
						profile: authStore.profileID,
						lang: "en",
					},
					params: {
						program: input,
					},
				}).then(responce => {
					if(responce.data.set === 1) {
							this.$patch((state) => {
								state.projects = state.projects.map((project) => {
									if (project.id === input) {
										return { ...project, isFavorite: !project.isFavorite };
									}
									return project;
								});
							});
					}
				})
			} catch (error) {
				console.log("Favorites error:", error);
			}
		}
	}
})

