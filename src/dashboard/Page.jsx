import React from 'react'
import PortalLayout from '../portalLayout/PortalLayout'
import { BarChart, Bar, Tooltip, XAxis, YAxis, PieChart, Pie, LineChart, CartesianGrid, Legend, Line, ResponsiveContainer,AreaChart,ReferenceLine,Area } from 'recharts';

const card = [
  { name: "Seekers", amount: "200", style: "bg-[#3E85F4] rounded-xl text-white py-2 " },
  { name: "Providers", amount: "200", style: "bg-[#32AA54] rounded-xl text-white py-2 " },
  { name: "Reports", amount: "200", style: "bg-[#FCBC05] rounded-xl text-white py-2 " },
  { name: "Applied", amount: "200", style: "bg-[#EB4235] rounded-xl text-white py-2 " },

]


const data = [
  { "day": "profit-01", "temperature": [-1, 20] },
  { "day": "profit-02", "temperature": [-2, 30] },
  { "day": "profit-03", "temperature": [-3, 40] },
  { "day": "profit-04", "temperature": [-4, 50] },
  { "day": "profit-05", "temperature": [-5, 60] },
  { "day": "profit-06", "temperature": [-6, 70] },
]
const data01 = [
  { "name": "Group A", "value": 400, "at": 400 },
  { "name": "Group b", "value": 500 },
  { "name": "Group c", "value": 100 },

]

const data03 = [
  { "name": "Page A", "uv": 4000, "pv": 2400, "amt": 2400  },
  { "name": "Page A", "uv": 2000, "pv": 2400, "amt": 2400 },
  { "name": "Page A", "uv": 3000, "pv": 3400, "amt": 2400 },
  { "name": "Page A", "uv": 3000, "pv": 4400, "amt": 2400 },
  { "name": "Page A", "uv": 4000, "pv": 6400, "amt": 2400 },
  { "name": "Page A", "uv": 5000, "pv": 8400, "amt": 2400 },
]
const form01 =[
{id:'01',date:'11.02.23',amount:'200'},
{id:'01',date:'11.02.23',amount:'200'},
{id:'01',date:'11.02.23',amount:'200'},

]
const form02 =[
{job:'ui designer',date:'11.02.23',report:'200'},
{job:'ui designer',date:'11.02.23',report:'200'},
{job:'ui designer',date:'11.02.23',report:'200'},

]
const form03 =[
{job:'ui designer',date:'11.02.23',report:'200'},
{job:'ui designer',date:'11.02.23',report:'200'},
{job:'ui designer',date:'11.02.23',report:'200'},

]
const Dashboard = () => {
  return (
    <PortalLayout>
      <div className='p-10 border-2 bg-white rounded-xl '>

        <div className='grid grid-cols-4 max-md:grid-cols-2 mb-5 gap-6'>
          {card.map((value) => (
            <div className={value.style}>
              <h1 className='text-right mr-2 text-[1rem]'>{value.name}</h1>
              <h1 className='text-right mr-2 text-[2rem]'>{value.amount}</h1>
            </div>
          ))}
        </div>





        <div className=' grid grid-cols-2 max-md:grid-cols-1 justify-center gap-6'>
          <div className='bg-white border-2 p-2 rounded-xl shadow-xl shadow-blue-100'>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart width={430} height={250} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} >
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="temperature" fill="#8884d8" />
                <Legend />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className='bg-white border-2 p-2 rounded-xl shadow-xl shadow-blue-100  text-center  max-md:mr-0'>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart width={530} height={250}>
                <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="blue" label />
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <center>
          <div className='mt-10 ml-[-1rem] py-2  bg-white border-2  rounded-xl shadow-xl shadow-blue-100 '>
          <ResponsiveContainer width='100%' height="80%">
    <AreaChart data={data03}
      margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="0 0" />
      <Tooltip />
      <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
      {/* <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="0 0" /> */}
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      <Legend />
    </AreaChart>
  </ResponsiveContainer>
          </div>
        </center>
        <div className='grid grid-cols-2 max-md:grid-cols-1 gap-10'>

          <div className=" border-2 shadow-xl bg-green-500 rounded-xl shadow-blue-100 mt-5 ">
           <h1 className='text-center  text-white font-[500] text-[1.4rem]'>Transactions</h1>
            <table className="w-[100%] text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
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
                  {form01.map((value)=>(
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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

          <div className=" border-2 shadow-xl bg-green-500 rounded-xl shadow-blue-100 mt-5 ">
           <h1 className='text-center  text-white font-[500] text-[1.4rem]'>Reports</h1>
            <table className="w-[100%] text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
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
                  {form02.map((value)=>(
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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


        <div className=" border-2 shadow-xl  bg-green-500 rounded-xl shadow-blue-100 mt-10 ">
           <h1 className='text-center text-white font-[500] text-[1.4rem]'>Applied</h1>
            <table className="w-[100%] text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
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
                  {form03.map((value)=>(
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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





    </PortalLayout>
  )
}

export default Dashboard
