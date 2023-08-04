import { forwardRef } from "react";
import { HiOutlineHome, HiOutlineUser, HiOutlineCblueitCard } from "react-icons/hi";

import { RiPagesLine } from 'react-icons/ri'
import { FaPager, FaTable, FaUser,FaUserClock } from 'react-icons/fa'

import { AiOutlineUserSwitch ,AiOutlineCloseCircle } from 'react-icons/ai'
import { PiUsersThreeBold } from 'react-icons/pi'
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";



 const Sidebar = forwardRef(({ showNav }, ref) => {
  const router = useNavigate();

  return (
    <div ref={ref} className="mt-[-4rem] fixed w-56 h-full bg-white shadow-sm max-md:w-[35%] overflow-auto ">
    

      <div className="flex flex-col mt-[2rem] ">
        <div onClick={() => router('/')}>
          <div
            className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors 
            ${
              router.pathname === "/"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
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
            className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors 
            ${
              router.pathname === "/categories"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
            }
            `}
          >
            <div className="mr-2">
              <HiOutlineHome className="h-5 w-5" />
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
            className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors 
            ${
              router.pathname === "/countries"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
            }
            `}
          >
            <div className="mr-2">
              <HiOutlineHome className="h-5 w-5" />
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
            className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors 
            ${
              router.pathname === "/cities"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
            }
            `}
          >
            <div className="mr-2">
              <HiOutlineHome className="h-5 w-5" />
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
            className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors 
            ${
              router.pathname === "/jobs"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
            }
            `}
          >
            <div className="mr-2">
              <HiOutlineHome className="h-5 w-5" />
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
            className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors 
            ${
              router.pathname === "/companies"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
            }
            `}
          >
            <div className="mr-2">
              <HiOutlineHome className="h-5 w-5" />
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
            className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors 
            ${
              router.pathname === "/tags"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
            }
            `}
          >
            <div className="mr-2">
              <HiOutlineHome className="h-5 w-5" />
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
            className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors 
            ${
              router.pathname === "/appliedusers"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
            }
            `}
          >
            <div className="mr-2">
              <HiOutlineHome className="h-5 w-5" />
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
            className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors 
            ${
              router.pathname === "/seekers"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
            }
            `}
          >
            <div className="mr-2">
              <HiOutlineHome className="h-5 w-5" />
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
            className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors 
            ${
              router.pathname === "/transactions"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
            }
            `}
          >
            <div className="mr-2">
              <HiOutlineHome className="h-5 w-5" />
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
            className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors 
            ${
              router.pathname === "/reports"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
            }
            `}
          >
            <div className="mr-2">
              <HiOutlineHome className="h-5 w-5" />
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
            className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors 
            ${
              router.pathname === "/users"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
            }
            `}
          >
            <div className="mr-2">
              <HiOutlineHome className="h-5 w-5" />
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
            className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors 
            ${
              router.pathname === "/plans"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
            }
            `}
          >
            <div className="mr-2">
              <HiOutlineHome className="h-5 w-5" />
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
            className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors 
            ${
              router.pathname === "/payment"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
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
            className={`pl-7 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors 
            ${
              router.pathname === "/notifications"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
            }
            `}
          >
            <div className="mr-2">
              <HiOutlineHome className="h-5 w-5" />
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
