import React, { useEffect, useState } from 'react'
import PortalLayout from '../portalLayout/PortalLayout'
import { Area, AreaChart, Bar, BarChart, Cell, Legend, Pie, PieChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { RiUserSearchLine } from 'react-icons/ri'
import { BsSunFill } from 'react-icons/bs'
import { getBarChart, getCompanyDashboard, getCompanyLineChart } from '../store/actions/dashboardActions'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { GetOffersByCompany } from '../store/actions/offersActions'
import { getRecentJob } from '../store/actions/jobActions'
import { useNavigate } from 'react-router-dom'
import { SESSION_PROVIDER, SESSION_PROVIDER_ID, SESSION_PROVIDER_LOGIN } from '../Utils/Constant'

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
    const router = useNavigate()

    const [providerData, setProviderData] = useState(false)

    const COLORS = ['#fcbf49', '#4D38E3', '#8AC942'];

    const dashboard = useSelector(state => state.dashboard.companyDashboard)

    useEffect(() => {
        console.log(dashboard)
    }, [dashboard])

    useEffect(() => {
        dispatch(getCompanyDashboard('70'))
    }, [dispatch])

    const barChart = useSelector(state => state.dashboard.barchart)

    // useEffect(() => {
    //   console.log(barChart);
    // }, [barChart])

    useEffect(() => {
        dispatch(getBarChart())
    }, [dispatch])

    const lineChart = useSelector(state => state.dashboard.companylinechart)

    useEffect(() => {
        console.log(lineChart);
    }, [lineChart])

    useEffect(() => {
        dispatch(getCompanyLineChart('70'))
    }, [dispatch])

    const offerByCompany = useSelector(state => state.offer.offers)

    useEffect(() => {
        console.log('offerbyCompany', offerByCompany)
    }, [offerByCompany])

    useEffect(() => {
        dispatch(GetOffersByCompany('70'))
    }, [dispatch])

    const recentJobs = useSelector(state => state.job.jobs)

    useEffect(() => {
        console.log('recentJobs', recentJobs)
    }, [recentJobs])

    useEffect(() => {
        dispatch(getRecentJob())
    }, [dispatch])



    const dateFormatter = (date) => {
        return moment(date).format('MMM Do YY');
    };

    const navigate = useNavigate();

    useEffect(() => {
        const isProviderLogin = sessionStorage.getItem(SESSION_PROVIDER_LOGIN)
        if (isProviderLogin === "true") {
            setProviderData(true)
            navigate('/providerPanel')
        } else {
            setProviderData(false)
            navigate('/providerLogin')
        }
      }, [providerData])


    const logout = () => {
        sessionStorage.setItem(SESSION_PROVIDER_LOGIN, "false")
        sessionStorage.setItem(SESSION_PROVIDER_ID, null)
        sessionStorage.setItem(SESSION_PROVIDER_LOGIN, null)
        sessionStorage.setItem(SESSION_PROVIDER, null)
        router('/providerLogin')
    }

    return (
        <PortalLayout>
        {providerData ?
        <>
                        <button onClick={() => logout()} className='bg-blue-600 text-white cursor-pointer font-[600] px-10 py-[5px] w-[100%] rounded-full mt-6'>logout</button>
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
                        <div className="bg-[#8AC942] rounded-xl mt-6 text-white max-md:mt-0 h-[7.9rem] shadow-xl shadow-gray-300 ">
                            <ul className='flex flex-row-reverse  '>
                                <li><BsSunFill className='w-25 text-[3rem] mb-[-2rem] pr-4 pt-2 ml-auto' /></li>
                            </ul>
                            <h1 className='text-left ml-5 mt-10 text-[1rem] font-[600]'>Applied</h1>
                            <h1 className='text-left ml-5  text-[2rem] font-[700]'>{dashboard?.applied}</h1>
                        </div>
                    </div>
                    <div className='w-[90%] mt-4'>
                        <div className="bg-[#4D03A3] rounded-xl text-white max-md:mt-0 h-[7.9rem] shadow-xl shadow-gray-300 ">
                            <ul className='flex flex-row-reverse'>
                                <li><RiUserSearchLine className='w-25 text-[3rem] mb-[-2rem] pr-4 pt-2 ml-auto' /></li>
                            </ul>
                            <h1 className='text-left ml-5 mt-10 text-[1rem] font-[600]'>Offers</h1>
                            <h1 className='text-left ml-5  text-[2rem] font-[700] '>{dashboard?.offers}</h1>
                        </div>
                        <div className="bg-[#EEB167] rounded-xl text-white  px-2 py-4 mt-6  max-md:mt-0 h-[7.9rem] shadow-xl shadow-gray-300 ">
                            <h1 className='text-left ml-5 text-[1.2rem] font-[700]'>Current Subscribed Plan</h1>
                            <div className='flex justify-between mt-3' >
                                <h1 className='text-left ml-5 text-[1rem] font-[600]'>Advance</h1>
                                <h1 className='mr-5 text-[1rem]  font-[600]'>$ 7.60</h1>
                            </div>
                            <h1 className='text-right mr-5  mt-2 text-[0.9rem] font-[500]'>Paid This Month</h1>
                        </div>
                    </div>
                    {/* <div className='border-2 p-3 h-[19rem] rounded-xl shadow-xl shadow-gray-300  max-md:mr-0'>
                        <span className=' ml-[2rem] font-[600] text-[1rem]'>Memory Status</span>
                    </div> */}



                </div>

                <div className='mt-10 w-[100%] py-2 bg-white border-2 p-8 rounded-xl shadow-xl shadow-gray-300 '>
                    <ResponsiveContainer width="100%" height={350}>
                        <AreaChart data={lineChart}
                            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                            <XAxis
                                dataKey="d"
                                tickFormatter={dateFormatter}
                            />
                            <YAxis />
                            <Tooltip />
                            <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
                            {/* <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" /> */}
                            <Area type="monotone" dataKey="interactions" stroke="#2994FF" fill="#2994FF " />
                        </AreaChart>
                    </ResponsiveContainer>
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
                                        OfferType
                                    </th>
                                    <th scope="col" className="w-[30%] text-center py-3">
                                        Date
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {offerByCompany?.map((value, index) => (
                                    <tr className={`bg-white border-b :bg-gray-800 :border-gray-700 ${index % 2 ? 'bg-[#A4D2FF]' : 'bg-[#FFDF9F]'}`}>
                                        <th scope="row" className="w-[30%] text-center max-md:px-2 py-4 font-medium text-gray-900 whitespace-nowrap :text-white">
                                            {value.job}
                                        </th>
                                        <td className="w-[30%] text-center py-4">
                                            {value.offerType}
                                        </td>

                                        <td className="w-[30%] text-center py-4">
                                            {moment(value.date).format('MMM Do YY')}
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
                                        Role
                                    </th>
                                    <th scope="col" className="w-[30%] text-center py-3">
                                        Qualifications
                                    </th>
                                    <th scope="col" className="w-[30%] text-center py-3">
                                        Date
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {recentJobs.slice(0, 3).map((value, index) => (
                                    <tr className={`bg-white border-b :bg-gray-800 :border-gray-700 ${index % 2 ? 'bg-[#A4D2FF]' : 'bg-[#FFDF9F]'}`}>
                                        <th scope="row" className="w-[30%] text-center max-md:px-2 py-4 font-medium text-gray-900 whitespace-nowrap :text-white">
                                            {value.role}
                                        </th>
                                        <td className="w-[30%] text-center py-4">
                                            {value.qualification}
                                        </td>

                                        <td className="w-[30%] text-center py-4">
                                            {moment(value.date).format('MMM Do YY')}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
        :
        <div>
            Chuti karo
        </div>
        }

        </PortalLayout>
    )
}

export default ProviderPanel
