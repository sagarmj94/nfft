/** @format */

import { INVOICE_ADDING } from "../index"

export const invoiceAdding = (invoiceData) => {
	return {
		type: INVOICE_ADDING,
		payload: invoiceData,
	}
}
