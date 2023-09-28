import React, { useEffect, useState } from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getTag, updateTag } from '../../store/actions/tagActions'

const TagsEdit = () => {

  const [tagData, setTagData] = useState({ name: '' });
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const params = useLocation();
  const id = params.state.ID
  // console.log(id)

  //fetching tags
  const tag = useSelector(state => state.tag.tag)

  useEffect(() => {
    console.log(tag)
  }, [tag])

  useEffect(() => {
    dispatch(getTag(id))
  }, [dispatch])

  useEffect(() => {
    console.log(tag)
    if (tag) {
      setTagData({ name: tag?.name })
    }
    console.log(tagData)
  }, [tag])

  //onChange 
  const ClickInput = (e) => {
    setTagData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  //Update function
  const handleSubmit = (e) => {
    e.preventDefault()
    if(tagData.name){
      dispatch(updateTag(id, tagData))
      navigate('/tags')
    } else{
      alert('plz fill the data')
    }
  }



  return (
    <PortalLayout>
      <h1 className='text-center bg-gradient-to-r from-sky-600 to-cyan-400  text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>EDIT TAG</h1>
      <div className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 flex flex-col  my-2">
        <form action="">
          <div className="-mx-3 mt-[-1.2rem]  px-[20rem]">
            <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                Tag
              </label>
              <input value={tagData.name} onChange={ClickInput} type="text" name="name" id="floating_email" className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Tag " required />
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

export default TagsEdit
