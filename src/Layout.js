/** @format */

import { lazy, Suspense, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import InvoiceDetail from "./pages/InvoiceDetail"
import InvoiceAddnew from "./pages/InvoiceAddnew"
import Loading from "react-loading"
import { GetWalletDetails } from "./utils/GetWalletDetails"
import Protected from "./helper/Protected"
import TaxReport from "./pages/TaxReport"

const Dashboard = lazy(() => import("./pages/Dashboard"))
const MyWallet = lazy(() => import("./pages/MyWallet"))
const Transection = lazy(() => import("./pages/Transection"))
const Collection = lazy(() => import("./pages/Collection"))
const Portfolio = lazy(() => import("./pages/Portfolio"))
const ProfitTracker = lazy(() => import("./pages/ProfitTracker"))
const Invoices = lazy(() => import("./pages/Invoices"))
const Settings = lazy(() => import("./pages/Settings"))
const ChangeSubscription = lazy(() => import("./pages/ChangeSubscription"))
const ConnectWallet = lazy(() => import("./pages/ConnectWallet"))

function Layout() {
	const dispatch = useDispatch()
	const ethereum = window.ethereum
	const address = localStorage.getItem("wallet-address")

	useEffect(() => {
		GetWalletDetails(ethereum, dispatch)
	}, [ethereum])
	return (
		<>
			<Suspense
				fallback={
					<div className='loader-wrapper'>
						<Loading type='spin' color='#ffab2d' height={100} width={100} />
					</div>
				}
			>
				<div id='wrapper'>
					<Routes>
						<Route path='/' element={<Protected Component={Dashboard} />} />
						<Route
							path='/mywallet'
							element={<Protected Component={MyWallet} />}
						/>
						<Route
							path='/transactions'
							element={<Protected Component={Transection} />}
						/>
						<Route
							path='/collections'
							element={<Protected Component={Collection} />}
						/>
						<Route
							path='/portfolio'
							element={<Protected Component={Portfolio} />}
						/>
						<Route
							path='/invoices'
							element={<Protected Component={Invoices} />}
						/>
						<Route
							path='/profit-tracker'
							element={<Protected Component={ProfitTracker} />}
						/>{" "}
						<Route
							path='/settings'
							element={<Protected Component={Settings} />}
						/>
						<Route
							path='/invoice-detail'
							element={<Protected Component={InvoiceDetail} />}
						/>
						<Route
							path='/tax-report'
							element={<Protected Component={TaxReport} />}
						/>
						<Route path='/invoice-addnew' element={<InvoiceAddnew />} />
						<Route
							path='/change-subscription'
							element={<Protected Component={ChangeSubscription} />}
						/>
						<Route
							path='/connect-wallet'
							element={<Protected Component={ConnectWallet} />}
						/>
						<Route path='/connect-wallet' element={<ConnectWallet />} />
					</Routes>
				</div>
			</Suspense>
		</>
	)
}

export default Layout