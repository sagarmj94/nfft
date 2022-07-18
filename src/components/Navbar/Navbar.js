/** @format */

import React from "react"
// import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	// const history = useHistory()
	const navigate = useNavigate();

	const dashboardRoute = () => {
		// history.push("/index")
		// history.push("/")
		//navigate("/")
	}


	return (
		<>
			<div className='left side-menu'>
				<div
					className='slimscroll-menu'
					id='remove-scroll'
					// onClick={addScrollClass}
				>
					<div id='sidebar-menu'>
						<ul className='metismenu' id='side-menu'>
							<li>
								<Link
									to={"/"}
									// to='/index'
									className='waves-effect'
									onClick={dashboardRoute}
								>
									{/* <!-- <img src="assets/images/dashboard-menu-ic.png">     --> */}
									<i className='icon-accelerator'></i>
									<span>Dashboard</span>
								</Link>
							</li>
							<li>
								<Link to={"/mywallet"} className='waves-effect'>
									{/* <!-- <img src="assets/images/wallet-menu-ic.png">     --> */}
									<i className='ti-wallet'></i>
									<span>My Wallet</span>
								</Link>
							</li>
							<li>
								<Link
									to={"/transactions"}
									className='waves-effect'
									// data-toggle='modal'
									// data-target='#comingsoon'
								>
									{/* <!-- <img src="assets/images/transactions-menu-ic.png">     --> */}
									<i className='icon-rotate'></i>
									<span>Transactions</span>
								</Link>
							</li>
							<li>
								<Link to='/collections' className='waves-effect'>
									{/* <!-- <img src="assets/images/collections-menu-ic.png">     --> */}
									<i className='ti-gallery'></i>
									<span>Collections</span>
								</Link>
							</li>
							<li>
								<Link to={"/portfolio"} className='waves-effect'>
									{/* <!-- <img src="assets/images/collections-menu-ic.png">     --> */}
									<i className='ti-briefcase'></i>
									<span>Portfolio</span>
								</Link>
							</li>
							<li>
								<Link
									to={"/profit-tracker"}
									className='waves-effect'
									// data-toggle='modal'
									// data-target='#comingsoon'
								>
									{/* <!-- <img src="assets/images/collections-menu-ic.png">     --> */}
									<i className='ti-pie-chart'></i>
									<span>Profit Tracker</span>
								</Link>
							</li>
							<li>
								<Link
									to={"/invoices"}
									className='waves-effect'
									data-toggle='modal'
									data-target='#comingsoon'
								>
									{/* <!-- <img src="assets/images/invoices-menu-ic.png">    -->  */}
									<i className='ti-receipt'></i>
									<span>Invoices</span>
								</Link>
							</li>
							<li>
								<Link
									to={"/tax-report"}
									className='waves-effect'
									data-toggle='modal'
									data-target='#comingsoon'
								>
									{/* <!-- <img src="assets/images/settings-menu-ic.png"/>     --> */}
									<i className='ti-file'></i>
									<span>Tax Report</span>
								</Link>
							</li>
							<li>
								<Link to={"/settings"} className='waves-effect'>
									{/* <!-- <img src="assets/images/settings-menu-ic.png"/>     --> */}
									<i className='icon-setting-2'></i>
									<span>Settings</span>
								</Link>
							</li>
						</ul>
					</div>
					<div className='clearfix'></div>
				</div>
			</div>
		</>
	)
}

export default Navbar
