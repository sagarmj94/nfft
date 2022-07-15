import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {} from "react-redux"
const Protected = ({ Component }) => {
	const wallletData = useSelector((state) => state.walletReducer.userData)

	const navigate = useNavigate()

	useEffect(() => {
		// const address = localStorage.getItem("wallet-address")
		const address = wallletData?.address
		console.log("address from protected routes", address === "")

		// if (
		// 	(address === "false" && wallletData?.address === "") ||
		// 	wallletData?.address === null ||
		// 	wallletData?.address === undefined
		if (address === "") {
			// <Navigate to={'/connect-wallet'} />
			navigate("/connect-wallet")
		} else {
			return Component
		}
	}, [])

	window.addEventListener("beforeunload", () => {
		localStorage.removeItem("wallet-address")
		dispatch(
			walletConnectRequestSuccess({
				address: "",
				balance: 0,
			})
		)
	})

	return (
		<div>
			<Component />
		</div>
	)
}

export default Protected