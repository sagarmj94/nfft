/** @format */

import { lazy, Suspense } from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import store, { persistor } from "./redux/store/Store"
import { Provider, useSelector } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import Layout from "./Layout"

function App() {
	return (
		<>
			<BrowserRouter >
				<Provider store={store}>
					<PersistGate persistor={persistor}>
						<Layout />
					</PersistGate>
				</Provider>
			</BrowserRouter>
		</>
	)
}

export default App