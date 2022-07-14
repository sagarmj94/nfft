/** @format */

import React from "react"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"

const InvoiceDetail = () => {
	return (
		<>
			<Header />
			<Navbar />
			<div className='content-page home-page'>
				<div className='content pt-4'>
					<div className='container-fluid'>
						<h2 className='page-title pl-3'>Invoice Detail</h2>

						<div className='row'>
							<div className='col-12'>
								<div className='card m-b-30 m-t-30 mt-md-0 card-normal'>
									<div className='card-body'>
										<div className='row'>
											<div className='col-12'>
												<div className='invoice-title'>
													<h4 className='float-right font-16'>
														<strong>Order # 12345</strong>
													</h4>
													<h3 className='m-t-0'>
														<img
															src='assets/images/logo-dark.png'
															alt='logo'
															height='36'
														/>
													</h3>
												</div>
												<hr />
												<div className='row'>
													<div className='col-6'>
														<address>
															<strong>Billed To:</strong> John Day
														</address>
													</div>
													<div className='col-6 text-right'>
														<address>
															<strong>Order Date:</strong> October 7, 2016
														</address>
													</div>
												</div>
												<div className='row'>
													<div className='col-12 col-md-8'>
														<address>
															<strong className='font-weight-600'>
																Message to Customer
															</strong>
															<br />
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit. Vivamus sed sem lorem. Aliquam erat
															volutpat. Curabitur aliquet odio id dui lobortis
															faucibus. Nam maximus ipsum vitae nisl porta, at
															faucibus turpis iaculis.
														</address>
													</div>
												</div>
											</div>
										</div>

										<div className='row'>
											<div className='col-12'>
												<div className='panel panel-default'>
													<div className='p-2'>
														<h3 className='panel-title font-20'>
															<strong>Order summary</strong>
														</h3>
													</div>
													<div className=''>
														<div className='table-responsive'>
															<table className='table'>
																<thead>
																	<tr>
																		<td>
																			<strong>Item</strong>
																		</td>
																		<td>
																			<strong>Quantity</strong>
																		</td>
																		<td>
																			<strong>Price</strong>
																		</td>
																		<td>
																			<strong>Tax</strong>
																		</td>
																		<td className='text-right'>
																			<strong>Total</strong>
																		</td>
																	</tr>
																</thead>
																<tbody>
																	{/* <!-- foreach ($order->lineItems as $line) or some such thing here --> */}
																	<tr>
																		<td>BS-200</td>
																		<td>2</td>
																		<td>$150</td>
																		<td>$10</td>
																		<td className='text-right'>$160</td>
																	</tr>
																	<tr>
																		<td>BS-200</td>
																		<td>2</td>
																		<td>$150</td>
																		<td>$10</td>
																		<td className='text-right'>$160</td>
																	</tr>
																	<tr>
																		<td>BS-200</td>
																		<td>2</td>
																		<td>$150</td>
																		<td>$10</td>
																		<td className='text-right'>$160</td>
																	</tr>
																	<tr>
																		<td className='thick-line'></td>
																		<td className='thick-line'></td>
																		<td className='thick-line'></td>
																		<td className='thick-line text-center'>
																			<strong>Subtotal</strong>
																		</td>
																		<td className='thick-line text-right'>
																			$480
																		</td>
																	</tr>
																	<tr>
																		<td className='thick-line'></td>
																		<td className='thick-line'></td>
																		<td className='thick-line'></td>
																		<td className='thick-line text-center'>
																			<strong>Other Discount</strong>
																		</td>
																		<td className='thick-line text-right'>
																			$0
																		</td>
																	</tr>
																	<tr>
																		<td className='thick-line'></td>
																		<td className='thick-line'></td>
																		<td className='thick-line'></td>
																		<td className='thick-line text-center'>
																			<strong>Shipping</strong>
																		</td>
																		<td className='thick-line text-right'>
																			$0
																		</td>
																	</tr>
																	<tr>
																		<td className='thick-line'></td>
																		<td className='thick-line'></td>
																		<td className='thick-line'></td>
																		<td className='thick-line text-center'>
																			<strong>Other Amount</strong>
																		</td>
																		<td className='thick-line text-right'>
																			$0
																		</td>
																	</tr>
																	<tr>
																		<td className='no-line'></td>
																		<td className='no-line'></td>
																		<td className='thick-line'></td>
																		<td className='no-line text-center'>
																			<strong>Total</strong>{" "}
																			<small>(Tax excl.)</small>
																		</td>
																		<td className='no-line text-right'>
																			<h4 className='m-0'>$480</h4>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>

														{/* <!-- <div className="d-print-none mo-mt-2">
                                                        <div className="float-right">
                                                            <a href="javascript:window.print()" className="btn btn-success waves-effect waves-light"><i className="fa fa-print"></i></a>
                                                            <a href="#" className="btn btn-primary waves-effect waves-light">Send</a>
                                                        </div>
                                                    </div> --> */}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default InvoiceDetail
