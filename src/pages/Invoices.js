/** @format */

import React from "react"
import { Link } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"


const Invoices = () => {
	const getInvoiceDetails = () => {

	}

	return (
		<>
			<Header />
			<Navbar />
			<div className='content-page home-page'>
				<div className='content pt-4'>
					<div className='container-fluid'>
						<h2 className='page-title pl-3'>Invoices</h2>

						<div className='card m-b-30 m-t-30 mt-md-0 card-normal '>
							<div className='card-body'>
								<Link
									to={"/invoice-addnew"}
									className='btn btn-theme bg-success border-success font-weight-600 float-right'
								>
									<i className='fas fa-plus mr-1'></i> Add New
								</Link>
								<h4 className='mt-0 header-title mb-4 pb-3'>Invoices</h4>
								<div className='table-responsive'>
									<table className='table table-hover font-15'>
										<thead>
											<tr>
												<th scope='col'>Invoice Number</th>
												<th scope='col'>Bill To</th>
												<th scope='col'>Items</th>
												<th scope='col'>Total</th>
												<th scope='col'>Invoice Date</th>
												<th scope='col' width='150'></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<Link to={"/invoice-detail"}>598599</Link>
												</td>
												<td>John Day</td>
												<td>3</td>
												<td>$524</td>
												<td>2/5/2020 06:24 PM</td>
												<td className='text-right'>
													<Link
														to={"/invoice-detail"}
														className='btn btn-theme-light btn-sm'
													>
														View Detail
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<Link to={"/invoice-detail"}>598599</Link>
												</td>
												<td>John Day</td>
												<td>3</td>
												<td>$524</td>
												<td>2/5/2020 06:24 PM</td>
												<td className='text-right'>
													<Link
														to={"/invoice-detail"}
														className='btn btn-theme-light btn-sm'
													>
														View Detail
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<Link to={"/invoice-detail"}>598599</Link>
												</td>
												<td>John Day</td>
												<td>3</td>
												<td>$524</td>
												<td>2/5/2020 06:24 PM</td>
												<td className='text-right'>
													<Link
														to={"/invoice-detail"}
														className='btn btn-theme-light btn-sm'
													>
														View Detail
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<Link to={"/invoice-detail"}>598599</Link>
												</td>
												<td>John Day</td>
												<td>3</td>
												<td>$524</td>
												<td>2/5/2020 06:24 PM</td>
												<td className='text-right'>
													<Link
														to={"/invoice-detail"}
														className='btn btn-theme-light btn-sm'
													>
														View Detail
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<Link to={"/invoice-detail"}>598599</Link>
												</td>
												<td>John Day</td>
												<td>3</td>
												<td>$524</td>
												<td>2/5/2020 06:24 PM</td>
												<td className='text-right'>
													<Link
														to={"/invoice-detail"}
														className='btn btn-theme-light btn-sm'
													>
														View Detail
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<Link to={"/invoice-detail"}>598599</Link>
												</td>
												<td>John Day</td>
												<td>3</td>
												<td>$524</td>
												<td>2/5/2020 06:24 PM</td>
												<td className='text-right'>
													<Link
														to={"/invoice-detail"}
														className='btn btn-theme-light btn-sm'
													>
														View Detail
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<Link to={"/invoice-detail"}>598599</Link>
												</td>
												<td>John Day</td>
												<td>3</td>
												<td>$524</td>
												<td>2/5/2020 06:24 PM</td>
												<td className='text-right'>
													<Link
														to={"/invoice-detail"}
														className='btn btn-theme-light btn-sm'
													>
														View Detail
													</Link>
												</td>
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
			<Footer />
		</>
	)
}

export default Invoices
