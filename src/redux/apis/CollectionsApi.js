/** @format */

// /** @format */

// import axios from "axios"
// import { FETCH_USER_REQUEST } from "./../index"
// import { FETCH_USER_SUCCESS } from "./../index"
// import { FETCH_USER_FAILURE } from "./../index"
// // import { fetchUsersFailure } from "./CollectionsApi"

// export const fetchUsersRequest = () => {
// 	return {
// 		type: FETCH_USER_REQUEST,
// 	}
// }
// export const fetchUsersSuccess = (users) => {
// 	console.log("redux async", users)
// 	return {
// 		type: FETCH_USER_SUCCESS,
// 		payload: users,
// 	}
// }
// export const fetchUsersFailure = (error) => {
// 	console.log("redux async", error)
// 	return {
// 		type: FETCH_USER_FAILURE,
// 		payload: error,
// 	}
// }

// export const fetchUsers = () => {
// 	const { REACT_APP_COLLECTION_API } = process.env
// 	return (dispatch) => {
// 		dispatch(fetchUsersRequest)
// 		axios
// 			.get(
// 				`${REACT_APP_COLLECTION_API}/api/v1/collections?asset_owner=0x943590A42C27D08e3744202c4Ae5eD55c2dE240D&offset=1&limit=40`
// 			)
// 			.then((response) => {
// 				const users = response.data

// 				console.log("data redux", users)
// 				dispatch(fetchUsersSuccess(users))
// 			})
// 			.catch((error) => {
// 				const errorMsg = error.message
// 				dispatch(fetchUsersFailure(errorMsg))
// 			})
// 	}
// }
