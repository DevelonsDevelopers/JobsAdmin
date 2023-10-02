import React, { useEffect, useState } from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCountry, updateCountry } from '../../store/actions/countryActions';

const CountryEdit = () => {

  const [countryData, setCountryData] = useState({ name: '', description: '', flag: '' })
  const [Base64IMG, setBase64IMG] = useState('')


  const dispatch = useDispatch()
  const navigate = useNavigate();

  const params = useLocation();
  const id = params.state.ID;
  // console.log(id)

  //fetching country Id
  const country = useSelector(state => state.country.country)

  useEffect(() => {
    dispatch(getCountry(id))
  }, [dispatch])

  useEffect(() => {
    console.log(country)
    if (country) {
      setCountryData({ name: country?.name, description: country?.description, flag: country?.flag })
      // console.log(countryData)
    }
  }, [country])

  //Update function
  const handleSubmit = (e) => {
    e.preventDefault()
    if (countryData.name && countryData.description && countryData.flag) {
      dispatch(updateCountry(id, countryData))
      navigate('/countries')
    } else {
      alert('plz fill the data')
    }
  }

  //onChange Function
  const ClickInput = (e) => {
    setCountryData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  // console.log(countryData)

  useEffect(() => {
    setCountryData({ ...countryData, flag: Base64IMG })
  }, [Base64IMG])


  const convertToBase64 = (e) => {
    const reader = new FileReader()

    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => {
      // console.log('called: ', reader)
      setBase64IMG(reader.result)
    }
  }
  return (
    <PortalLayout>
      <h1 className='text-center bg-gradient-to-r from-sky-600 to-cyan-400  text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>EDIT COUNTRY</h1>
      <div className="bg-white shadow-md rounded-xl px-[10rem] max-md:px-4 pt-10 pb-8 mb-4 flex flex-col  my-2">
        <form action="">
          <div className='grid grid-cols-2 gap-10 max-md:grid-cols-1'>
            <div className='flex-col'>
              <div className="-mx-3 mt-[-1.2rem] mb-6">
                <div className="w-[100%] px-3 mb-6 md:mb-0">
                  <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                    Name
                  </label>
                  <input value={countryData.name} type="text" name="name" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none   border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Country" required />
                </div>
              </div>
              <div className="-mx-3 mt-5 ">
                <div className="w-[100%]  px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-Name">
                    Description
                  </label>
                  <textarea value={countryData.description} name='description' minLength='30' maxLength='500' rows='7' onChange={ClickInput} className="appearance-none block w-full bg-gray-50  border-gray-lighter rounded py-3 px-4 rounded-[9px] mb-3 border-[0.7px] border-gray-300 appearance-none   border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-[14px]" id="grid-Name" type="text" placeholder="Enter Description" />
                </div>
              </div>
            </div>

            <div className=" w-full max-md:mt-[-25px]">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50     hover:bg-gray-300  border-gray-600   ">
                {countryData?.flag.length !== 0 ?
                  <>
                    <img src={countryData.flag} alt="" className='h-full w-full object-cover rounded-md' />
                    <input id="dropzone-file" type="file" name='flag' className="hidden" onChange={convertToBase64} />
                  </>

                  :
                  <>
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500  text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500  text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-500  text-gray-400">SVG, PNG, JPG or GIF</p>
                    </div>
                    <input id="dropzone-file" type="file" name='flag' className="hidden" onChange={convertToBase64} />
                  </>

                }

              </label>
            </div>

          </div>
          <div className='flex justify-center'>
            <input type='submit' onClick={handleSubmit} className='bg-gradient-to-r from-sky-600 to-cyan-400 cursor-pointer text-white font-[500] py-2 px-[2.4rem] mt-4 rounded-lg text-[1rem]' value="Submit" />
          </div>
        </form>

      </div>

    </PortalLayout>
  )
}

export default CountryEdit
