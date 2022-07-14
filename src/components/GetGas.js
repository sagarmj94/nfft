/** @format */

import React, {useEffect,useState} from "react"
import { getGasFee, GetUSDExchangeRate } from "../utils/CommonFunctions"

const GetGas = ({ hash }) => {
	// console.log("is hash..?", hash)
	const [gasVal, setGasVal] = useState("")


	
	useEffect(async () => {
		if (hash && hash !== undefined && hash !== "" && hash !== null) {
			let data = await getGasFee(hash).then((res, err) => {
				if (res) return res
				else return "==="
			})

			// console.log(data, "adsadsfsdfsdfsd")

			if (data && data.effectiveGasPrice && data.gasUsed) {
				let gasValue = data.effectiveGasPrice * data.gasUsed

				// setGasVal(window.web3.utils.fromWei(gasValue?.toString(), "ether"))
				let usdValue = await GetUSDExchangeRate(hash).then((res, err) => {
					if (res) return res
					else return "==="
				})
				let USD =
					parseFloat(usdValue) *
					parseFloat(window.web3.utils.fromWei(gasValue?.toString(), "ether"))
				setGasVal(USD.toFixed(2))
			} else {
				setGasVal(false)
			}
		} else {
			setGasVal(false)
		}
	}, [hash])


	return (
		<>
			<td className={gasVal ?"text-success":""}>{gasVal ? `$${gasVal}`:"--"}</td>
		</>
	)
}

export default GetGas
