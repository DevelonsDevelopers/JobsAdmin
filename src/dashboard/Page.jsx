import React, { useEffect } from 'react'
import PortalLayout from '../portalLayout/PortalLayout'
import { BarChart, Bar, Tooltip, XAxis, YAxis, PieChart, Pie, Cell, Legend, ResponsiveContainer, AreaChart, ReferenceLine, Area } from 'recharts';
import { RiUserSearchLine } from 'react-icons/ri'
import { BiUserCheck } from 'react-icons/bi'
import { RiAccountPinCircleFill } from "react-icons/ri";
import { BsSunFill } from "react-icons/bs";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBarChart, getDashboard, getLineChart, getReports, getTransaction, getpiechart } from '../store/actions/dashboardActions';
import moment from 'moment/moment';


const form03 = [
  { job: 'ui designer', date: '11.02.23', report: '200' },
  { job: 'ui designer', date: '11.02.23', report: '200' },
  { job: 'ui designer', date: '11.02.23', report: '200' },
]

const Dashboard = () => {
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();
  const [pieData, setPieData] = useState([{ 'value': 0, 'name': 'Companies' }, { 'value': 0, 'name': 'Jobs', 'color': '#ffffff' }, { 'value': 0, 'name': 'Seekers' }])

  const COLORS = ['#fcbf49', '#4D38E3', '#8AC942'];

  const dashboard = useSelector(state => state.dashboard.dashboard)

  // useEffect(() => {
  //   console.log(dashboard)
  // }, [dashboard])

  useEffect(() => {
    dispatch(getDashboard())
  }, [dispatch])

  const piechart = useSelector(state => state.dashboard.piechart)

  useEffect(() => {
    const array = [{ 'value': piechart?.companies, 'name': 'Companies' }, { 'value': piechart?.jobs, 'name': 'Jobs', 'color': '#ffffff' }, { 'value': piechart?.seekers, 'name': 'Seekers', 'color': '#4D58E3' }]
    setPieData(array)
  }, [piechart])

  useEffect(() => {
    dispatch(getpiechart())
  }, [dispatch])

  const lineChart = useSelector(state => state.dashboard.linechart)

  useEffect(() => {
    dispatch(getLineChart())
  }, [dispatch])

  const barChart = useSelector(state => state.dashboard.barchart)

  // useEffect(() => {
  //   console.log(barChart);
  // }, [barChart])

  useEffect(() => {
    dispatch(getBarChart())
  }, [dispatch])

  const reports = useSelector(state => state.dashboard.report)

  // useEffect(() => {
  //   console.log(reports)
  // }, [reports])

  useEffect(() => {
    dispatch(getReports())
  }, [dispatch])

  const transactions = useSelector(state => state.dashboard.transaction)

  useEffect(() => {
    dispatch(getTransaction())
  }, [dispatch])

  const dateFormatter = (date) => {
    return moment(date).format('MMM Do YY');
  };


  return (
    <PortalLayout>
      {loading ? <center> <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
      </center> : <>
        <div className='p-10 border-2  rounded-xl  bg-white'>
          <div className='flex max-md:flex-col gap-6'>
            <div className='grid grid-cols-3 max-md:grid-cols-2 md:w-[70%] gap-6 mt-[5.7rem]' style={{ userSelect: 'none' }}>

              <div className="bg-[#4D38E3] rounded-xl  text-white mt-[-3rem] max-md:mt-0 h-[6.5rem] shadow-xl shadow-gray-300 ">
                <ul className='flex flex-row-reverse  '>
                  <li><RiUserSearchLine className='w-25 text-[3rem] mb-[-2rem] pr-4 pt-2 ml-auto' /></li>
                </ul>
                <h1 className='text-left ml-5 mt-6 text-[1rem] font-[600]'>Jobs</h1>
                <h1 className='text-left ml-5 mt-[-0.5rem] text-[2rem] font-[700] '>{dashboard?.jobs}</h1>
              </div>
              <div className="bg-[#47A9FA] rounded-xl  text-white mt-[-3rem] max-md:mt-0 h-[6.5rem] shadow-xl shadow-gray-300 ">
                <ul className='flex flex-row-reverse  '>
                  <li><BsSunFill className='w-25 text-[3rem] mb-[-2rem] pr-4 pt-2 ml-auto' /></li>
                </ul>
                <h1 className='text-left ml-5 mt-6 text-[1rem] font-[600]'>Categories</h1>
                <h1 className='text-left ml-5 mt-[-0.5rem] text-[2rem] font-[700] '>{dashboard?.categories}</h1>
              </div>
              <div className="bg-[#8AC942] rounded-xl  text-white mt-[-3rem] max-md:mt-0 h-[6.5rem] shadow-xl shadow-gray-300 ">
                <ul className='flex flex-row-reverse  '>
                  <li><BiUserCheck className='w-25 text-[3rem] mb-[-2rem] pr-4 pt-2 ml-auto' /></li>
                </ul>
                <h1 className='text-left ml-5 mt-6 text-[1rem] font-[600]'>Seekers</h1>
                <h1 className='text-left ml-5 mt-[-0.5rem] text-[2rem] font-[700] '>{dashboard?.seekers}</h1>
              </div>
              <div className="bg-[#1AD185] rounded-xl  text-white mt-[-3rem] max-md:mt-0 h-[6.5rem] shadow-xl shadow-gray-300 ">
                <ul className='flex flex-row-reverse  '>
                  <li><BiUserCheck className='w-25 text-[3rem] mb-[-2rem] pr-4 pt-2 ml-auto' /></li>
                </ul>
                <h1 className='text-left ml-5 mt-6 text-[1rem] font-[600]'>Cities</h1>
                <h1 className='text-left ml-5 mt-[-0.5rem] text-[2rem] font-[700] '>{dashboard?.cities}</h1>
              </div>
              <div className="bg-[#fcbf49] rounded-xl  text-white mt-[-3rem] max-md:mt-0 h-[6.5rem] shadow-xl shadow-gray-300 ">
                <ul className='flex flex-row-reverse  '>
                  <li><RiAccountPinCircleFill className='w-25 text-[3rem] mb-[-2rem] pr-4 pt-2 ml-auto' /></li>
                </ul>
                <h1 className='text-left ml-5 mt-6 text-[1rem] font-[600]'>Companies</h1>
                <h1 className='text-left ml-5 mt-[-0.5rem] text-[2rem] font-[700] '>{dashboard?.companies}</h1>
              </div>
              <div className="bg-[#f77f00] rounded-xl  text-white mt-[-3rem] max-md:mt-0 h-[6.5rem] shadow-xl shadow-gray-300 ">
                <ul className='flex flex-row-reverse  '>
                  <li><BsSunFill className='w-25 text-[3rem] mb-[-2rem] pr-4 pt-2 ml-auto' /></li>
                </ul>
                <h1 className='text-left ml-5 mt-6 text-[1rem] font-[600]'>Interactions</h1>
                <h1 className='text-left ml-5 mt-[-0.5rem] text-[2rem] font-[700] '>{dashboard?.interactions}</h1>
              </div>

            </div>
            <div
              className='white border-2 p-3 md:w-[30%] h-[19rem] rounded-xl shadow-xl shadow-gray-300 max-md:mr-0'
              style={{ outline: 'none' }}
              tabIndex={0}
              onFocus={(e) => e.target.blur()}
            >
              <span className='ml-[2rem] font-[600] text-[1rem]'>Memory Status</span>
              <ResponsiveContainer width="100%" height={240}>
                <PieChart width={430} height={200} margin={{ top: 40, right: 20, bottom: 0, left: 20 }}>
                  <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} fill="#4D38E3" label>
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>


          </div>

          <div className='flex max-md:flex-col  max-md:grid-cols-1 gap-8 items-center' style={{ userSelect: 'none' }}>
            <div className='mt-10 w-[70%] max-md:w-[100%] py-2 bg-white border-2 p-8 rounded-xl shadow-xl shadow-gray-300 '>
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

            <div className=" border-2 shadow-xl h-full  max-md:w-[100%] max-md:mb-[30px] p-5 bg-white rounded-xl shadow-xl shadow-gray-300 mt-10 h-[374px] ">
              <span className=' ml-[1.6rem]  font-[600] text-[1rem]'>Transactions</span>

              <table className="w-[100%] mt-3 text-sm text-left text-gray-500 :text-gray-400">
                <thead className="text-xs text-white uppercase bg-[#2994FF] ">
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
                  {transactions?.map((value, index) => (
                    <tr className={`bg-white border-b :bg-gray-800 :border-gray-700  ${index % 2 ? 'bg-[#A4D2FF]' : 'bg-[#FFDF9F]'}`}>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap :text-white">
                        {value.id}
                      </th>
                      <td className="px-2 mx-4 py-4 text-[0.7rem]">
                        {moment(value.date).format('MMM Do YY')}
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
          <div className='grid  grid-cols-2 max-md:grid-cols-1 gap-10' style={{ userSelect: 'none' }}>
            <div className=" border-2 shadow-xl bg-white p-5 rounded-xl shadow-gray-300 mt-5 max-md:mt-[-17px] ">
              <span className=' ml-[1.5rem]  font-[600] text-[1rem]'>Applied</span>
              <table className="w-[100%] mt-3 text-sm text-left text-gray-500 :text-gray-400">
                <thead className="text-xs text-white uppercase bg-[#2994FF] :bg-gray-700 :text-gray-400">
                  <tr>
                    <th scope="col" className="w-[30%] text-center  py-3">
                      Job
                    </th>
                    <th scope="col" className="w-[30%] text-center  py-3">
                      Date
                    </th>
                    <th scope="col" className="w-[30%] text-center  py-3">
                      Applieds
                    </th>

                  </tr>
                </thead>
                <tbody>
                  {form03.map((value, index) => (
                    <tr className={`bg-white border-b :bg-gray-800 :border-gray-700 ${index % 2 ? 'bg-[#A4D2FF]' : 'bg-[#FFDF9F]'}`}>
                      <th scope="row" className="w-[30%] text-center  py-4 font-medium text-gray-900 whitespace-nowrap :text-white">
                        {value.job}
                      </th>
                      <td className="w-[30%] text-center  py-4">
                        {value.date}
                      </td>

                      <td className="w-[30%] text-center py-4">
                        {value.report}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className=" border-2 shadow-xl bg-white p-5 rounded-xl shadow-gray-300 mt-5 max-md:mt-[-17px] ">
              <span className=' ml-[1.6rem]  font-[600] text-[1rem]'>Reports</span>
              <table className="w-[100%] mt-3 text-sm text-left text-gray-500 :text-gray-400">
                <thead className="text-xs text-white uppercase bg-[#2994FF] :bg-gray-700 :text-gray-400">
                  <tr>
                    <th scope="col" className="text-center py-3">
                      Job
                    </th>
                    <th scope="col" className="text-center py-3">
                      Date
                    </th>
                    <th scope="col" className="text-center py-3">
                      Reports
                    </th>

                  </tr>
                </thead>
                <tbody>
                  {reports?.map((value, index) => (
                    <tr className={`bg-white border-b :bg-gray-800 :border-gray-700 ${index % 2 ? 'bg-[#A4D2FF]' : 'bg-[#FFDF9F]'}`}>
                      <th scope="row" className="text-center px-3  py-4 font-medium text-gray-900 whitespace-nowrap :text-white">
                        {value.job}
                      </th>
                      <td className=" text-center text-[0.7rem]">
                        {moment(value.date).format('MMM Do YY')}
                      </td>

                      <td className=" text-center">
                        {value.feedback}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className='grid grid-cols-1 max-md:grid-cols-1 justify-center gap-6 mt-5' style={{ userSelect: 'none' }}>
            <div className='bg-white border-2 p-2 rounded-xl shadow-xl shadow-gray-300'>
              <span className=' ml-[2rem] font-[600] text-[1rem]'>Memory Status</span>
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



        </div>
      </>}




    </PortalLayout>
  )
}

export default Dashboard
