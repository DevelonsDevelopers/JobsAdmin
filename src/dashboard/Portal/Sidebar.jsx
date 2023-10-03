import { forwardRef, useState } from "react";
import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi";

import { RiEarthLine, RiHomeOfficeLine, RiUserSearchLine } from 'react-icons/ri'
import { FaRegListAlt, } from 'react-icons/fa'
import { BiCategoryAlt, BiUserCheck } from 'react-icons/bi'

import { AiOutlineTag, AiOutlineTransaction, AiOutlineOrderedList, AiOutlineNotification } from 'react-icons/ai'
import { PiBriefcaseLight, PiBuildingsLight } from 'react-icons/pi'
import { useLocation, useNavigate } from "react-router-dom";



const Sidebar = forwardRef(({ }, ref) => {
  const router = useNavigate();
  const location = useLocation();
  const [provider, setProvider] = useState(true)

  return (
    <div ref={ref} className="mt-[-4rem] fixed w-56 h-full bg-white shadow-sm max-md:w-[35%] overflow-auto no-scrollbar">
      {provider ?
        <>
          <div className="flex flex-col mt-[2rem] ">
            <div onClick={() => router('/providerPanel')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/providerPanel"
                    ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                    : "text-black font-[600]  hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400"
                  }
  `}
              >
                <div className="mr-2">
                  <HiOutlineHome className="h-5 w-5" />
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
                    ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                    : "text-black font-[600] hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-blue-100 hover:text-blue-500"
                  }
  `}
              >
                <div className="mr-2">
                  <PiBriefcaseLight className="h-5 w-5" />
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
                    ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                    : "text-black font-[600] hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-blue-100 hover:text-blue-500"
                  }
                  `}
              >
                <div className="mr-2">
                  <BiUserCheck className="h-5 w-5" />
                </div>
                <div>
                  <p>AppliedUsers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div onClick={() => router('/offers')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
                  ${location.pathname === "/offers"
                    ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                    : "text-black font-[600] hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-blue-100 hover:text-blue-500"
                  }
                  `}
              >
                <div className="mr-2">
                  <BiUserCheck className="h-5 w-5" />
                </div>
                <div>
                  <p>Offers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div onClick={() => router('/recommended')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
                  ${location.pathname === "/recommended"
                    ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                    : "text-black font-[600] hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-blue-100 hover:text-blue-500"
                  }
                  `}
              >
                <div className="mr-2">
                  <BiUserCheck className="h-5 w-5" />
                </div>
                <div>
                  <p>Recommended</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div onClick={() => router('/interaction')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
                  ${location.pathname === "/interaction"
                    ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                    : "text-black font-[600] hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-blue-100 hover:text-blue-500"
                  }
                  `}
              >
                <div className="mr-2">
                  <BiUserCheck className="h-5 w-5" />
                </div>
                <div>
                  <p>Interaction</p>
                </div>
              </div>
            </div>
          </div>

        </>
        :


        <>

          <div className="flex flex-col mt-[2rem] ">
            <div onClick={() => router('/')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/"
                    ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                    : "text-black font-[600]  hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400"
                  }
  `}
              >
                <div className="mr-2">
                  <HiOutlineHome className="h-5 w-5" />
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
                    ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                    : "text-black font-[600]  hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400"
                  }
`}
              >
                <div className="mr-2">
                  <BiCategoryAlt className="h-5 w-5" />
                </div>
                <div>
                  <p>Categories</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div onClick={() => router('/countries')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/countries"
                    ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                    : "text-black font-[600] hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-blue-100 hover:text-blue-500"
                  }
  `}
              >
                <div className="mr-2">
                  <RiEarthLine className="h-5 w-5" />
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
                    ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                    : "text-black font-[600] hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-blue-100 hover:text-blue-500"
                  }
  `}
              >
                <div className="mr-2">
                  <PiBuildingsLight className="h-5 w-5" />
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
                    ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                    : "text-black font-[600] hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-blue-100 hover:text-blue-500"
                  }
  `}
              >
                <div className="mr-2">
                  <PiBriefcaseLight className="h-5 w-5" />
                </div>
                <div>
                  <p>Jobs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div onClick={() => router('/companies')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/companies"
                    ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                    : "text-black font-[600] hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-blue-100 hover:text-blue-500"
                  }
  `}
              >
                <div className="mr-2">
                  <RiHomeOfficeLine className="h-5 w-5" />
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
                    ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                    : "text-black font-[600] hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-blue-100 hover:text-blue-500"
                  }
  `}
              >
                <div className="mr-2">
                  <AiOutlineTag className="h-5 w-5" />
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
                    ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                    : "text-black font-[600] hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-blue-100 hover:text-blue-500"
                  }
  `}
              >
                <div className="mr-2">
                  <BiUserCheck className="h-5 w-5" />
                </div>
                <div>
                  <p>AppliedUsers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div onClick={() => router('/seekers')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/seekers"
                    ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                    : "text-black font-[600] hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-blue-100 hover:text-blue-500"
                  }
  `}
              >
                <div className="mr-2">
                  <RiUserSearchLine className="h-5 w-5" />
                </div>
                <div>
                  <p>Seekers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div onClick={() => router('/transactions')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/transactions"
                    ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                    : "text-black font-[600] hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-blue-100 hover:text-blue-500"
                  }
  `}
              >
                <div className="mr-2">
                  <AiOutlineTransaction className="h-5 w-5" />
                </div>
                <div>
                  <p>transactions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div onClick={() => router('/reports')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/reports"
                    ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                    : "text-black font-[600] hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-blue-100 hover:text-blue-500"
                  }
  `}
              >
                <div className="mr-2">
                  <FaRegListAlt className="h-5 w-5" />
                </div>
                <div>
                  <p>Reports</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div onClick={() => router('/users')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/users"
                    ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                    : "text-black font-[600] hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-blue-100 hover:text-blue-500"
                  }
  `}
              >
                <div className="mr-2">
                  <HiOutlineUsers className="h-5 w-5" />
                </div>
                <div>
                  <p>Users</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div onClick={() => router('/plans')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/plans"
                    ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                    : "text-black font-[600] hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-blue-100 hover:text-blue-500"
                  }
  `}
              >
                <div className="mr-2">
                  <AiOutlineOrderedList className="h-5 w-5" />
                </div>
                <div>
                  <p>Plans</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div onClick={() => router('/payment')}>
              <div
                className={`pl-3 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center justify-center transition-colors 
        ${location.pathname === "/payment"
                    ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                    : "text-black font-[600] hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-blue-100 hover:text-blue-500"
                  }
  `}
              >
                <div className="mr-2">
                  <HiOutlineHome className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[0.9rem]">PaymentGateway</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div onClick={() => router('/ads')}>
              <div
                className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
        ${location.pathname === "/ads"
                    ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white"
                    : "text-black font-[600] hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-blue-100 hover:text-blue-500"
                  }
  `}
              >
                <div className="mr-2">
                  <AiOutlineNotification className="h-5 w-5" />
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

      }

    </div>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
