import { defineStore } from 'pinia';

interface AuthStore{
	email: string,
	name: string,
	auth_token: string,
	unique_id: string,
	uuid: string,
	status: boolean
}


const defaultValue: { user: AuthStore} = {
	user:{
		email: "",
		name: "",
		auth_token: "", 
		unique_id: "", 
		uuid: "", 
		status: false
	}
}

export const useAuthStore = defineStore("auth", {
	state: ()=> defaultValue,
	getters: {
		isAuth: state=> state.user.status,
	},
	actions:{
		clear(){
			this.$patch(defaultValue)
		},
		set(input: AuthStore){
			this.$patch({user: input})
		}
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