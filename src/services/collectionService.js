/** @format */

import { useSelector } from "react-redux"
import apiClient from "../helper/apiClient"


import React from 'react'

// const collectionService = () => {

// 	const userData = useSelector((state) => state.walletReducer.userData)
// 	return (
// 		<div>collectionService</div>
// 	)
// }

// export default collectionService

const { REACT_APP_COLLECTION_API } = process.env
class CollectionService {
	getAllUsers = () =>
		apiClient().get(
			`${REACT_APP_COLLECTION_API}/api/v1/collections?asset_owner=0x943590A42C27D08e3744202c4Ae5eD55c2dE240D&offset=1&limit=40`
			// `${REACT_APP_COLLECTION_API}/api/v1/collections?asset_owner=${userData?.address}&offset=0&limit=300`
		)
}

export default new CollectionService()
