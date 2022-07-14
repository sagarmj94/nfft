/** @format */

import {
	PORTFOLIO_DATA_REQUEST,
	PORTFOLIO_DATA_REQUEST_SUCCESS,
	PORTFOLIO_DATA_REQUEST_ERROR,
} from "../index"

export const portfolioDataRequest = () => {
	return {
		type: PORTFOLIO_DATA_REQUEST,
	}
}

export const portfolioDataRequestSuccess = (nftData) => {
	// console.log("portAction", nftData)
	return {
		type: PORTFOLIO_DATA_REQUEST_SUCCESS,
		payload: nftData,
	}
}

export const portfolioDataRequestError = (error) => {
	return {
		type: PORTFOLIO_DATA_REQUEST_ERROR,
		payload: error,
	}
}
