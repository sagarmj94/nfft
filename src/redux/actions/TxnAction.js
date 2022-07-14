/** @format */

import { TXN_LOAD_START } from "../index"
import { TXN_LOAD_SUCCESS } from "../index"
import { TXN_LOAD_ERROR } from "../index"

const txnLoadStart = () => ({
	type: TXN_LOAD_START,
})

const txnLoadSucess = (txns) => ({
	type: TXN_LOAD_SUCCESS,
	payload: txns,
})
const txnLoadError = (error) => ({
	type: TXN_LOAD_ERROR,
	payload: error,
})

export default {
	txnLoadStart,
	txnLoadSucess,
	txnLoadError,
}
