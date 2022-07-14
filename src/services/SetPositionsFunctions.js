import Web3 from "web3";
import config from "../config";
import BigNumber from "bignumber.js";
export const setPositionsFunction = async (
  address,
  epoch,
  balance,
  position
) => {
	let selectedAccount

	let provider = window.ethereum
	// console.log(provider);
	if (typeof provider !== "undefined") {
		provider
			.request({ method: "eth_requestAccounts" })
			.then((accounts) => {
				selectedAccount = accounts[0]
				// console.log(`Selected account is ${selectedAccount}`)
			})
			.catch((err) => {
				console.log(err)
				return
			})

		window.ethereum.on("accountsChanged", function (accounts) {
			selectedAccount = accounts[0]
			// console.log(`Selected account changed to ${selectedAccount}`)
		})
	}
	const web3 = new Web3(provider)
	const _contract = new web3.eth.Contract(
		config.tokenContract.contractABI,
		config.tokenContract.contractAddress
	)
	let x = new BigNumber(balance)

	let amount = x.shiftedBy(18)
	if (position === "UP") {
		await _contract.methods
			.betBull(epoch)
			.send({
				from: address,
				value: amount,
			})
			.then(function (receipt) {
				// console.log(receipt)
			})
			.catch((err) => {
				console.log(err)
			})
	} else {
		await _contract.methods
			.betBear(epoch)
			.send({
				from: address,
				value: amount,
			})
			.then(function (receipt) {
				// console.log(receipt)
			})
			.catch((err) => {
				console.log(err)
			})
	}
};
