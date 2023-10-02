import React, { useEffect } from 'react'
import PortalLayout from '../portalLayout/PortalLayout'
import { Area, AreaChart, Bar, BarChart, Cell, Legend, Pie, PieChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { RiUserSearchLine } from 'react-icons/ri'
import { BsSunFill } from 'react-icons/bs'
import { getBarChart, getDashboard, getLineChart } from '../store/actions/dashboardActions'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

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

    const dispatch = useDispatch();

    const COLORS = ['#fcbf49', '#4D38E3', '#8AC942'];

    const dashboard = useSelector(state => state.dashboard.dashboard)

    // useEffect(() => {
    //   console.log(dashboard)
    // }, [dashboard])

    useEffect(() => {
        dispatch(getDashboard())
    }, [dispatch])

    const barChart = useSelector(state => state.dashboard.barchart)

    // useEffect(() => {
    //   console.log(barChart);
    // }, [barChart])

    useEffect(() => {
        dispatch(getBarChart())
    }, [dispatch])



    const dateFormatter = (date) => {
        return moment(date).format('MMM Do YY');
    };
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
                            <h1 className='text-left ml-5  text-[2rem] font-[700] '>{dashboard?.jobs}</h1>
                        </div>
                        <div className="bg-[#47A9FA] rounded-xl mt-6 text-white max-md:mt-0 h-[7.9rem] shadow-xl shadow-gray-300 ">
                            <ul className='flex flex-row-reverse  '>
                                <li><BsSunFill className='w-25 text-[3rem] mb-[-2rem] pr-4 pt-2 ml-auto' /></li>
                            </ul>
                            <h1 className='text-left ml-5 mt-10 text-[1rem] font-[600]'>Applied</h1>
                            <h1 className='text-left ml-5  text-[2rem] font-[700]'>{dashboard?.applied}</h1>
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

                <div className=' grid grid-cols-1 max-md:grid-cols-1 justify-center gap-6 mt-5'>
                    <div className='bg-white border-2 p-2 rounded-xl shadow-xl shadow-gray-300'>
                        <span className=' ml-[2rem] font-[600] text-[1rem]'>Applied Users</span>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart width={430} height={250} data={barChart} margin={{ top: 40, right: 20, bottom: 0, left: 20 }} >
                                <XAxis
                                    dataKey='date'
                                    tickFormatter={dateFormatter}
                                />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="applied" fill="#2994FF" />
                                <Legend />
                            </BarChart>
                        </ResponsiveContainer>
                        <span className=' ml-[1rem] !mt-[-10rem] font-[600] text-[1rem]'>Months</span>

                    </div>

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
