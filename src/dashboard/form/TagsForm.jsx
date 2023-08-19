import React, { useState } from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createTag } from '../../store/actions/tagActions';

const TagsForm = () => {

  const [tagData, setTagData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ClickInput = (e) => {
    setTagData(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  console.log(tagData)
  const handleSubmit = () => {
    dispatch(createTag(tagData));
    navigate('/tags')
  }
  return (
  <PortalLayout>
       <h1 className='text-center bg-gradient-to-r from-sky-600 to-cyan-400  text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>ADD TAG</h1>
    <div class="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 flex flex-col  my-2">
    <form action="">
  <div class="-mx-3 md:flex mb-6 justify-center">
        
    <div class="md:w-[60%] px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
        Name
      </label>
      <input  type="text" name="name" onChange={ClickInput} id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Name" required />
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

export default TagsForm
