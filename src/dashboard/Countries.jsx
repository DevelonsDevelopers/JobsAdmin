import React from 'react'
import PortalLayout from '../portalLayout/PortalLayout'

const country = [
  {name: "london", description: "Help people interested in this repository ", image: "/assets/profile_thumb.png", alt:'london',status: "Active",},
  {name: "london", description: "Help people interested in this repository ", image: "/assets/profile_thumb.png", alt:'london',status: "Active",},
  {name: "london", description: "Help people interested in this repository ", image: "/assets/profile_thumb.png", alt:'london',status: "Active",},

]




const Countries = () => {
  return (
    <PortalLayout>
       <h1 className='text-center bg-blue-400 text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>Countries</h1>

<div className="w-[100%] max-md:h-full bg-white rounded-xl shadow-md  my-[3%] py-10 px-[6rem] max-md:px-2 flex flex-col justify-center bg-gray-100">
  <div className='flex justify-between items-center'>
   <a href="/countries/add"> <button className="bg-blue-400 cursor-pointer  max-md:text-[.6rem] py-2 px-[3rem] max-md:px-[1.5rem] text-white font-[600] rounded-3xl mr-[1rem]"  >
      Add New
    </button>
    </a>
    <form className='w-[60%] rounded-lg border-2 w-2/4'>
      {/* <div className=""> */}
      <div className="flex">
        <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
          <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
            <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
          </svg>
        </div>
        <input type="text" className="w-[100%] bg-white pl-2 text-base font-semibold outline-0 max-md:text-[0.7rem]" required placeholder="Search Here....." id="" />
        <input type="submit" value="Search" className="p-2 rounded-tr-lg rounded-br-lg bg-blue-400 text-white font-semibold hover:bg-blue-800 transition-colors max-md:text-[0.6rem]" />

      </div>
    </form>

  </div>
  <table className="rounded-xl  shadow-xl w-[100%] max-md:w-[100%] max-md:h-[400px] mt-10 rounded-tr-lg">
    <thead>
      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal w-[100%]">
        <th className="py-[2%] px-[6%] max-md:text-[.67rem] text-center max-md:px-[2%]">Country</th>
        <th className="py-[2%] px-[2%] max-md:text-[.67rem] text-center max-md:px-[3%]">Description</th>
        <th className="py-[2%] px-[6%] max-md:text-[.67rem] text-center">Flag</th>
        <th className="py-[2%] px-[6%] max-md:text-[.67rem] text-center">Status</th>
        <th className="py-[2%] px-[6%] max-md:text-[.67rem] text-center">Actions</th>
      </tr>
    </thead>
    {country.map((value, index) => (
      <tbody className="text-gray-600 text-sm font-light w-[100%]">
        <tr className={`border-b border-gray-300 bg-white  ${index % 2 ? "bg-blue-100" : "bg-white"}`} >
          <td className="py-[2%] px-[6%] max-md:text-[.7rem] text-left">
            <span className="font-medium">{value.name}</span>
          </td>
          <td className="py-[1%] px-[2%] w-[20%] max-md:text-[.7rem] text-left">
            <span>{value.description}</span>
          </td>
          <td className="py-[2%] px-[6%] max-md:text-[.6rem] max-md:px-[2%]  text-center">
            <div className="flex items-center justify-center text-blue-700 font-[700]">
             <img src={value.image} alt={value.alt} className='w-[4rem] max-md:w-[2rem]' /> 
            </div>
          </td>
          <td className="py-[2%] px-[4%] max-md:text-[.7rem] text-center">
            <span className="bg-blue-400 text-white font-[500] py-2 px-[30%] max-md:px-[10%] rounded-xl text-xs">{value.status}</span>
          </td>
          <td className="py-[2%] px-[4%] max-md:text-[.7rem] text-center">
            <div className="flex item-center justify-center">
              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
            </div>
          </td>

        </tr>
      </tbody>
    ))}
  </table>

  <center>
  </center>
</div>
    </PortalLayout>
  )
}

export default Countries
