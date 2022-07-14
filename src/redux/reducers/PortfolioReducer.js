/** @format */

import {
	PORTFOLIO_DATA_REQUEST,
	PORTFOLIO_DATA_REQUEST_SUCCESS,
	PORTFOLIO_DATA_REQUEST_ERROR,
} from "../index"

const initialState = {
	isLoading: "",
	nftData: [],
	IsError: "",
}

const PortfolioReducer = (state = initialState, action) => {
	// console.log("action", action)
	switch (action.type) {
		case PORTFOLIO_DATA_REQUEST:
			return {
				...state,
				isLoading: action.payload,
			}

		case PORTFOLIO_DATA_REQUEST_SUCCESS:
			return {
				isLoading: false,
				nftData: action.payload,
				IsError: "",
			}

		case PORTFOLIO_DATA_REQUEST_ERROR:
			return {
				isLoading: false,
				nftData: [],
				IsError: action.payload,
			}
		default:
			return state
	}
}
export default PortfolioReducer
