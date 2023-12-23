import { forwardRef, useEffect, useState } from "react";
import { HiOutlineHome, HiOutlineUsers, HiSpeakerphone } from "react-icons/hi";
import { RiEarthLine, RiHomeOfficeLine, RiSearchFill, RiUserSearchLine } from 'react-icons/ri'
import { FaListUl, FaRegListAlt, FaTags, FaUser, FaUserTie, } from 'react-icons/fa'
import { BiCategoryAlt, BiSolidBuildingHouse, BiSolidCategory, BiUserCheck, BiWorld } from 'react-icons/bi'
import { AiOutlineTag, AiOutlineTransaction, AiOutlineOrderedList, AiOutlineNotification, AiFillInteraction } from 'react-icons/ai'
import { PiBriefcaseLight, PiBuildingsLight } from 'react-icons/pi'
import { useLocation, useNavigate } from "react-router-dom";
import { SESSION_PROVIDER, SESSION_PROVIDER_LOGIN } from "../../Utils/Constant";
import { MdDashboard, MdLocalOffer, MdReport, MdSpaceDashboard, MdWork } from "react-icons/md";
import { SiOpenlayers, SiPlanetscale } from "react-icons/si";
import { FaCircleDollarToSlot, FaTreeCity } from "react-icons/fa6";
import { IoNavigate } from "react-icons/io5";



