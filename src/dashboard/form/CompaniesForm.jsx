import React, { useEffect, useState } from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'
import { useDispatch, useSelector } from 'react-redux'
import { createCompany } from '../../store/actions/companyActions';
import { useNavigate } from 'react-router-dom';
import { AllCountries } from '../../store/actions/countryActions';
import { getCitybyCountry } from '../../store/actions/cityActions';
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify';


const options = [
  { label: 'Individual' },
  { label: 'Organization' },

];


const CompaniesForm = () => {
  const [companyData, setCompanyData] = useState({ name: '', size: '', city: '', country: '', phone: '', email: '', password: '', headquater: '', type: '' });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValue, setValue] = useState("")
  const [selectedValue, setSelectedValue] = useState(null)

  const [inputCityValue, setCityValue] = useState("")
  const [selectedCityValue, setSelectedCityValue] = useState(null)

  //onChange function
  const ClickInput = (e) => {
    setCompanyData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  //fetching countries
  const countries = useSelector(state => state.country.countries)
  // useEffect(() => {
  //   console.log(countries)
  // }, [countries])

  useEffect(() => {
    dispatch(AllCountries())
  }, [dispatch])

  useEffect(() => {
    setCompanyData({ ...companyData, country: selectedValue?.id })
  }, [selectedValue])

  //fetching city by country
  const cityByCountry = useSelector(state => state.city.citybycountry)

  // useEffect(() => {
  //   console.log(cityByCountry);
  // }, [cityByCountry])
  useEffect(() => {
    if (selectedValue?.id) {
      dispatch(getCitybyCountry(selectedValue?.id))
    }
  }, [dispatch, selectedValue?.id])

  useEffect(() => {
    setCompanyData({ ...companyData, city: selectedCityValue?.id })
  }, [selectedCityValue])


  //Update function
  const handleSubmit = (e) => {
    e.preventDefault()
    if (companyData.name && companyData.size && companyData.city && companyData.country && companyData.phone && companyData.email && companyData.password && companyData.headquater && companyData.type) {
      dispatch(createCompany(companyData))
      navigate('/companies')
    } else {
      toast.error('Enter Required Data', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  //input values
  const handleInputChange = (value) => {
    setValue(value)
  }

  const handleChange = (value) => {
    setSelectedValue(value)
  }
  const cityInputChange = (value) => {
    setCityValue(value)
  }

  const cityChange = (value) => {
    setSelectedCityValue(value)
  }
  //=================================
  return (
    <PortalLayout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h1 className='text-center bg-gradient-to-r from-sky-600 to-cyan-400  text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>ADD COMPANY</h1>
      <form className="bg-white shadow-md rounded-xl px-[10rem] pt-6 pb-8 mb-4 flex flex-col  my-2">
        <div className="-mx-3 mt-[-1.2rem] mb-6">
          <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
            <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
              Name
            </label>
            <input type="text" name="name" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
          </div>
        </div>

        <div className='grid grid-cols-2 gap-10 mt-2'>
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                Email
              </label>
              <input type="email" name="email" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Email" required />
            </div>
          </div>
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                Phone
              </label>
              <input type="number" name="phone" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Contact Number " required />
            </div>
          </div>

        </div>

        <div className="-mx-3 mt-[-1.2rem] mb-6">
          <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
            <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
              Password
            </label>
            <input type="password" name="password" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Password" required />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 mt-[-12px]">
          <div className="md:w-[100%] ">
            <label className="block text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
              Country
            </label>
            <Select
              cacheOptions
              defaultOptions
              options={countries?.map((val) => {
                return {
                  id: val.id,
                  name: val.name
                }
              })}
              value={selectedValue}
              getOptionLabel={(e) => e.name}
              getOptionValue={(e) => e.id}
              onInputChange={handleInputChange}
              onChange={handleChange}
              //  name='country'
              id="grid-state"
            >
            </Select>
          </div>
          <div className="md:w-[100%] ">
            <label className="block text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
              City
            </label>
            <Select
              cacheOptions
              defaultOptions
              options={cityByCountry?.map((val) => {
                return {
                  id: val.id,
                  name: val.name
                }
              })}
              value={selectedCityValue}
              getOptionLabel={(e) => e.name}
              getOptionValue={(e) => e.id}
              onInputChange={cityInputChange}
              onChange={cityChange}
              //  name='country'
              id="grid-state"
            >
            </Select>
          </div>
        </div>
        <div className='flex-col mt-4'>
          <div className='grid grid-cols-2 gap-10 mt-4'>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                  Type
                </label>
                <select name='type' onClick={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state"
                >
                  <option>Select Type</option>
                  <option>Individual</option>
                  <option>Organization</option>
                </select>
              </div>
            </div>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                  Size
                </label>
                <input type="text" name="size" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Size" required />
              </div>
            </div>
          </div>
          <div className="-mx-3 ">
            <div className="w-[100%]  px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-Name">
                HeadQuater
              </label>
              <input type="text" name="headquater" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Address" required />
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <button onClick={handleSubmit} className='bg-gradient-to-r from-sky-600 to-cyan-400 text-white font-[600] py-2 px-[3rem] mt-4 rounded-lg'>Submit</button>
        </div>

      </form>

    </PortalLayout>
  )
}

export default CompaniesForm
