import React from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'


const UserForm = () => {
    return (
        <PortalLayout>
            <h1 className='text-center bg-blue-600 text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>ADD USERS</h1>
            <div className='bg-white p-4 rounded-xl'>

                <form className='px-[20%] py-4'>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent pl-4 border-2 border-gray-300 rounded-xl appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" First name" required />
                                 </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent pl-4 border-2 border-gray-300 rounded-xl appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Last name " required />
                               </div>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent pl-4 border-2 border-gray-300 rounded-xl appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Email address " required />
                          </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent pl-4 border-2 border-gray-300 rounded-xl appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Password " required />
                          </div>
                   
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent pl-4 border-2 border-gray-300 rounded-xl appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" Phone number (123-456-7890)" required />
                              </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent pl-4 border-2 border-gray-300 rounded-xl appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" Company (Ex. Google)" required />
                             </div>
                    </div>
                    <center>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full md:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5">Submit</button>
                    </center>
                </form>
            </div>



        </PortalLayout>
    )
}

export default UserForm
