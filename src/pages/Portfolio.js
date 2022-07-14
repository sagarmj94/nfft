/** @format */

import React, { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"
import axios from "axios"
import Loading from "../components/loading/Loading"
import { useDispatch, useSelector } from "react-redux"
import Pagination from "../Pagination"
import NftAction from "../redux/actions/NftAction"

const { REACT_APP_COLLECTION_API } = process.env
let PageSize = 12
const Portfolio = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [portFolio, setPortfolio] = useState([])
	const [portFolioLength, setPortfolioLength] = useState([])
	const wallletData = useSelector((state) => state.walletReducer.userData)
	const dispatch = useDispatch()
	const nftData = useSelector((state) => state.NftReducer.nftData)

	const getProtfolio = () => {
		setLoading(true)
		var config = {
			method: "get",
			// url: `https://testnets-api.opensea.io/api/v1/assets?owner=0xc9b01E19c8b6130CEF11598Ff83e00452E00e14E&order_direction=desc&offset=0&include_orders=false`,
			url: `https://testnets-api.opensea.io/api/v1/assets?owner=${wallletData?.address}&order_direction=desc&offset=0&limit=200&include_orders=true`,
			// api of sir wallet
			// url: `https://testnets-api.opensea.io/api/v1/assets?owner=0x1E9bD86Cd0670EaEb831682962162873BAABcb96&order_direction=desc&offset=0&limit=50&include_orders=true`,
		}

		axios(config)
			.then(function (response) {
				setPortfolio(response?.data?.assets)
				dispatch(NftAction.nftLoadSucess(response?.data?.assets))
				setLoading(false)
				setPortfolioLength(response?.data?.assets?.length)
			})
			.catch(function (error) {
				setPortfolio(nftData)
				setLoading(false)
				console.log("yes portfolio nft showing fron redux")
				// setError(error.message)
			})
	}

	useEffect(() => {
		getProtfolio()
	}, [])

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize
		const lastPageIndex = firstPageIndex + PageSize
		return (
			Array.isArray(portFolio) &&
			portFolio?.slice(firstPageIndex, lastPageIndex)
		)
	}, [currentPage, portFolio])



	return (
		<>
			<Header />
			<Navbar />
			<div className='content-page nft-page '>
				alt="
				<div className='content pt-4'>
					<div className='container-fluid'>
						<h2 className='page-title pl-3'>NFTs</h2>
						<div className='card m-b-30 m-t-30 mt-md-0 card-normal'>
							<div className='card-body'>
								<h4 className='mt-0 header-title mb-4'>Most Valuable NFTs</h4>
								<div className='row nft-listing'>
									{loading ? (
										<div className='common-loader'>
											<Loading
												type='spin'
												color='#ffab2d'
												height={30}
												width={30}
											/>
										</div>
									) : error ? (
										<p style={{ color: "red" }}>
											{portFolioLength === 0 ? "NFT not found" : ""}
										</p>
									) : (
										Array.isArray(currentTableData) &&
										currentTableData?.map((item, id) => {
											return (
												<div key={id} className='col-md-4'>
													<div className='nft-list-tem'>
														<div className='nft-image'>
															<img
																// src='assets/images/nft-list-img-1.png'
																src={item?.image_url}
																className='img-fluid w-100'
																alt=''
															/>
														</div>
														<div className='nft-list-detail mt-4'>
															<div className='nft-left'>
																<h4 className='font-19 font-weight-600 text-black mb-1'>
																	{item?.name}
																</h4>
																<p className='font-16 mb-0 text-light-grey'>
																	{item?.collection?.name}
																</p>
															</div>
															<div className='nft-right'>
																<p className='font-16 mb-1 text-light-grey'>
																	{
																		item?.asset?.collection
																			?.opensea_seller_fee_basis_points
																	}
																</p>
																<p className='font-16 mb-1 text-light-grey'>
																	{Array.isArray(item?.sell_orders) &&
																	item?.sell_orders[0]?.base_price
																		? "Price"
																		: ""}
																</p>
																<h4 className='font-20 font-weight-700 text-black d-flex align-items-center my-0 '>
																	<img
																		// src='assets/images/etherium-list-ic-1.png'
																		src={
																			Array.isArray(item?.sell_orders) &&
																			item?.sell_orders[0]?.base_price
																				? item?.sell_orders[0]
																						?.payment_token_contract?.image_url
																				: ""
																		}
																		className='mr-2 '
																		alt=''
																	/>
																	{item?.sell_orders &&
																		Array.isArray(item?.sell_orders) &&
																		parseFloat(
																			item?.sell_orders[0]?.base_price
																		) / 1e18}
																</h4>
															</div>
														</div>
													</div>
												</div>
											)
										})
									)}
								</div>
								<Pagination
									className='pagination-bar'
									currentPage={currentPage}
									totalCount={Array.isArray(portFolio) ? portFolio?.length : 0}
									pageSize={PageSize}
									onPageChange={(page) => setCurrentPage(page)}
									portFolio={portFolio}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Portfolio