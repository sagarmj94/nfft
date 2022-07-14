/** @format */

import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
const { REACT_APP_SETTING_API } = process.env


const Settings = () => {
	console.log(REACT_APP_SETTING_API)
	const subscription = useSelector((state) => state.planReducer)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	const onSubmit = (data) => {
		var myHeaders = new Headers()
		myHeaders.append("Accept", "application/json")
		myHeaders.append("API-TOKEN", "fV1DJNNvY9Y3M72l2CEmKAn8O+ygu2Ka")

		var formdata = new FormData()
		formdata.append("name", data?.name)
		formdata.append("email", data?.email)
		formdata.append("phone", data?.phoneNumber)
		formdata.append("profile_picture", data.file[0])
		formdata.append("subscription_plan", data.plan)
		formdata.append("base_currency", data?.currency)

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: formdata,
			redirect: "follow",
		}

		fetch(
			"https://demo.indapoint.in/nft_api/public/api/editUserProfile/1",
			requestOptions
		)
			.then((response) => response.text())
			.then((result) => console.log(result))
			.catch((error) => console.log("error", error))
		navigate("/")
	}

	const currencyData = [
		{
			country: "Afghanistan",
			currency_code: "AFN",
		},
		{
			country: "Albania",
			currency_code: "ALL",
		},
		{
			country: "Algeria",
			currency_code: "DZD",
		},
		{
			country: "American Samoa",
			currency_code: "USD",
		},
		{
			country: "Andorra",
			currency_code: "EUR",
		},
		{
			country: "Angola",
			currency_code: "AOA",
		},
		{
			country: "Anguilla",
			currency_code: "XCD",
		},
		{
			country: "Antarctica",
			currency_code: "XCD",
		},
		{
			country: "Antigua and Barbuda",
			currency_code: "XCD",
		},
		{
			country: "Argentina",
			currency_code: "ARS",
		},
		{
			country: "Armenia",
			currency_code: "AMD",
		},
		{
			country: "Aruba",
			currency_code: "AWG",
		},
		{
			country: "Australia",
			currency_code: "AUD",
		},
		{
			country: "Austria",
			currency_code: "EUR",
		},
		{
			country: "Azerbaijan",
			currency_code: "AZN",
		},
		{
			country: "Bahamas",
			currency_code: "BSD",
		},
		{
			country: "Bahrain",
			currency_code: "BHD",
		},
		{
			country: "Bangladesh",
			currency_code: "BDT",
		},
		{
			country: "Barbados",
			currency_code: "BBD",
		},
		{
			country: "Belarus",
			currency_code: "BYR",
		},
		{
			country: "Belgium",
			currency_code: "EUR",
		},
		{
			country: "Belize",
			currency_code: "BZD",
		},
		{
			country: "Benin",
			currency_code: "XOF",
		},
		{
			country: "Bermuda",
			currency_code: "BMD",
		},
		{
			country: "Bhutan",
			currency_code: "BTN",
		},
		{
			country: "Bolivia",
			currency_code: "BOB",
		},
		{
			country: "Bosnia and Herzegovina",
			currency_code: "BAM",
		},
		{
			country: "Botswana",
			currency_code: "BWP",
		},
		{
			country: "Bouvet Island",
			currency_code: "NOK",
		},
		{
			country: "Brazil",
			currency_code: "BRL",
		},
		{
			country: "British Indian Ocean Territory",
			currency_code: "USD",
		},
		{
			country: "Brunei",
			currency_code: "BND",
		},
		{
			country: "Bulgaria",
			currency_code: "BGN",
		},
		{
			country: "Burkina Faso",
			currency_code: "XOF",
		},
		{
			country: "Burundi",
			currency_code: "BIF",
		},
		{
			country: "Cambodia",
			currency_code: "KHR",
		},
		{
			country: "Cameroon",
			currency_code: "XAF",
		},
		{
			country: "Canada",
			currency_code: "CAD",
		},
		{
			country: "Cape Verde",
			currency_code: "CVE",
		},
		{
			country: "Cayman Islands",
			currency_code: "KYD",
		},
		{
			country: "Central African Republic",
			currency_code: "XAF",
		},
		{
			country: "Chad",
			currency_code: "XAF",
		},
		{
			country: "Chile",
			currency_code: "CLP",
		},
		{
			country: "China",
			currency_code: "CNY",
		},
		{
			country: "Christmas Island",
			currency_code: "AUD",
		},
		{
			country: "Cocos (Keeling) Islands",
			currency_code: "AUD",
		},
		{
			country: "Colombia",
			currency_code: "COP",
		},
		{
			country: "Comoros",
			currency_code: "KMF",
		},
		{
			country: "Congo",
			currency_code: "XAF",
		},
		{
			country: "Cook Islands",
			currency_code: "NZD",
		},
		{
			country: "Costa Rica",
			currency_code: "CRC",
		},
		{
			country: "Croatia",
			currency_code: "HRK",
		},
		{
			country: "Cuba",
			currency_code: "CUP",
		},
		{
			country: "Cyprus",
			currency_code: "EUR",
		},
		{
			country: "Czech Republic",
			currency_code: "CZK",
		},
		{
			country: "Denmark",
			currency_code: "DKK",
		},
		{
			country: "Djibouti",
			currency_code: "DJF",
		},
		{
			country: "Dominica",
			currency_code: "XCD",
		},
		{
			country: "Dominican Republic",
			currency_code: "DOP",
		},
		{
			country: "East Timor",
			currency_code: "USD",
		},
		{
			country: "Ecuador",
			currency_code: "ECS",
		},
		{
			country: "Egypt",
			currency_code: "EGP",
		},
		{
			country: "El Salvador",
			currency_code: "SVC",
		},
		{
			country: "England",
			currency_code: "GBP",
		},
		{
			country: "Equatorial Guinea",
			currency_code: "XAF",
		},
		{
			country: "Eritrea",
			currency_code: "ERN",
		},
		{
			country: "Estonia",
			currency_code: "EUR",
		},
		{
			country: "Ethiopia",
			currency_code: "ETB",
		},
		{
			country: "Falkland Islands",
			currency_code: "FKP",
		},
		{
			country: "Faroe Islands",
			currency_code: "DKK",
		},
		{
			country: "Fiji Islands",
			currency_code: "FJD",
		},
		{
			country: "Finland",
			currency_code: "EUR",
		},
		{
			country: "France",
			currency_code: "EUR",
		},
		{
			country: "French Guiana",
			currency_code: "EUR",
		},
		{
			country: "French Polynesia",
			currency_code: "XPF",
		},
		{
			country: "French Southern territories",
			currency_code: "EUR",
		},
		{
			country: "Gabon",
			currency_code: "XAF",
		},
	]

	return (
		<>
			<Header />
			<Navbar />
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='content-page home-page'>
					<div className='content pt-4'>
						<div className='container-fluid'>
							<h2 className='page-title pl-3'>Settings</h2>
							<div className='card m-b-30 m-t-30 mt-md-0 card-normal'>
								<div className='card-body'>
									<h4 className='mt-0 header-title mb-4'>Settings</h4>
									<div className='form-group row'>
										<label htmlFor='name' className='col-sm-2 col-form-label'>
											Name
										</label>
										<div className='col-sm-10'>
											<input
												className='form-control form-control-lg'
												type='text'
												id='name'
												name='name'
												value={subscription.name}
												{...register("name", {
													onChange: (e) =>
														dispatch({
															type: `SELECTED_PLANS`,
															name: e.target.value,
														}),
												})}
												placeholder='Enter your Name'
											/>
										</div>
									</div>
									<div className='form-group row'>
										<label htmlFor='Email' className='col-sm-2 col-form-label'>
											Email
										</label>
										<div className='col-sm-10'>
											<input
												className='form-control form-control-lg'
												id='email'
												type='email'
												name='email'
												value={subscription.email}
												placeholder='Enter your Email'
												{...register("email", {
													onChange: (e) =>
														dispatch({
															type: `SELECTED_PLANS`,
															email: e.target.value,
														}),
												})}
											/>
										</div>
									</div>
									<div className='form-group row'>
										<label htmlFor='Phone' className='col-sm-2 col-form-label'>
											Phone
										</label>
										<div className='col-sm-10'>
											<input
												className='form-control form-control-lg'
												// type='text'
												id='phoneNumber'
												type='number'
												name='phoneNumber'
												value={subscription.phoneNumber}
												placeholder='Enter your Phone'
												{...register("phoneNumber", {
													onChange: (e) =>
														dispatch({
															type: `SELECTED_PLANS`,
															phoneNumber: e.target.value,
														}),
												})}
											/>
										</div>
									</div>

									<div className='form-group row'>
										<label
											htmlFor='Phone'
											className='col-sm-2 col-form-label mt-2'
										>
											Profile Picture
										</label>
										<div className='col-sm-10'>
											<span>
												<img
													src={
														subscription.file
															? subscription.file
															: "https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg"
													}
													alt=''
													width='60'
													name='picture'
													className='rounded-circle mr-2 img-thumbnail'
												/>
											</span>
											<span>
												<input
													type='file'
													name='file'
													className='form-control-file d-inline-block w-auto ml-4'
													id='exampleFormControlFile1'
													{...register("file", {
														onChange: (e) =>
															dispatch({
																type: `SELECTED_PLANS`,
																file: URL.createObjectURL(e.target.files[0]),
															}),
													})}
												/>
											</span>
										</div>
									</div>
									<div className='form-group row'>
										<label
											htmlFor='Phone'
											className='col-sm-2 col-form-label mt-2'
										>
											Subscription
										</label>
										<div className='col-sm-10 pt-2'>
											<span className='font-weight-700 mr-2'>Prime</span>
											<Link
												to={"/change-subscription"}
												className='btn btn-theme-light'
											>
												Change Subscription
											</Link>
										</div>
									</div>
									<div className='form-group row'>
										<label htmlFor='Phone' className='col-sm-2 col-form-label'>
											Base Currency
										</label>
										<div className='col-sm-10'>
											<select
												{...register("currency", {
													onChange: (e) =>
														dispatch({
															type: `SELECTED_PLANS`,
															currency: e.target.value,
														}),
												})}
												className='form-control form-select form-control-lg'
											>
												<option>Select Currency</option>
												{currencyData?.map((items, key) => {
													return (
														<>
															<option key={items.currency_code}>
																{items.currency_code}
															</option>
														</>
													)
												})}
											</select>
										</div>
									</div>
									<div className='form-group row'>
										<div className='col-sm-10 offset-sm-2'>
											<button className='btn btn-theme btn-lg mt-4 waves-effect wave-light'>
												Submit
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
			<Footer />
		</>
	)
}

export default Settings