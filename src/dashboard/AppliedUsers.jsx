import React from 'react'
import PortalLayout from '../portalLayout/PortalLayout'


const appliedusers = [
  { user: "Jane", job: "development", date: "10/04/2023" },
  { user: "Jane", job: "development", date: "10/04/2023" },
  { user: "Jane", job: "development", date: "10/04/2023" },
  { user: "Jane", job: "development", date: "10/04/2023" },
  { user: "Jane", job: "development", date: "10/04/2023" },


]


const AppliedUsers = () => {
  return (
    <PortalLayout>
      <h1 className='text-center bg-gradient-to-r from-sky-600 to-cyan-400 text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>Appliedusers</h1>

      <div className="w-[100%] max-md:h-full bg-white rounded-xl shadow-md  my-[3%] py-10 px-[6rem] max-md:px-2 flex flex-col justify-center bg-gray-100">
        <div className='flex  items-center'>

          <input type="search" name="" id="" placeholder='Search...' className='border-2 border-gray-600 pl-4 rounded-xl py-2 w-[18rem] ml-auto max-md:py-[7px] max-md:w-[10rem] max-md:text-[0.7rem]' />

          <a href="/appliedusers/add"> <button className="bg-gradient-to-r from-sky-600 to-cyan-500 hover:bg-blue-700 cursor-pointer  max-md:text-[.6rem] py-2 px-[1rem] max-md:px-[1rem] max-md:py-[9px] text-white font-[600] max-md:font-[400] rounded-xl ml-[1rem] max-md:mr-10"  >
            Add New
          </button>
          </a>

        </div>
        <div className="rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 border-2 border-blue-100 shadow-md shadow-blue-100  w-[100%] max-md:w-[100%]  mt-10 ">
          <thead className=' rounded-t-lg'>
            <tr className=" text-white  uppercase text-sm leading-normal w-[100%]">
              <th className="py-[2%] w-[6%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]">user</th>
              <th className="py-[2%] w-[2%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[3%]">Jobs</th>
              <th className="py-[2%] w-[6%] max-md:text-[.6rem] max-md:font-[400] text-center">Date</th>

            </tr>
          </thead>
          {appliedusers.map((value, index) => (
            <tbody className="text-gray-600 text-sm font-light w-[100%] bg-white ">
              <tr className={`border-b border-gray-300  ${index % 2 ? "bg-blue-100" : "bg-white"}`} >
                <td className="py-[2%] w-[6%] max-md:text-[.7rem] text-center">
                  <span className="font-bold text-[1rem]">{value.user}</span>
                </td>
                <td className="py-[1%] w-[6%] w-[20%] max-md:text-[.7rem] text-center">
                  <span className='font-bold'>{value.job}</span>
                </td>
                <td className="py-[1%] w-[6%] w-[20%] max-md:text-[.7rem] text-center">
                  <span className='font-bold'>{value.date}</span>
                </td>


                <td className="py-[2%] w-[4%] max-md:text-[.7rem] text-center">

                  <div className="w-4 mr-2 transform hover:text-blue-500  hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>

                </td>

              </tr>
            </tbody>
          ))}
        </div>

        <center>
        </center>
      </div>
    </PortalLayout>
  )
}

export default AppliedUsers
