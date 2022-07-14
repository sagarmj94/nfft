/** @format */

import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"

const MyWallet = () => {
	return (
		<>
			{/* <body className='dark'> */}
			{/* <div id='wrapper'> */}

			<Header />
			<p style={{ color: "white" }}>hhiii</p>
			{/* </div> */}
			<Navbar />

			<div className='content-page home-page'>
				<div className='content pt-4'>
					<div className='container-fluid'>
						<h2 className='page-title pl-3'>My Wallet</h2>
						<div className='card m-b-30 m-t-30 mt-md-0 card-normal'>
							<div className='card-body mywallet-tab'>
								<Link
									to='connect-wallet'
									className='btn btn-danger radius-100  font-weight-600 float-right waves-effect wave-light d-flex align-items-center'
								>
									<i className='mdi mdi-rotate-3d mr-2 font-18'></i>Change
									Wallet
								</Link>
								<h4 className='mt-0 header-title mb-4'>My Wallet</h4>

								<ul
									className='nav nav-tabs nav-justified pt-4'
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
														<th scope='col'>Coin</th>
														<th scope='col'>Quantity</th>
														<th scope='col'>Coins Value</th>
														<th scope='col'>1d </th>
														<th scope='col'>Overall P/L</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<div>
																<img
																	src='assets/images/bitcoin-ic.png'
																	alt=''
																	className='thumb-md rounded-circle mr-2'
																/>
																<span className=''>Bitcoin</span>
															</div>
														</td>
														<td className='font-weight-600'>0.009 BTC</td>
														<td>$25600</td>
														<td>---</td>
														<td>
															<span className='text-success'>
																<i className='mdi mdi-arrow-up mr-2'></i>$20
															</span>
														</td>
													</tr>
													<tr>
														<td>
															<div>
																<img
																	src='assets/images/ethereum-ic.png'
																	alt=''
																	className='thumb-md rounded-circle mr-2'
																/>
																<span className=''>Ethereum</span>
															</div>
														</td>
														<td className='font-weight-600'>0.009 ETH</td>
														<td>$25600</td>
														<td>---</td>
														<td>
															<span className='text-success'>
																<i className='mdi mdi-arrow-up mr-2'></i>$20
															</span>
														</td>
													</tr>
													<tr>
														<td>
															<div>
																<img
																	src='assets/images/tether-ic.png'
																	alt=''
																	className='thumb-md rounded-circle mr-2'
																/>
																<span className=''>Tether</span>
															</div>
														</td>
														<td className='font-weight-600'>0.009 USDT</td>
														<td>$25600</td>
														<td>---</td>
														<td>
															<span className='text-success'>
																<i className='mdi mdi-arrow-up mr-2'></i>$20
															</span>
														</td>
													</tr>
													<tr>
														<td>
															<div>
																<img
																	src='assets/images/bnb-ic.png'
																	alt=''
																	className='thumb-md rounded-circle mr-2'
																/>
																<span className=''>BNB</span>
															</div>
														</td>
														<td className='font-weight-600'>0.009 BNB</td>
														<td>$25600</td>
														<td>---</td>
														<td>
															<span className='text-success'>
																<i className='mdi mdi-arrow-up mr-2'></i>$20
															</span>
														</td>
													</tr>
													<tr>
														<td>
															<div>
																<img
																	src='assets/images/usd-coin-ic.png'
																	alt=''
																	className='thumb-md rounded-circle mr-2'
																/>
																<span className=''>USD Coin</span>
															</div>
														</td>
														<td className='font-weight-600'>0.009 USDC</td>
														<td>$25600</td>
														<td>---</td>
														<td>
															<span className='text-success'>
																<i className='mdi mdi-arrow-up mr-2'></i>$20
															</span>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
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
														<th scope='col'>Coin</th>
														<th scope='col'>Quantity</th>
														<th scope='col'>Coins Value</th>
														<th scope='col'>1d </th>
														<th scope='col'>Overall P/L</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<div>
																<img
																	src='assets/images/bitcoin-ic.png'
																	alt=''
																	className='thumb-md rounded-circle mr-2'
																/>
																<span className=''>Bitcoin</span>
															</div>
														</td>
														<td className='font-weight-600'>0.009 BTC</td>
														<td>$25600</td>
														<td>---</td>
														<td>
															<span className='text-success'>
																<i className='mdi mdi-arrow-up mr-2'></i>$20
															</span>
														</td>
													</tr>
													<tr>
														<td>
															<div>
																<img
																	src='assets/images/ethereum-ic.png'
																	alt=''
																	className='thumb-md rounded-circle mr-2'
																/>
																<span className=''>Ethereum</span>
															</div>
														</td>
														<td className='font-weight-600'>0.009 ETH</td>
														<td>$25600</td>
														<td>---</td>
														<td>
															<span className='text-success'>
																<i className='mdi mdi-arrow-up mr-2'></i>$20
															</span>
														</td>
													</tr>
													<tr>
														<td>
															<div>
																<img
																	src='assets/images/tether-ic.png'
																	alt=''
																	className='thumb-md rounded-circle mr-2'
																/>
																<span className=''>Tether</span>
															</div>
														</td>
														<td className='font-weight-600'>0.009 USDT</td>
														<td>$25600</td>
														<td>---</td>
														<td>
															<span className='text-success'>
																<i className='mdi mdi-arrow-up mr-2'></i>$20
															</span>
														</td>
													</tr>
													<tr>
														<td>
															<div>
																<img
																	src='assets/images/bnb-ic.png'
																	alt=''
																	className='thumb-md rounded-circle mr-2'
																/>
																<span className=''>BNB</span>
															</div>
														</td>
														<td className='font-weight-600'>0.009 BNB</td>
														<td>$25600</td>
														<td>---</td>
														<td>
															<span className='text-success'>
																<i className='mdi mdi-arrow-up mr-2'></i>$20
															</span>
														</td>
													</tr>
													<tr>
														<td>
															<div>
																<img
																	src='assets/images/usd-coin-ic.png'
																	alt=''
																	className='thumb-md rounded-circle mr-2'
																/>
																<span className=''>USD Coin</span>
															</div>
														</td>
														<td className='font-weight-600'>0.009 USDC</td>
														<td>$25600</td>
														<td>---</td>
														<td>
															<span className='text-success'>
																<i className='mdi mdi-arrow-up mr-2'></i>$20
															</span>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
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
														<th scope='col'>Coin</th>
														<th scope='col'>Quantity</th>
														<th scope='col'>Coins Value</th>
														<th scope='col'>1d </th>
														<th scope='col'>Overall P/L</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<div>
																<img
																	src='assets/images/bitcoin-ic.png'
																	alt=''
																	className='thumb-md rounded-circle mr-2'
																/>
																<span className=''>Bitcoin</span>
															</div>
														</td>
														<td className='font-weight-600'>0.009 BTC</td>
														<td>$25600</td>
														<td>---</td>
														<td>
															<span className='text-success'>
																<i className='mdi mdi-arrow-up mr-2'></i>$20
															</span>
														</td>
													</tr>
													<tr>
														<td>
															<div>
																<img
																	src='assets/images/ethereum-ic.png'
																	alt=''
																	className='thumb-md rounded-circle mr-2'
																/>
																<span className=''>Ethereum</span>
															</div>
														</td>
														<td className='font-weight-600'>0.009 ETH</td>
														<td>$25600</td>
														<td>---</td>
														<td>
															<span className='text-success'>
																<i className='mdi mdi-arrow-up mr-2'></i>$20
															</span>
														</td>
													</tr>
													<tr>
														<td>
															<div>
																<img
																	src='assets/images/tether-ic.png'
																	alt=''
																	className='thumb-md rounded-circle mr-2'
																/>
																<span className=''>Tether</span>
															</div>
														</td>
														<td className='font-weight-600'>0.009 USDT</td>
														<td>$25600</td>
														<td>---</td>
														<td>
															<span className='text-success'>
																<i className='mdi mdi-arrow-up mr-2'></i>$20
															</span>
														</td>
													</tr>
													<tr>
														<td>
															<div>
																<img
																	src='assets/images/bnb-ic.png'
																	alt=''
																	className='thumb-md rounded-circle mr-2'
																/>
																<span className=''>BNB</span>
															</div>
														</td>
														<td className='font-weight-600'>0.009 BNB</td>
														<td>$25600</td>
														<td>---</td>
														<td>
															<span className='text-success'>
																<i className='mdi mdi-arrow-up mr-2'></i>$20
															</span>
														</td>
													</tr>
													<tr>
														<td>
															<div>
																<img
																	src='assets/images/usd-coin-ic.png'
																	alt=''
																	className='thumb-md rounded-circle mr-2'
																/>
																<span className=''>USD Coin</span>
															</div>
														</td>
														<td className='font-weight-600'>0.009 USDC</td>
														<td>$25600</td>
														<td>---</td>
														<td>
															<span className='text-success'>
																<i className='mdi mdi-arrow-up mr-2'></i>$20
															</span>
														</td>
													</tr>
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

			<Footer />
			{/* </body> */}
		</>
	)
}

export default MyWallet
