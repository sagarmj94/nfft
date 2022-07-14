/** @format */

import Web3 from "web3"
import GetGas from "./../components/GetGas"
export const getFromValue = (item, address) => {
	if (item.event_type === "created") {
		return "You"
	} else if (item?.event_type === "successful") {
		// console.log(item, "smnfb")
		let val = "--"
		if (item?.seller?.address === address) {
			val = "You"
		} else if (item?.seller?.user?.username) {
			val = item?.seller?.user?.username
		} else if (item?.seller?.address) {
			let str = item?.seller?.address
			val = str?.substring(2, 8).toUpperCase()
		} else {
			val = "--"
		}
		return val
	} else if (item?.event_type === "transfer") {
		let val = "--"
		if (item?.from_account?.address === address) {
			val = "You"
		} else if (item?.from_account?.user?.username) {
			val = item?.from_account?.user?.username
		} else if (item?.from_account?.address) {
			let str = item?.from_account?.address
			val = str?.substring(2, 8).toUpperCase()
		} else {
			val = "--"
		}
		return val
	} else if (item?.event_type === "cancelled") {
		let val = "--"
		if (item?.seller?.address === address) {
			val = "You"
		} else if (item?.seller?.user?.username) {
			val = item?.seller?.user?.username
		} else if (item?.seller?.address) {
			let str = item?.seller?.address
			val = str?.substring(2, 8).toUpperCase()
		} else {
			val = "--"
		}
		return val
	} else if (item?.event_type === "offer_entered") {
		let val = "--"
		if (item?.from_account?.address === address) {
			val = "You"
		} else if (item?.from_account?.user?.username) {
			val = item?.from_account?.user?.username
		} else if (item?.from_account?.address) {
			let str = item?.from_account?.address
			val = str?.substring(2, 8).toUpperCase()
		} else {
			val = "--"
		}
		return val
	} else if (item?.event_type === "bid_withdrawn") {
		let val = "--"
		if (item?.from_account?.address === address) {
			val = "You"
		} else if (item?.from_account?.user?.username) {
			val = item?.from_account?.user?.username
		} else if (item?.from_account?.address) {
			let str = item?.from_account?.address
			val = str?.substring(2, 8).toUpperCase()
		} else {
			val = "--"
		}
		return val
	}
}

export const getToValue = (item, address) => {
	// console.log("from utils", address)
	if (item.event_type === "created") {
		return "--"
	} else if (item?.event_type === "successful") {
		let val = "--"
		if (item?.winner_account?.address === address) {
			val = "You"
		} else if (item?.winner_account?.user?.username) {
			val = item?.winner_account?.user?.username
		} else if (item?.winner_account?.address) {
			let str = item?.winner_account?.address
			val = str?.substring(2, 8).toUpperCase()
		} else {
			val = "--"
		}
		return val
	} else if (item?.event_type === "transfer") {
		let val = "--"
		if (item?.to_account?.address === address) {
			val = "You"
		} else if (item?.to_account?.user?.username) {
			val = item?.to_account?.user?.username
		} else if (item?.to_account?.address) {
			let str = item?.to_account?.address
			val = str?.substring(2, 8).toUpperCase()
		} else {
			val = "--"
		}
		return val
	} else if (item?.event_type === "cancelled") {
		let val = "--"
		return val
	} else if (item?.event_type === "offer_entered") {
		let val = "--"
		return val
	} else if (item?.event_type === "bid_withdrawn") {
		let val = "--"
		return val
	}
}

export const getEvent = (item, address) => {
	if (item?.event_type === "created") {
		return "List"
	} else if (item?.event_type === "successful") {
		let val = "--"
		if (item?.winner_account?.address === address) {
			val = "Buy"
		} else {
			val = "Sale"
		}
		return val
	} else if (item?.event_type === "transfer") {
		let val = ""
		if (item?.transaction) {
			val = "Transfer"
		} else {
			val = "Minted"
		}
		return val
	} else if (item?.event_type === "cancelled") {
		return "Cancel"
	} else if (item?.event_type === "offer_entered") {
		return "Offer"
	} else if (item?.event_type === "bid_withdrawn") {
		return "Offer Cancel"
	}
}

