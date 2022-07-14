/** @format */

import {
	USERS_LOAD_START,
	USERS_LOAD_SUCCESS,
	USERS_LOAD_ERROR,
} from "../index"

const initialState = {
	isLoading: false,
	colData: [],
	IsError: null,
}

const CollectionReducer = (state = initialState, action) => {
	// console.log("action", action)
	switch (action.type) {
		case USERS_LOAD_START:
			return {
				...state,
				isLoading: true,
				colData: null,
				error: null,
			}

		case USERS_LOAD_SUCCESS:
			return {
				isLoading: false,
				colData: action.payload,
				IsError: null,
			}

		case USERS_LOAD_ERROR:
			return {
				isLoading: false,
				colData: [],
				IsError: action.payload,
			}
		default:
			return state
	}
}
export default CollectionReducer
