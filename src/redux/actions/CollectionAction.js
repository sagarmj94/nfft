/** @format */

import { USERS_LOAD_START, GET_COLLECTIONS } from "../index"
import { USERS_LOAD_SUCCESS } from "../index"
import { USERS_LOAD_ERROR } from "../index"

const userLoadStart = () => ({
	type: USERS_LOAD_START,
})

const userLoadSucess = (users) => ({
	type: USERS_LOAD_SUCCESS,
	payload: users,
})
const userLoadError = (error) => ({
	type: USERS_LOAD_ERROR,
	payload: error,
})

const getCollections = (data) => ({
	type: GET_COLLECTIONS,
	payload: data,
})

export default {
	userLoadStart,
	userLoadSucess,
	userLoadError,
	getCollections,
}
