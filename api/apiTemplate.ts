import { AxiosError } from 'axios';
import api from './axios';
import type {SingInForm } from "~/types";

const uniq_device_id = "51f0e490-f6b1-11ee-a1ce-d940c222a976";
const dataVariable = 2;
const device_os = "Windows";
const device_type = "browser";

export default {
	
	async login(formData: SingInForm){
		const body = {
			email: formData.email,
			password: formData.password,
			device_os,
			device_type,
			uniq_device_id,
		};

  try {
    const response = await api.post("login/signin", body);
      const authData = {
        email: response?.data.data.email,
        name: response?.data.data.name,
        auth_token: response?.data.data.auth_token,
        unique_id: response?.data.data.unique_id,
        uuid: response?.data.data.uuid,
        profile_id: response?.data.profiles[0].id,
        status: true,
      };

      localStorage.setItem("auth_token", JSON.stringify(authData.auth_token));

     	return  authData;
  
  	} catch (error) {
   	 console.error("Error during login:", error);
   	 return { authData: null, error: "An error occurred during login" };
  	}
	},

  async getHomeData() {
    try {
      const resp = await api.get('home');
			return resp?.data?.blocks[dataVariable]?.projects;
    } catch (err: unknown) {
        console.log('getHomeData api error: ', err);
    }
  },

  async getFavorites() {
		try {
			const resp = api.get('member/project?user_list=1&page=');
			// TODO: logic for getFavorites
			return resp;
		} catch (err) {
			if (err instanceof AxiosError) {
        console.log('getFavorites api error: ', err);
        return {
          error: err,
        };
      } else {
        console.log('Unexpected error: ', err);
        return {
          error: 'Unexpected error occurred',
        };
      }
		}
  },

  async addToFavorites(program: string) {
		try {
			const resp = await api.get(`member/favorites/add?program=${program}`);
			// TODO: logic for addToFavorites
			return resp;
		} catch (err) {
			if (err instanceof AxiosError) {
        console.log('addToFavorites api error: ', err);
        return {
          error: err,
        };
      } else {
        console.log('Unexpected error: ', err);
        return {
          error: 'Unexpected error occurred',
        };
      }
		}
    
  },
	
  async removeFromFavorites(program: string) {
		try {
			const resp = await api.get(`member/favorites/remove?program=${program}`);
			// TODO: logic for removeFromFavorites
			
			return resp;
		} catch (err) {
			if (err instanceof AxiosError) {
        console.log('removeFromFavorites api error: ', err);
        return {
          error: err,
        };
      } else {
        console.log('Unexpected error: ', err);
        return {
          error: 'Unexpected error occurred',
        };
      }
		}
  },
};