/** @format */

import collectionService from "../../services/collectionService"
import CollectionAction from "../actions/CollectionAction"

export const loadCollectionAsync = () => (dispatch) => {
	dispatch(CollectionAction.userLoadStart())
	collectionService
		.getAllUsers()
		.then((response) =>
			dispatch(CollectionAction.userLoadSucess(response.data))
		)
		.catch((error) => dispatch(CollectionAction.userLoadError(error.message)))
}
