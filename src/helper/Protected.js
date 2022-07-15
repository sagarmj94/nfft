import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { walletConnectRequestSuccess } from "../redux/actions/WalletActions"

const Protected = ({ Component }) => {
	const wallletData = useSelector((state) => state.walletReducer.userData)

	const navigate = useNavigate()
	const dispatch = useDispatch()
	useEffect(() => {
		// const address = localStorage.getItem("wallet-address")
		const address = wallletData?.address
		console.log("address from protected routes", address === "")

		// if (
		// 	(address === "false" && wallletData?.address === "") ||
		// 	wallletData?.address === null ||
		// 	wallletData?.address === undefined
		if (address?.length < 3) {
			// <Navigate to={'/connect-wallet'} />
			navigate("/connect-wallet")
		} else {
			return Component
		}
	}, [])

	return (
		<div>
			<Component />
		</div>
	)
}

export default Protected