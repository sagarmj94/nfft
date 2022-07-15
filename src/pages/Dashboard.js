/** @format */

import React, { useState } from "react"
import { Link } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"
import { useEffect } from "react"
import axios from "axios"
import Loading from "../components/loading/Loading"
import { useDispatch, useSelector } from "react-redux"
import { hexDataSlice } from "ethers/lib/utils"
import Transection from "./Transection"
import {
	walletConnectRequest,
	walletConnectRequestSuccess,
	walletConnectRequestError,
} from "../redux/actions/WalletActions.js"
import Web3 from "web3"
import { GetWalletDetails } from "../utils/GetWalletDetails"
import {
	getEvent,
	getFromValue,
	getPrice,
	getToProfile,
	getToValue,
} from "../utils/CommonFunctions"
import { getFromProfile } from "./../utils/CommonFunctions"
import TxnAction from "../redux/actions/TxnAction"
import NftAction from "../redux/actions/NftAction"
import CollectionAction from "../redux/actions/CollectionAction"

const { REACT_APP_COLLECTION_API } = process.env
const Dashboard = () => {
	const dispatch = useDispatch()
	const userData = useSelector((state) => state.walletReducer.userData)
	const [nftLoading, setNftLoading] = useState(false)
	const [nft, setNft] = useState([])
	const [nftError, setNftError] = useState(null)
	const [nftLength, setNftLength] = useState([])
	const [colData, setColData] = useState([])
	const [colDataEmpty, setColDataEmpty] = useState([])
	const [isError, setIsError] = useState(false)
	const [isCollLoading, setIsCollLoading] = useState(false)
	const wallletData = useSelector((state) => state.walletReducer.userData)
	const [txn, setTxn] = useState([])
	const [txnError, setTxnError] = useState("")
	const [txnLoading, setTxnLoading] = useState(false)
	const ethereum = window.ethereum
	const colectData = useSelector((state) => state.CollectionReducer.colData)
	const nftData = useSelector((state) => state.NftReducer.nftData)
	const txnData = useSelector((state) => state.TxnReducer.txnData)

	const getTopCollectionData = () => {
		setIsCollLoading(true)
		var config = {
			method: "get",
			url: `https://testnets-api.opensea.io/api/v1/collections?asset_owner=${
				userData?.address && userData?.address
			}`,
			// url: `https://testnets-api.opensea.io/api/v1/collections?asset_owner=0xC43B7EF54260F9115260e9d2a6132B8Ce73d703b&offset=0`,
			// url: `https://testnets-api.opensea.io/api/v1/collections?asset_owner=0x1E9bD86Cd0670EaEb831682962162873BAABcb96&offset=0`,
		}

		axios(config)
			.then(function (response) {
				setColData(response?.data)
				dispatch(CollectionAction.userLoadSucess(response?.data))
				setColDataEmpty(response?.data?.length)
				setIsCollLoading(false)
			})
			.catch(function (error) {
				setColData(colectData)
				setIsCollLoading(false)
				console.log("collection data display from redux")
				// setIsError(error.message)
				setIsError("Something went wrong try again !")
			})
	}

	//NFT api start
	const getNftData = () => {
		setNftLoading(true)
		var config = {
			method: "get",
			// url: `https://testnets-api.opensea.io/api/v1/collections?asset_owner=${wallletData?.address}`,
			url: `https://testnets-api.opensea.io/api/v1/assets?owner=${
				userData?.address && userData?.address
			}&order_direction=desc&offset=0&limit=200&include_orders=true`,
			// url: `https://testnets-api.opensea.io/api/v1/assets?owner=0xC43B7EF54260F9115260e9d2a6132B8Ce73d703b&order_direction=desc&offset=0&limit=200&include_orders=true`,

			// sir api
			// url: `https://testnets-api.opensea.io/api/v1/assets?owner=0x1E9bD86Cd0670EaEb831682962162873BAABcb96&order_direction=desc&offset=0&limit=50&include_orders=true`,
		}

		axios(config)
			.then(function (response) {
				setNft(response?.data?.assets)
				// dispatch(NftAction.nftLoadSucess(response?.data?.assets))
				dispatch(NftAction.nftLoadSucess(response?.data?.assets))
				setNftLength(response?.data?.assets?.length)
				setNftLoading(false)
			})
			.catch(function (error) {
				setNft(nftData)
				setNftLength(nftData?.length)
				setNftLoading(false)
				console.log("Nft data display from redux")
				// setNftError(error?.message)
				// setNftError("Something went wrong !")
			})
	}

	console.log("how to txn", txn)
	console.log("how to txnLoading", txnLoading)

	const getTransection = () => {
		setTxnLoading(true)
		var config = {
			method: "get",
			url: `https://testnets-api.opensea.io/v1/events?account_address=${userData?.address}&only_opensea=true&limit=199`,
			// url: `/api/v1/events?account_address=0xC43B7EF54260F9115260e9d2a6132B8Ce73d703b&only_opensea=true&limit=300`,
			// url: "https:testnets-api.opensea.io/api/v1/events?account_address=0xc9b01E19c8b6130CEF11598Ff83e00452E00e14E&only_opensea=false&limit=200",
		}

		axios(config)
			.then(function (response) {
				setTxn(response?.data?.asset_events)
				dispatch(TxnAction.txnLoadSucess(response?.data?.asset_events))
				setTxnLoading(false)
			})
			.catch(function (error) {
				setTxnLoading(true)
				setTxn(txnData)
				console.log("Txn data display from redux")
				setTxnLoading(false)
				// setTxnError(false)
			})
	}

	const getTxn = () => {
		setTxnLoading(true)
		var config = {
			method: "get",
			url: `https://testnets-api.opensea.io/api/v1/events?account_address=${userData?.address}&only_opensea=true&limit=200`,
			// url: "https:testnets-api.opensea.io/api/v1/events?account_address=0xc9b01E19c8b6130CEF11598Ff83e00452E00e14E&only_opensea=false&limit=200",
		}

		axios(config)
			.then(function (response) {
				setTxn(response?.data?.asset_events)
				dispatch(TxnAction.txnLoadSucess(response?.data?.asset_events))
				setTxnLoading(false)
			})
			.catch(function (error) {
				setTxnLoading(true)
				setTxn(txnData)
				setTxnLoading(false)
				console.log("Txn data display from redux")
				// setTxnError("Something went wrong")
			})
	}

	const getNftClick = () => {
		setNftLoading(true)
		var config = {
			method: "get",
			// url: `https://testnets-api.opensea.io/api/v1/collections?asset_owner=${wallletData?.address}`,
			url: `https://testnets-api.opensea.io/api/v1/assets?owner=${
				userData?.address && userData?.address
			}&order_direction=desc&offset=0&limit=200&include_orders=true`,

			// sir api
			// url: `https://testnets-api.opensea.io/api/v1/assets?owner=0x1E9bD86Cd0670EaEb831682962162873BAABcb96&order_direction=desc&offset=0&limit=50&include_orders=true`,
		}

		axios(config)
			.then(function (response) {
				setNft(response?.data?.assets)
				dispatch(NftAction.nftLoadSucess(response?.data?.assets))
				setNftLength(response?.data?.assets?.length)
				setNftLoading(false)
			})
			.catch(function (error) {
				setNft(nftData)
				setNftLength(nftData?.length)
				setNftLoading(false)
				console.log("Nft data display from redux")
				// setNftError(error?.message)
				// setNftError("Something went wrong !")
			})
	}

	const getCollectionClick = () => {
		setIsCollLoading(true)
		var config = {
			method: "get",
			url: `https://testnets-api.opensea.io/api/v1/collections?asset_owner=${
				userData?.address && userData?.address
			}&offset=0`,
			// url: `https://testnets-api.opensea.io/api/v1/collections?asset_owner=0x1E9bD86Cd0670EaEb831682962162873BAABcb96&offset=0`,
		}

		axios(config)
			.then(function (response) {
				setColData(response?.data)
				// dispatch(CollectionAction.userLoadSucess(response?.data))
				setColDataEmpty(response?.data?.length)
				setIsCollLoading(false)
			})
			.catch(function (error) {
				setColData(colectData)
				setIsCollLoading(false)
				console.log("collection data display from redux")
				// setIsError(error.message)
				// setIsError("Something went wrong !")
			})
	}

	useEffect(() => {
		// debugger
		setNftLoading(true)
		setTxnLoading(true)
		if (userData?.address) {
			localStorage.setItem("wallet-address", "true")
			setTimeout(() => {
				getNftData()
				setNftLoading(false)
			}, 4000)
			setTimeout(() => {
				getTransection()
				setTxnLoading(false)
			}, 4500)
			getTopCollectionData()
			// getTransection()
		} else localStorage.setItem("wallet-address", "false")
	}, [userData?.address])

	return (
		<>
			<Header />
			<Navbar />
			{/* Navbar End  */}
			<div className='content-page home-page'>
				<div className='content'>
					<div className='container-fluid'>
						<h2 className='page-title pl-3'>Dashboard</h2>
						<div className='row dashboard-top-boxes'>
							<div className='col-sm-6 col-xl-3 mt-4'>
								<div className='card card-blue'>
									<div className='card-heading'>
										<div className='mini-stat-icon'>
											<i className='mdi mdi-ethereum'></i>
										</div>
										<div>
											<h5 className='font-16'>Total Investment </h5>
											<h3 className=''>65,123 ETH</h3>
										</div>
									</div>
								</div>
							</div>

							<div className='col-sm-6 col-xl-3 mt-4'>
								<div className='card card-dark'>
									<div className='card-heading'>
										<div className='mini-stat-icon'>
											<i className='mdi mdi-ethereum'></i>
										</div>
										<div>
											<h5 className='font-16'>Current Value </h5>
											<h3 className=''>70,596 ETH</h3>
										</div>
									</div>
								</div>
							</div>

							<div className='col-sm-6 col-xl-3 mt-4'>
								<div className='card card-yellow'>
									<div className='card-heading'>
										<div className='mini-stat-icon'>
											<i className='mdi mdi-ethereum'></i>
										</div>
										<div>
											<h5 className='font-16'>Profit </h5>
											<h3 className=''>5,473 ETH</h3>
										</div>
									</div>
								</div>
							</div>

							<div className='col-sm-6 col-xl-3 mt-4'>
								<div className='card card-pink'>
									<div className='card-heading'>
										<div className='mini-stat-icon'>
											<i className='mdi mdi-ethereum'></i>
										</div>
										<div>
											<h5 className='font-16'>Total NFTs </h5>
											<h3 className=''>{nftLength && nftLength}</h3>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='row'>
							<div className='col-xl-8'>
								<div className='card card-normal mb-0 mt-4 mt-md-0 mb-4 mb-md-0'>
									<div className='card-body'>
										<h4 className='mt-0 header-title mb-4'>Investment </h4>
										{/* <HighChartDash /> */}
										<img
											alt=''
											src='assets/images/demo_4074_none-1.png'
											className='img-fluid'
										/>
									</div>
								</div>
							</div>

							<div className='col-xl-4 '>
								<div className='card wallet-balance text-white text-center h-100'>
									<div className='card-body'>
										<h4>Wallet Balance</h4>
										<i className='mdi mdi-ethereum'></i>
										{/* <h3>3,101.21</h3> */}
										<h3>
											{wallletData?.address && wallletData?.balance
												? parseFloat(wallletData?.balance).toFixed(4)
												: 0}
										</h3>
									</div>
								</div>
							</div>
						</div>

						<div className='row mt-4'>
							<div className='col-xl-12'>
								<div className='card m-b-30 card-normal'>
									<div className='card-body'>
										{colData?.length > 0 ? (
											<p className='text-center mt-5 mb-5 pb-3'>
												<Link
													to='collections'
													className='btn btn-theme btn-theme-light font-weight-600 float-right'
												>
													View All
												</Link>
											</p>
										) : (
											""
										)}

										<h4 className='mt-0 header-title mb-4'>Collections</h4>
										<div className='table-responsive'>
											<table className='table table-hover font-15'>
												<thead>
													<tr>
														<th scope='col'>Events</th>
														<th scope='col'>Volume</th>
														<th scope='col'>24h %</th>
														<th scope='col'>7d %</th>
														<th scope='col'>Floor Price</th>
														<th scope='col'>Items</th>
													</tr>
												</thead>
												<tbody>
													{/* {colDataEmpty && colDataEmpty === 0 && (
														<p style={{ color: "red" }}>
															{colDataEmpty === 0 ? "Collection Not Found" : ""}
														</p>
													)} */}

													{isCollLoading ? (
														<tr>
															<td colSpan={6}>
																<div className='common-loader'>
																	<Loading
																		type='spin'
																		color='#ffab2d'
																		height={100}
																		width={100}
																	/>
																</div>
															</td>
														</tr>
													) : colData?.length <= 0 &&
													  colectData?.length <= 0 &&
													  isCollLoading === false ? (
														<tr>
															<td colSpan={7}>
																<h5
																	class='text-center mt-3 mb-0'
																	style={{ color: "rgb(201, 89, 89)" }}
																>
																	Sorry! No response was received from OpenSea!
																</h5>
															</td>
														</tr>
													) : isError ? (
														<p style={{ color: "red" }}>{isError}</p>
													) : (
														Array.isArray(colData) &&
														colData
															?.sort(
																(a, b) =>
																	parseFloat(b.stats.total_volume) -
																	parseFloat(a.stats.total_volume)
															)
															?.slice(0, 5)
															?.map((item, id) => {
																return (
																	<tr key={id}>
																		<td>
																			<div>
																				<img
																					alt=''
																					src={item?.image_url}
																					className='thumb-md rounded-circle mr-2'
																				/>
																				<span className='font-17 font-weight-bold'>
																					{item?.name}
																				</span>
																			</div>
																		</td>
																		<td>
																			<img
																				alt=''
																				src='assets/images/etherium-list-ic.png'
																				className='mr-1'
																			/>
																			<strong>
																				{parseFloat(
																					item?.stats?.total_volume
																				).toFixed(4)}
																			</strong>
																		</td>
																		<td>
																			<span>
																				{item?.stats?.one_day_change * 100 >= 0
																					? "+"
																					: ""}
																				{parseFloat(
																					item?.stats?.one_day_change * 100
																				).toFixed(2)}
																				%
																			</span>
																		</td>
																		<td>
																			{item?.stats?.seven_day_change * 100 >= 0
																				? "+"
																				: ""}
																			<span>
																				{parseFloat(
																					item?.stats?.seven_day_change * 100
																				).toFixed(4)}{" "}
																				%
																			</span>
																		</td>
																		<td>
																			<img
																				alt=''
																				src='assets/images/etherium-list-ic.png'
																				className='mr-1'
																			/>
																			<strong>
																				{parseFloat(
																					item?.stats?.floor_price
																				).toFixed(4)}
																			</strong>
																		</td>
																		<td>
																			{parseFloat(item?.owned_asset_count)}
																		</td>
																	</tr>
																)
															})
													)}
													{colData?.length <= 0 &&
													colectData?.length <= 0 &&
													isCollLoading === false ? (
														<tr>
															<td colSpan={7} style={{ border: "none" }}>
																<p
																	className='text-center mt-3 mb-0'
																	style={{ color: "rgb(201, 89, 89)" }}
																>
																	<button
																		// to='portfolio'
																		onClick={getCollectionClick}
																		className='btn btn-theme font-weight-600 px-4 py-2 font-16'
																	>
																		Try Again
																	</button>
																</p>
															</td>
														</tr>
													) : (
														""
													)}
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>

						<section>
							<h2 className='header-title'>Most Valuable NFTs</h2>
							<div className='row'>
								{nftLoading ? (
									<div className='common-loader'>
										<Loading
											type='spin'
											color='#ffab2d'
											height={30}
											width={30}
										/>
									</div>
								) : nft?.length <= 0 &&
								  nftData?.length <= 0 &&
								  nftLoading === false ? (
									<div className='col-md-12'>
										<h5
											className='text-center mt-3 mb-0 danger'
											style={{ color: "rgb(201, 89, 89)" }}
										>
											Sorry! No response was received from OpenSea!
										</h5>
									</div>
								) : nftError ? (
									<p style={{ color: "red" }}>{nftError}</p>
								) : (
									Array.isArray(nft) &&
									nft
										?.sort(
											(a, b) =>
												parseInt(
													b?.sell_orders && b?.sell_orders
														? b?.sell_orders[0]?.base_price
														: 0
												) /
													1e18 -
												parseInt(
													a?.sell_orders && a?.sell_orders
														? a?.sell_orders[0]?.base_price
														: 0
												) /
													1e18
										)
										?.slice(0, 6)
										?.map((topNft, id) => {
											return (
												<div key={id} className='col-md-4'>
													<div className='nft-list-tem'>
														<div className='nft-image'>
															<img
																alt=''
																src={topNft?.image_url}
																className='img-fluid w-100'
															/>
														</div>
														<div className='nft-list-detail mt-4'>
															<div className='nft-left'>
																<h4 className='font-19 font-weight-600 text-black mb-1'>
																	{topNft?.name}
																</h4>
																<p className='font-16 mb-0 text-light-grey'>
																	{topNft?.collection?.name}
																</p>
															</div>
															<div className='nft-right'>
																<p className='font-16 mb-1 text-light-grey'>
																	{topNft?.sell_orders &&
																	Array?.isArray(topNft?.sell_orders) &&
																	topNft?.sell_orders[0]?.base_price
																		? "Price"
																		: ""}
																</p>
																<h4 className='font-20 font-weight-700 text-black d-flex align-items-center my-0 '>
																	<img
																		alt=''
																		width='15'
																		src={
																			topNft?.sell_orders &&
																			Array?.isArray(topNft?.sell_orders) &&
																			topNft?.sell_orders[0]?.base_price
																				? topNft?.sell_orders[0]
																						?.payment_token_contract?.image_url
																				: ""
																		}
																		className='mr-2'
																	/>

																	{topNft?.sell_orders &&
																	Array?.isArray(topNft?.sell_orders) &&
																	topNft?.sell_orders[0]?.base_price
																		? parseFloat(
																				topNft?.sell_orders[0]?.base_price
																		  ) / 1e18
																		: ""}
																</h4>
															</div>
														</div>
													</div>
												</div>
											)
										})
								)}
							</div>
							{nft?.length <= 0 &&
							nftData?.length <= 0 &&
							nftLoading === false ? (
								<p className='text-center mt-5 mb-5 pb-3'>
									<button
										// to='portfolio'
										onClick={getNftClick}
										className='btn btn-theme font-weight-600 px-4 py-2 font-16'
									>
										Try Again
									</button>
								</p>
							) : (
								""
							)}

							{nftData?.length > 0 ? (
								<p className='text-center mt-5 mb-5 pb-3'>
									<Link
										to='portfolio'
										className='btn btn-theme font-weight-600 px-4 py-2 font-16'
									>
										View All
									</Link>
								</p>
							) : (
								""
							)}
						</section>

						<div className='row'>
							<div className='col-xl-12'>
								<div className='card m-b-30 card-normal'>
									<div className='card-body'>
										{txnData?.length > 0 ? (
											<Link
												to='transactions'
												className='btn btn-theme btn-theme-light font-weight-600 float-right'
											>
												View All
											</Link>
										) : (
											""
										)}

										<h4 className='mt-0 header-title mb-4'>
											Latest Transactions
										</h4>
										<div className='table-responsive'>
											<table className='table table-hover font-15'>
												<thead>
													<tr>
														<th scope='col'>Events</th>
														<th scope='col'>Amount</th>
														<th scope='col'>P/L (ETH)</th>
														<th scope='col'>P/L % </th>
														<th scope='col'>From</th>
														<th scope='col'>To</th>
														<th scope='col'>Date</th>
													</tr>
												</thead>
												<tbody>
													{txn?.length <= 0 &&
													!txnData &&
													txnLoading === false ? (
														// {txn?.length <= 0 ? (
														<tr>
															<td colSpan={7}>
																<h5
																	className='text-center mt-3 mb-0'
																	style={{ color: "#c95959" }}
																>
																	Sorry! No response was received from OpenSea!
																</h5>
															</td>
														</tr>
													) : txnLoading ? (
														<tr>
															<td colSpan={7}>
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
														Array.isArray(txn) &&
														txn?.slice(0, 4)?.map((topTxn, id) => {
															return (
																<tr key={id}>
																	{/* <td>Sell</td> */}
																	<td>
																		{getEvent(topTxn, wallletData?.address)}
																	</td>
																	<td className='font-weight-600'>
																		{`${getPrice(
																			topTxn,
																			wallletData?.address
																		)} ${
																			topTxn?.payment_token?.symbol
																				? topTxn?.payment_token?.symbol
																				: ""
																		}`}
																	</td>
																	<td className='text-success'>
																		<i className='mdi mdi-arrow-up mr-2'></i>
																		250 ETH
																	</td>
																	<td className='text-success'>20%</td>
																	<td>
																		<div>
																			<img
																				alt=''
																				src={getFromProfile(
																					topTxn,
																					wallletData?.address
																				)}
																				className='thumb-sm rounded-circle mr-2'
																			/>
																			{/* <span className=''>Thomas Cook</span> */}
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
																				alt=''
																				// src='assets/images/avtar-1.png'
																				src={getToProfile(
																					topTxn,
																					wallletData?.address
																				)}
																				className='thumb-sm rounded-circle mr-2'
																			/>
																			{/* <span className=''>Thomas Cook</span> */}
																			<span className=''>
																				{getToValue(
																					topTxn,
																					wallletData?.address
																				)}
																			</span>
																		</div>
																	</td>
																	{/* <td>2/5/2020 06:24 PM</td> */}
																	<td>
																		{new Date(
																			topTxn?.created_date
																		).toLocaleString("en-US")}
																	</td>
																</tr>
															)
														})
													)}
													{/* {txn?.length <= 0 &&
													txnData.length <= 0 &&
													txnLoading === false ? ( */}
													{txn?.length <= 0 && nftLoading === false ? (
														<tr>
															<td colSpan={7} style={{ border: "none" }}>
																<p className='text-center mb-3'>
																	<button
																		// to='portfolio'
																		onClick={getTxn}
																		className='btn btn-theme font-weight-600 px-4 py-2 font-16'
																	>
																		Try Again
																	</button>
																</p>
															</td>
														</tr>
													) : (
														""
													)}
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* </div> */}

			{/* footer start  */}
			<Footer />

			{/* footer End */}
			{/* </body> */}
		</>
	)
}

export default Dashboard
