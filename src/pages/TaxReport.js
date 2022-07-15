
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import React, { useState, useEffect } from "react"
import axios from "axios"
import { useSelector } from "react-redux"

const TaxReport = () => {

    const [user, setUser] = useState("")
    const [mode, setMode] = useState(document.body.className)
    const [error, setError] = useState()
    const loginUser = user[user?.length - 1]
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
										{/* <p className='d-none d-md-inline-block'>
										{loginUser?.name} <span>{loginUser?.email}
										</span>
									</p> */}

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
						{/* <button
							type='button'
							className=' btn btn-theme connect-btn d-none d-md-inline-block'
							data-toggle='modal'
							data-target='#comingsoon'
						>
							Launch demo modal
						</button> */}

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

				<Navbar />
				<div className='content-page home-page taxreport-page'>
					<div className='content pt-4'>
						<div className='container-fluid'>
							<h2 className='page-title pl-3'>Tax Report</h2>
							<div className='card m-b-30 m-t-30 mt-md-0 card-normal'>
								{/* <div className="card-body">
                                <div className="page-body container">
                                    <div className="row">
                                        <div className="col-md-8 text-center">
                                            <h2>
                                                Tax report for
                                                <select className="year-dropdown form-select">
                                                    <option>2020 - 2021</option>
                                                    <option>2021 - 2022</option>
                                                    <option>2022 - 2023</option>
                                                </select>
                                            </h2>
                                            <div className="pb-5 text-dark">
                                                1 Apr 2021 to 31 Mar 2022
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4 text-center px-3">
                                            <span className="fa-img fa-stack fa-2x d-block mx-auto mb-3 text-success" style={{ "font-size": "3em", "color": "rgb(108, 117, 125) " }}><i className="far fa- circle fa-stack-2x"></i><i className="fas fa-stack-1x fa-check"></i></span>
                                            <h5 className="mb-2">No gains or losses!</h5>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <ul className="border rounded list-group">
                                                    <li className="list-group-item border-0">
                                                        <div className="d-flex">
                                                            <div className="my-auto mr-auto"><h5 className="mb-0">Summary</h5></div>
                                                            <div className="my-auto ml-3"><h5 className="mb-0"></h5></div>
                                                        </div>
                                                    </li>
                                                    <li className="border-left-0 border-right-0 border-top-0 border-bottom-1 mb-2 pb-3 pt-2 list-group-item">
                                                        <a className="px-2 mr-1 badge badge-info" href="#">10 transactions</a>
                                                        <a className="px-2 mx-1 badge badge-secondary" href="#">3 Sell</a>
                                                        <a className="px-2 mx-1 badge badge-secondary" href="#">5 Buy</a>
                                                        <a className="px-2 mx-1 badge badge-secondary" href="#">2 Transfer</a>
                                                    </li>
                                                    <li className="border-0 list-group-item">
                                                        <div className="d-flex">
                                                            <div className="my-auto mr-auto">
                                                                <h5 className="mb-0 font-15 font-weight-600 mt-0">Capital gains / P&amp;L</h5>
                                                            </div>
                                                            <div className="my-auto ml-3 text-right">
                                                                <span>$0.00</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="border-0 list-group-item">
                                                        <div className="d-flex">
                                                            <div className="my-auto mr-auto">
                                                                <h5 className="mb-0 font-15 font-weight-600 mt-0">
                                                                    Other gains (futures, derivatives etc)
                                                                </h5>
                                                            </div>
                                                            <div className="my-auto ml-3 text-right">
                                                                <span>$0.00</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="border-0 list-group-item">
                                                        <div className="d-flex">
                                                            <div className="my-auto mr-auto">
                                                                <h5 className="mb-0 font-15 font-weight-600 mt-0">
                                                                    Income
                                                                </h5>
                                                            </div>
                                                            <div className="my-auto ml-3 text-right">
                                                                <span>$0.00</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="border-0 list-group-item">
                                                        <div className="d-flex">
                                                            <div className="my-auto mr-auto">
                                                                <h5 className="mb-0 font-15 font-weight-600 mt-0">
                                                                    Costs &amp; expenses
                                                                </h5>
                                                            </div>
                                                            <div className="my-auto ml-3 text-right">
                                                                <span>$0.00</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="border-0 list-group-item">
                                                        <div className="d-flex">
                                                            <div className="my-auto mr-auto">
                                                                <h5 className="mb-0 font-15 font-weight-600 mt-0">
                                                                    Gifts, donations &amp; lost coins
                                                                </h5>
                                                            </div>
                                                            <div className="my-auto ml-3 text-right">
                                                                <span>$0.00</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="border-left-0 border-right-0 border-bottom-0 small text-dark list-group-item">
                                                        Note: This is just an indication of your taxable gains. Download a Tax Report to see your short/long-term proceeds, cost-basis, disposals and detailed calculations that you can use in your official tax returns.
                                                    </li>
                                                </ul>

                                            </div>
                                            <div className="col-md-4">

                                                <ul className="border rounded mb-3 list-group h-100">
                                                    <li className="list-group-item border-0">
                                                        <h5 className="mb-2">Settings</h5>
                                                        <p className="text-dark font-12">
                                                            These settings are used to calculate your gains. To change any of these <a href="#" className="text-theme-color">click here</a>
                                                        </p>
                                                    </li>
                                                    <li className="border-0 list-group-item">
                                                        <div className="d-flex">
                                                            <h5 className="mb-0 font-15 font-weight-600 mt-0">Home Country</h5>
                                                            <div className="ml-auto pl-2">US</div>
                                                        </div>
                                                    </li>
                                                    <li className="border-0 list-group-item">
                                                        <div className="d-flex">
                                                            <h5 className="mb-0 font-15 font-weight-600 mt-0">Base Currency</h5>
                                                            <div className="ml-auto pl-2">US Dollar $</div>
                                                        </div>
                                                    </li>
                                                    <li className="border-0 list-group-item">
                                                        <div className="d-flex">
                                                            <h5 className="mb-0 font-15 font-weight-600 mt-0">Cost basis method</h5>
                                                            <div className="ml-auto pl-2">FIFO</div>
                                                        </div>
                                                    </li>
                                                    <li className="border-0 list-group-item">
                                                        <div className="d-flex">
                                                            <h5 className="mb-0 font-15 font-weight-600 mt-0">Cost tracking method</h5>
                                                            <div className="ml-auto pl-2">Universal</div>
                                                        </div>
                                                    </li>
                                                    <li className="border-0 list-group-item">
                                                        <div className="d-flex">
                                                            <h5 className="mb-0 font-15 font-weight-600 mt-0">Gains on crypto → crypto trades?</h5>
                                                            <div className="ml-auto pl-2">Yes</div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className=" col-md-8">
                                                <div className="form-group mt-4">
                                                    <label className="w-100 ">Pick a report type</label>
                                                    <select className="form-select form-control form-control-lg font-16">
                                                        <option>Complete Tax Report</option>
                                                        <option>Capital Gains Report</option>
                                                        <option>Income Report</option>
                                                        <option>Other Gains Report</option>
                                                        <option>Gifts, Donations & Lost Assets</option>
                                                    </select>
                                                </div>
                                                <p className="mt-5"><button type="submit" className="py-2 px-4  btn btn-theme btn-lg font-18 btn-fill-dark">Download Report</button></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</>
		)
}

export default TaxReport