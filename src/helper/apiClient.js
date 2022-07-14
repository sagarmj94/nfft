/** @format */

import axios from "axios"

const apiClient = () => {
	const { REACT_APP_COLLECTION_API } = process.env
	const axiosInstance = axios.create({
		baseUrl: REACT_APP_COLLECTION_API,
		ResponseType: "json",
	})
	return axiosInstance
}

export default apiClient
