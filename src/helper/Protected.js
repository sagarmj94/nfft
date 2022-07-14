import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom'

const Protected = ({ Component }) => {
    const wallletData = useSelector((state) => state.walletReducer.userData)

    // console.log("routerrr", Component)

    const navigate = useNavigate();

    useEffect(() => {
        const address = localStorage.getItem("wallet-address")

        if (address === "false" && wallletData?.address === '' || wallletData?.address === null || wallletData?.address === undefined) {
            // <Navigate to={'/connect-wallet'} />
            navigate('/connect-wallet')
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