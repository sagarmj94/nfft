import {
	walletConnectRequestSuccess,
} from "../redux/actions/WalletActions.js"
import Web3 from "web3"

export const GetWalletDetails = (ethereum, dispatch) => {

	console.log("GetWalletDetails etherium", ethereum)
	if (localStorage.getItem("connected") === "true") {
		if (localStorage.getItem("wallet-header") === "metamask" && ethereum) {
			window.web3 = new Web3(ethereum)
			// console.log(ethereum, "ethereum getting")
			// console.log(window.web3)
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
			ethereum.on("chainChanged", (chainId) => {

				// console.log(chainId, ethereum.selectedAddress, "this is chain id")
				console.log(chainId, "changes network")
				
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
				if (accounts[0]) {
					// console.log("changed account", accounts[0])
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
}