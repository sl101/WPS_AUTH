import { defineStore } from "pinia";
import type { Project } from "~/types";
import axios from "axios";

const url = "https://sat7.faulio.com/api/v1/";
const temp_device_id = "51f0e490-f6b1-11ee-a1ce-d940c222a976";

const defaultValue: { projects: Project[] } = {
  projects: [],
};

export const useProjectsStore = defineStore("projectsStore", {
  state: () => defaultValue,
  getters: {
    getFavoritesProjects(): Project[] {
      return this.projects.filter((project) => project.isFavorite);
    },
    getAllProjects(): Project[] {
      return this.projects;
    },
  },
  actions: {
    clear() {
      this.$patch(defaultValue);
    },
    set(input: Project[]) {
      this.$patch({ projects: input });
    },
    async setAllProjects() {
      try {
        await axios(`${url}home`).then((response) => {
          const projectsData = (response?.data?.blocks[2]?.projects || []).map(
            (project: any) => ({
              id: project.id,
              title: project.title,
              image: project.image,
              isFavorite: project.favorite,
            }),
          );
          this.projects = projectsData;
        });
      } catch (error) {
        console.log(error);
      }
    },
    async setPagedProjects() {
      const authStore = useAuthStore();
      try {
        await axios(`${url}member/project`, {
          method: "GET",
          headers: {
            Authorization: authStore.authToken,
            devicetype: "browser",
            deviceid: temp_device_id,
            profile: authStore.profileID,
            lang: "en",
          },
          params: {
            user_list: "1",
            page: "1",
          },
        }).then((response) => {
          const projectsData = (response?.data?.blocks[0]?.projects || []).map(
            (project: any) => ({
              id: project.id,
              title: project.title,
              image: project.image,
              isFavorite: project.favorite,
            }),
          );

          this.projects = this.projects.map((project) => {
            const matchingProject = projectsData.find(
              (item: any) => item.id === project.id,
            );
            if (matchingProject) {
              return { ...project, isFavorite: matchingProject.isFavorite };
            }
            return project;
          });
        });
      } catch (error) {
        console.log(error);
      }
    },

    async toggleFavorite(input: string, action: string) {
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
        }).then((responce) => {
          if (responce.data.set === 1) {
            this.$patch((state) => {
              state.projects = state.projects.map((project) => {
                if (project.id === input) {
                  return { ...project, isFavorite: !project.isFavorite };
                }
                return project;
              });
            });
          }
        });
      } catch (error) {
        console.log("Favorites error:", error);
      }
    },
  },
});
