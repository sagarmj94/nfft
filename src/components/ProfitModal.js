/** @format */

import React from "react"
import { getPlName, getPrice } from "../utils/CommonFunctions"

const ProfitModal = ({ modalDetail, gasVal }) => {
	console.log("modalDetail", modalDetail)

	return (
		<>
			<div
				className='modal fade'
				id='selldetail'
				tabIndex='-1'
				role='dialog'
				aria-labelledby='selldetaillabel'
				aria-hidden='true'
			>
				<div
					className='modal-dialog modal-sellcard modal-dialog-centered'
					role='document'
				>
					<div className='modal-content border-0 shadow'>
						<div className='modal-body'>
							<img
								className='mr-4 rounded'
								width='100%'
								// src='assets/images/nft-list-img-1.png'
								src={
									modalDetail?.asset?.image_url && modalDetail?.asset?.image_url
								}
							/>
							<h5 className='mt-0 mb-1 font-21 mb-4 mt-4'>
								{getPlName(modalDetail)} {`${" "}`}
								<span className='badge badge-danger'>Sold</span>
							</h5>
							<p className='mb-2'>
								<strong className='mr-3'>Sold Price</strong>$
								{getPrice(modalDetail)}
							</p>
							<p className='mb-2'>
								<strong className='mr-3'>Gas Fees</strong>${gasVal}
							</p>
							<p className='mb-2'>
								<strong className='mr-3'>Royalties</strong>
								{/* $10 */}

								{getPrice(
									modalDetail?.asset?.collection?.dev_seller_fee_basis_points
								)
									? getPrice(
											modalDetail?.asset?.collection
												?.dev_seller_fee_basis_points
									  )
									: "--"}
							</p>
							<p className='mb-2'>
								<strong className='mr-3'>Sell Date</strong>
								{new Date(modalDetail?.created_date).toLocaleString("en-US")}
							</p>
							{/* <p className='mb-2'>
								<strong className='mr-3'>Overall P/L</strong>
								<span className='text-success'>
									<i className='mdi mdi-arrow-up mr-2'></i>$20
								</span>
							</p> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProfitModal
