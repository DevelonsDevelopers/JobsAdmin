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
      <h1 className='text-center bg-black text-white font-[600] mb-5 py-4 rounded-[8px] shadow-lg text-[1.5rem]'>EDIT TAG</h1>
      <div className="bg-yellow-400 shadow-md rounded-xl px-[10rem] max-md:px-4 py-10 mb-4 flex flex-col my-2">
      <form action="" className='flex flex-col items-center'>
            <div className="w-[60%] px-3 mb-6 md:mb-0">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4 uppercase" htmlFor="grid-first-name">
                Tag
              </label>
              <input type="text" value={tagData.name} name="name" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-100 rounded-[8px] border-[0.7px] border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Tag " required />
            </div>
          <div className="flex justify-center">
            <input
              type="submit"
              onClick={handleSubmit}
              className="bg-black text-white hover:bg-yellow-400 hover:text-black border-2 transition-all ease-in-out duration-75 border-black font-[600] py-2 px-[2.4rem] mt-5 cursor-pointer rounded-[8px] text-[1rem]"
            />
          </div>
        </form>

      </div>

    </PortalLayout>
  )
}

export default TagsEdit
