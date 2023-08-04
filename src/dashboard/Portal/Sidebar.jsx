import { forwardRef, useState } from "react";
import { HiOutlineHome, HiOutlineUser, HiOutlineCblueitCard, HiOutlineUsers } from "react-icons/hi";

import { RiEarthFill, RiEarthLine, RiHomeOfficeLine, RiPagesLine, RiUserSearchLine } from 'react-icons/ri'
import { FaBoxes, FaPager, FaRegListAlt, FaTable, FaUser,FaUserCheck,FaUserClock } from 'react-icons/fa'
import { BiCategoryAlt,BiUserCheck } from 'react-icons/bi'
// import {FiUserCheck} from 'react-icons/fi'

import { AiOutlineUserSwitch ,AiOutlineCloseCircle, AiOutlineTag, AiOutlineTransaction, AiOutlineOrderedList, AiOutlineNotification } from 'react-icons/ai'
import { PiBriefcaseLight, PiBuildingsLight, PiUsersThreeBold } from 'react-icons/pi'
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";



 const Sidebar = forwardRef(({ showNav }, ref) => {
  const router = useNavigate();
  const [active , isActive] = useState("false")

  return (
    <div ref={ref} className="mt-[-4rem] fixed w-56 h-full bg-white shadow-sm max-md:w-[35%] overflow-auto no-scrollbar">
    

      <div className="flex flex-col mt-[2rem] ">
        <div onClick={() => router('/')}>
          <div
            className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
            ${
              router.pathname === "/"
                ? "bg-blue-100 text-blue-500"
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
          
            // className={`px-2 py-2.5 hover:bg-cprimary-300 hover:text-csecond-100 rounded-md transition  `}
            className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
            ${isActive && router === "/categories" ? "bg-blue-100 text-blue-500": "text-black font-[600] hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-blue-100 hover:text-blue-500"}
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
            ${
              router.pathname === "/countries"
                ? "bg-blue-100 text-blue-500"
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
            ${
              router.pathname === "/cities"
                ? "bg-blue-100 text-blue-500"
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
            ${
              router.pathname === "/jobs"
                ? "bg-blue-100 text-blue-500"
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
            ${
              router.pathname === "/companies"
                ? "bg-blue-100 text-blue-500"
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
            ${
              router.pathname === "/tags"
                ? "bg-blue-100 text-blue-500"
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
            ${
              router.pathname === "/appliedusers"
                ? "bg-blue-100 text-blue-500"
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
            ${
              router.pathname === "/seekers"
                ? "bg-blue-100 text-blue-500"
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
            ${
              router.pathname === "/transactions"
                ? "bg-blue-100 text-blue-500"
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
            ${
              router.pathname === "/reports"
                ? "bg-blue-100 text-blue-500"
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
            ${
              router.pathname === "/users"
                ? "bg-blue-100 text-blue-500"
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
            ${
              router.pathname === "/plans"
                ? "bg-blue-100 text-blue-500"
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
            className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
            ${
              router.pathname === "/payment"
                ? "bg-blue-100 text-blue-500"
                : "text-black font-[600] hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-blue-100 hover:text-blue-500"
            }
            `}
          >
            <div className="mr-2">
              <HiOutlineHome className="h-5 w-5" />
            </div>
            <div>
              <p>PaymentGateway</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <div onClick={() => router('/notifications')}>
          <div
            className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-1 flex items-center transition-colors 
            ${
              router.pathname === "/notifications"
                ? "bg-blue-100 text-blue-500"
                : "text-black font-[600] hover:text-white  hover:bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-blue-100 hover:text-blue-500"
            }
            `}
          >
            <div className="mr-2">
              <AiOutlineNotification className="h-5 w-5" />
            </div>
            <div>
              <p>Notifications</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
      </div>

    </div>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
