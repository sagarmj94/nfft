/** @format */

import React from "react"
import ReactLoading from "react-loading"

const Loading = ({ type, color, className }) => (
	<>
		<ReactLoading
			type={type}
			color={color}
			height={100}
			width={100}
			className={className}
		/>
	</>
)

export default Loading
