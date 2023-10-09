import React, { useEffect, useState } from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const EmailForm = () => {
  return (
    <PortalLayout>
      <h1 className='text-center bg-gradient-to-r from-sky-600 to-cyan-400  text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>ADD Email</h1>
      <div className="bg-white shadow-md rounded-xl px-[10rem] max-md:px-4 pt-10 pb-8 mb-4 flex flex-col  my-2">
        <form action="">
          <div className='grid grid-cols-2 gap-10 max-md:grid-cols-1 '>
            <div className='flex-col'>
              <div className="-mx-3 mt-[-1.2rem] mb-6">
                <div className="w-[100%] px-3 mb-6 md:mb-0">
                  <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                    Email
                  </label>
                  <input type="text" name="name" id="floating_email"  className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Email here" required />
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-center'>
            <input type='submit'  className='bg-gradient-to-r from-sky-600 to-cyan-400 cursor-pointer text-white font-[500] py-2 px-[2.4rem] mt-4  rounded-lg text-[1rem]' value="Submit" />
          </div>
        </form>

      </div>



    </PortalLayout>
  )
}

export default EmailForm