import type { AuthStore } from "~/types";
import axios from "axios"; 

const url = "https://sat7.faulio.com/api/v1/"
const temp_device_id =  "51f0e490-f6b1-11ee-a1ce-d940c222a976";

export const login = async (formData: { email: string; password: string }) => {
  const body = {
    email: formData.email,
    password: formData.password,
    device_os: "Windows",
    device_type: "browser",
    uniq_device_id: temp_device_id,
  };

  try {
    const response: any = await axios.post(`${url}login/signin`, body);
    if (response.status >= 200 && response.status <= 300) {
      const authData: AuthStore = {
        email: response?.data.data.email,
        name: response?.data.data.name,
        auth_token: response?.data.data.auth_token,
        unique_id: response?.data.data.unique_id,
        uuid: response?.data.data.uuid,
        profile_id: response?.data.profiles[0].id,
        status: true,
      } as any;
			
			localStorage.setItem("auth_token", JSON.stringify(authData.auth_token))

      return { authData, error: null };
    } else {
      return { authData: null, error: "API returned unsuccessful message" };
    }
  } catch (error) {
    console.error("Error during login:", error);
    return { authData: null, error: "An error occurred during login" };
  }
};