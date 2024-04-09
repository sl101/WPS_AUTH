import { defineStore } from 'pinia';
import type { Project } from '~/types';
//import axios from "axios"; 

//const config = useRuntimeConfig();
//const url = config.public.baseURL;

const defaultValue: {projects: Project[]} = {
	projects: []}

export const useProjectsStore = defineStore("projectsStore", {
	state: ()=> defaultValue ,
	getters: {
		favoritesProjects(): Project[]{
			return this.projects.filter((project) => project.isFavorite)
		}
	},
	actions:{
		clear(){
			this.$patch(defaultValue)
		},
		set(input: Project []){
			this.$patch({projects: input})
		},
		//async setProjects(){
		//	try {
		//		const { data: result } = await axios(`${url}home`);
		//		const projects = (result?.value?.blocks[2]?.projects || []).map((project: any) => ({
		//			id: project.id,
		//			title: project.title,
		//			image: project.projectimage,
		//			isFavorite: project.favorite,
		//		}));
		//		projectStore.set(projects);
		//	} catch (error) {
		//		console.log(error);
		//	}
		//},
		toggleFavorite(input: string){
			this.$patch({projects: this.projects.map(project=>{
				if(project.id === input){
					project.isFavorite = !project.isFavorite;
				}
				return project;
			})})
		}
	}
})