export const getPrice = (item) => {
	if (item?.event_type === "created") {
		return item?.starting_price ? Number(item?.starting_price / 1e18) : "--"
	} else if (item?.event_type === "successful") {
		return item?.total_price ? Number(item?.total_price / 1e18) : "--"
	} else if (item?.event_type === "transfer") {
		return item?.total_price ? Number(item?.total_price / 1e18) : "--"
	} else if (item?.event_type === "cancelled") {
		return item?.total_price ? Number(item?.total_price / 1e18) : "--"
	} else if (item?.event_type === "offer_entered") {
		return item?.bid_amount ? Number(item?.bid_amount / 1e18) : "--"
	} else if (item?.event_type === "bid_withdrawn") {
		return item?.total_price ? Number(item?.total_price / 1e18) : "--"
	}
}

export const getFromProfile = (item, address) => {
	// console.log("item", item, "address", address)
	if (item.event_type === "created") {
		return item?.from_account?.profile_img_url
	} else if (item?.event_type === "successful") {
		if (item?.seller?.profile_img_url) {
			return item?.seller?.profile_img_url
		} else {
			return ""
		}
	} else if (item?.event_type === "transfer") {
		if (item?.from_account?.profile_img_url) {
			return item?.from_account?.profile_img_url
		} else {
			return ""
		}
	} else if (item.event_type === "cancelled") {
		return item?.seller?.profile_img_url
	} else if (item.event_type === "bid_withdrawn") {
		return item?.from_account?.profile_img_url
	} else if (item.event_type === "offer_entered") {
		return item?.from_account?.profile_img_url
	}
}

export const getToProfile = (item, address) => {
	// console.log("item", item, "address", address)
	if (item.event_type === "created") {
		return "https://cdn-icons-png.flaticon.com/512/149/149071.png"
	} else if (item?.event_type === "successful") {
		if (item?.winner_account?.profile_img_url) {
			return item?.winner_account?.profile_img_url
		} else {
			return "https://cdn-icons-png.flaticon.com/512/149/149071.png"
		}
	} else if (item?.event_type === "transfer") {
		if (item?.to_account?.profile_img_url) {
			return item?.to_account?.profile_img_url
		} else {
			return "https://cdn-icons-png.flaticon.com/512/149/149071.png"
		}
	} else if (item.event_type === "cancelled") {
		return "https://cdn-icons-png.flaticon.com/512/149/149071.png"
	} else if (item.event_type === "bid_withdrawn") {
		return "https://cdn-icons-png.flaticon.com/512/149/149071.png"
	} else if (item.event_type === "offer_entered") {
		return "https://cdn-icons-png.flaticon.com/512/149/149071.png"
	}
}

export async function getGasFee(hash) {
	window.web3 = new Web3(window.ethereum)
	try {
		const promise = new Promise((resolve, reject) => {
			window.web3.eth.getTransactionReceipt(hash).then((res) => {
				if (res.gasUsed) resolve(res)
				else reject(res)
			})
		})
		return await promise
	} catch (err) {
		throw err
	}
}

export const GetUSDExchangeRate = async () => {
	var requestOptions = { method: "GET", redirect: "follow" }
	return fetch(
		"https://api.coinbase.com/v2/exchange-rates?currency=ETH",
		requestOptions
	)
		.then((response) => response.json())
		.then((result) => {
			return result.data.rates.USD
		})
		.catch((error) => {
			return "error", error
		})
}

