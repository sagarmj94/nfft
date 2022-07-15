/** @format */

import { ethers } from "ethers"
import React, { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import Web3 from "web3"
// import WalletConnectProvider from "@walletconnect/web3-provider"
// import { Web3Modal } from "web3modal"
import { useDispatch, useSelector } from "react-redux"
import { onClickBianceWallet } from "./../services/BinanceWalletConnection"
import {
	walletConnectRequest,
	walletConnectRequestSuccess,
	walletConnectRequestError,
} from "../redux/actions/WalletActions.js"
import Loading from "../components/loading/Loading"
import axios from "axios"
import request from "request"
import FormData from "form-data"
import { GetWalletDetails } from "../utils/GetWalletDetails"
import { Provider } from "web3modal"

const ConnectWallet = () => {
	const [walletAddress, setWalletAddress] = useState("")
	const [userBal, setUserBal] = useState(0)
	const dispatch = useDispatch()
	const userData = useSelector((state) => state.walletReducer.userData)
	// const history = useHistory()
	const navigate = useNavigate()
	const localStorageValue = JSON.parse(localStorage.getItem("walletconnect"))
	const ethereum = window.ethereum
	const address = localStorage.getItem("connected")
	const [clicked, setClicked] = useState(false)
	const [conectionLoading, setConectionLoading] = useState(false)
	const [chainId, setChainId] = useState()

	const [connecteWalletData, setConnecteWalletData] = useState([
		{
			network_id: "",
			wallet_address: "",
			token_address: "",
			coin_type: "",
			wallet_balance: "",
			token_balance: "",
			network: "",
			wallet_type: "",
			is_testnet: "",
		},
	])

	useEffect(() => {
		GetWalletDetails(ethereum, dispatch)
		return () => {
			localStorage.setItem("wallet-address", "false")
		}
	}, [ethereum])

	useEffect(() => {
		document.body.className = "dark connect-wallet-page"
	}, [])

	useEffect(() => {
		if (localStorage.getItem("connected") === "true") {
			if (localStorage.getItem("wallet-header") === "metamask" && ethereum) {
				setWalletAddress(ethereum.selectedAddress)
				window.web3 = new Web3(ethereum)
				if (ethereum.selectedAddress) {
					window.web3.eth.getBalance(
						ethereum.selectedAddress,
						function (err, result) {
							if (err) {
								console.log(err)
								setConectionLoading(false)
							} else {
								dispatch(
									walletConnectRequestSuccess({
										address: ethereum.selectedAddress,
										balance: window.web3.utils.fromWei(result, "ether"),
									})
								)
								setConectionLoading(false)
							}
						}
					)
				}
				ethereum.on("chainChanged", (chainId) => {
					// console.log(chainId, ethereum.selectedAddress, "this is chain id")
					setChainId(chainId)
					if (ethereum.selectedAddress) {
						window.web3.eth.getBalance(
							ethereum.selectedAddress,
							function (err, result) {
								if (err) {
									console.log(err)
								} else {
									dispatch(
										walletConnectRequestSuccess({
											address: ethereum.selectedAddress,
											balance: window.web3.utils.fromWei(result, "ether"),
										})
									)
								}
							}
						)
					}
				})
				ethereum.on("accountsChanged", function (accounts) {
					setWalletAddress(accounts[0])
					if (accounts[0]) {
						window.web3.eth.getBalance(accounts[0], function (err, result) {
							if (err) {
								console.log(err)
							} else {
								dispatch(
									walletConnectRequestSuccess({
										address: accounts[0],
										balance: window.web3.utils.fromWei(result, "ether"),
									})
								)
							}
						})
					} else {
						dispatch(
							walletConnectRequestSuccess({
								address: "",
								balance: 0,
							})
						)
					}
				})
			}
		}
	}, [ethereum, userBal, localStorageValue, userData?.address])

	const onClickMetaMaskWallet = () => {
		// need post data in below format
		let uDataStore = {
			token_address: "",
			coin_type: "",
			wallet_balance: "",
			token_balance: "",
			network: window?.ethereum?.chainId,
			wallet_type: "",
			is_testnet: "",
		}
		console.log("got connected wallet data", uDataStore)

		const ethEnabled = () => {
			if (window.ethereum) {
				setConectionLoading(true)
				window.web3 = new Web3(window.ethereum)
				window.ethereum.enable()
				setWalletAddress(window.ethereum.selectedAddress)
				uDataStore.address = window.ethereum.selectedAddress
				// data sharing to api
				// postWaletDataToApi(window.ethereum.selectedAddress)
				setClicked(true)
				uDataStore.wallet_type = "Metamask"
				dispatch(
					walletConnectRequestSuccess({
						address: window.ethereum.selectedAddress,
						balance: 0,
					})
				)
				if (window.ethereum.selectedAddress) {
					setClicked(true)
					window.web3.eth.getBalance(
						window.ethereum.selectedAddress,
						function (err, result) {
							if (err) {
								console.log(err)
							} else {
								setUserBal(window.web3.utils.fromWei(result, "ether"))
								uDataStore.wallet_balance = window.web3.utils.fromWei(
									result,
									"ether"
								)
								// postWaletDataToApi(window.web3.utils.fromWei(result, "ether"))
								dispatch(
									walletConnectRequestSuccess({
										address: window.ethereum.selectedAddress,
										balance: window.web3.utils.fromWei(result, "ether"),
									})
								)
								setConnecteWalletData("wallet_address")
							}
						}
					)
				}

				// ethereum.on("chainChanged", (chainId) => {
				// 	// console.log(chainId, ethereum.selectedAddress, "this is chain id")
				// 	console.log(chainId, "changes from connect wallet button network")
				// 	uDataStore.network = chainId
				// 	if (ethereum.selectedAddress) {
				// 		window.web3.eth.getBalance(
				// 			ethereum.selectedAddress,
				// 			function (err, result) {
				// 				if (err) {
				// 					console.log(err)
				// 				} else {
				// 					dispatch(
				// 						walletConnectRequestSuccess({
				// 							address: ethereum.selectedAddress,
				// 							balance: window.web3.utils.fromWei(result, "ether"),
				// 						})
				// 					)
				// 				}
				// 			}
				// 		)
				// 	}
				// })
				return true
			}
			return false
		}

		if (!ethEnabled()) {
			alert(
				"Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"
			)
		} else {
			localStorage.setItem("wallet-header", "metamask")
			localStorage.removeItem("connected")
			localStorage.setItem("connected", "true")
			// toggle()
		}
		// postWaletDataToApi(uDataStore)
	}

	const disconnectWallet = () => {
		setWalletAddress("")
		setUserBal("")
		dispatch(
			walletConnectRequestSuccess({
				address: "",
				balance: 0,
			})
		)
		if (localStorage.getItem("wallet-header") === "metamask") {
			localStorage.removeItem("wallet-header")
			localStorage.removeItem("connected")
			localStorage.setItem("connected", "false")
		} else if (localStorage.getItem("wallet-header") === "binance") {
			localStorage.removeItem("wallet-header")
			localStorage.removeItem("connected")
			localStorage.setItem("connected", "false")
		}
	}

	const onClickWalletConnect = async () => {
		// var web3 = new Web3(window.ethereum)
		// await window.ethereum.send("eth_requestAccounts")
		// var accounts = await web3.eth.getAccounts()
		// account = accounts[0]
		// document.getElementById("wallet-address")
	}

	useEffect(() => {
		// console.log(userData?.address, "dasvdavdnabsfvbbavsb")
		if (userData?.address) localStorage.setItem("wallet-address", "true")
		else localStorage.setItem("wallet-address", "false")
		if (userData?.address && clicked) {
			// history.push("/")
			navigate("/")
		}
	}, [userData?.address])

	const postWaletDataToApi = (address) => {
		// console.log("how much data we getting here", address)
		var myHeaders = new Headers()
		myHeaders.append("API-TOKEN", "fV1DJNNvY9Y3M72l2CEmKAn8O+ygu2Ka")
		var formdata = new FormData()
		formdata.append("wallet_address", "12313215")
		formdata.append("network_id", "r44v5345")
		formdata.append("token_address", "v53454354353")
		formdata.append("coin_type", "test")
		formdata.append("wallet_balance", "123")
		formdata.append("token_balance", "68")
		formdata.append("network", "ert45tv4")
		formdata.append("wallet_type", "test")
		formdata.append("is_testnet", "tes")

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: formdata,
			redirect: "follow",
		}
		fetch(
			"https://demo.indapoint.in/nft_api/public/api/connectWallet",
			requestOptions
		)
			.then((response) => response.text())
			.then((result) => console.log(result))
			.catch((error) => console.log("error", error))
	}

	return (
		<>
			{/* <body className='dark connect-wallet-page'> */}
			<div className='accountbg'></div>
			<div className='wrapper-page'>
				<div className='card card-pages shadow-none'>
					<div className='card-body'>
						<div className='text-center m-t-0 m-b-15'>
							{/* <Link to='index' className='logo logo-admin'> */}
							<Link to={"/"} className='logo logo-admin'>
								<img src='assets/images/logo-dark.png' alt='' height='80' />
							</Link>
						</div>

						<h3 className='font-18 mt-4 font-weight-bold mb-0 text-center'>
							Connect Wallet
						</h3>

						<div className='row'>
							<div className='col-6'>
								<Link
									to={"#"}
									// ref={avatarRef}
									onClick={
										userData?.address ? disconnectWallet : onClickMetaMaskWallet
									}
								>
									<div className='wallet-item cursor-pointer'>
										{conectionLoading ? (
											<div className='connectwallet-loader'>
												<Loading
													type='spin'
													color='#ffab2d'
													height={10}
													width={10}
												/>
											</div>
										) : (
											""
										)}
										{userData?.address && (
											<i className='fas fa-check-circle'></i>
										)}
										<img src='assets/images/wallet-1.png' alt='' height='80' />

										<h4 className='mb-0'>Metamask</h4>
										{/* <h4 className='mb-0'>{userBal}</h4> */}
									</div>
								</Link>

								{/* <button onClick={disconnectWallet}>Disconect</button> */}
							</div>
							<div className='col-6'>
								<div onClick={onClickWalletConnect}>
									<div className='wallet-item cursor-pointer'>
										<img src='assets/images/wallet-2.png' alt='' height='80' />
										<h4 className='mb-0'>WalletConnect</h4>
									</div>
								</div>
							</div>
							<div className='col-6'>
								<Link to={"#"} onClick={() => onClickBianceWallet(dispatch)}>
									<div className='wallet-item cursor-pointer'>
										<img src='assets/images/wallet-3.png' alt='' height='80' />
										<h4 className='mb-0'>Binance Chain Wallet</h4>
									</div>
								</Link>
							</div>
							<div className='col-6'>
								<div>
									<div className='wallet-item cursor-pointer'>
										<img src='assets/images/wallet-4.png' alt='' height='80' />
										<h4 className='mb-0'>Trust Wallet</h4>
									</div>
								</div>
							</div>
						</div>
						<p className='text-center mt-4 pt-4'>
							Haven't got a crypto wallet yet?
						</p>
						{/* <button onClick={disconnectWallet}>Disconect</button> */}
						<div className='form-group text-center mb-4 '>
							<div className='col-12'>
								<Link
									to={"#"}
									onClick={() =>
										window.open(
											"https://docs.pancakeswap.finance/get-started/connection-guide",
											"_blank"
										)
									}
									// href='https://docs.pancakeswap.finance/get-started/connection-guide'
									// target='_blank'
									className='btn btn-primary btn-block btn-lg waves-effect waves-light'
									// type='submit'
								>
									Learn how to Connect
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* </body> */}
		</>
	)
}

export default ConnectWallet