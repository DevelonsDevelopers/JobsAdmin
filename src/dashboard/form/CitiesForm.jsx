import React, { useEffect, useState } from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'
import { useDispatch, useSelector } from 'react-redux'
import { createCity } from '../../store/actions/cityActions'
import { useNavigate } from 'react-router-dom'
import { AllCountries } from '../../store/actions/countryActions'
import { ToastContainer, toast } from 'react-toastify'



const CitiesForm = () => {
  const [cityData, setCityData] = useState({ name: '', description: '', country: '' })
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // onChange Function
  const ClickInput = (e) => [
    setCityData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  ]

  //Update Function
  const handleSubmit = (e) => {
    e.preventDefault()
    if(cityData.name && cityData.description && cityData.country){
      dispatch(createCity(cityData))
      navigate('/cities')
    } else{
      toast.error('Enter Required Data', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  //fetching countries
  const countries = useSelector(state => state.country.countries)

  // useEffect(() => {
  //   console.log(countries)
  // }, [countries])

  useEffect(() => {
    if (countries !== null || countries !== undefined || countries.length !== 0) {
      dispatch(AllCountries())
    }
  }, [dispatch])

  //======================

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
      <h1 className='text-center bg-black text-white font-[600] mb-5 py-4 rounded-[8px] shadow-lg text-[1.5rem]'>ADD CITY</h1>
      <div className="bg-yellow-400 shadow-md rounded-[8px] px-[10rem] max-md:px-4 py-10 mb-4 flex flex-col my-2">
        <center>
          <form action="">
            <div className='grid grid-cols-1 gap-10 justify-center'>
              <div className='flex-col'>
                <div className="-mx-3 mt-[-1.2rem] mb-6">
                  <div className="w-[50%] px-3 mb-6 md:mb-0">
                    <label className="block text-left tracking-wide uppercase text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                      Name
                    </label>
                    <input type="text" name="name" id="name" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-100 rounded-[8px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter city" required />
                  </div>
                  <div className="w-[50%] px-3  mt-5 mb-6 md:mb-0">
                    <label className="block text-left tracking-wide uppercase text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                      Country
                    </label>
                    <select onChange={ClickInput} name='country' className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-500 bg-gray-100 rounded-[8px] border-[0.7px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                         <option>Select Country</option>
                      {countries?.map((value) => {
                        return <option value={value.id} key={value.id}>{value.name}</option>
                      })}
                    </select>               
                     </div>
                </div>
                <div className="-mx-3 mt-5 ">
                  <div className="w-[50%] px-3">
                    <label className="block text-left uppercase tracking-wide text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-Name">
                      Description
                    </label>
                    <textarea name='description' rows='7'  minLength='30' maxLength='500' onChange={ClickInput} className="block w-full bg-gray-100  border-gray-lighter py-3 px-4 rounded-[8px] mb-3 border-[0.7px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer text-[14px]" id="grid-Name" type="text" placeholder="Enter Description" />
                  </div>
                </div>
              </div>

            </div>
            <div className="flex justify-center">
            <input
              type="submit"
              onClick={handleSubmit}
              className="bg-black text-white hover:bg-yellow-400 hover:text-black border-2 transition-all ease-in-out duration-75 border-black font-[600] py-2 px-[2.4rem] mt-5 cursor-pointer rounded-[8px] text-[1rem]"
              value="Submit"
            />
          </div>
          </form>
        </center>

      </div>



    </PortalLayout>
  )
}

export default CitiesForm
