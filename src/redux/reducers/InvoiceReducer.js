/** @format */

import { SELECTED_PLANS } from "../index"

const subscription = {
	// isLoading: false,
	name: "",
	email: "",
	phoneNumber: "",
	file: "",
	plan: "",
	currency: "",
	// IsError: "",
}

const planReducer = (state = subscription, action) => {
	let value = Object.keys(action)
	let key = value[1]
	// console.log("plans actions", Object.keys(action))
	switch (action.type) {
		case SELECTED_PLANS:
			return {
				...state,
				[key]: action[key],
			}
		default:
			return state
	}
}
export default planReducer