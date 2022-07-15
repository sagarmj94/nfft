import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom'

const Protected = ({ Component }) => {
    const wallletData = useSelector((state) => state.walletReducer.userData)

    const navigate = useNavigate()
		console.log("wallet data layaout", typeof wallletData)
		useEffect(() => {
			// const address = wallletData?.address
			const address = localStorage.getItem("wallet-address")
			console.log("address from protected routes", address)

			// if (
			// 	(address === "false" && wallletData?.address === "") ||
			// 	wallletData?.address === null ||
			// 	wallletData?.address === undefined
			// ) {
			if (address === "false") {
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