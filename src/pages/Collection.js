/** @format */

import React, { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"
import { useEffect } from "react"
import axios from "axios"
import Pagination from "../Pagination"
import { useSelector } from "react-redux"
import Loading from "../components/loading/Loading"
import CollectionReducer from "./../redux/reducers/CollectionReducer"
const { REACT_APP_COLLECTION_API } = process.env
const { REACT_APP_COLLECTION_TEST_API } = process.env

let PageSize = 8
const Collection = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const [data, setData] = useState([])
	const [dataEmpty, setDataEmpty] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const wallletData = useSelector((state) => state.walletReducer.userData)
	const colectData = useSelector((state) => state.CollectionReducer.colData)

	console.log("data", Array.isArray(data))
	const getData = () => {
		setLoading(true)
		var config = {
			method: "get",
			url: `https://testnets-api.opensea.io/api/v1/collections?asset_owner=${wallletData?.address}&offset=0&limit=300`,
			// url: `https://testnets-api.opensea.io/api/v1/collections?asset_owner=${wallletData?.address}&offset=0`,
			// sir api
			// url: `https://testnets-api.opensea.io/api/v1/collections?asset_owner=0x1E9bD86Cd0670EaEb831682962162873BAABcb96&offset=0&limit=300`,
		}

		axios(config)
			.then(function (response) {
				setData(response?.data)
				setDataEmpty(response?.data.length)
				setLoading(false)
			})
			.catch(function (error) {
				setData(colectData)
				// setError(error.message)
				console.log("yes data showing from here", error)
				setLoading(false)
			})
	}
	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			getData()
			setLoading(false)
		}, 800)
	}, [])


	const currentTableData = useMemo(() => {

		const firstPageIndex = (currentPage - 1) * PageSize
		const lastPageIndex = firstPageIndex + PageSize
		return data?.slice(firstPageIndex, lastPageIndex)
	}, [currentPage, data])

	return (
		<>
			<Header />
			<Navbar />
			<div className='content-page home-page'>
				<div className='content pt-4'>
					<div className='container-fluid'>
						<h2 className='page-title pl-3'>Collections</h2>
						<div className='card m-b-30 m-t-30 mt-md-0 card-normal'>
							<div className='card-body'>
								<h4 className='mt-0 header-title mb-4'>Collections</h4>
								<div className='table-responsive'>
									<table className='table table-hover font-15'>
										<thead>
											<tr>
												<th scope='col'>Events</th>
												<th scope='col'>Volume</th>
												<th scope='col'>24h %</th>
												<th scope='col'>7d %</th>
												<th scope='col'>30d %</th>
												<th scope='col'>Floor Price</th>
												<th scope='col'>Items</th>
												<th scope='col'></th>
											</tr>
										</thead>

										<tbody>
											{dataEmpty && dataEmpty === 0 && (
												<span style={{ color: "red" }}>
													{dataEmpty === 0 ? "Collection Not Found" : ""}
												</span>
											)}
											{loading ? (
												<tr>
													<td colSpan='8'>
														<div
															className='common-loader my-5'
															// style={{ backgroundColor: "red" }}
														>
															<Loading
																type='spin'
																color='#ffab2d'
																height={30}
																width={30}
															/>
														</div>
													</td>
												</tr>
											) : error ? (
												<p style={{ color: "red" }}>{error}</p>
											) : (
												Array.isArray(currentTableData) &&
												currentTableData?.map((item, index) => {
													return (
														<tr key={index}>
															<td>
																<div>
																	<img
																		alt=''
																		// src='assets/images/list-avtar-1.png'
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
																{/* <strong>88,799.34</strong> */}
																<strong>
																	{parseFloat(
																		item?.stats?.total_volume
																	).toFixed(2)}
																</strong>
															</td>
															<td>
																{/* <span className='text-success'> +94.09%</span> */}
																<span
																	className={
																		item?.stats?.one_day_change < 0
																			? "text-danger"
																			: "text-success"
																	}
																>
																	{item?.stats?.one_day_change >= 0 ? "+" : ""}
																	{parseFloat(
																		item?.stats?.one_day_change * 100
																	).toFixed(2)}
																	%
																</span>
															</td>
															<td>
																<span
																	className={
																		item?.stats?.seven_day_change >= 0
																			? "text-success"
																			: "text-danger"
																	}
																>
																	{item?.stats?.seven_day_change >= 0
																		? "+"
																		: ""}
																	{parseFloat(
																		item?.stats?.seven_day_change * 100
																	).toFixed(2)}
																	%
																</span>
															</td>
															<td>
																<span
																	className={
																		item?.stats?.thirty_day_change >= 0
																			? "text-success"
																			: "text-danger"
																	}
																>
																	{item?.stats?.thirty_day_change >= 0
																		? "+"
																		: ""}
																	{parseFloat(
																		item?.stats?.thirty_day_change * 100
																	).toFixed(2)}
																	%
																</span>
															</td>
															<td>
																<img
																	alt=''
																	src='assets/images/etherium-list-ic.png'
																	className='mr-1'
																/>
																{/* <strong>88,799.34</strong> */}
																<strong>
																	{parseFloat(item?.stats?.floor_price).toFixed(
																		2
																	)}
																	{/* 50 */}
																</strong>
															</td>
															{/* <td>50</td> */}
															<td>{item?.owned_asset_count}</td>
															<td>
																<Link
																	to='https://discord.com/invite/opensea'
																	target='_blank'
																>
																	<img
																		alt=''
																		src='assets/discord-opensea-ic.png'
																		width='26'
																		data-toggle='tooltip'
																		data-placement='right'
																		title='Discord'
																	/>
																</Link>
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
									totalCount={data?.length}
									pageSize={PageSize}
									portFolio={data}
									onPageChange={(page) => setCurrentPage(page)}
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

export default Collection
