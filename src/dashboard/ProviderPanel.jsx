import React from 'react'
import PortalLayout from '../portalLayout/PortalLayout'
import { Area, AreaChart, Cell, Pie, PieChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { RiUserSearchLine } from 'react-icons/ri'
import { BsSunFill } from 'react-icons/bs'

const ProviderPanel = () => {
    const form03 = [
        { job: 'ui designer', date: '11.02.23', report: '200' },
        { job: 'ui designer', date: '11.02.23', report: '200' },
        { job: 'ui designer', date: '11.02.23', report: '200' },
    ]
    const data = [
        { "name": "Page A", "uv": 4000, "pv": 2400, "amt": 2400 },
        { "name": "Page A", "uv": 2000, "pv": 2400, "amt": 2400 },
        { "name": "Page A", "uv": 1000, "pv": 2400, "amt": 2400 },
        { "name": "Page A", "uv": 9000, "pv": 2400, "amt": 2400 },
    ]
    const data01 = [
        {
            "name": "Group A",
            "value": 400
        },
    ]

    const COLORS = ['#fcbf49', '#4D38E3', '#8AC942'];

    return (
        <PortalLayout>

            <div className='px-20 py-10 border-2 rounded-xl bg-white'>
                <div className='grid grid-cols-2 max-md:grid-cols-1 md:w-[100%] '>
                    <div className='w-[90%] mt-4'>
                        <div className="bg-[#4D38E3] rounded-xl text-white max-md:mt-0 h-[7.9rem] shadow-xl shadow-gray-300 ">
                            <ul className='flex flex-row-reverse'>
                                <li><RiUserSearchLine className='w-25 text-[3rem] mb-[-2rem] pr-4 pt-2 ml-auto' /></li>
                            </ul>
                            <h1 className='text-left ml-5 mt-10 text-[1rem] font-[600]'>Jobs</h1>
                            <h1 className='text-left ml-5  text-[2rem] font-[700] '>25</h1>
                        </div>
                        <div className="bg-[#47A9FA] rounded-xl mt-6 text-white max-md:mt-0 h-[7.9rem] shadow-xl shadow-gray-300 ">
                            <ul className='flex flex-row-reverse  '>
                                <li><BsSunFill className='w-25 text-[3rem] mb-[-2rem] pr-4 pt-2 ml-auto' /></li>
                            </ul>
                            <h1 className='text-left ml-5 mt-10 text-[1rem] font-[600]'>Applied</h1>
                            <h1 className='text-left ml-5  text-[2rem] font-[700]'>55</h1>
                        </div>
                    </div>
                    <div className='border-2 p-3 h-[19rem] rounded-xl shadow-xl shadow-gray-300  max-md:mr-0'>
                        <span className=' ml-[2rem] font-[600] text-[1rem]'>Memory Status</span>
                        <ResponsiveContainer width="100%" height={240}>
                            <PieChart width={430} height={200} margin={{ top: 40, right: 20, bottom: 0, left: 20 }}>
                                {/* <Pie data={data01} dataKey="value2" nameKey="name" cx="50%" cy="50%" outerRadius={40} fill="#2994FF" /> */}
                                <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} fill="#4D38E3" label >
                                </Pie>
                                <Tooltip />

                            </PieChart>
                        </ResponsiveContainer>
                    </div>



                </div>

                <div className='flex max-md:flex-col max-md:grid-cols-1 gap-8 items-center'>
                    <div className='mt-10 w-[100%] max-md:w-[100%] py-2 bg-white border-2 p-8 rounded-xl shadow-xl shadow-gray-300 '>
                        <ResponsiveContainer width="100%" height={350}>
                            <AreaChart data={data}
                                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                                <XAxis
                                    dataKey="d"
                                // tickFormatter={dateFormatter}
                                />
                                <YAxis />
                                <Tooltip />
                                <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
                                {/* <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" /> */}
                                <Area type="monotone" dataKey="uv" stroke="#2994FF" fill="#2994FF " />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    {/* <div className=" border-2 shadow-xl h-full  max-md:w-[100%] max-md:mb-[30px] p-5 bg-white rounded-xl shadow-xl shadow-gray-300 mt-10 h-[374px] ">
              <span className=' ml-[1.6rem]  font-[600] text-[1rem]'>Transactions</span>

              <table className="w-[100%] mt-3 text-sm text-left text-gray-500 :text-gray-400">
                <thead className="text-xs text-white uppercase bg-[#2994FF] :bg-gray-700 :text-white">
                  <tr >
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
                  {form03?.map((value) => (
                    <tr className={`bg-white border-b :bg-gray-800 :border-gray-700  ${index % 2 ? 'bg-[#A4D2FF]' : 'bg-[#FFDF9F]'}`}>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap :text-white">
                        {value.job}
                      </th>
                      <td className="px-2 mx-4 py-4 text-[0.7rem]">
                        {value.detail}
                      </td>
                      <td className="px-6 py-4">
                        {value.report}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> */}

                </div>
                <div className='grid grid-cols-2 max-md:grid-cols-1 gap-10'>
                    <div className=" border-2 shadow-xl bg-white p-5 rounded-xl shadow-gray-300 mt-5 max-md:mt-[-17px] ">
                        <span className=' ml-[1.5rem]  font-[600] text-[1rem]'>Offer Sent</span>
                        <table className="w-[100%] mt-3 text-sm text-left text-gray-500 text-gray-400">
                            <thead className="text-xs text-white uppercase bg-[#2994FF]  text-gray-400">
                                <tr>
                                    <th scope="col" className="w-[30%] text-center py-3">
                                        Job
                                    </th>
                                    <th scope="col" className="w-[30%] text-center py-3">
                                        Type
                                    </th>
                                    <th scope="col" className="w-[30%] text-center py-3">
                                        Type
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {form03.map((value, index) => (
                                    <tr className={`bg-white border-b :bg-gray-800 :border-gray-700 ${index % 2 ? 'bg-[#A4D2FF]' : 'bg-[#FFDF9F]'}`}>
                                        <th scope="row" className="w-[30%] text-center max-md:px-2 py-4 font-medium text-gray-900 whitespace-nowrap :text-white">
                                            {value.job}
                                        </th>
                                        <td className="w-[30%] text-center py-4">
                                            {value.report}
                                        </td>

                                        <td className="w-[30%] text-center py-4">
                                            {value.date}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className=" border-2 shadow-xl bg-white p-5 rounded-xl shadow-gray-300 mt-5 max-md:mt-[-17px] ">
                        <span className=' ml-[1.5rem]  font-[600] text-[1rem]'>Recent Jobs</span>
                        <table className="w-[100%] mt-3 text-sm text-left text-gray-500 text-gray-400">
                            <thead className="text-xs text-white uppercase bg-[#2994FF]  text-gray-400">
                                <tr>
                                    <th scope="col" className="w-[30%] text-center py-3">
                                        Job
                                    </th>
                                    <th scope="col" className="w-[30%] text-center py-3">
                                        Type
                                    </th>
                                    <th scope="col" className="w-[30%] text-center py-3">
                                        Type
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {form03.map((value, index) => (
                                    <tr className={`bg-white border-b :bg-gray-800 :border-gray-700 ${index % 2 ? 'bg-[#A4D2FF]' : 'bg-[#FFDF9F]'}`}>
                                        <th scope="row" className="w-[30%] text-center max-md:px-2 py-4 font-medium text-gray-900 whitespace-nowrap :text-white">
                                            {value.job}
                                        </th>
                                        <td className="w-[30%] text-center py-4">
                                            {value.report}
                                        </td>

                                        <td className="w-[30%] text-center py-4">
                                            {value.date}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </PortalLayout>
    )
}

export default ProviderPanel
