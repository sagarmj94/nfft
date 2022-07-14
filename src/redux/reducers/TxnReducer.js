/** @format */

import { TXN_LOAD_START, TXN_LOAD_SUCCESS, TXN_LOAD_ERROR } from "../index"

const initialState = {
	isLoading: false,
	txnData: [],
	IsError: null,
}

const TxnReducer = (state = initialState, action) => {
	// console.log("action", action)
	switch (action.type) {
		case TXN_LOAD_START:
			return {
				...state,
				isLoading: true,
				txnData: null,
				error: null,
			}

		case TXN_LOAD_SUCCESS:
			return {
				isLoading: false,
				txnData: action.payload,
				IsError: null,
			}

		case TXN_LOAD_ERROR:
			return {
				isLoading: false,
				txnData: [],
				IsError: action.payload,
			}
		default:
			return state
	}
}
export default TxnReducer
