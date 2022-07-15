/** @format */

import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useSelector } from "react-redux"

const Header = () => {
	const [user, setUser] = useState("")
	const [mode, setMode] = useState(document.body.className)
	const [error, setError] = useState()
	const loginUser = user[user.length - 1]
	const wallletData = useSelector((state) => state.walletReducer.userData)
	const userData = useSelector((state) => state.TxnReducer.txnData)

	// console.log("header image", userData && userData?.seller?.profile_img_url)

	const modeChanger = () => {
		if (mode === "dark") {
			setMode((document.body.className = ""))
		}
		if (mode === "") {
			setMode((document.body.className = "dark"))
		}
	}

	const addClass = () => {
		document.body.classList.toggle("enlarged")
	}

	const getUser = () => {
		var config = {
			method: "get",
			url: "https://629994c46f8c03a978452158.mockapi.io/setting",
			headers: {},
		}

		axios(config)
			.then(function (response) {
				setUser(response.data)
			})
			.catch(function (error) {
				setError(error)
			})
	}

	useEffect(() => {
		getUser()
	}, [])

	return (
		<>
			<div className='topbar'>
				<div className='topbar-left'>
					{/* <Link to='/index' className='logo'> */}
					<Link to={"/"} className='logo'>
						<span className='logo-light'>
							<img alt='' src='assets/images/logo-dark.png' />
						</span>
						<span className='logo-sm'>
							<img alt='' src='assets/images/logo-icon.png' width='60px' />
						</span>
					</Link>
				</div>

				<nav className='navbar-custom'>
					<Link
						to={"#"}
						className='btn rounded-circle float-right theme-mode-button'
						onClick={modeChanger}
					>
						<i className='far fa-lightbulb font-18'></i>
					</Link>
					<ul className='navbar-right list-inline float-right mb-0'>
						<li className='dropdown notification-list list-inline-item'>
							<div className='dropdown notification-list nav-pro-img'>
								<Link
									className='dropdown-toggle nav-link arrow-none nav-user'
									data-toggle='dropdown'
									to={"#"}
									role='button'
									aria-haspopup='false'
									aria-expanded='false'
								>
									<p className='d-none d-md-inline-block'>
										Fred Aston <span>aston@gmail.com</span>
									</p>

									<img
										// src={userData && userData?.seller?.profile_img_url}
										alt='user'
										className='rounded-circle'
										src='assets/images/avtar.png'
									/>
								</Link>
								<div className='dropdown-menu dropdown-menu-right profile-dropdown '>
									<Link className='dropdown-item' to={"/settings"}>
										<i className='mdi mdi-account-circle'></i> Profile
									</Link>
									<Link className='dropdown-item' to={"/mywallet"}>
										<i className='mdi mdi-wallet'></i> Wallet
									</Link>
									<Link className='dropdown-item text-danger' to={"#"}>
										<i className='mdi mdi-power text-danger'></i> Logout
									</Link>
								</div>
							</div>
						</li>
					</ul>

					<Link
						to={"/connect-wallet"}
						className='btn btn-theme connect-btn d-none d-md-inline-block'
						// onClick={modeChangerWallet}
					>
						<i className='mdi mdi-link-variant mr-2'></i>{" "}
						{wallletData?.address && wallletData?.address
							? "Change Wallet"
							: "Connect Wallet"}
					</Link>
					<ul className='list-inline menu-left mb-0'>
						<li className='float-left d-flex align-items-center'>
							{/* <button className='button-menu-mobile open-left waves-effect'> */}
							<button
								className='button-menu-mobile open-left waves-effect'
								onClick={addClass}
							>
								<img alt='' src='assets/images/humburg-ic.png' />
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</>
	)
}

export default Header
