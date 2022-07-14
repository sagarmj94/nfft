/** @format */

import { SELECTED_PLANS } from "../index"

export const PlansOfUserSelected = (userData) => {
	return {
		type: SELECTED_PLANS,
		payload: userData,
	}
}
