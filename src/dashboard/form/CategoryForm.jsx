import React, { useState } from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'
import { createCategory, updateCategory } from '../../store/actions/categoryActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CategoryForm = () => {
  const [categoryData, setCategoryData] = useState({ name: '', description: '', image: '' })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const inputClick = (e) => {
    setCategoryData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  // console.log(categoryData)



  const handleSubmit = () => {
    dispatch(createCategory(categoryData))
    navigate('/categories')
  }

  // console.log(handleSubmit)

  return (
    <PortalLayout>
      <h1 className='text-center bg-gradient-to-r from-sky-600 to-cyan-400  text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>ADD CATEGORY</h1>
      <div className="bg-white shadow-md rounded-xl px-[10rem] max-md:px-4 pt-10 pb-8 mb-4 flex flex-col  my-2">
        <form action="">
          <div className='grid grid-cols-2 gap-10 max-md:grid-cols-1 '>
            <div className='flex-col'>
              <div className="-mx-3 mt-[-1.2rem] mb-6">
                <div className="w-[100%] px-3 mb-6 md:mb-0">
                  <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                    Name
                  </label>
                  <input type="text" name="name" id="floating_email" onChange={inputClick} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Job" required />
                </div>
              </div>
              <div className="-mx-3 mt-5">
                <div className="w-[100%]  px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-Name">
                    Description
                  </label>
                  <textarea name='description' rows='7' onChange={inputClick} className="appearance-none block w-full bg-gray-50  border-gray-lighter rounded py-3 px-4 rounded-[9px] mb-3 border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer text-[14px]" id="grid-Name" type="text" placeholder="Enter Description" />
                </div>
              </div>
            </div>

            <div className=" w-full max-md:mt-[-25px]">
              <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500 ">SVG, PNG, JPG or GIF</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" onChange={inputClick} />
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

export default CategoryForm