const Sidebar = forwardRef(({ adminLogin, providerLogin }, ref) => {
  const router = useNavigate();
  const location = useLocation();
  const [provider, setProvider] = useState(false)

  useEffect(() => {
    const isLogin = sessionStorage.getItem(SESSION_PROVIDER_LOGIN)

    if (isLogin === "true") {
      setProvider(true)
    } else {
      setProvider(false)
    }
    // setProvider(isProviderLogin);
  }, [provider])

  return (
    <div ref={ref} className="mt-[-4rem] fixed w-56 h-full bg-black rounded-r-[1.4rem] shadow-sm max-md:w-[40%] overflow-auto no-scrollbar">

      {providerLogin && (
        <>
          <div className="flex flex-col mt-[65%] ">
            <div onClick={() => router('/providerPanel')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/providerPanel"
                    ? "text-black border-l-[7px] border-l-yellow-400 bg-white font-[600]"
                    : " hover:text-blue-200 text-gray-100"
                  }
  `}
              >
                {/* ---------------------------------------------------------Dashboard------------------------------------------------------------------------------------------------------------ */}
                {/* ---------------------------------------------------------Dashboard------------------------------------------------------------------------------------------------------------ */}
                {/* ---------------------------------------------------------Dashboard------------------------------------------------------------------------------------------------------------ */}
                <div className="mr-2">
                  <MdDashboard className="h-5 w-5" />
                </div>
                <div>
                  <p>Dashboard</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div onClick={() => router('/jobProvider')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
                  ${location.pathname === "/jobProvider"
                    ? "text-black border-l-[7px] border-l-yellow-400 bg-white font-[600]"
                    : " hover:text-blue-200 text-gray-100"
                  }
  `}
              >
                {/* ------------------------------------------------------------------Jobs------------------------------------------------------------------------------------------------------------ */}
                {/* ------------------------------------------------------------------Jobs------------------------------------------------------------------------------------------------------------ */}
                {/* ------------------------------------------------------------------Jobs------------------------------------------------------------------------------------------------------------ */}
                {/* ------------------------------------------------------------------Jobs------------------------------------------------------------------------------------------------------------ */}
                {/* ------------------------------------------------------------------Jobs------------------------------------------------------------------------------------------------------------ */}
                <div className="mr-2">
                  <MdWork className="h-5 w-5" />
                </div>
                <div>
                  <p>Jobs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div onClick={() => router('/appliedProvider')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
                  ${location.pathname === "/appliedProvider"
                    ? "text-black border-l-[7px] border-l-yellow-400 bg-white font-[600]"
                    : " hover:text-blue-200 text-gray-100"
                  }
                  `}
              >
                {/* ------------------------------------------------------------------Applied Users------------------------------------------------------------------------------------------------------------ */}

                <div className="mr-2">
                  <FaUserTie className="h-5 w-5" />
                </div>
                <div>
                  <p>Applied Users</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div onClick={() => router('/offers')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
                  ${location.pathname === "/offers"
                    ? "text-black border-l-[7px] border-l-yellow-400 bg-white font-[600]"
                    : " hover:text-blue-200 text-gray-100"
                  }
                  `}
              >
                <div className="mr-2">
                  <MdLocalOffer className="h-5 w-5" />
                </div>
                <div>
                  <p>Offers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div onClick={() => router('/interaction')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
                  ${location.pathname === "/interaction"
                    ? "text-black border-l-[7px] border-l-yellow-400 bg-white font-[600]"
                    : " hover:text-blue-200 text-gray-100"
                  }
                  `}
              >
                <div className="mr-2">
                  <AiFillInteraction  className="h-5 w-5" />
                </div>
                <div>
                  <p>Interaction</p>
                </div>
              </div>
            </div>
          </div>

        </>
      )}
      {adminLogin && (
        <>
          {/* ______________________________________________________________________________________________________________________________________________________________________________________________ */}
          {/* ------------------------------------------------------------------Dashboard------------------------------------------------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------Dashboard------------------------------------------------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------Dashboard------------------------------------------------------------------------------------------------------------ */}
          {/* ______________________________________________________________________________________________________________________________________________________________________________________________ */}

          <div className="flex flex-col mt-[2rem] ">
            <div onClick={() => router('/userPanel')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/userPanel"
                    ? "text-black border-l-[7px] border-l-yellow-400 bg-white font-[600]"
                    : " hover:text-blue-200 text-gray-100"
                  }
  `}
              >

                <div className="mr-2">
                  <MdSpaceDashboard className="h-5 w-5" />
                </div>
                <div>
                  <p>Dashboard</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div onClick={() => router('/categories')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
      ${location.pathname === "/categories"
                    ? "text-black border-l-[7px] border-l-yellow-400 bg-white font-[600]"
                    : " hover:text-blue-200 text-gray-100"
                  }
`}
              >
                <div className="mr-2">
                  <BiSolidCategory className="h-5 w-5" />
                </div>
                <div>
                  <p>Categories</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col ">
            <div onClick={() => router('/jobbank')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
      ${location.pathname === "/jobbank"
                    ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                    : "text-black font-[600]  hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400"
                  }
`}
              >
                <div className="mr-2">
                  <LuLeaf className="h-5 w-5" />
                </div>
                <div>
                  <p>Job Banks</p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="flex flex-col ">
            <div onClick={() => router('/countries')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/countries"
                    ? "text-black border-l-[7px] border-l-yellow-400 bg-white font-[600]"
                    : " hover:text-blue-200 text-gray-100"
                  }
  `}
              >
                <div className="mr-2">
                  <BiWorld className="h-5 w-5" />
                </div>
                <div>
                  <p>Countries</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div onClick={() => router('/cities')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/cities"
                    ? "text-black border-l-[7px] border-l-yellow-400 bg-white font-[600]"
                    : " hover:text-blue-200 text-gray-100"
                  }
  `}
              >
                <div className="mr-2">
                  <FaTreeCity className="h-5 w-5" />
                </div>
                <div>
                  <p>Cities</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div onClick={() => router('/jobs')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/jobs"
                    ? "text-black border-l-[7px] border-l-yellow-400 bg-white font-[600]"
                    : " hover:text-blue-200 text-gray-100"
                  }
  `}
              >
                <div className="mr-2">
                  <MdWork className="h-5 w-5" />
                </div>
                <div>
                  <p>Jobs</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col ">
        <div onClick={() => router('/jobsAPI')}>
          <div
            className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
            ${location.pathname === "/jobsAPI"
                ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                : "text-black font-[600] hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-blue-100 hover:text-black border-l-[7px] border-l-yellow-400 bg-white font-[600]"
              }
            `}
          >
            <div className="mr-2">
              <TfiPieChart className="h-5 w-5" />
            </div>
            <div>
              <p>Jobs API</p>
            </div>
          </div>
        </div>
      </div> */}
          {/* <div className="flex flex-col ">
        <div onClick={() => router('/careerJetApi')}>
          <div
            className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
            ${location.pathname === "/careerJetApi"
                ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                : "text-black font-[600] hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-blue-100 hover:text-black border-l-[7px] border-l-yellow-400 bg-white font-[600]"
              }
            `}
          >
            <div className="mr-2">
              <TfiCloudDown className="h-5 w-5" />
            </div>
            <div>
              <p>Career JetAPI</p>
            </div>
          </div>
        </div>
      </div> */}
          <div className="flex flex-col ">
            <div onClick={() => router('/companies')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/companies"
                    ? "text-black border-l-[7px] border-l-yellow-400 bg-white font-[600]"
                    : " hover:text-blue-200 text-gray-100"
                  }
  `}
              >
                <div className="mr-2">
                  <BiSolidBuildingHouse className="h-5 w-5" />
                </div>
                <div>
                  <p>Companies</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div onClick={() => router('/tags')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/tags"
                    ? "text-black border-l-[7px] border-l-yellow-400 bg-white font-[600]"
                    : " hover:text-blue-200 text-gray-100"
                  }
  `}
              >
                <div className="mr-2">
                  <FaTags className="h-5 w-5" />
                </div>
                <div>
                  <p>Tags</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div onClick={() => router('/appliedusers')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/appliedusers"
                    ? "text-black border-l-[7px] border-l-yellow-400 bg-white font-[600]"
                    : " hover:text-blue-200 text-gray-100"
                  }
  `}
              >
                <div className="mr-2">
                  <FaUserTie className="h-5 w-5" />
                </div>
                <div>
                  <p>Applied Users</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div onClick={() => router('/seekers')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/seekers"
                    ? "text-black border-l-[7px] border-l-yellow-400 bg-white font-[600]"
                    : " hover:text-blue-200 text-gray-100"
                  }
  `}
              >
                <div className="mr-2">
                  <RiSearchFill className="h-5 w-5" />
                </div>
                <div>
                  <p>Seekers</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col ">
            <div onClick={() => router('/transactions')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/transactions"
                    ? "text-black border-l-[7px] border-l-yellow-400 bg-white font-[600]"
                    : " hover:text-blue-200 text-gray-100"
                  }
  `}
              >
                <div className="mr-2">
                  <FaCircleDollarToSlot className="h-5 w-5" />
                </div>
                <div>
                  <p>Transactions</p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="flex flex-col ">
            <div onClick={() => router('/reports')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/reports"
                    ? "text-black border-l-[7px] border-l-yellow-400 bg-white font-[600]"
                    : " hover:text-blue-200 text-gray-100"
                  }
  `}
              >
                <div className="mr-2">
                  <MdReport className="h-5 w-5" />
                </div>
                <div>
                  <p>Reports</p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="flex flex-col ">
            <div onClick={() => router('/users')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/users"
                    ? "text-black border-l-[7px] border-l-yellow-400 bg-white font-[600]"
                    : " hover:text-blue-200 text-gray-100"
                  }
  `}
              >
                <div className="mr-2">
                  <FaUser className="h-5 w-5" />
                </div>
                <div>
                  <p>Users</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col ">
            <div onClick={() => router('/plans')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/plans"
                    ? "text-black border-l-[7px] border-l-yellow-400 bg-white font-[600]"
                    : " hover:text-blue-200 text-gray-100"
                  }
  `}
              >
                <div className="mr-2">
                  <SiPlanetscale className="h-5 w-5" />
                </div>
                <div>
                  <p>Plans</p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="flex flex-col ">
            <div onClick={() => router('/payment')}>
              <div
                className={`pl-3 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center justify-center transition-colors 
        ${location.pathname === "/payment"
                    ? "text-black border-l-[7px] border-l-yellow-400 bg-white font-[600]"
                    : " hover:text-blue-200 text-gray-100"
                  }
  `}
              >
                <div className="ml-2">
                  <IoNavigate className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[0.9rem] ml-[10px]">Payment Gateway</p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="flex flex-col ">
            <div onClick={() => router('/ads')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/ads"
                    ? "text-black border-l-[7px] border-l-yellow-400 bg-white font-[600]"
                    : " hover:text-blue-200 text-gray-100"
                  }
  `}
              >
                <div className="mr-2">
                  <HiSpeakerphone className="h-5 w-5" />
                </div>
                <div>
                  <p>ADs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
          </div>
        </>
      )}

    </div>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
