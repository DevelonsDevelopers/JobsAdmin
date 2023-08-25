import React from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'

const JobsEdit = () => {
    return (
        <PortalLayout>
            <h1 className='text-center bg-blue-600 text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>EDIT JOBS</h1>
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-full px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Title">
                            Title
                        </label>
                        <input type="text" name="floating_Title" id="floating_Title" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Title" required />
                    </div>
                </div>
                <div class="-mx-3 md:flex mb-2">
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                            CATEGORY
                        </label>
                        <div class="relative">
                            <select class="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                        </div>
                    </div>
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                            COUNTRY
                        </label>
                        <div class="relative">
                            <select class="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                        </div>
                    </div>
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                            CITY
                        </label>
                        <div class="relative">
                            <select class="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="-mx-3 md:flex mb-2 mt-2">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                            EXPERIENCE
                        </label>
                        <input type="text" name="floating_email" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Experience" required />
                    </div>
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                            QUALIFICATION
                        </label>
                        <input type="text" name="floating_email" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Qualification" required />
                    </div>
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                            SKILLS
                        </label>
                        <input type="text" name="floating_email" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Skills" required />
                    </div>
                </div>
                <div class="-mx-3 md:flex mb-2 mt-2">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                            WORK DAY
                        </label>
                        <input type="text" name="floating_email" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Work Day" required />
                    </div>
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                            WORK TIME
                        </label>
                        <input type="time" name="floating_email" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Work Time" required />

                    </div>
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                            DATE
                        </label>
                        <input type="date" name="floating_email" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Date" required />
                    </div>
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                            ADDRESS
                        </label>
                        <input type="text" name="floating_email" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Address" required />
                    </div>
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                            TAGS
                        </label>
                        <input type="text" name="floating_email" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Tags" required />
                    </div>
                </div>
                <div class="-mx-3 md:flex mb-2 mt-2">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                            COMPANY ROLE
                        </label>
                        <input type="text" name="floating_email" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Role" required />
                    </div>
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                            DESIGNATION
                        </label>
                        <input type="text" name="floating_email" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Designation" required />
                    </div>
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                            SALARY
                        </label>
                        <input type="text" name="floating_email" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Salary" required />
                    </div>
                </div>
                <div class="-mx-3 md:flex mb-6 mt-2">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                            LINK
                        </label>
                        <input type="text" name="floating_email" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Link" required />
                    </div>
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                            TYPE
                        </label>
                        <input type="text" name="floating_email" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Type" required />
                    </div>
                </div>

                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-full px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
                            Description
                        </label>
                        <textarea class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 rounded-xl mb-3 border-2 border-gray-300 appearance-none  text-white  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-Name" type="text" placeholder="Enter Description" />
                    </div>
                </div>
                <div className='flex justify-center'>
                        <button className='bg-gradient-to-r from-sky-600 to-cyan-400 text-white font-[600] py-2 px-[3rem] mt-4 rounded-lg'>Submit</button>
                    </div>

            </form>

        </PortalLayout>
    )
}

export default JobsEdit
