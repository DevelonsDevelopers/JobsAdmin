import React, { useEffect, useState } from 'react'
import PortalLayout from '../portalLayout/PortalLayout'
import { BarChart, Bar, Tooltip, XAxis, YAxis, PieChart, Pie, LineChart, CartesianGrid, Legend, Line, ResponsiveContainer } from 'recharts';
import SeekersView from './view/SeekersView';
import { useDispatch, useSelector } from 'react-redux';
import { AllSeekers } from '../store/actions/seekerActions';


const seeker = [
  {id:'01', user: "Jane", country: "U.S", status:'Active'},
  {id:'01', user: "Jane", country: "U.S", status:'Active'},
  {id:'01', user: "Jane", country: "U.S", status:'Active'},
  {id:'01', user: "Jane", country: "U.S", status:'Active'},
  {id:'01', user: "Jane", country: "U.S", status:'Active'},
  {id:'01', user: "Jane", country: "U.S", status:'Active'},


]

const Seekers = () => {
  const [open, setOpen] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [view, setView] = useState(false);
  const [data, setData] = useState()

  const dispatch = useDispatch()

  const handleClick = (value) => {
    setOpenView(!open)
    setData(value)
  }
  

  const seekers = useSelector(state => state.seeker.seekers)

  useEffect(() => {
    console.log(seekers)
  }, [seekers])


  useEffect(() => {
    if(seekers !== null || seekers !== undefined || seekers.length !== 0){
      dispatch(AllSeekers())
    }
  }, [dispatch])
  return (
    <PortalLayout>
       <h1 className='text-[3.125rem] font-[800] text-[#000] text-center max-md:text-[2rem] uppercase'>seeker</h1>

<div className="w-[100%] max-md:h-full  max-md:px-2 flex flex-col justify-center bg-gray-100">

  <div className='flex justify-center mt-[3rem] w-[90%] m-auto'>

    <input type="search" name="" id="" placeholder='Search...' className='border-2 border-gray-600 pl-[4rem] rounded-[1.0625rem] py-2  w-[27.8125rem] mr-auto max-md:py-[1px] max-md:w-[15rem] max-md:text-[0.7rem] focus:outline-none focus:ring-0 focus:border-gray-900 peer' />
    <a href="/categories/add"> <button className="bg-[#0047FF] cursor-pointer  max-md:text-[.6rem] py-2 px-[1rem] max-md:px-[1rem] max-md:py-[5px] text-white font-[600] max-md:font-[400] rounded-[1.375rem] ml-auto "  >
      Add New
    </button>
    </a>

  </div>
  
    <SeekersView open={openView} setOpen={setOpenView} title={" VIEW"} data={data} />
    <div className="rounded-xl p-5 bg-white w-[90%] m-auto max-md:w-[100%]  mt-6 ">
          <thead className='mt-10'>

            <tr className=" uppercase  text-sm leading-normal w-[100%]">
              <th className="py-[2%] border-r-[1px] border-b-[2px] border-b-black  w-[3%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]  text-[13px]">ID </th>
              <th className="py-[2%] border-r-[1px] border-b-[2px] border-b-black  w-[10%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%] text-[13px]">User</th>
              <th className="py-[2%] border-r-[1px] border-b-[2px] border-b-black w-[1%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[3%] text-[13px]">Country</th>
              <th className="py-[2%] border-r-[1px] border-b-[2px] border-b-black w-[2%] max-md:text-[.6rem] max-md:font-[400] text-center text-[13px]">Status</th>
              <th className="py-[2%] border-r-[1px] border-b-[2px] border-b-black  w-[2%] max-md:text-[.6rem] max-md:font-[400] text-center text-[13px]">Actions</th>
              <th className="py-[2%]   border-b-[2px] border-b-black  w-[1%] max-md:text-[.6rem] max-md:font-[400] text-center"></th>

            </tr>

          </thead>

          {seekers.map((value) => (
            <tbody className="text-[#000000] text-sm font-light w-[100%] bg-white ">
              <tr className='' >
                <td className="py-[2%] w-[3%]   border-r-[1px] border-t-[1px]   text-center">
                  <span className="font-bold max-md:text-[.7rem] text-[13px] text-blue-500">{value.id}</span>
                </td>
                <td className="py-[2%] w-[10%]   border-r-[1px] border-t-[1px]   text-center">
                  <span className=" max-md:text-[.7rem] text-[13px] font-[350]">{value.username}</span>
                </td>
                <td className="py-[1%] w-[2%]  max-md:text-[.7rem]  border-r-[1px] border-t-[1px]   text-center">
                  <span className=' text-[13px] font-[350]'>{value.country}</span>
                </td>

                <td className="py-[2%] max-md:text-[.7rem] w-[2%] border-r-[1px] border-t-[1px]   text-center">
                  <span className="bg-green-600 text-white font-[500] py-[3px] px-[10px] max-md:w-[8%] rounded-xl text-[0.6rem] max-md:py-1 max-md:px-2 max-md:text-[0.6rem] cursor-pointer hover:bg-green-700 ">{value.status}</span>
                </td>
                

                <td className="py-[2%] w-[1%] max-md:text-[.7rem]  border-t-[1px]   ">
                  <div className="w-4 m-auto transform hover:text-blue-500  hover:scale-110 " onClick={() => handleClick(value)}>   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  </div>
                </td>
              </tr>

            </tbody>
          ))}
        </div>


</div>


    </PortalLayout>
  )
}

export default Seekers
