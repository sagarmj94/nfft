/** @format */

import { GET_COLLECTIONS } from "../index"

const collections = {
	isLoading: false,
	collectionsLenght: 0,
	collections: [],
}

const collectionsReducer = (state = collections, action) => {
	switch (action.type) {
		case GET_COLLECTIONS:
			return {
				...state,
				collections: action.payload,
			}
		default:
			return state
	}
}
export default collectionsReducer
