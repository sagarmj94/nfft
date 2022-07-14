/** @format */

import { combineReducers } from "redux"
import walletReducer from "./WalletReducer"
import planReducer from "./PlanReducer"
import portfolioReducer from "./PortfolioReducer"
import CollectionReducer from "./CollectionReducer"
import collectionsReducer from "./GetCollectionsReducers"
import TxnReducer from "./TxnReducer"
import NftReducer from "./NftReducer"

const rootReducers = combineReducers({
	planReducer,
	walletReducer,
	portfolioReducer,
	CollectionReducer,
	collectionsReducer,
	TxnReducer,
	NftReducer
})
export default rootReducers