import React from 'react'
import PortalLayout from '../portalLayout/PortalLayout'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Data = [
    {
        "locations": "East Melbourne, VIC",
        "site": "",
        "date": "Fri, 06 Oct 2023 07:27:56 GMT",
        "url": "https://jobviewtrack.com/en-gb/job-1c12416948080618420659432c1307110052763b1d12585f1d785d663c07401a003618632a150c56111a6b374f47545b4816166f1440105a5d/1394c8cf2a8b150ef6b90441a93dc5a5.html",
        "title": "Delivery Driver - Sign Up and Start Earning",
        "description": "Your time. Your Goals.   What is DoorDash   Available in 63 cities in Australia and over 4,000 cities across the world , DoorDash connects local businesses and local drivers (called Dashers) with opportunities to earn, work, and live.   As ...",
        "company": "DoorDash",
        "salary": ""
    },
    {
        "locations": "East Melbourne, VIC",
        "site": "",
        "date": "Fri, 06 Oct 2023 07:27:56 GMT",
        "url": "https://jobviewtrack.com/en-gb/job-1c12416948080618420659432c1307110052763b1d12585f1d785d663c07401a003618632a150c56111a6b374f47545b4816166f1440105a5d/1394c8cf2a8b150ef6b90441a93dc5a5.html",
        "title": "Delivery Driver - Sign Up and Start Earning",
        "description": "Your time. Your Goals.   What is DoorDash   Available in 63 cities in Australia and over 4,000 cities across the world , DoorDash connects local businesses and local drivers (called Dashers) with opportunities to earn, work, and live.   As ...",
        "company": "DoorDash",
        "salary": ""
    },
]

const ApiJobs = () => {
    const [search, setSearch] = useState('')

    return (
        <PortalLayout>
            <>
                <h1 className='text-[3.125rem] font-[800] text-[#000] text-center max-md:text-[2rem]'>Jobs Api</h1>

                <div className="w-[100%] max-md:h-full  max-md:px-2 flex flex-col justify-center bg-gray-100">

                    <div className='flex justify-center mt-[3rem] w-[90%] m-auto'>

                        <input onChange={(e) => setSearch(e.target.value)} type="search" name="" id="" placeholder='Search...' className='border-2 border-gray-600 pl-[4rem] rounded-[1.0625rem] py-2  w-[27.8125rem] mr-auto max-md:py-[1px] max-md:w-[15rem] max-md:text-[0.7rem] focus:outline-none focus:ring-0 focus:border-gray-900 peer' />
                        <Link to="/categories/add"> <button className="bg-[#0047FF] cursor-pointer  max-md:text-[.6rem] py-2 px-[1rem] max-md:px-[1rem] max-md:py-[5px] text-white font-[600] max-md:font-[400] rounded-[1.375rem] ml-auto "  >
                            Add New
                        </button>
                        </Link>

                    </div>

                    <table className="rounded-xl p-5 bg-white w-[90%] m-auto max-md:w-[100%]  mt-6 ">
                        <thead className='mt-10'>

                            <tr className=" uppercase  text-sm leading-normal w-[100%]">
                                <th className="py-[2%] border-r-[1px] border-b-[2px] border-b-black  w-[3%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]  text-[13px]">ID </th>
                                <th className="py-[2%] border-r-[1px] border-b-[2px] border-b-black  w-[10%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%] text-[13px]">Company</th>
                                <th className="py-[2%] border-r-[1px] border-b-[2px] border-b-black w-[1%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[3%] text-[13px]">Salary</th>
                                <th className="py-[2%] border-r-[1px] border-b-[2px] border-b-black w-[1%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[3%] text-[13px]">Location</th>
                                <th className="py-[2%] border-r-[1px] border-b-[2px] border-b-black  w-[2%] max-md:text-[.6rem] max-md:font-[400] text-center text-[13px]">Actions</th>

                            </tr>

                        </thead>


                        {Data?.map((value, index) => (
                            <tbody className="text-[#000000] text-sm font-light w-[100%] bg-white" key={index}>
                                <tr className='' >
                                    <td className="py-[2%] w-[3%]   border-r-[1px] border-t-[1px] text-center">
                                        <span className="font-bold max-md:text-[.7rem] text-[13px] text-blue-500">{value.id}</span>
                                    </td>
                                    <td className="py-[2%] w-[10%]   border-r-[1px] border-t-[1px] text-center">
                                        <span className=" max-md:text-[.7rem] text-[13px] font-[350]">{value.company}</span>
                                    </td>
                                    <td className="py-[1%] px-[1%] w-[2%]  max-md:text-[.7rem]  border-r-[1px] border-t-[1px]   text-center">
                                        <span className=" max-md:text-[.7rem] text-[13px] font-[350]">{value.company}</span>
                                    </td>
                                    <td className="py-[1%] w-[2%]  max-md:text-[.7rem]  border-r-[1px] border-t-[1px]   text-center">
                                        <span className=' text-[13px] font-[350]'>{value.locations}</span>
                                    </td>

                                    {/* <td className="py-[2%] max-md:text-[.7rem] w-[2%] border-r-[1px] border-t-[1px] text-center">
                          <span onClick={() => UpdateStatus(value.id, value.status)} className={`bg-green-600 text-white font-[500] py-[3px] px-[10px] max-md:w-[8%] rounded-xl text-[0.6rem] max-md:py-1 max-md:px-2 max-md:text-[0.6rem] cursor-pointer ${value.status === 1 ? 'bg-green-500' : 'bg-red-500'} `}>{value.status === 1 ? 'Enable' : 'Disable'}</span>
                        </td> */}
                                    {/* <td className="py-[2%] w-[2%] max-md:text-[.7rem]  border-r-[1px] border-t-[1px]   text-center">
                          <div className="flex item-center justify-center gap-3">

                            <div className="w-4 mr-2 transform hover:text-blue-500  hover:scale-110" onClick={() => handleEdit(value.id)}>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="blue">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </div>
                            <div className="w-4 mr-2 transform hover:text-blue-500  hover:scale-110" onClick={() => handleDelete(value.id)}>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="red">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </div>
                          </div>
                        </td>

                        <td className="py-[2%] w-[1%] max-md:text-[.7rem]  border-t-[1px]   ">
                          <div className="w-4 m-auto transform hover:text-blue-500  hover:scale-110 " onClick={() => handleClick(value.id)}>   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          </div>
                        </td> */}
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </>
        </PortalLayout>
    )
}

export default ApiJobs
