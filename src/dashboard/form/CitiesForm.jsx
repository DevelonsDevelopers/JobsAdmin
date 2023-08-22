import React, { useEffect, useState } from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { createCity, getCountrybyCity } from '../../store/actions/cityActions'
import { useNavigate } from 'react-router-dom'
import { AllCountries } from '../../store/actions/countryActions'



const CitiesForm = () => {
  const [cityData, setCityData] = useState({ name: '', description: '', country: '' })
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ClickInput = (e) => [
    setCityData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  ]
  // console.log(ClickInput)

  const handleSubmit = () => {
    dispatch(createCity(cityData))
    navigate('/cities')
  }

  const countries = useSelector(state => state.country.countries)

  useEffect(() => {
    console.log(countries)
  }, [countries])

  useEffect(() => {
    if (countries !== null || countries !== undefined || countries.length !== 0) {
      dispatch(AllCountries())
    }
  }, [dispatch])

  const countriesbycity = useSelector(state => state.city.cities)
  useEffect(() => {
    console.log(countriesbycity)
  }, [countriesbycity])

  useEffect(() => {
    dispatch(getCountrybyCity())
  }, [dispatch])

  return (
    <PortalLayout>
      <h1 className='text-center bg-gradient-to-r from-sky-600 to-cyan-400  text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>ADD CITY</h1>
      <div class="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 flex flex-col  my-2">
        <div class="-mx-3 md:flex mb-6 justify-center">
          <div class="md:w-[60%] px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
              Name
            </label>
            <input type="text" name="name" onChange={ClickInput} id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Name" required />
          </div>
        </div>
        <div class="-mx-3 md:flex mb-6 justify-center">
          <div class="md:w-[60%] px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
              Country
            </label>
            <select onChange={ClickInput} name='country' class="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            {/* <input type="text" name="country" onChange={ClickInput} id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Paste Country Name" required /> */}
          </div>
        </div>
        <div class="-mx-3 md:flex mb-6 justify-center">
          <div class="md:w-[60%] px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
              Description
            </label>
            <textarea name='description' onChange={ClickInput} class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 rounded-xl mb-3 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-Name" type="text" placeholder="Enter Description" />
          </div>
        </div>

        <div className='flex justify-center'>
          <button onClick={handleSubmit} className='bg-gradient-to-r from-sky-600 to-cyan-400 text-white font-[600] py-2 px-[3rem] mt-4 rounded-lg'>Submit</button>
        </div>

      </div>


    </PortalLayout>
  )
}

export default CitiesForm
