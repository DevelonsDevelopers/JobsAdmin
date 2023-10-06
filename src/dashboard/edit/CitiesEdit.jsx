import React, { useEffect, useState } from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCity, updateCity } from '../../store/actions/cityActions'
import { AllCountries } from '../../store/actions/countryActions'

const CitiesEdit = () => {

  const params = useLocation()
  const id = params.state.ID

  const [cityData, setCityData] = useState({name: '', country: '', description: ''})

  const dispatch = useDispatch()
  const navigate = useNavigate();

  //fetching city by id
  const city = useSelector(state => state.city.city)
  useEffect(() => {
    dispatch(getCity(id))
  }, [dispatch])

  //showing data
  useEffect(() => {
    if(city){
      setCityData({ name: city?.name, country: city?.country, description: city?.description})
    }
  }, [city])

  //fetching countries
  const countries = useSelector(state => state.country.countries)

  useEffect(() => {
    dispatch(AllCountries())
  }, [dispatch])

  //onChange
  const ClickInput =(e) => {
    setCityData(prev => ({...prev,[e.target.name]: e.target.value}))
  }

  //Update Function
  const handleSubmit = (e) => {
    e.preventDefault()
    if(cityData.name && cityData.description && cityData.country){
    dispatch(updateCity(id, cityData))
    navigate('/cities')
    } else{
      alert('plz fill the data')
    }
  }

  //================================

  return (
   <PortalLayout>
        <h1 className='text-center bg-gradient-to-r from-sky-600 to-cyan-400  text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>EDIT CITY</h1>
        <div className="bg-white shadow-md rounded-xl px-[10rem] max-md:px-4 pt-10 pb-8 mb-4 flex flex-col  my-2">
   
        <center>
          <form action="">
            <div className='grid grid-cols-1 gap-10 justify-center'>
              <div className='flex-col'>
                <div className="-mx-3 mt-[-1.2rem] mb-6">
                  <div className="w-[50%] px-3 mb-6 md:mb-0">
                    <label className="block text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                      Name
                    </label>
                    <input value={cityData.name} onChange={ClickInput} type="text" name="name" id="floating_email" className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter city" required />
                  </div>
                  <div className="w-[50%] px-3  mt-5 mb-6 md:mb-0">
                    <label className="block  text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                      Country
                    </label>
                    <select value={cityData.country} onChange={ClickInput} name='country' className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                         {/* <option disabled hidden selected>Select Country</option> */}
                         {countries.map((value) => (
                           <option value={value.id}>{value.name}</option>
                         ))}
                     
                    </select>               
                     </div>
                </div>
                <div className="-mx-3 mt-5 ">
                  <div className="w-[50%]  px-3">
                    <label className="block text-left uppercase tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-Name">
                      Description
                    </label>
                    <textarea value={cityData.description} onChange={ClickInput}  minLength='30' maxLength='500' name='description' rows='7' className="appearance-none block w-full bg-gray-50  border-gray-lighter rounded py-3 px-4 rounded-[9px] mb-3 border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer text-[14px]" id="grid-Name" type="text" placeholder="Enter Description" />
                  </div>
                </div>
              </div>

            </div>
            <div className='flex justify-center'>
              <input onClick={handleSubmit} type='submit'  className='bg-gradient-to-r from-sky-600 to-cyan-400 cursor-pointer text-white font-[500] py-2 px-[2.4rem] mt-4 rounded-lg text-[1rem]' value="Submit" />
            </div>
          </form>
        </center>
</div>

   </PortalLayout>
  )
}

export default CitiesEdit
