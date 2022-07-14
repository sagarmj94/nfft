/** @format */

import { NFT_LOAD_START, NFT_LOAD_SUCCESS, NFT_LOAD_ERROR } from "../index"

const initialState = {
    isLoading: false,
    nftData: [],
    IsError: null,
}

const NftReducer = (state = initialState, action) => {
	// console.log("action", action)
	switch (action.type) {
		case NFT_LOAD_START:
			return {
				...state,
				isLoading: true,
				nftData: null,
				error: null,
			}

		case NFT_LOAD_SUCCESS:
			return {
				isLoading: false,
				nftData: action.payload,
				IsError: null,
			}

		case NFT_LOAD_ERROR:
			return {
				isLoading: false,
				nftData: [],
				IsError: action.payload,
			}
		default:
			return state
	}
}
export default NftReducer
