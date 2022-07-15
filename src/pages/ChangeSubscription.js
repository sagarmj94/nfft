/** @format */

import React from "react"
import { Link } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
// import { useHistory } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
const ChangeSubscription = () => {
	const [selectPlan, setSelectPlan] = useState()
	const dispatch = useDispatch()
	const navigate = useNavigate();
	const subscription = useSelector((state) => state.planReducer)


	const getPlans = () => {
		var config = {
			method: "get",
			url: "https://629887f7f2decf5bb744ffbd.mockapi.io/plan",
		}

		axios(config)
			.then(function (response) {
				setSelectPlan(response.data)
			})
			.catch(function (error) {
				console.log(error)
			})
	}

	useEffect(() => {
		getPlans()
	}, [])

	return (
		<>
			{/* <body className='dark'> */}
			<Header />
			<Navbar />
			<div className='content-page home-page'>
				<div className='content pt-4'>
					<div className='container-fluid'>
						<h2 className='page-title pl-3'>Subscription</h2>
						<div className='card m-b-30 m-t-30 mt-md-0 card-normal'>
							<div className='card-body'>
								<h4 className='mt-0 header-title mb-4'>Change Subscription</h4>
								<div className='row'>
									{selectPlan &&
										selectPlan.map((plan, key) => (
											<div key={key} className='col-md-4'>
												<div
													className={
														plan.prize === "50"
															? "pricing-col selected mb-4 mb-md-0"
															: "pricing-col mb-4 mb-md-0"
													}
												>
													<div className='price-top'>
														<input type='hidden' value={subscription.plan} />{" "}
														{plan.plan}
													</div>
													<div className='price-numbers'>
														<span>$</span>
														<b>
															{plan.prize}
															<sup>/month</sup>
														</b>
													</div>
													<ul>
														<li>{plan.f1}</li>
														<li>{plan.f2}</li>
														<li>{plan.f3}</li>
													</ul>
													<p className='px-4 mb-4 text-center'>
														<Link
															type='button'
															to='/settings'
															className='btn btn-theme-outline'
															onClick={() =>
																dispatch({
																	type: "SELECTED_PLANS",
																	plan: plan,
																})
															}
														>
															Current Plan
														</Link>
													</p>
												</div>
											</div>
										))}
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

export default ChangeSubscription
