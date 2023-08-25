import React from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'


const UsersEdit = () => {
    return (
        <PortalLayout>
            <h1 className='text-center bg-gradient-to-r from-sky-600 to-cyan-400 text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>EDIT USERS</h1>
            <div class="bg-white shadow-md rounded px-[10rem] max-md:px-4 pt-6 pb-8 mb-4 flex flex-col my-2">
                <form action="">
                <div className="-mx-3 mt-[-1.2rem] mb-6">
          <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
            <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
              Name
            </label>
            <input type="text" name="floating_email" id="floating_email"  className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-10 mt-10'>
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                User Name
              </label>
              <input type="text" name="floating_email" id="floating_email"  className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter User Name" required />
            </div>
          </div>
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Email
              </label>
              <input type="email" name="floating_email" id="floating_email"  className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter  Email " required />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-10 mt-5'>
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Password
              </label>
              <input type="password" name="floating_email" id="floating_email"  className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Password" required />
            </div>
          </div>
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Phone
              </label>
              <input type="email" name="floating_email" id="floating_email"  className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Contact Number " required />
            </div>
          </div>
        </div>
                    <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-full px-3">
                        <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Address
              </label>
                            <input  type="text" name="address" id="floating_email" className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Address" required />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-gradient-to-r from-sky-600 to-cyan-400 text-white font-[600] py-2 px-[3rem] mt-4 rounded-lg'>Submit</button>
                    </div>
                </form>

            </div>



        </PortalLayout>
    )
}

export default UsersEdit
