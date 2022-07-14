/** @format */

import Web3 from "web3"
import { binanceWalletConnect } from "./WalletConnection"
import {
	walletConnectRequest,
	walletConnectRequestSuccess,
	walletConnectRequestError,
} from "../redux/actions/WalletActions"
export const onClickBianceWallet = async (dispatch) => {
	// console.log("this is binance address")
	const binanceEnabled = async () => {
		if (window.BinanceChain) {
			//Pass window.BinanceChain to BSC Connector
			let { binanceInstance, binanceAccount } = await binanceWalletConnect(
				window.BinanceChain
			)
			//Set Binance Address
			window.web3 = new Web3(window.BinanceChain)
			if (binanceAccount) {
				window.web3.eth.getBalance(binanceAccount, function (err, result) {
					if (err) {
						console.log(err)
					} else {
						// console.log(result)
						dispatch(
							walletConnectRequestSuccess({
								address: binanceAccount,
								balance: window.web3.utils.fromWei(result, "ether"),
							})
						)
					}
				})
			}

			return true
		}
		return false
	}
	if (!binanceEnabled()) {
		alert(
			"Please install an Ethereum-compatible browser or extension like Binance Wallet Extension to use this dApp!"
		)
	} else {
		localStorage.setItem("wallet-header", "binance")
		localStorage.removeItem("connected")
		localStorage.setItem("connected", "true")
	}
}
