/** @format */

import React from "react"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { axios } from "axios"

const InvoiceAddnew = () => {
	const [inputList, setInputList] = useState([
		{ item_name: "", quantity: "", price: "", tax: "" },
	])
	const [invoiceNumber, setInvoiceNumber] = useState("")
	const [invoiceDate, setInvoiceDate] = useState("")
	const [billTo, setBillTo] = useState("")
	const [currency, setCurrency] = useState("")
	const [otherTotal, setOtherTotal] = useState("")
	const [shipping, setShipping] = useState("")
	const [otherAmount, setOtherAmount] = useState("")
	const [message, setMessage] = useState("")

	const allInvoiceDetail = {
		invoice_number: invoiceNumber,
		invoice_date: invoiceDate,
		bill_to: billTo,
		currency: currency,
		invoiceItem: [...inputList, currency],
		otherTotal: otherTotal,
		shipping: shipping,
		otherAmount: otherAmount,
		message: message,
	}

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	const handleInputChange = (e, index) => {
		const { name, value } = e.target
		const list = [...inputList]
		list[index][name] = value
		setInputList(list)
	}

	const handleRemoveClick = (index) => {
		const list = [...inputList]
		list.splice(index, 1)
		setInputList(list)
	}

	const handleAddClick = () => {
		setInputList([
			...inputList,
			{ item_name: "", quantity: "", price: "", tax: "" },
		])
	}

	const getInDetail = () => {
		const {
			invoice_number,
			invoice_date,
			bill_to,
			currency,
			invoiceItem,
			otherTotal,
			shipping,
			message,
		} = allInvoiceDetail
		// console.log("invoice_number", invoice_number)

		// data.append("invoice_number", invoice_number)
		// data.append("invoice_date", invoice_date)
		// data.append("bill_to", bill_to)
		// data.append("currency", currency)
		// data.append("tax", "")
		// data.append("other_discount", "")
		// data.append("shipping", shipping)
		// data.append("other_amount", otherTotal)
		// data.append("invoice_total", "25")
		// data.append("message", message)
		// data.append("invoiceItem[0][item_name]", "test1")
		// data.append("invoiceItem[0][quantity]", "4")
		// data.append("invoiceItem[0][price]", "20")
		// data.append("invoiceItem[0][tax]", "10")

		var data = {
			invoice_number: invoice_number,
			invoice_date: invoice_date,
			bill_to: bill_to,
			currency: currency,
			invoiceItem: invoiceItem,
			otherTotal: otherTotal,
			shipping: otherTotal,
			message: otherTotal,
		}

		console.log("data from submit", JSON.stringify(data))
		var url = "https://demo.indapoint.in/nft_api/public/api/invoice/add/1"
		var headers = {
			"API-TOKEN": "fV1DJNNvY9Y3M72l2CEmKAn8O+ygu2Ka",
		}

		// var config = {
		// 	method: "post",
		// 	url: "https://demo.indapoint.in/nft_api/public/api/invoice/add/1",
		// 	headers: {
		// 		"API-TOKEN": "fV1DJNNvY9Y3M72l2CEmKAn8O+ygu2Ka",
		// 		data,
		// 	},
		// 	data: data,
		// }
		var result = axios.post(url, data, headers).then((res) => {
			console.log(res)
		})
		// 	axios(config)
		// 		.then(function (response) {
		// 			console.log(JSON.stringify(response.data))
		// 		})
		// 		.catch(function (error) {
		// 			console.log(error)
		// 		})
	}

	return (
		<>
			<Header />
			<Navbar />
			<div className='content-page home-page invoice-addnew'>
				<div className='content pt-4'>
					<div className='container-fluid'>
						<h2 className='page-title pl-3'>Invoice</h2>
						<div className='row'>
							<div className='col-lg-8'>
								<div className='card mb-3 card-normal'>
									<div className='card-body'>
										<div className='row'>
											<div className='form-group col-md-6 d-md-flex align-items-center'>
												<label className='font-13 font-weight-400 pr-2 mb-1 mb-md-0'>
													Invoice Number
												</label>
												<input
													{...register("invoice_number", {
														onChange: (e) => setInvoiceNumber(e.target.value),
													})}
													type='text'
													name='invoice_number'
													className='form-control w-md-auto d-inline-block form-control-sm'
												/>
											</div>
											<div className='form-group col-md-6 d-md-flex align-items-center justify-content-end'>
												<label className='font-13 font-weight-400 pr-2 mb-1 mb-md-0'>
													Invoice Date
												</label>
												<input
													type='text'
													name='invoice_date'
													{...register("invoice_date", {
														onChange: (e) => setInvoiceDate(e.target.value),
													})}
													className='form-control w-md-auto d-inline-block form-control-sm'
												/>
											</div>
										</div>

										<div className='row'>
											<div className='col-md-8'>
												<h5 className='font-15'>Bill To</h5>
												<input
													type='text'
													name='bill_to'
													{...register("bill_to", {
														onChange: (e) => setBillTo(e.target.value),
													})}
													className='form-control form-control-lg'
												/>
											</div>
											<div className='col-md-4'>
												<h5 className='font-15'>Select crypto</h5>
												<select
													className='form-control form-control-lg form-select w-100'
													name='currency'
													{...register("currency", {
														onChange: (e) => setCurrency(e.target.value),
													})}
												>
													<option>Bitcoin</option>
													<option>Ethereum</option>
													<option>Tether</option>
													<option>BNB</option>
													<option>USD Coin</option>
												</select>
											</div>
										</div>

										<div className='mt-4'>
											<h5 className='font-15'>Items</h5>
											{inputList.map((x, i) => {
												return (
													<div className='invoice-item px-4 pt-4 bg-light'>
														<div className='row'>
															<div className='form-group col-md-6 mb-4'>
																<label
																	htmlFor='ItemName'
																	className='font-weight-400'
																>
																	Item Name
																</label>
																<input
																	type='text'
																	className='form-control'
																	id='ItemName'
																	name='item_name'
																	placeholder='Item Name'
																	value={x.item_name}
																	onChange={(e) => handleInputChange(e, i)}
																/>
															</div>
															<div className='form-group col-md-2 mb-4'>
																<label
																	htmlFor='Quantity'
																	className='font-weight-400'
																>
																	Quantity
																</label>
																<input
																	type='text'
																	className='form-control'
																	id='Quantity'
																	name='quantity'
																	placeholder='1'
																	value={x.quantity}
																	onChange={(e) => handleInputChange(e, i)}
																/>
															</div>
															<div className='form-group col-md-2 mb-4'>
																<label
																	htmlFor='Price'
																	className='font-weight-400'
																>
																	Price
																</label>
																<input
																	type='text'
																	className='form-control'
																	id='Price'
																	name='price'
																	placeholder='12'
																	value={x.price}
																	onChange={(e) => handleInputChange(e, i)}
																/>
															</div>
															<div className='form-group col-md-2 mb-4'>
																<label
																	htmlFor='Tax'
																	className='font-weight-400'
																>
																	Tax
																</label>
																<input
																	type='text'
																	className='form-control'
																	id='Tax'
																	name='tax'
																	placeholder='0'
																	value={x.tax}
																	onChange={(e) => handleInputChange(e, i)}
																/>
															</div>
														</div>
													</div>
												)
											})}

											{inputList.length !== 1 && (
												<button
													className='btn btn-theme-light mt-2 '
													onClick={() => handleRemoveClick()}
												>
													Remove
												</button>
											)}
											{/* {inputList.length - 1 === i && ( */}
											<button
												// href='#'
												onClick={handleAddClick}
												className='btn btn-theme-light mt-2 '
											>
												<i className='mdi mdi-plus mr-2'></i>Add Item
											</button>
											{/* )} */}
										</div>

										<div className='mt-4'>
											<h5 className='font-15'>Message to Customer</h5>
											<textarea
												className='form-control form-control-lg'
												name='message'
												{...register("message", {
													onChange: (e) => setMessage(e.target.value),
												})}
											></textarea>
										</div>
									</div>
								</div>
							</div>
							<div className='col-lg-4'>
								<div className='card card-normal'>
									<div className='card-body mb-3 px-3 py-3'>
										<div className='pt-2'>
											<ul className='list-group list-group-flush'>
												<li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
													Sub Total
													<span>$556</span>
												</li>
												<li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
													Other Discount
													<input
														type=''
														name='other-total'
														className='form-control form-control-invoice'
														placeholder='0'
														{...register("other-total", {
															onChange: (e) => setOtherTotal(e.target.value),
														})}
													/>
												</li>
												<li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
													Shipping
													<input
														type=''
														name='shipping'
														{...register("shipping", {
															onChange: (e) => setShipping(e.target.value),
														})}
														className='form-control form-control-invoice'
														placeholder='0'
													/>
												</li>
												<li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
													Other Amount
													<input
														type=''
														name='other-amount'
														className='form-control form-control-invoice'
														placeholder='0'
														{...register("other-amount", {
															onChange: (e) => setOtherAmount(e.target.value),
														})}
													/>
												</li>
												<li className='list-group-item d-flex justify-content-between border-0 px-0 mb-3 font-16'>
													<div>
														<strong>Total</strong>
														<small>
															<p className='mb-0'>(Tax excl.)</p>
														</small>
													</div>
													<span>
														<strong> $10558</strong>
													</span>
												</li>
											</ul>
											<button
												type='button'
												className='btn btn-theme btn-block'
												onClick={getInDetail}
											>
												Submit
											</button>
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

export default InvoiceAddnew
