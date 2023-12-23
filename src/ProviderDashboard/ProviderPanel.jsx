import React, { useEffect, useState } from "react";
import PortalLayout from "../portalLayout/PortalLayout";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { RiUserSearchLine } from "react-icons/ri";
import { BsSunFill } from "react-icons/bs";
import {
  getBarChart,
  getCompanyDashboard,
  getCompanyLineChart,
} from "../store/actions/dashboardActions";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { GetOffersByCompany } from "../store/actions/offersActions";
import { getRecentJob } from "../store/actions/jobActions";
import { Link, useNavigate } from "react-router-dom";
import {
  SESSION_PROVIDER,
  SESSION_PROVIDER_ID,
  SESSION_PROVIDER_LOGIN,
} from "../Utils/Constant";
import { FaUserTie } from "react-icons/fa";
import { MdLocalOffer, MdWork } from "react-icons/md";
import { SiOpenlayers } from "react-icons/si";
import { AiFillInteraction } from "react-icons/ai";

const ProviderPanel = () => {
  const form03 = [
    { job: "ui designer", date: "11.02.23", report: "200" },
    { job: "ui designer", date: "11.02.23", report: "200" },
    { job: "ui designer", date: "11.02.23", report: "200" },
  ];
  const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 2000, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 1000, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 9000, pv: 2400, amt: 2400 },
  ];
  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
  ];

  const dispatch = useDispatch();
  const router = useNavigate();

  const [providerData, setProviderData] = useState(false);

  const COLORS = ["#fcbf49", "#4D38E3", "#8AC942"];

  const providerId = sessionStorage.getItem(SESSION_PROVIDER_ID);

  const dashboard = useSelector((state) => state.dashboard.companyDashboard);

  useEffect(() => {
    console.log(dashboard);
  }, [dashboard]);

  useEffect(() => {
    dispatch(getCompanyDashboard(providerId));
  }, [dispatch, providerId]);

  const barChart = useSelector((state) => state.dashboard.barchart);

  // useEffect(() => {
  //   console.log(barChart);
  // }, [barChart])

  useEffect(() => {
    dispatch(getBarChart(providerId));
  }, [dispatch, providerId]);

  const lineChart = useSelector((state) => state.dashboard.companylinechart);

  useEffect(() => {
    console.log(lineChart);
  }, [lineChart]);

  useEffect(() => {
    dispatch(getCompanyLineChart(providerId));
  }, [dispatch, providerId]);

  const offerByCompany = useSelector((state) => state.offer.offers);

  useEffect(() => {
    console.log("offerbyCompany", offerByCompany);
  }, [offerByCompany]);

  useEffect(() => {
    dispatch(GetOffersByCompany(providerId));
  }, [dispatch, providerId]);

  const recentJobs = useSelector((state) => state.job.jobs);

  useEffect(() => {
    console.log("recentJobs", recentJobs);
  }, [recentJobs]);

  useEffect(() => {
    dispatch(getRecentJob(providerId));
  }, [dispatch, providerId]);

  const dateFormatter = (date) => {
    return moment(date).format("MMM Do YY");
  };

  const navigate = useNavigate();

  // useEffect(() => {
  //     const isProviderLogin = sessionStorage.getItem(SESSION_PROVIDER_LOGIN)
  //     if (isProviderLogin === "true") {
  //         navigate('/providerLogin')
  //         // setProviderData(false)
  //         // setProviderData(true)
  //     } else {
  //     }
  //   }, [providerData])

  const logout = () => {
    sessionStorage.setItem(SESSION_PROVIDER_LOGIN, "false");
    sessionStorage.setItem(SESSION_PROVIDER_ID, null);
    sessionStorage.setItem(SESSION_PROVIDER_LOGIN, null);
    sessionStorage.setItem(SESSION_PROVIDER, null);
    router("/providerLogin");
  };

  return (
    <PortalLayout>
      <div className="py-10">
        <div className="">
          <div className="flex max-md:flex-col gap-5">
          <div className="w-[40%] max-md:w-[100%] flex flex-col items-center py-5 px-10 border-2 rounded-[8px] shadow-md" >
            <h1 className="text-[2rem] font-[600]">Post a Job.</h1>
            <p className="w-[90%] text-center">Empower your career journey! We're seeking dynamic individuals to join our team. Explore growth, impact, and endless possibilities with us!</p>
            <Link to="/jobs/add">
              {" "}
              <button className="mt-5 bg-white border-2 border-black hover:bg-black hover:text-white transition-all ease-in-out duration-75 cursor-pointer max-md:text-[.6rem] py-2 px-[1rem] max-md:px-[1rem] max-md:py-[5px] font-[600] max-md:font-[400] rounded-[8px] ml-auto ">
                ADD JOB
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5 w-[60%] max-md:w-[100%]">
            <div onClick={() => router('/jobProvider')} className="bg-[#4D38E3] rounded-xl text-white max-md:mt-0 h-[7.9rem] shadow-xl shadow-gray-300 cursor-pointer">
              <ul className="flex flex-row-reverse">
                <li>
                  <MdWork className="w-25 text-[3rem] mb-[-2rem] pr-4 pt-2 ml-auto" />
                </li>
              </ul>
              <h1 className="text-left ml-5 mt-10 text-[1rem] font-[600]">
                Jobs
              </h1>
              <h1 className="text-left ml-5  text-[2rem] font-[700] ">
                {dashboard?.jobs}
              </h1>
            </div>
            <div onClick={() => router('/appliedProvider')} className="bg-[#8AC942] rounded-xl text-white max-md:mt-0 h-[7.9rem] shadow-xl shadow-gray-300 cursor-pointer">
              <ul className="flex flex-row-reverse  ">
                <li>
                  <FaUserTie className="w-25 text-[3rem] mb-[-2rem] pr-4 pt-2 ml-auto" />
                </li>
              </ul>
              <h1 className="text-left ml-5 mt-10 text-[1rem] font-[600]">
                Applied
              </h1>
              <h1 className="text-left ml-5  text-[2rem] font-[700]">
                {dashboard?.applied}
              </h1>
            </div>
            <div onClick={() => router('/offers')} className="bg-[#4D03A3] rounded-xl text-white max-md:mt-0 h-[7.9rem] shadow-xl shadow-gray-300 cursor-pointer">
              <ul className="flex flex-row-reverse">
                <li>
                  <MdLocalOffer className="w-25 text-[3rem] mb-[-2rem] pr-4 pt-2 ml-auto" />
                </li>
              </ul>
              <h1 className="text-left ml-5 mt-10 text-[1rem] font-[600]">
                Offers
              </h1>
              <h1 className="text-left ml-5  text-[2rem] font-[700] ">
                {dashboard?.offers}
              </h1>
            </div>
            <div onClick={() => router('/interaction')} className="bg-[#EEB167] rounded-xl text-white max-md:mt-0 h-[7.9rem] shadow-xl shadow-gray-300 cursor-pointer">
              <ul className="flex flex-row-reverse">
                <li>
                  <AiFillInteraction  className="w-25 text-[3rem] mb-[-2rem] pr-4 pt-2 ml-auto" />
                </li>
              </ul>
              <h1 className="text-left ml-5 mt-10 text-[1rem] font-[600]">
                Interactions
              </h1>
              <h1 className="text-left ml-5  text-[2rem] font-[700] ">
                {dashboard?.interactions}
              </h1>
            </div>
            {/* <div className="bg-[#EEB167] rounded-xl text-white  px-2 py-4  max-md:mt-0 h-[7.9rem] shadow-xl shadow-gray-300 ">
              <h1 className="text-left ml-5 text-[1rem] font-[700]">
                Current Subscribed Plan
              </h1>
              <div className="flex justify-between mt-3">
                <h1 className="text-left ml-5 text-[1rem] font-[600]">
                  Advance
                </h1>
                <h1 className="mr-5 text-[1rem]  font-[600]">$ 7.60</h1>
              </div>
              <h1 className="text-right mr-5  mt-2 text-[0.9rem] font-[500]">
                Paid This Month
              </h1>
            </div> */}
          </div>
          </div>
          {/* <div className='border-2 p-3 h-[19rem] rounded-xl shadow-xl shadow-gray-300  max-md:mr-0'>
                        <span className=' ml-[2rem] font-[600] text-[1rem]'>Memory Status</span>
                    </div> */}
        </div>
        <div className="my-10 w-[100%] py-2 bg-white border-2 p-8 rounded-xl shadow-xl shadow-gray-300 ">
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart
              data={lineChart}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <XAxis dataKey="d" tickFormatter={dateFormatter} />
              <YAxis />
              <Tooltip />
              <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
              {/* <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" /> */}
              <Area
                type="monotone"
                dataKey="interactions"
                stroke="#4D38E3"
                fill="#000000 "
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div
          className="grid  grid-cols-2 max-md:grid-cols-1 my-10 gap-10"
          style={{ userSelect: "none" }}
        >
          {/* <div className=" border-2 shadow-xl  max-md:w-[100%] max-md:mb-[30px] p-5 bg-white rounded-xl shadow-xl shadow-gray-300 ">
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
            </div> */}
          <div class="relative flex h-full w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3]">
            <div class="flex items-center justify-between rounded-t-2xl bg-white px-4 pt-4 shadow-2xl shadow-gray-100">
              <h4 class="text-lg font-bold text-gray-600">Offer Sent</h4>
              {/* <button
                        onClick={() => navigate('/dashboard/transactions')}
                        className="text-red-700 underline"
                      >
                        See all
                      </button> */}
            </div>
            <div className="bg-white shadow-lg h-full shadow-[#F3F3F3]">
              <table className="w-[100%] max-md:w-[100%] max-md:h-[400px] mt-4">
                <thead className="" >
                  <tr className="bg-[#000] text-white uppercase text-sm leading-normal w-[100%]">
                    <th className="py-[2%] w-[25%] max-md:text-[.7rem] text-center">
                      Job
                    </th>
                    <th className="py-[2%] w-[25%] max-md:text-[.7rem] text-center">
                      OfferType
                    </th>
                    <th className="py-[2%] w-[25%] max-md:text-[.7rem] text-center">
                      Date
                    </th>
                  </tr>
                </thead>
                {offerByCompany?.map((value, index) => (
                  <tbody key={index} className="text-gray-600 text-sm font-light w-[100%]">
                    <tr className={`border-b border-gray-300 bg-white`}>
                      <td className="py-[2%] w-[25%] max-md:text-[.7rem] text-center">
                        <span className="font-medium">{value.job}</span>
                      </td>
                      <td className="py-[2%] w-[25%] max-md:text-[.7rem]  text-center">
                        <div className="flex items-center justify-center text-[#000000] font-[500]">
                          {value.offerType}
                        </div>
                      </td>
                      <td className="py-[2%] w-[25%] max-md:text-[.7rem] text-center">
                        <span>{moment(value.date).format("YYYY-MM-DD")}</span>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
          <div class="relative flex h-full w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3]">
            <div class="flex items-center justify-between rounded-t-2xl bg-white px-4 pt-4 shadow-2xl shadow-gray-100">
              <h4 class="text-lg font-bold text-gray-600">Recent Jobs</h4>
              {/* <button
                        onClick={() => navigate('/dashboard/transactions')}
                        className="text-red-700 underline"
                      >
                        See all
                      </button> */}
            </div>
            <div className="bg-white shadow-lg h-full shadow-[#F3F3F3]">
              <table className="w-[100%] max-md:w-[100%] max-md:h-[400px] mt-4">
                <thead>
                  <tr className="bg-[#000] text-white uppercase text-sm leading-normal w-[100%]">
                    <th className="py-[2%] w-[25%] max-md:text-[.7rem] text-center">
                      Role
                    </th>
                    <th className="py-[2%] w-[25%] max-md:text-[.7rem] text-center">
                      Qualifications
                    </th>
                    <th className="py-[2%] w-[25%] max-md:text-[.7rem] text-center">
                      date
                    </th>
                  </tr>
                </thead>
                {recentJobs?.map((value) => (
                  <tbody className="text-gray-600 text-sm font-light w-[100%]">
                    <tr className={`border-b border-gray-300 bg-white`}>
                      <td className="py-[2%] w-[25%] max-md:text-[.7rem] text-center">
                        <span className="font-medium">{value.role}</span>
                      </td>
                      <td className="py-[2%] w-[25%] max-md:text-[.7rem]  text-center">
                        <div className="flex items-center justify-center text-[#000] font-[500]">
                          {value.qualification}
                        </div>
                      </td>
                      <td className="py-[2%] w-[25%] max-md:text-[.7rem] text-center">
                        <span>{moment(value.date).format("YYYY-MM-DD")}</span>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
};

export default ProviderPanel;
