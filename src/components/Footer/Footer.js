/** @format */

import React from "react"

const Footer = () => {
	
	return (
		<>
			<footer className='footer'>
				Copyright © {new Date().getFullYear()} NFT All rights reserved.
			</footer>
			<div
				className='modal fade'
				id='comingsoon'
				tabIndex='-1'
				role='dialog'
				aria-labelledby='comingsoon'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-lg' role='document'>
					<div className='modal-content'>
						<div class='modal-header'>
							<button
								type='button'
								class='close'
								data-dismiss='modal'
								aria-label='Close'
							>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div className='modal-body'>
							<img
								alt=''
								src='https://demo.indapoint.in/nft/comingsoon.jpg'
								width='100%'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer
