import React, { useEffect, useState } from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'
import { createJob } from '../../store/actions/jobActions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AllCountries } from '../../store/actions/countryActions'
import { AllCities, getCitybyCountry } from '../../store/actions/cityActions'
import { AllCategories } from '../../store/actions/categoryActions'

const JobsForm = () => {
    const [jobData, setJobData] = useState()
    const [country, setCountry] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const ClickInput = (e) => {
        setJobData(prev => ({ ...prev, [e.target.name]: e.target.value }))
        setCountry(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createJob(jobData))
        navigate('/jobs')
    }

    const countries = useSelector(state => state.country.countries)
    // useEffect(() => {
    //     console.log(countries)
    // }, [countries])

    useEffect(() => {
        dispatch(AllCountries())
    }, [dispatch])

    // const cities = useSelector(state => state.city.cities)
    // // useEffect(() => {
    // //     console.log(cities)
    // // }, [cities])

    // useEffect(() => {
    //     dispatch(AllCities())
    // }, [dispatch])

    const categories = useSelector(state => state.category.categories)
    // useEffect(() => {
    //     console.log(categories)
    // }, [categories])

    useEffect(() => {
        dispatch(AllCategories())
    }, [dispatch])

    const fetchCitybyCountry = useSelector(state => state.city.cities)
    useEffect(() => {
        console.log(fetchCitybyCountry)
    }, [fetchCitybyCountry])

    useEffect(() => {
        if (country) {
            dispatch(getCitybyCountry(country))
        }
    }, [dispatch, country])



    return (
        <PortalLayout>
        <h1 className='text-center bg-gradient-to-r from-sky-600 to-cyan-400  text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>ADD JOBS</h1>
        <form class="bg-white shadow-md rounded-xl px-[10rem] pt-6 pb-8 mb-4 flex flex-col  my-2">
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Title
              </label>
              <input type="text" name="name" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
            </div>
          </div>
  
          <div className='grid grid-cols-2 gap-10 mt-2'>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Experience
                </label>
                <input type="email" name="email" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Email" required />
              </div>
            </div>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Qualification
                </label>
                <input type="number" name="phone" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Contact Number " required />
              </div>
            </div>
  
          </div>
  
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0 mt-0">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Type
              </label>
              <input type="password" name="password" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
            </div>
          </div>
  
          <div class="grid grid-cols-2 gap-10 mt-[-12px]">
            <div class="md:w-[100%] ">
                <label className="block text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Country
                </label>
                <select onChange={ClickInput} name='country' class="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                  <option>Select Country</option>
                  {countries?.map((value) => {
                    return <option value={value.id}>{value.name}</option>
                  })}
  
                </select>
            </div>
            <div class="md:w-[100%] ">
                <label className="block text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  City
                </label>
                <select onChange={ClickInput} name='city' class="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                  <option>Select City</option>
                  {fetchCitybyCountry?.map((value) => {
                    return <option value={value.id}>{value.name}</option>
                  })}
  
                </select>
            </div>
          </div>
          <div className='flex-col mt-4'>
            <div className='grid grid-cols-2 gap-10 '>
            <div class="md:w-[100%] ">
                <label className="block text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Category
                </label>
                <select onChange={ClickInput} name='city' class="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                  <option>Select City</option>
                  {fetchCitybyCountry?.map((value) => {
                    return <option value={value.id}>{value.name}</option>
                  })}
  
                </select>
            </div>
              <div className="-mx-3  mb-6 ">
                <div className="w-[100%] px-3 mb-6 md:mb-0">
                  <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                    Tags
                  </label>
                  <input type="text" name="size" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Size" required />
                </div>
              </div>
  
            </div>          
          <div className="-mx-3 mt-[-.6rem] mb-7">
            <div className="w-[100%] px-3 mb-6 md:mb-0 mt-0">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Address
              </label>
              <input type="password" name="password" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-10 mt-2'>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Skills
                </label>
                <input type="email" name="email" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Email" required />
              </div>
            </div>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Work Day
                </label>
                <input type="number" name="phone" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Contact Number " required />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-10 mt-2'>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Work Time
                </label>
                <input type="time" name="email" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Email" required />
              </div>
            </div>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Date
                </label>
                <input type="date" name="phone" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Contact Number " required />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-10 mt-2'>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Salary
                </label>
                <input type="email" name="email" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Email" required />
              </div>
            </div>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                 Company Role
                </label>
                <input type="text" name="phone" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Contact Number " required />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-10 mt-2'>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Link
                </label>
                <input type="text" name="email" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Email" required />
              </div>
            </div>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Designation
                </label>
                <input type="text" name="phone" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Contact Number " required />
              </div>
            </div>
          </div>

            <div className="-mx-3 ">
              <div className="w-[100%]  px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-Name">
                  Description
                </label>
                <textarea name='headquater' rows='4' onChange={ClickInput} className="appearance-none block w-full bg-gray-50  border-gray-lighter rounded py-3 px-4 rounded-[9px] mb-3 border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer text-[14px]" id="grid-Name" type="text" placeholder="Enter HeadQuarter Addres" />
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

export default JobsForm
