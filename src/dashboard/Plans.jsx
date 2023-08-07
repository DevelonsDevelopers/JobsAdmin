import React, { useState } from 'react'
import PortalLayout from '../portalLayout/PortalLayout'
import DeleteModal from '../components/DeleteModal';
import { useNavigate } from 'react-router-dom';


const plans = [
  { name: "UI", amount: "1000", user: "Lahore",purpose:'Devsinc', period:'Manager',status: "Active", },
  { name: "UI", amount: "1000", user: "Lahore",purpose:'Devsinc', period:'Manager',status: "Active", },
  { name: "UI", amount: "1000", user: "Lahore",purpose:'Devsinc', period:'Manager',status: "Active", },
  { name: "UI", amount: "1000", user: "Lahore",purpose:'Devsinc', period:'Manager',status: "Active", },
 
  { name: "UI", amount: "1000", user: "Lahore",purpose:'Devsinc', period:'Manager',status: "Active", },
  
]
const Plans = () => {
  const [open, setOpen] = useState(false);



  const router = useNavigate();


  return (
    <PortalLayout>
      <h1 className='text-center bg-blue-600 text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>Plans</h1>

<div className="w-[100%] max-md:h-full bg-white rounded-xl shadow-md  my-[3%] py-10 px-[6rem] max-md:px-2 flex flex-col justify-center bg-gray-100">
  <div className='flex  items-center'>

    <input type="search" name="" id="" placeholder='Search...' className='border-2 border-gray-600 pl-4 rounded-xl py-2 w-[18rem] ml-auto max-md:py-[7px] max-md:w-[10rem] max-md:text-[0.7rem]' />

    <a href="/plans/add"> <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer  max-md:text-[.6rem] py-2 px-[1rem] max-md:px-[1rem] max-md:py-[9px] text-white font-[600] max-md:font-[400] rounded-xl ml-[1rem] max-md:mr-10"  >
      Add New
    </button>
    </a>

  </div>
  <DeleteModal open={open} setOpen={setOpen} />

  <div className="rounded-xl bg-blue-600 border-2 border-blue-100 shadow-md shadow-blue-100  w-[100%] max-md:w-[100%]  mt-10 ">
    <thead className=' rounded-t-lg'>
      <tr className=" text-white  uppercase text-sm leading-normal w-[100%]">
        <th className="py-[2%] w-[6%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]">Name</th>
        <th className="py-[2%] w-[6%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]">Amount</th>
        <th className="py-[2%] w-[6%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]">UserType</th>
        <th className="py-[2%] w-[6%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]">Purpose</th>
        <th className="py-[2%] w-[6%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]">TimePeriod</th>
        <th className="py-[2%] w-[6%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]">Status</th>
        <th className="py-[2%] w-[6%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]">Action</th>
        
      </tr>
    </thead>
    {plans.map((value, index) => (
      <tbody className="text-gray-600 text-sm font-light w-[100%] bg-white ">
        <tr className={`border-b border-gray-300  ${index % 2 ? "bg-blue-100" : "bg-white"}`} >
          <td className="py-[2%] w-[6%] max-md:text-[.7rem] text-center">
            <span className="font-bold text-[1rem] max-md:text-[.7rem]">{value.name}</span>
          </td>
          <td className="py-[1%] w-[6%] w-[20%] max-md:text-[.7rem] text-center">
            <span className='font-bold'>{value.amount}</span>
          </td>
          <td className="py-[1%] w-[6%] w-[20%] max-md:text-[.7rem] text-center">
            <span className='font-bold'>{value.user}</span>
          </td>
          <td className="py-[1%] w-[6%] w-[20%] max-md:text-[.7rem] text-center">
            <span className='font-bold'>{value.purpose}</span>
          </td>
          <td className="py-[1%] w-[6%] w-[20%] max-md:text-[.7rem] text-center">
            <span className='font-bold'>{value.period}</span>
          </td>

          <td className="py-[2%] px-[4%] max-md:text-[.7rem] text-center">
            <span className="bg-green-600 text-white font-[500] py-[3px] px-[10%] max-md:w-[8%] rounded-xl text-[0.6rem] max-md:py-1 max-md:px-2 max-md:text-[0.6rem] cursor-pointer hover:bg-green-700 ">{value.status}</span>
          </td>
          <td className="py-[2%] w-[4%] max-md:text-[.7rem] text-center">
            <div className="flex item-center justify-center gap-3 max-md:gap-0">
              <div className="w-4 mr-2 max-md:w-3 max-md:ml-2 transform hover:text-blue-500  hover:scale-110" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="w-4 mr-2 max-md:w-3 max-md:mr-0 transform hover:text-blue-500  hover:scale-110"  onClick={() => router("/plans/edit")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <div className="w-4 mr-2 max-md:w-3 max-md:mr-0 transform hover:text-blue-500  hover:scale-110" onClick={() => setOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
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

export default Plans
