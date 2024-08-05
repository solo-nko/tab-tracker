import axios from "axios";

// setup base URL for the backend
export default () => {
	return axios.create({
		baseURL: "http://localhost:8081",
	})
}