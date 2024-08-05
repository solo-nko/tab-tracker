import api from "./Api.js";

// service with methods for handling authentication
export default {
	register(credentials) {
		return api().post("register", credentials);
	}
};