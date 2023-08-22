import React, { useEffect } from 'react'
import PortalLayout from '../portalLayout/PortalLayout'
import { BarChart, Bar, Tooltip, XAxis, YAxis, PieChart, Pie, LineChart, CartesianGrid, Legend, Line, ResponsiveContainer, AreaChart, ReferenceLine, Area } from 'recharts';
import { RiEarthFill, RiEarthLine, RiHomeOfficeLine, RiPagesLine, RiUserSearchLine } from 'react-icons/ri'
import { BiCategoryAlt, BiUserCheck } from 'react-icons/bi'

import axios from 'axios';
import { MdSettings } from "react-icons/md";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { BsSunFill } from "react-icons/bs";
import { useState } from 'react';

const card = [
  { name: "Seekers", amount: "500", style: "bg-[#4D38E3] rounded-xl  text-white py-2 shadow-xl shadow-gray-300 ", icon: RiUserSearchLine },
  { name: "Providers", amount: "700", style: "bg-[#47A9FA] rounded-xl  text-white py-2 shadow-xl shadow-gray-300 ", icon: RiAccountPinCircleFill },
  { name: "Applied", amount: "900", style: "bg-[#8AC942] rounded-xl  text-white py-2 shadow-xl shadow-gray-300 ", icon: BiUserCheck },
  { name: "Users paid", amount: "150", style: "bg-[#1AD185] rounded-xl  text-white py-2 shadow-xl shadow-gray-300 ", icon: BsSunFill },
  { name: "Offers accepted", amount: "500", style: "bg-[#fcbf49] rounded-xl  text-white py-2 shadow-xl shadow-gray-300 ", icon: BsSunFill },
  { name: "Offers rejected", amount: "20", style: "bg-[#f77f00] rounded-xl  text-white py-2 shadow-xl shadow-gray-300 ", icon: BsSunFill },
]


const data = [
  { "day2": "profit-01", "profit": [1, 0] },
  { "day2": "profit-01", "profit": [1, 10] },
  { "day2": "profit-01", "profit": [1, 40] },
  { "day2": "profit-01", "profit": [1, 70] },
  { "day2": "profit-01", "profit": [1, 20] },
  { "day2": "profit-01", "profit": [1, 10] },
  { "day2": "profit-01", "profit": [1, 50] },
  { "day2": "profit-01", "profit": [1, 50] },
  { "day2": "profit-01", "profit": [1, 50] },
  { "day2": "profit-01", "profit": [1, 100] },
  { "day2": "profit-01", "profit": [1, 10] },
  { "day2": "profit-01", "profit": [1, 40] },
  { "day2": "profit-01", "profit": [1, 70] },
  { "day2": "profit-01", "profit": [1, 20] },
  { "day2": "profit-01", "profit": [1, 10] },
  { "day2": "profit-01", "profit": [1, 50] },
  { "day2": "profit-01", "profit": [1, 50] },
  { "day2": "profit-01", "profit": [1, 50] },

]
const data01 = [
  { "value": 400,'value2':200 },
  { "value": 200,'value2':300 },
  { "value": 600,'value2':400 },



]

const data03 = [
  { "name": "Mon ", "uv": 1000, "pv": 2400, "amt": 2400 },
  { "name": " Tue", "uv": 2000, "pv": 2400, "amt": 2400 },
  { "name": " Wed", "uv": 1000, "pv": 3400, "amt": 2400 },
  { "name": "Thur", "uv": 2000, "pv": 4400, "amt": 2400 },
  { "name": " Fri", "uv": 3000, "pv": 6400, "amt": 2400 },
  { "name": "Sat ", "uv": 4000, "pv": 8400, "amt": 2400 },
]
const form01 = [
  { id: '01', date: '11.02.23', amount: '200' },
  { id: '01', date: '11.02.23', amount: '200' },
  { id: '01', date: '11.02.23', amount: '200' },

]
const form02 = [
  { job: 'ui designer', date: '11.02.23', report: '200' },
  { job: 'ui designer', date: '11.02.23', report: '200' },
  { job: 'ui designer', date: '11.02.23', report: '200' },

]
const form03 = [
  { job: 'ui designer', date: '11.02.23', report: '200' },
  { job: 'ui designer', date: '11.02.23', report: '200' },
  { job: 'ui designer', date: '11.02.23', report: '200' },

]

