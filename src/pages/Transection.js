/** @format */

import React, { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"
import axios from "axios"
import Loading from "../components/loading/Loading"
import {
	getEvent,
	getFromValue,
	getGasFee,
	getPrice,
	getToProfile,
	getToValue,
	getTx,
} from "../utils/CommonFunctions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getFromProfile } from "./../utils/CommonFunctions"
import Pagination from "./../Pagination"
import GetGas from "../components/GetGas"
import TxnAction from "../redux/actions/TxnAction"
import { getProfitLoss } from "../utils/CommonFunctions"
var PageSize = 8

const Transection = () => {
	const [txn, setTxn] = useState([])
	//const [txn, setTxn] = useState([])
	const [txnError, setTxnError] = useState("")
	const [txnLoading, setTxnLoading] = useState(false)
	const wallletData = useSelector((state) => state.walletReducer.userData)
	const userData = useSelector((state) => state.walletReducer.userData)
	const [currentPage, setCurrentPage] = useState(1)
	const dispatch = useDispatch()
	const txnData = useSelector((state) => state.TxnReducer.txnData)

	const getTransection = () => {
		setTxnLoading(true)
		var config = {
			method: "get",
			// url: `https://testnets-api.opensea.io/api/v1/events?account_address=${wallletData?.address && wallletData?.address
			// 	}&only_opensea=false`,
			url: `https://testnets-api.opensea.io/api/v1/events?account_address=${userData?.address}&only_opensea=false&limit=300`,
			// url: "https:testnets-api.opensea.io/api/v1/events?account_address=0xc9b01E19c8b6130CEF11598Ff83e00452E00e14E&only_opensea=false&limit=200",
		}

		axios(config)
			.then(function (response) {
				// console.log("txn data", response?.data?.asset_events)
				setTxn(response?.data?.asset_events)
				dispatch(TxnAction.txnLoadSucess(response?.data?.asset_events))
				setTxnLoading(false)
			})
			.catch(function (error) {
				setTxn(txnData)
				setTxnLoading(false)
				// console.log("is txn data getting from here...?")
				// setTxnError("Something went wrong")
				// console.log("txn error", error)
			})
	}

	useEffect(() => {
		setTxnLoading(true)
		setTimeout(() => {
			getTransection()
		}, 1100)
		setTxnLoading(false)
	}, [])

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize
		const lastPageIndex = firstPageIndex + PageSize
		return Array.isArray(txn) && txn?.slice(firstPageIndex, lastPageIndex)
	}, [currentPage, txn])

	return (
		<>
			<Header />
			<Navbar />
			<div className='content-page home-page'>
				<div className='content pt-4'>
					<div className='container-fluid'>
						<h2 className='page-title pl-3'>Transactions</h2>
						<div className='card m-b-30 m-t-30 mt-md-0 card-normal'>
							<div className='card-body transactions-tabs'>
								<h4 className='mt-0 header-title mb-4'>Transactions</h4>
								<ul
									className='nav nav-tabs nav-justified'
									id='myTab'
									role='tablist'
								>
									<li className='nav-item'>
										<Link
											className='nav-link active'
											id='Metamask-tab'
											data-toggle='tab'
											to='#Metamask'
											role='tab'
											aria-controls='Metamask'
											aria-selected='true'
										>
											<img
												src='assets/images/wallet-1.png'
												alt=''
												height='28'
												className='mr-2'
											/>{" "}
											Metamask
										</Link>
									</li>
									<li className='nav-item'>
										<Link
											className='nav-link'
											id='WalletConnect-tab'
											data-toggle='tab'
											to='#WalletConnect'
											role='tab'
											aria-controls='WalletConnect'
											aria-selected='false'
										>
											<img
												src='assets/images/wallet-2.png'
												alt=''
												height='28'
												className='mr-2'
											/>
											WalletConnect
										</Link>
									</li>
									<li className='nav-item'>
										<Link
											className='nav-link'
											id='Binance-tab'
											data-toggle='tab'
											to='#Binance'
											role='tab'
											aria-controls='Binance'
											aria-selected='false'
										>
											<img
												src='assets/images/wallet-3.png'
												alt=''
												height='28'
												className='mr-2'
											/>{" "}
											Binance Chain Wallet
										</Link>
									</li>
								</ul>

								<div className='tab-content py-4' id='myTabContent'>
									<div
										className='tab-pane fade show active'
										id='Metamask'
										role='tabpanel'
										aria-labelledby='Metamask-tab'
									>
										<div className='table-responsive'>
											<table className='table table-hover font-15'>
												<thead>
													<tr>
														<th scope='col'>Events</th>
														<th scope='col'>Amount</th>
														{/* <th scope='col'>P/L (ETH)</th> */}
														{/* <th scope='col'>P/L % </th> */}
														<th scope='col'>Gas fees</th>
														<th scope='col'>From</th>
														<th scope='col'>To</th>
														<th scope='col'>Date</th>
													</tr>
												</thead>
												<tbody>
													{txnLoading ? (
														<tr>
															<td colSpan={8}>
																<div className='common-loader'>
																	<Loading
																		type='spin'
																		color='#ffab2d'
																		height={30}
																		width={30}
																	/>
																</div>
															</td>
														</tr>
													) : txnError ? (
														<p style={{ color: "red" }}>{txnError}</p>
													) : (
														Array.isArray(currentTableData) &&
														currentTableData?.map((topTxn, id) => {
															return (
																<tr key={id}>
																	<td>
																		{getEvent(topTxn, wallletData?.address)}
																	</td>
																	<td className='font-weight-600'>
																		{getPrice(topTxn, wallletData?.address)} ETH
																	</td>

																	<GetGas
																		hash={
																			topTxn?.transaction?.transaction_hash
																				? topTxn?.transaction?.transaction_hash
																				: ""
																		}
																	/>

																	<td>
																		<div>
																			<img
																				// src='assets/images/avtar-1.png'
																				src={getFromProfile(
																					topTxn,
																					wallletData?.address
																				)}
																				alt=''
																				className='thumb-sm rounded-circle mr-2'
																			/>
																			<span className=''>
																				{getFromValue(
																					topTxn,
																					wallletData?.address
																				)}
																			</span>
																		</div>
																	</td>
																	<td>
																		<div>
																			<img
																				// src='assets/images/avtar-1.png'
																				src={getToProfile(
																					topTxn,
																					wallletData?.address
																				)}
																				alt=''
																				className='thumb-sm rounded-circle mr-2'
																			/>
																			<span className=''>
																				{getToValue(
																					topTxn,
																					wallletData?.address
																				)}
																			</span>
																		</div>
																	</td>
																	<td>
																		{new Date(
																			topTxn?.created_date
																		).toLocaleString("en-US")}
																	</td>
																</tr>
															)
														})
													)}
												</tbody>
											</table>
										</div>

										<Pagination
											className='pagination-bar'
											currentPage={currentPage}
											totalCount={txn?.length}
											pageSize={PageSize}
											portFolio={txn}
											onPageChange={(page) => setCurrentPage(page)}
										/>
									</div>

									<div
										className='tab-pane fade'
										id='WalletConnect'
										role='tabpanel'
										aria-labelledby='WalletConnect-tab'
									>
										<div className='table-responsive'>
											<table className='table table-hover font-15'>
												<thead>
													<tr>
														<th scope='col'>Events</th>
														<th scope='col'>Amount</th>
														<th scope='col'>P/L (ETH)</th>
														<th scope='col'>P/L % </th>
														<th scope='col'>Gas fees</th>
														<th scope='col'>From</th>
														<th scope='col'>To</th>
														<th scope='col'>Date</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Sell</td>
														<td className='font-weight-600'>9642 ETH</td>
														<td className='text-success'>
															<i className='mdi mdi-arrow-up mr-2'></i>250 ETH
														</td>
														<td className='text-success'>20%</td>
														<td>$20</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>2/5/2020 06:24 PM</td>
													</tr>

													<tr>
														<td>Sell</td>
														<td className='font-weight-600'>9642 ETH</td>
														<td className='text-danger'>
															<i className='mdi mdi-arrow-down mr-2'></i>250 ETH
														</td>
														<td className='text-danger'>20%</td>
														<td>$20</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>2/5/2020 06:24 PM</td>
													</tr>
													<tr>
														<td>Sell</td>
														<td className='font-weight-600'>9642 ETH</td>
														<td className='text-success'>
															<i className='mdi mdi-arrow-up mr-2'></i>250 ETH
														</td>
														<td className='text-success'>20%</td>
														<td>$20</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>2/5/2020 06:24 PM</td>
													</tr>
													<tr>
														<td>Sell</td>
														<td className='font-weight-600'>9642 ETH</td>
														<td className='text-danger'>
															<i className='mdi mdi-arrow-down mr-2'></i>250 ETH
														</td>
														<td className='text-danger'>20%</td>
														<td>$20</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>2/5/2020 06:24 PM</td>
													</tr>
													<tr>
														<td>Sell</td>
														<td className='font-weight-600'>9642 ETH</td>
														<td className='text-danger'>
															<i className='mdi mdi-arrow-down mr-2'></i>250 ETH
														</td>
														<td className='text-danger'>20%</td>
														<td>$20</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>2/5/2020 06:24 PM</td>
													</tr>
													<tr>
														<td>Sell</td>
														<td className='font-weight-600'>9642 ETH</td>
														<td className='text-danger'>
															<i className='mdi mdi-arrow-down mr-2'></i>250 ETH
														</td>
														<td className='text-danger'>20%</td>
														<td>$20</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>2/5/2020 06:24 PM</td>
													</tr>
													<tr>
														<td>Sell</td>
														<td className='font-weight-600'>9642 ETH</td>
														<td className='text-danger'>
															<i className='mdi mdi-arrow-down mr-2'></i>250 ETH
														</td>
														<td className='text-danger'>20%</td>
														<td>$20</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>2/5/2020 06:24 PM</td>
													</tr>
													<tr>
														<td>Sell</td>
														<td className='font-weight-600'>9642 ETH</td>
														<td className='text-danger'>
															<i className='mdi mdi-arrow-down mr-2'></i>250 ETH
														</td>
														<td className='text-danger'>20%</td>
														<td>$20</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>2/5/2020 06:24 PM</td>
													</tr>
												</tbody>
											</table>
										</div>

										<nav>
											<ul className='pagination justify-content-end '>
												<li className='page-item'>
													<Link className='page-link' to='#' tabIndex='-1'>
														Previous
													</Link>
												</li>
												<li className='page-item active'>
													<Link className='page-link' to='#'>
														1
													</Link>
												</li>
												<li className='page-item'>
													<Link className='page-link' to='#'>
														2
													</Link>
												</li>
												<li className='page-item'>
													<Link className='page-link' to='#'>
														3
													</Link>
												</li>
												<li className='page-item'>
													<Link className='page-link' to='#'>
														Next
													</Link>
												</li>
											</ul>
										</nav>
									</div>
									<div
										className='tab-pane fade'
										id='Binance'
										role='tabpanel'
										aria-labelledby='Binance-tab'
									>
										<div className='table-responsive'>
											<table className='table table-hover font-15'>
												<thead>
													<tr>
														<th scope='col'>Events</th>
														<th scope='col'>Amount</th>
														<th scope='col'>P/L (ETH)</th>
														<th scope='col'>P/L % </th>
														<th scope='col'>Gas fees</th>
														<th scope='col'>From</th>
														<th scope='col'>To</th>
														<th scope='col'>Date</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Sell</td>
														<td className='font-weight-600'>9642 ETH</td>
														<td className='text-success'>
															<i className='mdi mdi-arrow-up mr-2'></i>250 ETH
														</td>
														<td className='text-success'>20%</td>
														<td>$20</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>2/5/2020 06:24 PM</td>
													</tr>
													<tr>
														<td>Sell</td>
														<td className='font-weight-600'>9642 ETH</td>
														<td className='text-danger'>
															<i className='mdi mdi-arrow-down mr-2'></i>250 ETH
														</td>
														<td className='text-danger'>20%</td>
														<td>$20</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>2/5/2020 06:24 PM</td>
													</tr>
													<tr>
														<td>Sell</td>
														<td className='font-weight-600'>9642 ETH</td>
														<td className='text-success'>
															<i className='mdi mdi-arrow-up mr-2'></i>250 ETH
														</td>
														<td className='text-success'>20%</td>
														<td>$20</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>2/5/2020 06:24 PM</td>
													</tr>
													<tr>
														<td>Sell</td>
														<td className='font-weight-600'>9642 ETH</td>
														<td className='text-danger'>
															<i className='mdi mdi-arrow-down mr-2'></i>250 ETH
														</td>
														<td className='text-danger'>20%</td>
														<td>$20</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>2/5/2020 06:24 PM</td>
													</tr>
													<tr>
														<td>Sell</td>
														<td className='font-weight-600'>9642 ETH</td>
														<td className='text-danger'>
															<i className='mdi mdi-arrow-down mr-2'></i>250 ETH
														</td>
														<td className='text-danger'>20%</td>
														<td>$20</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>2/5/2020 06:24 PM</td>
													</tr>
													<tr>
														<td>Sell</td>
														<td className='font-weight-600'>9642 ETH</td>
														<td className='text-danger'>
															<i className='mdi mdi-arrow-down mr-2'></i>250 ETH
														</td>
														<td className='text-danger'>20%</td>
														<td>$20</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>2/5/2020 06:24 PM</td>
													</tr>
													<tr>
														<td>Sell</td>
														<td className='font-weight-600'>9642 ETH</td>
														<td className='text-danger'>
															<i className='mdi mdi-arrow-down mr-2'></i>250 ETH
														</td>
														<td className='text-danger'>20%</td>
														<td>$20</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>2/5/2020 06:24 PM</td>
													</tr>
													<tr>
														<td>Sell</td>
														<td className='font-weight-600'>9642 ETH</td>
														<td className='text-danger'>
															<i className='mdi mdi-arrow-down mr-2'></i>250 ETH
														</td>
														<td className='text-danger'>20%</td>
														<td>$20</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>
															<div>
																<img
																	src='assets/images/avtar-1.png'
																	alt=''
																	className='thumb-sm rounded-circle mr-2'
																/>
																<span className=''>Thomas Cook</span>
															</div>
														</td>
														<td>2/5/2020 06:24 PM</td>
													</tr>
												</tbody>
											</table>
										</div>

										<nav>
											<ul className='pagination justify-content-end '>
												<li className='page-item'>
													<Link className='page-link' to='#' tabIndex='-1'>
														Previous
													</Link>
												</li>
												<li className='page-item active'>
													<Link className='page-link' to='#'>
														1
													</Link>
												</li>
												<li className='page-item'>
													<Link className='page-link' to='#'>
														2
													</Link>
												</li>
												<li className='page-item'>
													<Link className='page-link' to='#'>
														3
													</Link>
												</li>
												<li className='page-item'>
													<Link className='page-link' to='#'>
														Next
													</Link>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
			{/* </body> */}
		</>
	)
}

export default Transection
