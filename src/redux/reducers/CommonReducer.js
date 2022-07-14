/** @format */

import {
	GET_TRASACTION_DATA
} from "../index"

const initialState = {
	transactonData:[]
}

const CommonReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TRASACTION_DATA:
			return {
                ...state,
				transactonData: action.payload,
			}
		default:
			return state
	}
}
export default CommonReducer
