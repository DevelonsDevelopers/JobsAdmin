import React, { useEffect, useState } from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCountry, updateCountry } from '../../store/actions/countryActions';

const CountryEdit = () => {

  const [countryData, setCountryData] = useState({ name: '', flag: '', description: '' })
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const params = useLocation();
  const id = params.state.ID;
  // console.log(id)


  const country = useSelector(state => state.country.country)

  useEffect(() => {
    dispatch(getCountry(id))
  }, [dispatch])

  useEffect(() => {
    console.log(country)
    if (country) {
      setCountryData({ name: country?.name, flag: country?.flag, description: country?.description })
      // console.log(countryData)
    }
  }, [country])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateCountry(id,countryData))
    navigate('/countries')
  }

  const ClickInput = (e) => {
    setCountryData(prev => ({...prev,[e.target.name]: e.target.value}))
  }
  // console.log(countryData)




  return (
    <PortalLayout>
      <h1 className='text-center bg-gradient-to-r from-sky-600 to-cyan-400  text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>EDIT COUNTRY</h1>
      {/* <div class="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 flex flex-col  my-2">
  <div class="-mx-3 md:flex mb-6 justify-center">
    <div class="md:w-[60%] px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
        Name
      </label>
      <input value={countryData.name} type="text" name="floating_email" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Name" required />
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6 justify-center">
    <div class="md:w-[60%] px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
        Flag
      </label>
      <input value={countryData.flag} type="text" name="floating_email" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Paste Flag Img URL ......" required />
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6 justify-center">
    <div class="md:w-[60%] px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
        Description
      </label> 
      <textarea value={countryData.description} class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 rounded-xl mb-3 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-Name" type="text" placeholder="Enter Description"/>
    </div>
  </div>

<div className='flex justify-center'>
  <button className='bg-gradient-to-r from-sky-600 to-cyan-400 text-white font-[600] py-2 px-[3rem] mt-4 rounded-lg'>Submit</button>
</div>

</div> */}

<div class="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 flex flex-col  my-2">
      <form action="">

      
  <div class="-mx-3 md:flex mb-6 justify-center">
    <div class="md:w-[60%] px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
        Name
      </label>
      <input onChange={ClickInput} value={countryData.name} type="text" name="name" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Name" required />
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6 justify-center">
    <div class="md:w-[60%] px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
        Flag
      </label>
      <input onChange={ClickInput} value={countryData.flag} type="text" name="flag" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Paste Img URL ......" required />
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6 justify-center">
    <div class="md:w-[60%] px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
        Description
      </label>
      <textarea onChange={ClickInput} value={countryData.description} name='description' class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 rounded-xl mb-3 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-Name" type="text" placeholder="Enter Description"/>
    </div>
  </div>
  
<div className='flex justify-center'>
  <input onClick={handleSubmit} type='submit' className='cursor-pointer bg-gradient-to-r from-sky-600 to-cyan-400 text-white font-[600] py-2 px-[3rem] mt-4 rounded-lg' value="Submit" />
</div>
</form>

</div>

    </PortalLayout>
  )
}

export default CountryEdit
