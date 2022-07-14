/** @format */

import {
	WALLET_CONNECT_REQUEST,
	WALLET_CONNECT_REQUEST_SUCCESS,
	WALLET_CONNECT_REQUEST_ERROR,
} from "../index"
export const walletConnectRequest = () => {
	return {
		type: WALLET_CONNECT_REQUEST,
	}
}
export const walletConnectRequestSuccess = (userData) => {
	return {
		type: WALLET_CONNECT_REQUEST_SUCCESS,
		payload: userData,
	}
}
export const walletConnectRequestError = (error) => {
	return {
		type: WALLET_CONNECT_REQUEST_ERROR,
		payload: error,
	}
}