//profit holding solding
// export const getProfitTracker = (item, address) => {
// 	// console.log("itemp profit", item)
// 	if (item?.event_type === "successful") {
// 		return (
// 			<tr key={item?.id}>
// 				<td>
// 					<div className='media align-items-center'>
// 						{console.log("image ", item?.asset?.image_thumbnail_url)}
// 						<img
// 							className='mr-2 rounded'
// 							width='70px'
// 							// src='assets/images/nft-list-img-2.png'
// 							src={item?.asset?.image_thumbnail_url}
// 						/>
// 						<div className='media-body'>
// 							<h5 className='mt-0 mb-1 font-16 mb-0'>
// 								{/* Ertria Ophelia */}

// 								{getPlName(item)}
// 								<span className='badge badge-danger'>Sold</span>
// 							</h5>
// 							<a
// 								href=''
// 								className='btn btn-link p-0'
// 								data-toggle='modal'
// 								data-target='#selldetail'
// 							>
// 								View Detail
// 							</a>
// 						</div>
// 					</div>
// 				</td>
// 				<td>{new Date(item?.created_date).toLocaleString("en-US")}</td>
// 				<td>${getPrice(item)}</td>

// 				{
// 					<GetGas
// 						hash={
// 							item?.transaction?.transaction_hash
// 								? item?.transaction?.transaction_hash
// 								: ""
// 						}
// 					/>
// 				}

// 				<td>$260</td>
// 			</tr>
// 		)
// 	} else if (item?.event_type === "successful") {
// 		let val = (
// 			<tr key={item?.id}>
// 				<td>
// 					<div className='media align-items-center'>
// 						<img
// 							className='mr-2 rounded'
// 							width='70px'
// 							// src='assets/images/nft-list-img-2.png'
// 							src={item?.asset?.image_thumbnail_url}
// 						/>
// 						<div className='media-body'>
// 							<h5 className='mt-0 mb-1 font-16 mb-0'>
// 								{/* Ertria Ophelia{" "} */}
// 								{getPlName(item)}
// 								<span className='badge badge-danger'>Sold</span>
// 							</h5>
// 							<a
// 								href=''
// 								className='btn btn-link p-0'
// 								data-toggle='modal'
// 								data-target='#selldetail'
// 							>
// 								View Detail
// 							</a>
// 						</div>
// 					</div>
// 				</td>
// 				<td>{new Date(item?.created_date).toLocaleString("en-US")}</td>
// 				<td>${getPrice(item)}</td>$
// 				{
// 					<GetGas
// 						hash={
// 							item?.transaction?.transaction_hash
// 								? item?.transaction?.transaction_hash
// 								: ""
// 						}
// 					/>
// 				}
// 				<td>$260</td>
// 			</tr>
// 		)
// 		if (item?.winner_account?.address === address) {
// 			val = (
// 				<tr>
// 					<td>
// 						<div className='media align-items-center'>
// 							<img
// 								className='mr-2 rounded'
// 								width='70px'
// 								src='assets/images/nft-list-img-2.png'
// 							/>
// 							<div className='media-body'>
// 								<h5 className='mt-0 mb-1 font-16 mb-0'>
// 									Ertria Ophelia{" "}
// 									<span className='badge badge-danger'>Sold</span>
// 								</h5>
// 								<a
// 									href=''
// 									className='btn btn-link p-0'
// 									data-toggle='modal'
// 									data-target='#selldetail'
// 								>
// 									View Detail
// 								</a>
// 							</div>
// 						</div>
// 					</td>
// 					<td>{new Date(item?.created_date).toLocaleString("en-US")}</td>
// 					<td>$200</td>
// 					<td>$19</td>
// 					<td>$260</td>
// 				</tr>
// 			)
// 		} else {
// 			val = (
// 				<tr>
// 					<td>
// 						<div className='media align-items-center'>
// 							<img
// 								className='mr-2 rounded'
// 								width='70px'
// 								src='assets/images/nft-list-img-2.png'
// 							/>
// 							<div className='media-body'>
// 								<h5 className='mt-0 mb-1 font-16 mb-0'>
// 									Ertria Ophelia{" "}
// 									<span className='badge badge-danger'>Sold</span>
// 								</h5>
// 								<a
// 									href=''
// 									className='btn btn-link p-0'
// 									data-toggle='modal'
// 									data-target='#selldetail'
// 								>
// 									View Detail
// 								</a>
// 							</div>
// 						</div>
// 					</td>
// 					<td>{new Date(item?.created_date).toLocaleString("en-US")}</td>
// 					<td>$200</td>
// 					<td>$19</td>
// 					<td>$260</td>
// 				</tr>
// 			)
// 		}
// 		return val
// 	} else {
// 		return (
// 			<tr key={item?.id}>
// 				<td className=''>
// 					<div className='media align-items-center'>
// 						<img
// 							className='mr-2 rounded'
// 							width='70px'
// 							// src='assets/images/nft-list-img-1.png'
// 							src={item?.asset?.image_thumbnail_url}
// 						/>
// 						<div className='media-body'>
// 							<h5 className='mt-0 mb-1 font-16 mb-0'>
// 								{getPlName(item)}
// 								<span className='badge badge-success'>Holding</span>
// 							</h5>
// 						</div>
// 					</div>
// 				</td>
// 				<td>{new Date(item?.created_date).toLocaleString("en-US")}</td>
// 				<td>${getPrice(item)}</td>

