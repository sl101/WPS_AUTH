export function	store_token(token:string) {
		if(process.client) {
			localStorage.setItem("auth_token", JSON.stringify(token))
	}
}
