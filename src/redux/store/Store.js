/** @format */

import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducers from "../reducers/index"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
	key: "persist-store",
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducers)
const thunkMiddleware = [thunk]

const store = createStore(
	persistedReducer,
	composeWithDevTools(applyMiddleware(...thunkMiddleware))
)

export const persistor = persistStore(store)

export default store
