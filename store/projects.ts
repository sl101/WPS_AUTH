import { defineStore } from 'pinia';
import type { Project } from '~/types';
//import axios from "axios"; 

//const config = useRuntimeConfig();
//const url = config.public.baseURL;

const defaultValue: {projects: Project[]} = {
	projects: [
		{
			id:"1",
			title: "project.title",
			image: "https:\/\/sat7.faulio.com\/storage\/mediagallery\/5c\/99\/fullhd_58275d168714db41ffd2af3f6d29579014e7d01b.jpg",
			isFavorite: false,
		},
		{
			id:"2",
			title: "project.title",
			image: "https:\/\/sat7.faulio.com\/storage\/mediagallery\/5c\/99\/fullhd_58275d168714db41ffd2af3f6d29579014e7d01b.jpg",
			isFavorite: true,
		}
	]}

export const useProjectsStore = defineStore("projectsStore", {
	state: ()=> defaultValue ,
	getters: {
		favoritesProjects(): Project[]{
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
		//async setProjects(){
		//	try {
		//		const result = await axios(`${url}home`);
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

