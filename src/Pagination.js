import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import './pagination.scss';
const Pagination = (props) => {
	const {
		onPageChange,
		totalCount,
		siblingCount = 1,
		currentPage,
		pageSize,
		className,
		portFolio,
	} = props

	// console.log("---", totalCount)
	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	})

	if (currentPage === 0 || paginationRange.length < 2) {
		return null
	}

	const onNext = () => {
		onPageChange(currentPage + 1)
	}

	const onPrevious = () => {
		onPageChange(currentPage - 1)
	}

	let lastPage = paginationRange[paginationRange.length - 1]
	return (
		<ul
			className={classnames("pagination-container", { [className]: className })}
		>
			<li
				className={classnames("pagination-item", {
					disabled: currentPage === 1,
				})}
				onClick={onPrevious}
			>
				<div className='arrow left' />
				Prev
			</li>
			{paginationRange.map((pageNumber) => {
				if (pageNumber === DOTS) {
					return <li className='pagination-item dots'>&#8230;</li>
				}

				return (
					<li
						className={classnames("pagination-item", {
							selected: pageNumber === currentPage,
						})}
						onClick={() => onPageChange(pageNumber)}
					>
						{pageNumber}
					</li>
				)
			})}
			<li
				className={classnames("pagination-item", {
					disabled: currentPage === lastPage && portFolio === [],
					// disabled: (currentPage === lastPage && totalCount) === [],
				})}
				onClick={onNext}
			>
				<div className='arrow right' /> Next
			</li>
		</ul>
	)
};

export default Pagination;
