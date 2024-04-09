import { defineStore } from 'pinia';
import type { AuthStore } from '~/types';
import { uuid } from "vue-uuid";
//import axios from "axios"; 

//const config = useRuntimeConfig();
//const url = config.public.baseURL;

const genDeviceID = () => {
  if (process.client) {
    const device_ID = localStorage.getItem("device_id");
    if (device_ID) {
      try {
        return JSON.parse(device_ID);
      } catch (error) {
        console.error("Error parsing device_id from localStorage:", error);
        // Generate a new device ID and store it in localStorage
        const newID = uuid.v1();
        localStorage.setItem("device_id", JSON.stringify(newID));
        return newID;
      }
    } else {
			console.error("no device_id generate new");
      const newID = uuid.v1();
      localStorage.setItem("device_id", JSON.stringify(newID));
      return newID;
    }
  }
  return "";
};

//const getToken = () => {
//  if (process.client) {
//    return JSON.parse(localStorage.getItem("auth_token") || "");
//  }
//  return "";
//};

const defaultValue: { user: AuthStore} = {
	user:{
		email: "",
		name: "",
		auth_token: "", 
		unique_id: "", 
		uuid: "",
		//device_id:  genDeviceID(),
		device_id:  "51f0e490-f6b1-11ee-a1ce-d940c222a976",
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
		//async registerUser($email: string, $password: string){
		//	const formData = {
		//		//email: $email,
		//		//password: $password,
		//		email: "v.zhevaga@gmail.com",
		//		password: "Qwerty1!",
		//		device_os: "Windows",
		//		device_type: "browser",
		//		uniq_device_id: this.deviceID,
		//	};
		//	try {
    //    const response = await axios.post(`${url}login/signin`,
		//		{
		//			method: "POST",
		//			body: formData,
		//		})
		//		console.log("🚀 ~ registerUser ~ userData:", response.data)
        
    //  } catch (error) {
    //    console.log(error)
    //  } 
		//}
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