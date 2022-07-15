/** @format */

import React, { useState, useMemo } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"
import axios from "axios"
import { useEffect } from "react"
import {
	getGasFee,
	getPlName,
	getPrice,
	getPriceDoller,
	getProfitTracker,
	GetUSDExchangeRate,
} from "./../utils/CommonFunctions"
import GetGas from "../components/GetGas"
import ProfitModal from "../components/ProfitModal"
import Loading from "../components/loading/Loading"
import Pagination from "../Pagination"

let PageSize = 5
const ProfitTracker = () => {

	const [profitData, setProfitData] = useState([])
	const userData = useSelector((state) => state.walletReducer.userData)
	const txnData = useSelector((state) => state.TxnReducer.txnData)
	const [modalDetail, setModalDetail] = useState([])
	const [gasVal, setGasVal] = useState(0)
	const [pLoading, setPloading] = useState(false)
	const [loading, setLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)

	const getProfitData = () => {
		console.log("userData?.address", userData?.address)
		setPloading(true)
		var config = {
			method: "get",
			// url: `https://testnets-api.opensea.io/api/v1/events?account_address=0xc9b01E19c8b6130CEF11598Ff83e00452E00e14E&only_opensea=true&offset=0&limit=${currentPage}`,
			url: `https://testnets-api.opensea.io/api/v1/events?account_address=${userData?.address}&only_opensea=false&limit=300`,
		}

		axios(config)
			.then(function (response) {
				// console.log("profit tracker", response?.data?.asset_events)
				setProfitData(response?.data?.asset_events)
				setPloading(false)
			})
			.catch(function (error) {
				setProfitData(txnData)
				setPloading(false)
				console.log("profit api error", error)
			})
	}

	useEffect(() => {
		getProfitData()
	}, [userData?.address])

	const getModalData = async (item) => {
		let hash = item?.transaction?.transaction_hash

		if (hash && hash !== undefined && hash !== "" && hash !== null) {
			let data = await getGasFee(hash).then((res, err) => {
				if (res) return res
				else return "==="
			})
			// console.log(data, "adsadsfsdfsdfsd")
			if (data && data.effectiveGasPrice && data.gasUsed) {
				let gasValue = data.effectiveGasPrice * data.gasUsed

				// setGasVal(window.web3.utils.fromWei(gasValue?.toString(), "ether"))
				let usdValue = await GetUSDExchangeRate(hash).then((res, err) => {
					if (res) return res
					else return "==="
				})
				let USD =
					parseFloat(usdValue) *
					parseFloat(window.web3.utils.fromWei(gasValue?.toString(), "ether"))
				setGasVal(USD.toFixed(2))
			} else {
				setGasVal(false)
			}
		} else {
			setGasVal(false)
		}
		setModalDetail(item)
	}

	const getProfitTracker = (item, index, address) => {
		if (
			item?.event_type === "successful" &&
			item?.winner_account?.address === userData?.address
		) {
			return (
				<tr key={index}>
					<td>
						<div className='media align-items-center'>
							{/* {console.log("image ", item?.asset?.image_thumbnail_url)} */}
							<img
								className='mr-2 rounded'
								width='70px'
								alt=""
								// src='assets/images/nft-list-img-2.png'
								src={item?.asset?.image_thumbnail_url}
							/>
							<div className='media-body'>
								<h5 className='mt-0 mb-1 font-16 mb-0'>
									{getPlName(item)} {`${"  "}`}
									<span className='badge badge-danger'>Sold</span>
								</h5>
								<a
									onClick={() => getModalData(item)}
									href='#'
									className='btn btn-link p-0'
									data-toggle='modal'
									data-target='#selldetail'
								>
									View Detail
								</a>
							</div>
						</div>
					</td>
					<td>{new Date(item?.created_date).toLocaleString("en-US")}</td>
					<td> ETH{getPrice(item)}</td>

					{
						<GetGas
							hash={
								item?.transaction?.transaction_hash
									? item?.transaction?.transaction_hash
									: ""
							}
						/>
					}

					<td>{`${item?.payment_token?.symbol && item?.payment_token?.symbol
						} ${getPrice(item)}`}</td>
				</tr>
			)
		} else if (
			item?.event_type === "successful" &&
			item?.winner_account?.address !== userData?.address
		) {
			return (
				<tr key={index}>
					<td className=''>
						<div className='media align-items-center'>
							<img
								className='mr-2 rounded'
								width='70px'
								alt=""
								// src='assets/images/nft-list-img-1.png'
								src={item?.asset?.image_thumbnail_url}
							/>
							<div className='media-body'>
								<h5 className='mt-0 mb-1 font-16 mb-0'>
									{getPlName(item)} {`${"  "}`}
									<span className='badge badge-success'>Holding</span>
								</h5>
							</div>
						</div>
					</td>
					<td>{new Date(item?.created_date).toLocaleString("en-US")}</td>
					<td>{`${item?.payment_token?.symbol && item?.payment_token?.symbol
						} ${getPrice(item)}`}</td>

					{
						<GetGas
							hash={
								item?.transaction?.transaction_hash
									? item?.transaction?.transaction_hash
									: ""
							}
						/>
					}

					<td>{`${item?.payment_token?.symbol && item?.payment_token?.symbol
						} ${getPrice(item)}`}</td>
				</tr>
			)
		} else if (item?.event_type !== "transfer") {
			return (
				<tr key={index}>
					<td className=''>
						<div className='media align-items-center'>
							<img
								className='mr-2 rounded'
								width='70px'
								alt=""
								// src='assets/images/nft-list-img-1.png'
								src={item?.asset?.image_thumbnail_url}
							/>
							<div className='media-body'>
								<h5 className='mt-0 mb-1 font-16 mb-0'>
									{getPlName(item)} {`${"  "}`}
									<span className='badge badge-success'>Holding</span>
								</h5>
							</div>
						</div>
					</td>
					<td>{new Date(item?.created_date).toLocaleString("en-US")}</td>
					<td>
						{" "}
						{`${item?.payment_token?.symbol && item?.payment_token?.symbol
							} ${getPrice(item)}`}
					</td>

					{
						<GetGas
							hash={
								item?.transaction?.transaction_hash
									? item?.transaction?.transaction_hash
									: ""
							}
						/>
					}

					<td>
						{`${item?.payment_token?.symbol && item?.payment_token?.symbol}
						${getPrice(item)}`}
					</td>
				</tr>
			)
		}
	}

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize
		const lastPageIndex = firstPageIndex + PageSize

		return (
			Array.isArray(profitData) &&
			profitData?.slice(firstPageIndex, lastPageIndex)
		)
	}, [currentPage, profitData])

	return (
		<>
			<Header />
			<Navbar />
			<div id='wrapper'>
				<div className='content-page nft-page'>
					<div className='content pt-4'>
						<div className='container-fluid'>
							<h2 className='page-title pl-3'>Profit Tracker</h2>
							<div className='card m-b-30 m-t-30 mt-md-0 card-normal'>
								<div className='card-body'>
									{/* <!-- <h4 className="mt-0 header-title mb-4">My NFT</h4> --> */}
									<span className='float-right'>
										<select className='form-control form-control-lg w-auto form-select'>
											<option>Holding</option>
											<option>Sold</option>
										</select>
									</span>
									<div className='clearfix clear'></div>

									<div className='table-responsive mt-3'>
										<table className='table table-hover font-15'>
											<thead>
												<tr>
													<th scope='col'>NFT</th>
													<th scope='col'>Date</th>
													<th scope='col'>Price </th>
													<th scope='col'>Gas fees</th>
													<th scope='col'>Current Value</th>
												</tr>
											</thead>
											<tbody>
												{pLoading ? (
													<tr>
														<td colSpan={5}>
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
												) : (
													Array.isArray(currentTableData) &&
													currentTableData?.map((topTxn, index) => {
														return (
															<>
																{getProfitTracker(
																	topTxn,
																	index,
																	userData?.address
																)}
															</>
														)
													})
												)}
											</tbody>
										</table>
									</div>

									<Pagination
										className='pagination-bar'
										currentPage={currentPage}
										totalCount={
											Array.isArray(profitData) ? profitData?.length : 0
										}
										pageSize={PageSize}
										onPageChange={(page) => setCurrentPage(page)}
										portFolio={profitData}
									/>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<ProfitModal modalDetail={modalDetail} gasVal={gasVal} />
			<Footer />
		</>
	)
}

export default ProfitTracker