// const icons = [MdSettings, RiAccountPinCircleFill, BsSunFill];
const Dashboard = () => {
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   axios
  //   .get("http://34.143.145.139:5001/")
  //   .then((res) => console.log(res)) 
  //   .catch((err) => console.log(err))
  // })

  const getDashborad = async () => {
    try {
      setLoading(true)
      const res = await axios.get("http://34.143.145.139:5001/")
      console.log(res.data)
    }
    catch (err) {
      setLoading(false)
      console.log(err.message)
    }
  }

  useEffect(() => {

    getDashborad()

  }, [])
  return (
    <PortalLayout>
      {loading ? <center> <div class="flex justify-center items-center h-screen">
        <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
      </center> : <>
        <div className='p-10 border-2  rounded-xl  bg-white'>
          <div className='flex max-md:flex-col gap-3'>
            <div className='grid grid-cols-3 max-md:grid-cols-2 md:w-[70%] mb-5 gap-6'>
              {card.map((value) => {
                return (
                  <div className={value.style}>
                    <ul className='flex flex-row-reverse  '>
                      <li><value.icon className='w-25 text-[3rem] mb-[-.7rem] ml-auto' /></li>
                    </ul>
                    <h1 className='text-left ml-5 mt-6 text-[1rem] font-[500]'>{value.name}</h1>
                    <h1 className='text-left ml-5 mt-[-0.5rem] text-[2rem] font-[700]'>{value.amount}</h1>
                  </div>
                )
              })}

            </div>
            <div className='bg-white border-2 p-3 md:w-[30%] h-[19rem] rounded-xl shadow-xl shadow-gray-300  max-md:mr-0'>
              <span className=' ml-[2rem] font-[600] text-[1rem]'>Memory Status</span>
              <ResponsiveContainer width="100%" height={240}>
                <PieChart width={430} height={200} margin={{ top: 40, right: 20, bottom: 0, left: 20 }}>
                  <Pie data={data01} dataKey="value2" nameKey="name" cx="50%" cy="50%" outerRadius={40} fill="#2994FF" />
                  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={70} fill="#4D38E3" label />
                  <Tooltip />

                </PieChart>
              </ResponsiveContainer>
            </div>

          </div>





          <div className='flex max-md:flex-col  max-md:grid-cols-1 gap-10 items-center'>
            <div className='mt-10 w-[70%] max-md:w-[100%] py-2 bg-white border-2  rounded-xl shadow-xl shadow-gray-300 '>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={data03}
                  margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <XAxis dataKey="name" />
                  <YAxis />

                  <Tooltip />
                  <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
                  {/* <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" /> */}
                  <Area type="monotone" dataKey="uv" stroke="#2994FF" fill="#2994FF " />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className=" border-2 shadow-xl  p-5 bg-white rounded-xl shadow-xl shadow-gray-300 mt-5 h-[300px] ">
              <span className=' ml-[1.6rem]  font-[600] text-[1rem]'>Transactions</span>

              {/* <h1 className='text-center  text-black font-[500] text-[1.4rem]'>Transactions</h1> */}
              <table className="w-[100%] mt-3 text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-[#2994FF] dark:bg-gray-700 dark:text-white">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Id
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Amount
                    </th>

                  </tr>
                </thead>
                <tbody>
                  {form01.map((value, index) => (
                    <tr className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700  ${index % 2 ? 'bg-[#A4D2FF]' : 'bg-[#FFDF9F]'}`}>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {value.id}
                      </th>
                      <td className="px-6 py-4">
                        {value.date}
                      </td>

                      <td className="px-6 py-4">
                        {value.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className='grid  grid-cols-2 max-md:grid-cols-1 gap-10'>
            <div className=" border-2 shadow-xl  bg-white p-5 rounded-xl shadow-gray-300 md:mt-10 ">
              <span className=' ml-[1.5rem]  font-[600] text-[1rem]'>Applied</span>

              {/* <h1 className='text-center text-white font-[500] text-[1.4rem]'>Applied</h1> */}
              <table className="w-[100%] mt-3 text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-[#2994FF] dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 max-md:px-2 py-3">
                      Job
                    </th>
                    <th scope="col" className="px-6 max-md:px-2 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 max-md:px-2 py-3">
                      Applieds
                    </th>

                  </tr>
                </thead>
                <tbody>
                  {form03.map((value, index) => (
                    <tr className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 ${index % 2 ? 'bg-[#A4D2FF]' : 'bg-[#FFDF9F]'}`}>
                      <th scope="row" className="px-6 max-md:px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {value.job}
                      </th>
                      <td className="px-6 max-md:px-2 py-4">
                        {value.date}
                      </td>

                      <td className="px-6  max-md:px-2 py-4">
                        {value.report}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className=" border-2 shadow-xl bg-white p-5 rounded-xl shadow-gray-300 mt-5 ">
              <span className=' ml-[1.6rem]  font-[600] text-[1rem]'>Reports</span>

              {/* <h1 className='text-center  text-white font-[500] text-[1.4rem]'>Reports</h1> */}
              <table className="w-[100%] mt-3 text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase  bg-[#2994FF] dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 max-md:px-2 py-3">
                      Job
                    </th>
                    <th scope="col" className="px-6 max-md:px-2 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 max-md:px-2 py-3">
                      Reports
                    </th>

                  </tr>
                </thead>
                <tbody>
                  {form02.map((value, index) => (
                    <tr className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 ${index % 2 ? 'bg-[#A4D2FF]' : 'bg-[#FFDF9F]'}`}>
                      <th scope="row" className="px-6 max-md:px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {value.job}
                      </th>
                      <td className="px-6 max-md:px-2 py-4">
                        {value.date}
                      </td>

                      <td className="px-6  max-md:px-2 py-4">
                        {value.report}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>



          </div>

          <div className=' grid grid-cols-1 max-md:grid-cols-1 justify-center gap-6 mt-5'>
            <div className='bg-white border-2 p-2 rounded-xl shadow-xl shadow-gray-300'>
              <span className=' ml-[2rem] font-[600] text-[1rem]'>Memory Status</span>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart width={430} height={250} data={data} margin={{ top: 40, right: 20, bottom: 0, left: 20 }} >
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="profit" fill="#2994FF" />
                  <Legend />
                </BarChart>
              </ResponsiveContainer>
              <span className=' ml-[1rem] !mt-[-10rem] font-[600] text-[1rem]'>Months</span>

            </div>

          </div>



        </div>
      </>}




    </PortalLayout>
  )
}

export default Dashboard
