import React, { useEffect, useState } from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'
import { useDispatch, useSelector } from 'react-redux'
import { createCompany } from '../../store/actions/companyActions';
import { useNavigate } from 'react-router-dom';
import { AllCountries, getCountry } from '../../store/actions/countryActions';

const CompaniesForm = () => {
  const [companyData ,setCompanyData] = useState({name: '', size: '', city: '', country: '', phone: '', email: '', password: '', headquter: '', type: '' });
  const [country, setCountry] = useState()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ClickInput = (e) => {
    setCompanyData(prev=> ({...prev, [e.target.name]: e.target.value}))
  }
  console.log(companyData)

  const handleSubmit =() => {
    dispatch(createCompany(companyData))
    navigate('/companies')
  }

  const fetch = useSelector(state=> state.country.countries)
  useEffect(() => {
    console.log(fetch)
  }, [fetch])

  // const getCountryData = () => {
  //   setCountry(AllCountries())
  // }
  // console.log(country)



  return (
  <PortalLayout>
       <h1 className='text-center bg-gradient-to-r from-sky-600 to-cyan-400  text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>ADD COMPANY</h1>
    <form class="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 flex flex-col  my-2">

  <div class="-mx-3 md:flex mb-6 justify-center">
    <div class="md:w-full px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
        Name
      </label>
      <input onChange={ClickInput} type="text" name="name" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
    </div>
      
  </div>
  <div class="-mx-3 md:flex mb-6 justify-center">
    <div class="md:w-[60%] px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
        Email
      </label>
      <input onChange={ClickInput} type="email" name="email" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Email " required />
    </div>
      <div class="md:w-[60%] px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
        Password
      </label>
      <input onChange={ClickInput} type="password" name="password" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Password " required />
    </div>
  </div>

  <div class="-mx-3 md:flex mb-6 justify-center">
    <div class="md:w-[60%] px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
        City
      </label>
      {/* <input onChange={ClickInput} type="text" name="city" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Password " required /> */}

      <select onChange={ClickInput} name='city' class="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
          </div>
      <div class="md:w-[60%] px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
      Country
      </label>
      {/* <input onChange={ClickInput} type="text" name="country" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Password " required /> */}

      <select onChange={ClickInput} name='country' class="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select> 
                            </div>
  </div>
  <div class="-mx-3 md:flex mb-6 justify-center">
    <div class="md:w-[60%] px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
        Type
      </label>
      <input onChange={ClickInput} name='type' type="text"  id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Your Type" required />
    </div>
      <div class="md:w-[60%] px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
      Size
      </label>
      <input onChange={ClickInput} name='size' type="text" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Employe " required />
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6 justify-center">
    <div class="md:w-full px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
        Phone
      </label>
      <input onChange={ClickInput}  type="number" name="phone" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Headquater Address" required />
    </div> 
  </div>
  <div class="-mx-3 md:flex mb-6 justify-center">
    <div class="md:w-full px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
        HeadQuater
      </label>
      <input onChange={ClickInput}  type="text" name="headquter" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Headquater Address" required />
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
