import React from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'

const ReportsForm = () => {
  return (
   <PortalLayout>
     <form className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 flex flex-col  my-2">

<div className="-mx-3 md:flex mb-6 justify-center">
  <div className="md:w-full px-3">
    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-Name">
      Name
    </label>
    <input type="text" name="floating_email" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
  </div>
    
</div>
<div className="-mx-3 md:flex mb-6 justify-center">
  <div className="md:w-[60%] px-3">
    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-Name">
      Email
    </label>
    <input type="email" name="floating_email" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Email " required />
  </div>
    <div className="md:w-[60%] px-3">
    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-Name">
      Password
    </label>
    <input type="text" name="floating_email" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Password " required />
  </div>
</div>

<div className="-mx-3 md:flex mb-6 justify-center">
  <div className="md:w-[60%] px-3">
    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-Name">
      City
    </label>
    <select className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                              <option>New Mexico</option>
                              <option>Missouri</option>
                              <option>Texas</option>
                          </select>
        </div>
    <div className="md:w-[60%] px-3">
    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-Name">
    Country
    </label>
    <select className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                              <option>New Mexico</option>
                              <option>Missouri</option>
                              <option>Texas</option>
                          </select> </div>
</div>
<div className="-mx-3 md:flex mb-6 justify-center">
  <div className="md:w-[60%] px-3">
    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-Name">
      Type
    </label>
    <input type="email" name="floating_email" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Your Type" required />
  </div>
    <div className="md:w-[60%] px-3">
    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-Name">
    Size
    </label>
    <input type="password" name="floating_email" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Employe " required />
  </div>
</div>
<div className="-mx-3 md:flex mb-6 justify-center">
  <div className="md:w-full px-3">
    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-Name">
      HeadQuater
    </label>
    <input type="text" name="floating_email" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Headquater Address" required />
  </div>
    
</div>

<div className='flex justify-center'>
<button className='bg-gradient-to-r from-sky-600 to-cyan-400 text-white font-[600] py-2 px-[3rem] mt-4 rounded-lg'>Submit</button>
</div>

</form>

   </PortalLayout>
  )
}

export default ReportsForm
