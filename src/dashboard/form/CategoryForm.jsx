import React from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'

const CategoryForm = () => {
  return (
    <PortalLayout>
    <h1 className='text-center bg-blue-400 text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>ADD CATEGORY</h1>
    <div className='bg-white p-4 rounded-xl'>

        <form className='px-[20%] py-4 '>
           
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="floating_email" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" Title" required />
                  </div>
            <div className="relative z-0 w-full mb-6 group">
            <textarea id="message" name="message" class="w-full bg-white rounded-xl border-2 border-gray-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0 focus:border-blue-600 pee" placeholder='Description'></textarea>
   
                  </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-4" placeholder="Paste image Link Here! " required />
                 </div>
           
            <center>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full md:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-10">Submit</button>
            </center>
        </form>
    </div>



</PortalLayout>
  )
}

export default CategoryForm
