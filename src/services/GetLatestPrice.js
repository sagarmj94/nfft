// import Web3 from "web3";
// import config from "../config";
// export const getLatestPrice = async () => {
//   var web3 = new Web3(
//     new Web3.providers.HttpProvider(config.tokenContract.web3Endpoint)
//   );
//   const _contract = new web3.eth.Contract(
//     config.tokenContract.contractABI,
//     config.tokenContract.contractAddress
//   );
//   let value = await _contract.methods._getPriceFromOracle().call();
//   return value;
// };





import Web3 from "web3";
import getLatestPriceAbi from "../abi/getCurrentPrice.json";
import config from "../config";
export const getLatestPrice = async () => {
	var web3 = new Web3(
		new Web3.providers.HttpProvider(config.tokenContract.web3Endpoint)
	)
	const _contract = new web3.eth.Contract(
		getLatestPriceAbi,
		"0x0567f2323251f0aab15c8dfb1967e4e8a7d42aee"
	)
	// console.log(_contract)
	let value = await _contract.methods.latestRoundData().call()
	// console.log(_contract,value);
	return value
};