// 				{
// 					<GetGas
// 						hash={
// 							item?.transaction?.transaction_hash
// 								? item?.transaction?.transaction_hash
// 								: ""
// 						}
// 					/>
// 				}

// 				<td>$260</td>
// 			</tr>
// 		)
// 	}
// }

//profit name
export const getPlName = (item) => {
	if (item?.event_type === "successful") {
		return item?.seller?.user?.username !== null
			? item?.seller?.user?.username
			: "--"
	} else if (item?.event_type === "transfer") {
		// console.log("event", item?.event_type, "username", item?.from_account)
		return item?.from_account?.user?.username !== null &&
			item?.from_account?.user?.username !== "NullAddress"
			? item?.from_account?.user?.username
			: "--"
	} else if (item?.event_type === "cancelled") {
		return item?.from_account !== null
			? item?.from_account?.user?.username
			: "--"
	} else if (item?.event_type === "offer_entered") {
		return item?.from_account?.user?.username !== null
			? item?.from_account?.user?.username
			: "--"
	} else if (item?.event_type === "bid_withdrawn") {
		return item?.from_account?.user?.username !== null
			? item?.from_account?.user?.username
			: "--"
	} else if (item?.event_type === "created") {
		return item?.from_account?.user?.username !== null
			? item?.from_account?.user?.username
			: "--"
	}
}

//getting price in doller
export const getPriceDoller = (item) => {
	if (item?.event_type === "created") {
		return item?.starting_price ? Number(item?.starting_price / 1e18) : "--"
	} else if (item?.event_type === "successful") {
		return item?.total_price ? Number(item?.total_price / 1e18) : "--"
	} else if (item?.event_type === "transfer") {
		return item?.total_price ? Number(item?.total_price / 1e18) : "--"
	} else if (item?.event_type === "cancelled") {
		return item?.total_price ? Number(item?.total_price / 1e18) : "--"
	} else if (item?.event_type === "offer_entered") {
		return item?.bid_amount ? Number(item?.bid_amount / 1e18) : "--"
	} else if (item?.event_type === "bid_withdrawn") {
		return item?.total_price ? Number(item?.total_price / 1e18) : "--"
	}
}

// geting profit value
export const getProfitLoss = (item, currentTableData, collectionSlug) => {
	let filterData = []
	let assetId = item?.asset?.id
	let userAddress = item.seller.address

	let data = currentTableData?.filter(
		(txnData) =>
			(txnData?.asset?.id === assetId &&
				userAddress === txnData.seller?.address) ||
			(userAddress === txnData.from_account?.address &&
				collectionSlug === txnData.collection_slug)
	)
}
