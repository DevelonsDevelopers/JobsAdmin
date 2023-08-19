import React, { useState } from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'
import { createCategory, updateCategory } from '../../store/actions/categoryActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CategoryForm = () => {
  const [categoryData , setCategoryData] = useState({ name: '', description: '', image: ''})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const inputClick = (e)=> {
    setCategoryData(prev=> ({...prev, [e.target.name]: e.target.value}))
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
    <div class="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 flex flex-col  my-2">
      <form action="">

      
  <div class="-mx-3 md:flex mb-6 justify-center">
    <div class="md:w-[60%] px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
        Name
      </label>
      <input  type="text" name="name" id="floating_email" onChange={inputClick} className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Name" required />
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6 justify-center">
    <div class="md:w-[60%] px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
        Image
      </label>
      <input type="text" name="image" id="floating_email" onChange={inputClick} className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Paste Img URL ......" required />
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6 justify-center">
    <div class="md:w-[60%] px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
        Description
      </label>
      <textarea name='description' onChange={inputClick} class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 rounded-xl mb-3 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-Name" type="text" placeholder="Enter Description"/>
    </div>
  </div>
  
<div className='flex justify-center'>
  <input type='submit' onClick={handleSubmit} className='bg-gradient-to-r from-sky-600 to-cyan-400 cursor-pointer text-white font-[600] py-2 px-[3rem] mt-4 rounded-lg' value="Submit" />
</div>
</form>

</div>



</PortalLayout>
  )
}

export default CategoryForm
