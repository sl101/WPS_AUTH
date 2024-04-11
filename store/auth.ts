import { defineStore } from 'pinia';
import type { AuthStore } from '~/types';

const temp_device_id =  "51f0e490-f6b1-11ee-a1ce-d940c222a976";

const defaultValue: { user: AuthStore} = {
	user:{
		email: "",
		name: "",
		auth_token: "", 
		unique_id: "", 
		uuid: "",
		device_id:  temp_device_id,
		profile_id: "",
		status: false
	}
}

export const useAuthStore = defineStore("auth", {
	state: ()=> defaultValue,
	getters: {
		isAuth: state=> state.user.status,
		authToken: state => state.user.auth_token,
		deviceID: state => state.user.device_id,
		profileID: state => state.user.profile_id,
	},
	actions:{
		clear(){
			this.$patch(defaultValue)
		},
		set(input: AuthStore){
			this.$patch({user: input})
		},
	}
})

export const useIsLoadingStore = defineStore("isLoading", {
	state: ()=> ({isLoading: true,}),
	actions:{
		set(data: boolean){
			this.$patch({isLoading: data})
		}
	}
})